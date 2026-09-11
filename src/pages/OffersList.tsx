import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Search, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useOffers } from '../lib/hooks';
import { getTours, getAttractions, type Offer } from '../lib/venetravel';

type Kind = 'tour' | 'attraction';
type SortOption = 'name' | 'price-asc' | 'price-desc';

const baseFor = (kind: Kind, lang: 'es' | 'en') =>
  kind === 'tour' ? 'tours' : lang === 'en' ? 'attractions' : 'atracciones';

function OfferCard({ offer, base, lang }: { offer: Offer; base: string; lang: 'es' | 'en' }) {
  const { t } = useTranslation();
  return (
    <Link
      to={`/${lang}/${base}/${offer.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={offer.image}
          alt={offer.name[lang]}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-gray-900">
          {offer.price.startsWith('$') ? `${t('offers.from')} ${offer.price}` : offer.price}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{offer.name[lang]}</h3>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {offer.destination[lang]}
          </span>
          {offer.duration[lang] && (
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {offer.duration[lang]}
            </span>
          )}
        </div>
        {offer.description[lang] && (
          <p className="text-gray-600 mb-4 line-clamp-3">{offer.description[lang]}</p>
        )}
        <div className="mt-auto flex flex-wrap gap-2">
          {offer.features.slice(0, 3).map((f, i) => (
            <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
              <Star className="w-3 h-3" />
              {f[lang]}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function OffersList({ kind }: { kind: Kind }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const isTour = kind === 'tour';
  const ns = isTour ? 'tours' : 'attractions';
  const base = baseFor(kind, lang);
  const loader = isTour ? getTours : getAttractions;

  const { offers, loading, error, reload } = useOffers(loader);
  const [query, setQuery] = useState('');
  const [destination, setDestination] = useState('all');
  const [sort, setSort] = useState<SortOption>('name');

  const destinations = useMemo(
    () => [...new Set(offers.map((o) => o.destination[lang]))].sort((a, b) => a.localeCompare(b, lang)),
    [offers, lang],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = offers.filter((o) => {
      const matchesQuery =
        !q ||
        o.name[lang].toLowerCase().includes(q) ||
        o.destination[lang].toLowerCase().includes(q) ||
        o.description[lang].toLowerCase().includes(q);
      const matchesDestination = destination === 'all' || o.destination[lang] === destination;
      return matchesQuery && matchesDestination;
    });
    return [...list].sort((a, b) => {
      if (sort === 'price-asc') return (a.priceFromUsd || Infinity) - (b.priceFromUsd || Infinity);
      if (sort === 'price-desc') return (b.priceFromUsd || 0) - (a.priceFromUsd || 0);
      return a.name[lang].localeCompare(b.name[lang], lang);
    });
  }, [offers, query, destination, sort, lang]);

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t(`${ns}.metaTitle`)}</title>
        <meta name="description" content={t(`${ns}.metaDescription`)} />
        <meta property="og:title" content={t(`${ns}.metaTitle`)} />
        <meta property="og:description" content={t(`${ns}.metaDescription`)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://paseandoporvenezuela.com/${lang}/${base}`} />
        <link rel="canonical" href={`https://paseandoporvenezuela.com/${lang}/${base}`} />
        <link rel="alternate" hrefLang="es" href={`https://paseandoporvenezuela.com/es/${baseFor(kind, 'es')}`} />
        <link rel="alternate" hrefLang="en" href={`https://paseandoporvenezuela.com/en/${baseFor(kind, 'en')}`} />
        <link rel="alternate" hrefLang="x-default" href={`https://paseandoporvenezuela.com/es/${baseFor(kind, 'es')}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: t(`${ns}.title`),
            itemListElement: offers.map((offer, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: offer.name[lang],
              url: `https://paseandoporvenezuela.com/${lang}/${base}/${offer.slug}`,
            })),
          })}
        </script>
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white pt-20">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t(`${ns}.title`)}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t(`${ns}.subtitle`)}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          {!loading && !error && (
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('offers.searchPlaceholder')}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">{t('offers.allDestinations')}</option>
                {destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="name">{t('offers.sortName')}</option>
                <option value="price-asc">{t('offers.sortPriceAsc')}</option>
                <option value="price-desc">{t('offers.sortPriceDesc')}</option>
              </select>
            </div>
          )}

          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-busy="true">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden shadow-lg animate-pulse">
                  <div className="h-56 bg-gray-200" />
                  <div className="p-6 space-y-4">
                    <div className="h-5 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && error && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg mb-6">{t('offers.error')}</p>
              <button
                onClick={() => void reload()}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
              >
                {t('offers.retry')}
              </button>
            </div>
          )}

          {!loading && !error && (
            filtered.length === 0 ? (
              <p className="text-center text-gray-600 text-lg py-16">{t('offers.noResults')}</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((offer) => (
                  <OfferCard key={offer.id} offer={offer} base={base} lang={lang} />
                ))}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}
