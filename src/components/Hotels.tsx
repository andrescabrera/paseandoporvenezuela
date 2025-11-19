import { useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Waves, Coffee, Tv, Wind, UtensilsCrossed, Lock } from 'lucide-react';
import { hotelsData } from '../data/hotels';

const amenityIcons = {
  WiFi: Wifi,
  Playa: Waves,
  Desayuno: Coffee,
  'TV Cable': Tv,
  'A/A': Wind,
  Kitchenette: UtensilsCrossed,
  'Caja de Seguridad': Lock,
  'Secador de cabello': Wind
};

export default function Hotels() {
  const navigate = useNavigate();

  return (
    <section id="hotels" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hoteles en Isla de Margarita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seleccionamos los mejores hoteles para que tu estadía sea inolvidable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotelsData.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full font-bold text-gray-900">
                  {hotel.price}
                  <span className="text-sm font-normal text-gray-600">/noche</span>
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
                  {hotel.description}
                </p>

                <div className="flex items-center gap-3 mb-4">
                  {hotel.amenities.slice(0, 3).map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                    if (!Icon) return null;
                    return (
                      <div key={amenity} className="flex items-center text-gray-600 text-sm">
                        <Icon className="w-4 h-4 mr-1" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => navigate(`/hoteles/${hotel.slug}`)}
                  className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors"
                >
                  Ver Disponibilidad
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
