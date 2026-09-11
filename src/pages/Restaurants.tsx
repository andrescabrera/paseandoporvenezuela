import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Star, MapPin, Search, Globe, Phone, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { format } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import Navigation from '../components/Navigation';
import RestaurantMap from '../components/RestaurantMap';
import { restaurants } from '../data/restaurants';

type SortOption = 'rating' | 'reviews';

const providerLabels: Record<string, string> = {
  'google-maps': 'Google',
  tripadvisor: 'Tripadvisor',
  facebook: 'Facebook',
};

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  const rounded = Math.round(value);
  return (
    <span className="inline-flex items-center" aria-label={`${value} / 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i <= rounded ? 'fill-orange-400 text-orange-400' : 'fill-gray-200 text-gray-200'}
        />
      ))}
    </span>
  );
}

export default function Restaurants() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const locale = lang === 'es' ? es : enUS;

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState<SortOption>('rating');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = useMemo(
    () => [...new Set(restaurants.map((r) => r.category[lang]))].sort((a, b) => a.localeCompare(b, lang)),
    [lang],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = restaurants.filter((r) => {
      const matchesQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.category[lang].toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q);
      const matchesCategory = category === 'all' || r.category[lang] === category;
      return matchesQuery && matchesCategory;
    });
    return [...list].sort((a, b) =>
      sort === 'reviews'
        ? b.ratingCount - a.ratingCount
        : (b.rating || 0) - (a.rating || 0) || b.ratingCount - a.ratingCount,
    );
  }, [query, category, sort, lang]);

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{t('restaurants.metaTitle')}</title>
        <meta name="description" content={t('restaurants.metaDescription')} />
        <meta property="og:title" content={t('restaurants.metaTitle')} />
        <meta property="og:description" content={t('restaurants.metaDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://paseandoporvenezuela.com/${lang}/${lang === 'es' ? 'restaurantes' : 'restaurants'}`} />
        <link rel="canonical" href={`https://paseandoporvenezuela.com/${lang}/${lang === 'es' ? 'restaurantes' : 'restaurants'}`} />
        <link rel="alternate" hrefLang="es" href="https://paseandoporvenezuela.com/es/restaurantes" />
        <link rel="alternate" hrefLang="en" href="https://paseandoporvenezuela.com/en/restaurants" />
        <link rel="alternate" hrefLang="x-default" href="https://paseandoporvenezuela.com/es/restaurantes" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: t('restaurants.title'),
            itemListElement: restaurants.map((r, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: r.name,
              url: `https://paseandoporvenezuela.com/${lang}/${lang === 'es' ? 'restaurantes' : 'restaurants'}#${r.id}`,
            })),
          })}
        </script>
      </Helmet>

      <Navigation />

      <div className="min-h-screen bg-white pt-20">
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('restaurants.title')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">{t('restaurants.subtitle')}</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
          {/* Filtros */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('restaurants.searchPlaceholder')}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="all">{t('restaurants.allCategories')}</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="rating">{t('restaurants.sortRating')}</option>
              <option value="reviews">{t('restaurants.sortReviews')}</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-600 text-lg py-16">{t('restaurants.noResults')}</p>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Mapa */}
              <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] h-[420px] order-first">
                <RestaurantMap restaurants={filtered} selectedId={selectedId} onSelect={setSelectedId} />
              </div>

              {/* Listado */}
              <div className="space-y-5">
                {filtered.map((restaurant) => {
                  const isSelected = restaurant.id === selectedId;
                  const isExpanded = restaurant.id === expandedId;
                  return (
                    <article
                      key={restaurant.id}
                      id={restaurant.id}
                      onClick={() => setSelectedId(restaurant.id)}
                      className={`rounded-2xl border bg-white p-5 transition-all cursor-pointer ${
                        isSelected ? 'border-blue-500 shadow-lg ring-1 ring-blue-200' : 'border-gray-200 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{restaurant.name}</h3>
                          <span className="text-sm text-gray-500">{restaurant.category[lang]}</span>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-2xl font-bold text-gray-900">{restaurant.rating?.toFixed(1)}</div>
                          <div className="text-xs text-gray-500">
                            {restaurant.ratingCount} {t('restaurants.reviewsLabel')}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 mb-3">
                        <Stars value={restaurant.rating || 0} />
                        {typeof restaurant.priceLevel === 'number' && restaurant.priceLevel > 0 && (
                          <span className="text-sm text-gray-500">{'$'.repeat(restaurant.priceLevel)}</span>
                        )}
                      </div>

                      <div className="flex items-start gap-2 text-gray-600 text-sm mb-4">
                        <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                        <span>{restaurant.address}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <a
                          href={restaurant.googleMapsUri}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100"
                        >
                          <MapPin className="w-4 h-4" />
                          {t('restaurants.viewOnMap')}
                        </a>
                        {restaurant.website && (
                          <a
                            href={restaurant.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200"
                          >
                            <Globe className="w-4 h-4" />
                            {t('restaurants.website')}
                          </a>
                        )}
                        {restaurant.phone && (
                          <a
                            href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200"
                          >
                            <Phone className="w-4 h-4" />
                            {restaurant.phone}
                          </a>
                        )}
                      </div>

                      {restaurant.reviews.length > 0 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedId(isExpanded ? null : restaurant.id);
                            }}
                            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            {isExpanded
                              ? t('restaurants.hideReviews')
                              : t('restaurants.showReviews', { count: restaurant.reviews.length })}
                          </button>

                          {isExpanded && (
                            <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
                              {restaurant.reviews.map((review, index) => (
                                <div key={index} className="text-sm">
                                  <div className="flex items-center justify-between gap-2 mb-1">
                                    <div className="flex items-center gap-2">
                                      <span className="font-semibold text-gray-900">{review.author}</span>
                                      {review.rating != null && <Stars value={review.rating} size={13} />}
                                    </div>
                                    <span className="text-xs text-gray-400">
                                      {review.date ? format(new Date(review.date), 'MMM yyyy', { locale }) : ''}
                                    </span>
                                  </div>
                                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{review.text[lang]}</p>
                                  {review.url && (
                                    <a
                                      href={review.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-blue-600 mt-1"
                                    >
                                      <ExternalLink className="w-3 h-3" />
                                      {providerLabels[review.provider] || review.provider}
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
