import { Star, MapPin, Wifi, Waves, Coffee } from 'lucide-react';

const hotels = [
  {
    id: 1,
    name: 'Hotel Margarita Dynasty',
    location: 'Playa El Agua',
    rating: 5,
    price: '$120',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Lujo frente al mar con vistas espectaculares'
  },
  {
    id: 2,
    name: 'Sunsol Isla Caribe',
    location: 'Playa El Yaque',
    rating: 4,
    price: '$85',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Resort todo incluido con actividades acuáticas'
  },
  {
    id: 3,
    name: 'Hesperia Playa El Agua',
    location: 'Playa El Agua',
    rating: 5,
    price: '$145',
    image: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Elegancia y confort en el corazón de Margarita'
  },
  {
    id: 4,
    name: 'Hotel Dunes',
    location: 'Pedro González',
    rating: 4,
    price: '$95',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Ambiente familiar con acceso directo a la playa'
  },
  {
    id: 5,
    name: 'Lidotel Hotel Boutique',
    location: 'Porlamar',
    rating: 5,
    price: '$110',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Boutique hotel con servicio personalizado'
  },
  {
    id: 6,
    name: 'Costa Caribe Beach Hotel',
    location: 'Juan Griego',
    rating: 4,
    price: '$75',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Vistas increíbles del atardecer caribeño'
  }
];

const amenityIcons = {
  WiFi: Wifi,
  Playa: Waves,
  Desayuno: Coffee
};

export default function Hotels() {
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
          {hotels.map((hotel) => (
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
                  {hotel.amenities.map((amenity) => {
                    const Icon = amenityIcons[amenity as keyof typeof amenityIcons];
                    return (
                      <div key={amenity} className="flex items-center text-gray-600 text-sm">
                        <Icon className="w-4 h-4 mr-1" />
                        <span>{amenity}</span>
                      </div>
                    );
                  })}
                </div>

                <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
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
