import { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Star, MapPin, Send, Loader2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useTranslation } from 'react-i18next';
import { useHotelDetail, useHotelQuote } from '../lib/hooks';
import { getAmenityIcon, amenityLabel } from '../lib/amenityIcons';

const toISODate = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

/** Diferencia en días entre dos fechas ISO (YYYY-MM-DD). */
const diffDaysISO = (fromISO: string, toISO: string): number => {
  const [y1, m1, d1] = fromISO.split('-').map(Number);
  const [y2, m2, d2] = toISO.split('-').map(Number);
  if ([y1, m1, d1, y2, m2, d2].some((n) => !Number.isFinite(n))) return NaN;
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
};

/** Suma días a una fecha ISO (YYYY-MM-DD) preservando el calendario. */
const addDaysISO = (iso: string, days: number): string => {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + days);
  return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, '0')}-${String(dt.getUTCDate()).padStart(2, '0')}`;
};

export default function HotelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const { hotel, loading, error } = useHotelDetail(slug);

  const today = useMemo(() => new Date(), []);
  const tomorrow = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d;
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: toISODate(today),
    checkOut: toISODate(tomorrow),
    guests: '1',
    message: '',
  });

  const [activeImage, setActiveImage] = useState(0);

  const adults = Math.max(1, parseInt(formData.guests, 10) || 1);
  const { quote, quoting, quoteError } = useHotelQuote({
    id: hotel?.id,
    checkIn: formData.checkIn,
    checkOut: formData.checkOut,
    adultos: adults,
  });

  useEffect(() => {
    setActiveImage(0);
  }, [hotel?.id]);

  const quotePrice = quote && /\d/.test(quote.price_format) ? quote.price_format : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Al cambiar la Entrada, desplaza la Salida manteniendo el intervalo de días.
    if (name === 'checkIn') {
      setFormData((prev) => {
        const interval = diffDaysISO(prev.checkIn, prev.checkOut);
        const safeInterval = Number.isFinite(interval) && interval > 0 ? interval : 1;
        return { ...prev, checkIn: value, checkOut: addDaysISO(value, safeInterval) };
      });
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hotel) return;

    const messageText = t('hotel.whatsappMessage', {
      hotel: hotel.name,
      name: formData.name,
      email: formData.email,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      guests: formData.guests,
      price: quotePrice ?? t('hotel.priceOnRequest'),
      message: formData.message,
    });

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${hotel.whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

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
              <div className="h-40 bg-gray-200 rounded w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('hotel.notFound')}</h1>
          <button
            onClick={() => navigate(`/${lang}`)}
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            {t('hotel.backHome')}
          </button>
        </div>
      </div>
    );
  }

  const gallery = hotel.images && hotel.images.length > 0 ? hotel.images : [hotel.image];
  const canonical = `https://paseandoporvenezuela.com/${lang}/hoteles/${hotel.slug}`;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <html lang={lang} />
        <title>{`${hotel.name} | ${hotel.location} - Paseando por Venezuela`}</title>
        <meta name="description" content={(hotel.fullDescription[lang] || hotel.name).slice(0, 158)} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={hotel.name} />
        <meta property="og:description" content={(hotel.fullDescription[lang] || hotel.name).slice(0, 158)} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={hotel.image} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={hotel.name} />
        <meta name="twitter:image" content={hotel.image} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: t('nav.home'), item: `https://paseandoporvenezuela.com/${lang}` },
                  { '@type': 'ListItem', position: 2, name: t('nav.hotels'), item: `https://paseandoporvenezuela.com/${lang}#hotels` },
                  { '@type': 'ListItem', position: 3, name: hotel.name, item: canonical },
                ],
              },
              {
                '@type': 'Hotel',
                name: hotel.name,
                image: hotel.image,
                description: hotel.fullDescription[lang],
                url: canonical,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: hotel.address || hotel.location,
                  addressLocality: hotel.city || hotel.location,
                  addressCountry: 'VE',
                },
                starRating: { '@type': 'Rating', ratingValue: hotel.rating },
                priceRange: hotel.price,
                telephone: `+${hotel.whatsappNumber}`,
              },
            ],
          })}
        </script>
      </Helmet>
      <Navigation />
      <div className="max-w-7xl mx-auto pt-20">
        <button
          onClick={() => navigate(`/${lang}`)}
          className="flex items-center space-x-2 px-6 py-4 text-blue-500 hover:text-blue-600 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t('hotel.back')}</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 px-6 md:px-12 py-8">
          <div>
            <div className="relative h-96 mb-4 overflow-hidden rounded-2xl">
              <img
                src={gallery[activeImage] ?? hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>

            {gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mb-6">
                {gallery.slice(0, 8).map((img, index) => (
                  <button
                    key={`${img}-${index}`}
                    onClick={() => setActiveImage(index)}
                    className={`relative h-20 overflow-hidden rounded-lg ${
                      index === activeImage ? 'ring-2 ring-blue-500' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${hotel.name} ${index + 1}`} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('hotel.requestTitle')}</h2>

              <form onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{t('hotel.nameLabel')}</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('hotel.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{t('hotel.emailLabel')}</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={t('hotel.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{t('hotel.checkInLabel')}</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{t('hotel.checkOutLabel')}</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">{t('hotel.guestsLabel')}</label>
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-5 mb-6">
                  <h3 className="text-sm font-bold text-gray-900 mb-3">{t('hotel.quoteTitle')}</h3>
                  {quoting && (
                    <div className="flex items-center text-gray-600">
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      <span>{t('hotel.quoteCalculating')}</span>
                    </div>
                  )}
                  {!quoting && quotePrice && quote && (
                    <div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-3xl font-bold text-blue-600">{quotePrice}</span>
                        <span className="text-sm text-gray-600">
                          {t('hotel.quoteTotal', { count: quote.noches })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {t('hotel.quoteRoom', { room: quote.hab_name, occupancy: quote.oc_name })}
                      </p>
                    </div>
                  )}
                  {!quoting && !quotePrice && (
                    <p className="text-sm text-gray-600">
                      {quote || quoteError ? t('hotel.quoteError') : t('hotel.quoteNeedDates')}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">{t('hotel.messageLabel')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t('hotel.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors text-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('hotel.requestQuote')}</span>
                </button>
              </form>
            </div>
          </div>

          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{hotel.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {quotePrice ?? hotel.price}
                </div>
                <div className="flex justify-end">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {hotel.fullDescription[lang]}
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('hotel.infoTitle')}</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                {hotel.category && (
                  <div>
                    <span className="font-semibold text-gray-900">{t('hotel.category')}</span>
                    <span className="text-gray-600 ml-2">{hotel.category[lang]}</span>
                  </div>
                )}
                {hotel.type && (
                  <div>
                    <span className="font-semibold text-gray-900">{t('hotel.type')}</span>
                    <span className="text-gray-600 ml-2">{hotel.type[lang]}</span>
                  </div>
                )}
                {hotel.checkIn && (
                  <div>
                    <span className="font-semibold text-gray-900">{t('hotel.checkInTime')}</span>
                    <span className="text-gray-600 ml-2">{hotel.checkIn}</span>
                  </div>
                )}
                {hotel.checkOut && (
                  <div>
                    <span className="font-semibold text-gray-900">{t('hotel.checkOutTime')}</span>
                    <span className="text-gray-600 ml-2">{hotel.checkOut}</span>
                  </div>
                )}
                {hotel.address && (
                  <div className="col-span-2">
                    <span className="font-semibold text-gray-900">{t('hotel.address')}</span>
                    <span className="text-gray-600 ml-2">{hotel.address}</span>
                  </div>
                )}
              </div>
              {hotel.googleMapsUrl && (
                <a
                  href={hotel.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  {t('hotel.viewOnMap')}
                </a>
              )}
            </div>

            {hotel.amenities.length > 0 && (
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('hotel.services')}</h3>
                <div className="grid grid-cols-3 gap-4">
                  {hotel.amenities.map((amenity) => {
                    const Icon = getAmenityIcon(amenity);
                    return (
                      <div key={amenity} className="flex flex-col items-center">
                        <Icon className="w-8 h-8 text-blue-500 mb-2" />
                        <span className="text-sm text-gray-600 text-center">{amenityLabel(amenity, lang)}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {hotel.rooms && hotel.rooms.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{t('hotel.rooms')}</h3>
                {hotel.rooms.map((room, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{room.name[lang]}</h4>
                      {room.plan && (
                        <span className="text-sm text-gray-600">{room.plan[lang]}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{room.description[lang]}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
