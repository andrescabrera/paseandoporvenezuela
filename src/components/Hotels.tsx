import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHotels } from '../lib/hooks';
import { getAmenityIcon, amenityLabel } from '../lib/amenityIcons';

type SortOption = 'recommended' | 'price-asc' | 'price-desc' | 'rating';

export default function Hotels() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'es' | 'en';
  const { hotels, loading, error, reload } = useHotels();

  const [query, setQuery] = useState('');
  const [destination, setDestination] = useState('all');
  const [sort, setSort] = useState<SortOption>('recommended');

  const destinations = useMemo(
    () =>
      [...new Set(hotels.map((h) => h.location).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b, 'es'),
      ),
    [hotels],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = hotels.filter((h) => {
      const matchesQuery =
        !q ||
        h.name.toLowerCase().includes(q) ||
        h.location.toLowerCase().includes(q) ||
        h.description[lang].toLowerCase().includes(q);
      const matchesDestination = destination === 'all' || h.location === destination;
      return matchesQuery && matchesDestination;
    });

    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.priceUsd - b.priceUsd);
      case 'price-desc':
        return [...list].sort((a, b) => b.priceUsd - a.priceUsd);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [hotels, query, destination, sort, lang]);

  return (
    <section id="hotels" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('home.hotelsTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.hotelsSubtitle')}
          </p>
        </div>

        {loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-busy="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg animate-pulse">
                <div className="h-64 bg-gray-200" />
                <div className="p-6 space-y-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                  <div className="h-10 bg-gray-200 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg mb-6">{t('home.hotelsError')}</p>
            <button
              onClick={() => void reload()}
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
            >
              {t('home.retry')}
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('home.filterSearchPlaceholder')}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">{t('home.filterAllDestinations')}</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="recommended">{t('home.sortRecommended')}</option>
                <option value="price-asc">{t('home.sortPriceAsc')}</option>
                <option value="price-desc">{t('home.sortPriceDesc')}</option>
                <option value="rating">{t('home.sortRating')}</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <p className="text-center text-gray-600 text-lg py-12">{t('home.noResults')}</p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((hotel) => (
                  <div
                    key={hotel.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-gray-900">
                        {hotel.price}
                        <span className="text-sm font-normal text-gray-600">{t('home.perNight')}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                        <div className="flex items-center">
                          {[...Array(hotel.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {hotel.description[lang]}
                      </p>

                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        {hotel.amenities.slice(0, 3).map((amenity) => {
                          const Icon = getAmenityIcon(amenity);
                          return (
                            <div key={amenity} className="flex items-center text-gray-600 text-sm">
                              <Icon className="w-4 h-4 mr-1" />
                              <span>{amenityLabel(amenity, lang)}</span>
                            </div>
                          );
                        })}
                      </div>

                      <button
                        onClick={() => navigate(`/${lang}/hoteles/${hotel.slug}`)}
                        className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                      >
                        {t('home.viewAvailability')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
