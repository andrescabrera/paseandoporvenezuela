import { useCallback, useEffect, useState } from 'react';
import type { Hotel } from '../data/hotels';
import { getCatalog, getHotelDetail, quoteHotel, type HotelQuote, type Offer, type OfferQuote, quoteTour, quoteAttraction } from './venetravel';

export function useHotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const catalog = await getCatalog();
      setHotels(catalog.hotels);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return { hotels, loading, error, reload: load };
}

export function useHotelDetail(slug?: string) {
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!slug) {
      setHotel(null);
      setError('not-found');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { hotels } = await getCatalog();
      const found = hotels.find((h) => h.slug === slug);
      if (!found) {
        setHotel(null);
        setError('not-found');
        return;
      }
      const detail = await getHotelDetail(found.id);
      setHotel({ ...detail, slug: found.slug });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    void load();
  }, [load]);

  return { hotel, loading, error, reload: load };
}

interface QuoteInput {
  id?: number;
  checkIn: string;
  checkOut: string;
  adultos: number;
}

/**
 * Cotiza la estadía en vivo. Vuelve a cotizar (con debounce) cada vez que
 * cambian las fechas o huéspedes. El backend siempre responde en USD.
 */
export function useHotelQuote({ id, checkIn, checkOut, adultos }: QuoteInput) {
  const [quote, setQuote] = useState<HotelQuote | null>(null);
  const [quoting, setQuoting] = useState(false);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || !checkIn || !checkOut || adultos < 1 || checkOut <= checkIn) {
      setQuote(null);
      setQuoteError(null);
      setQuoting(false);
      return;
    }

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      setQuoting(true);
      setQuoteError(null);
      try {
        const result = await quoteHotel({ id, checkIn, checkOut, adultos });
        if (!cancelled) setQuote(result);
      } catch (err) {
        if (!cancelled) {
          setQuote(null);
          setQuoteError(err instanceof Error ? err.message : 'Error desconocido');
        }
      } finally {
        if (!cancelled) setQuoting(false);
      }
    }, 450);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [id, checkIn, checkOut, adultos]);

  return { quote, quoting, quoteError };
}

/* ======================== TOURS & ATTRACTIONS ======================== */

export function useOffers(loader: () => Promise<Offer[]>) {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      setOffers(await loader());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, [loader]);

  useEffect(() => {
    void load();
  }, [load]);

  return { offers, loading, error, reload: load };
}

export function useOfferDetail(loadDetail: (id: number) => Promise<Offer>, catalog: () => Promise<Offer[]>, slug?: string) {
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!slug) {
      setOffer(null);
      setError('not-found');
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const list = await catalog();
      const found = list.find((o) => o.slug === slug);
      if (!found) {
        setOffer(null);
        setError('not-found');
        return;
      }
      const detail = await loadDetail(found.id);
      setOffer({ ...detail, slug: found.slug });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  }, [slug, loadDetail, catalog]);

  useEffect(() => {
    void load();
  }, [load]);

  return { offer, loading, error, reload: load };
}

interface OfferQuoteInput {
  id?: number;
  fecha: string;
  adultos: number;
  ninos: number;
  enabled?: boolean;
}

/** Cotiza un tour/atracción en vivo (debounce) al cambiar fecha o personas. */
export function useOfferQuote(kind: 'tour' | 'atraccion', { id, fecha, adultos, ninos, enabled = true }: OfferQuoteInput) {
  const [quote, setQuote] = useState<OfferQuote | null>(null);
  const [quoting, setQuoting] = useState(false);
  const [quoteError, setQuoteError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !id || !fecha || adultos < 1) {
      setQuote(null);
      setQuoteError(null);
      setQuoting(false);
      return;
    }

    let cancelled = false;
    const timer = window.setTimeout(async () => {
      setQuoting(true);
      setQuoteError(null);
      try {
        const fn = kind === 'tour' ? quoteTour : quoteAttraction;
        const result = await fn({ id, fecha, adultos, ninos });
        if (!cancelled) setQuote(result);
      } catch (err) {
        if (!cancelled) {
          setQuote(null);
          setQuoteError(err instanceof Error ? err.message : 'Error desconocido');
        }
      } finally {
        if (!cancelled) setQuoting(false);
      }
    }, 450);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [kind, id, fecha, adultos, ninos, enabled]);

  return { quote, quoting, quoteError };
}
