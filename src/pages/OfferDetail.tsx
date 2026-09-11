import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, MapPin, Clock, Send, Loader2, Check, Calendar, Users } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import Navigation from '../components/Navigation';
import { useOfferDetail, useOfferQuote } from '../lib/hooks';
import {
  getTours, getTourDetail, getAttractions, getAttractionDetail,
  type OfferDate,
} from '../lib/venetravel';

type Kind = 'tour' | 'attraction';

const WHATSAPP_NUMBER = '584126204490';

const baseFor = (kind: Kind, lang: 'es' | 'en') =>
  kind === 'tour' ? 'tours' : lang === 'en' ? 'attractions' : 'atracciones';

const toISODate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

function addDaysISO(iso: string, days: number): string {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, '0')}-${String(dt.getUTCDate()).padStart(2, '0')}`;
}

/** Elige una fecha por defecto disponible (con al menos 1 día de antelación). */
function pickDefaultDate(dates: OfferDate[]): string {
  const today = toISODate(new Date());
  const tomorrow = addDaysISO(today, 1);
  if (dates.length === 0) return tomorrow;
  const sorted = [...dates].sort((a, b) => a.start.localeCompare(b.start));
  const future = sorted.filter((d) => d.end >= today);
  const range = future[0] ?? sorted[sorted.length - 1];
  const candidate = range.start > tomorrow ? range.start : tomorrow;
  return candidate <= range.end ? candidate : range.start;
}

function findRange(fecha: string, dates: OfferDate[]): OfferDate | null {
  return dates.find((d) => fecha >= d.start && fecha <= d.end) || null;
}

export default function OfferDetail({ kind }: { kind: Kind }) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const locale = lang === 'es' ? es : enUS;
  const isTour = kind === 'tour';
  const base = baseFor(kind, lang);

  const loadDetail = isTour ? getTourDetail : getAttractionDetail;
  const loadCatalog = isTour ? getTours : getAttractions;
  const { offer, loading, error } = useOfferDetail(loadDetail, loadCatalog, slug);

  const [fecha, setFecha] = useState('');
  const [adultos, setAdultos] = useState('2');
  const [ninos, setNinos] = useState('0');
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (offer) setFecha(pickDefaultDate(offer.dates));
  }, [offer]);

  useEffect(() => {
    setActiveImage(0);
  }, [offer?.id]);

  const adults = Math.max(1, parseInt(adultos, 10) || 1);
  const children = Math.max(0, parseInt(ninos, 10) || 0);
  const currentRange = offer ? findRange(fecha, offer.dates) : null;
  const dateAvailable = !offer || offer.dates.length === 0 ? true : Boolean(currentRange);

  const { quote, quoting, quoteError } = useOfferQuote(isTour ? 'tour' : 'atraccion', {
    id: offer?.id,
    fecha,
    adultos: adults,
    ninos: children,
    enabled: dateAvailable,
  });

  const minDate = useMemo(() => {
    if (!offer || offer.dates.length === 0) return undefined;
    const today = toISODate(new Date());
    const future = offer.dates.filter((d) => d.end >= today);
    const source = future.length > 0 ? future : offer.dates;
    return source.map((d) => d.start).sort()[0];
  }, [offer]);
  const maxDate = useMemo(() => (offer && offer.dates.length ? offer.dates.map((d) => d.end).sort().slice(-1)[0] : undefined), [offer]);

  const quotePrice = quote && /\d/.test(quote.precio_format) ? quote.precio_format : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-7xl mx-auto pt-28 px-6 md:px-12" aria-busy="true">
          <div className="grid md:grid-cols-2 gap-8 animate-pulse">
            <div className="h-96 bg-gray-200 rounded-2xl" />
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-2/3" />
              <div className="h-4 bg-gray-200 rounded w-1/3" />
              <div className="h-24 bg-gray-200 rounded w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !offer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('offers.notFound')}</h1>
          <button onClick={() => navigate(`/${lang}/${base}`)} className="text-blue-500 hover:text-blue-600 font-semibold">
            {t('offers.backHome')}
          </button>
        </div>
      </div>
    );
  }

  const gallery = offer.images.length > 0 ? offer.images : [offer.image].filter(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = t('offers.whatsappMessage', {
      name: offer.name[lang],
      date: fecha,
      adults,
      children,
      price: quotePrice ?? t('offers.priceOnRequest'),
    });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const pageUrl = `https://paseandoporvenezuela.com/${lang}/${base}/${offer.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: `https://paseandoporvenezuela.com/${lang}` },
          { '@type': 'ListItem', position: 2, name: isTour ? t('nav.tours') : t('nav.attractions'), item: `https://paseandoporvenezuela.com/${lang}/${base}` },
          { '@type': 'ListItem', position: 3, name: offer.name[lang], item: pageUrl },
        ],
      },
      {
        '@type': isTour ? 'TouristTrip' : 'TouristAttraction',
        name: offer.name[lang],
        description: offer.description[lang] || offer.name[lang],
        image: offer.image,
        touristType: offer.destination[lang],
        url: pageUrl,
        offers: offer.priceFromUsd
          ? { '@type': 'Offer', price: offer.priceFromUsd, priceCurrency: 'USD' }
          : undefined,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{`${offer.name[lang]} | Paseando por Venezuela`}</title>
        <meta name="description" content={(offer.description[lang] || offer.name[lang]).slice(0, 158)} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://paseandoporvenezuela.com/${lang}/${base}/${offer.slug}`} />
        <meta property="og:title" content={offer.name[lang]} />
        <meta property="og:description" content={(offer.description[lang] || offer.name[lang]).slice(0, 158)} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={offer.image} />
        <meta property="og:url" content={`https://paseandoporvenezuela.com/${lang}/${base}/${offer.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={offer.name[lang]} />
        <meta name="twitter:image" content={offer.image} />
        <link rel="alternate" hrefLang="es" href={`https://paseandoporvenezuela.com/es/${baseFor(kind, 'es')}/${offer.slug}`} />
        <link rel="alternate" hrefLang="en" href={`https://paseandoporvenezuela.com/en/${baseFor(kind, 'en')}/${offer.slug}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white pt-20">
        <button
          onClick={() => navigate(`/${lang}/${base}`)}
          className="flex items-center space-x-2 px-6 py-4 text-blue-500 hover:text-blue-600 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t('offers.back')}</span>
        </button>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 md:px-12 py-6">
          <div>
            <div className="relative h-96 mb-4 overflow-hidden rounded-2xl">
              <img src={gallery[activeImage] ?? offer.image} alt={offer.name[lang]} className="w-full h-full object-cover" />
            </div>
            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {gallery.slice(0, 8).map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-20 overflow-hidden rounded-lg ${index === activeImage ? 'ring-2 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${offer.name[lang]} ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {offer.features.length > 0 && (
              <div className="bg-blue-50 rounded-xl p-6 mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('offers.includes')}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {offer.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                      {f[lang]}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{offer.name[lang]}</h1>
            <div className="flex flex-wrap items-center gap-5 text-gray-600 mb-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {offer.destination[lang]}
              </span>
              {offer.duration[lang] && (
                <span className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {offer.duration[lang]}
                </span>
              )}
            </div>

            {offer.description[lang] && (
              <p className="text-gray-600 text-lg leading-relaxed mb-6 whitespace-pre-line">{offer.description[lang]}</p>
            )}

            {offer.dates.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6 overflow-x-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('offers.availability')}</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="pb-2 font-medium">{t('offers.datesRange')}</th>
                      <th className="pb-2 font-medium text-right">{t('offers.adultPrice')}</th>
                      <th className="pb-2 font-medium text-right">{t('offers.childPrice')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {offer.dates.map((d, i) => (
                      <tr key={i} className="border-t border-gray-200 text-gray-700">
                        <td className="py-2">
                          {format(new Date(d.start), 'dd MMM yyyy', { locale })} – {format(new Date(d.end), 'dd MMM yyyy', { locale })}
                        </td>
                        <td className="py-2 text-right">{d.adultUsd != null ? `$${d.adultUsd}` : '—'}</td>
                        <td className="py-2 text-right">{d.childUsd != null ? `$${d.childUsd}` : '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('offers.quoteTitle')}</h3>

              <div className="bg-white rounded-xl p-5 mb-5">
                {quoting && (
                  <div className="flex items-center text-gray-600 text-sm">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t('offers.quoteCalculating')}
                  </div>
                )}
                {!quoting && quotePrice && (
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold text-blue-600">{quotePrice}</span>
                    <span className="text-sm text-gray-600">{t('offers.totalEstimate')}</span>
                  </div>
                )}
                {!quoting && !quotePrice && (
                  <p className="text-sm text-gray-600">
                    {!dateAvailable || quote
                      ? t('offers.dateUnavailable')
                      : quoteError
                        ? t('offers.quoteError')
                        : t('offers.quoteNeedDate')}
                  </p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">{t('offers.date')}</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="date"
                      value={fecha}
                      min={minDate}
                      max={maxDate}
                      onChange={(e) => setFecha(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{t('offers.adults')}</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        min="1"
                        value={adultos}
                        onChange={(e) => setAdultos(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{t('offers.children')}</label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        min="0"
                        value={ninos}
                        onChange={(e) => setNinos(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('offers.requestQuote')}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
