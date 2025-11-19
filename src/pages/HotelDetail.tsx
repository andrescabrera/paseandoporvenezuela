import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Wifi, Waves, Coffee, Send, Tv, Wind, UtensilsCrossed, Lock, Phone } from 'lucide-react';
import { hotelsData } from '../data/hotels';

export default function HotelDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const hotel = hotelsData.find(h => h.slug === slug);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    message: ''
  });

  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hotel no encontrado</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const amenityIcons: Record<string, React.ComponentType<any>> = {
    WiFi: Wifi,
    Playa: Waves,
    Desayuno: Coffee,
    'TV Cable': Tv,
    'A/A': Wind,
    Kitchenette: UtensilsCrossed,
    'Caja de Seguridad': Lock,
    'Secador de cabello': Wind,
    Teléfono: Phone
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const messageText = `Hola, me interesa el ${hotel.name}.
Nombre: ${formData.name}
Email: ${formData.email}
Fecha de entrada: ${formData.checkIn}
Fecha de salida: ${formData.checkOut}
Número de huéspedes: ${formData.guests}
Mensaje: ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${hotel.whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 px-6 py-4 text-blue-500 hover:text-blue-600 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver</span>
        </button>

        <div className="grid md:grid-cols-2 gap-8 px-6 md:px-12 py-8">
          <div>
            <div className="relative h-96 mb-6 overflow-hidden rounded-2xl">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
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
                <div className="text-3xl font-bold text-blue-500 mb-2">{hotel.price}</div>
                <div className="flex">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {hotel.fullDescription}
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Información del Hotel</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                {hotel.category && (
                  <div>
                    <span className="font-semibold text-gray-900">Categoría:</span>
                    <span className="text-gray-600 ml-2">{hotel.category}</span>
                  </div>
                )}
                {hotel.type && (
                  <div>
                    <span className="font-semibold text-gray-900">Tipo:</span>
                    <span className="text-gray-600 ml-2">{hotel.type}</span>
                  </div>
                )}
                {hotel.checkIn && (
                  <div>
                    <span className="font-semibold text-gray-900">Check In:</span>
                    <span className="text-gray-600 ml-2">{hotel.checkIn}</span>
                  </div>
                )}
                {hotel.checkOut && (
                  <div>
                    <span className="font-semibold text-gray-900">Check Out:</span>
                    <span className="text-gray-600 ml-2">{hotel.checkOut}</span>
                  </div>
                )}
                {hotel.minStay && (
                  <div>
                    <span className="font-semibold text-gray-900">Estadía Mínima:</span>
                    <span className="text-gray-600 ml-2">{hotel.minStay}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Servicios</h3>
              <div className="grid grid-cols-3 gap-4">
                {hotel.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || Wifi;
                  return (
                    <div key={amenity} className="flex flex-col items-center">
                      <Icon className="w-8 h-8 text-blue-500 mb-2" />
                      <span className="text-sm text-gray-600 text-center">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {hotel.rooms && hotel.rooms.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Habitaciones</h3>
                {hotel.rooms.map((room, index) => (
                  <div key={index} className="mb-4 last:mb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{room.name}</h4>
                      <span className="text-blue-600 font-bold">{room.price}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{room.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="px-6 md:px-12 py-8 border-t">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Solicita Información</h2>

          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Nombre</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Entrada</label>
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
                <label className="block text-sm font-semibold text-gray-900 mb-2">Salida</label>
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
                <label className="block text-sm font-semibold text-gray-900 mb-2">Huéspedes</label>
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

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-2">Mensaje adicional</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Cuéntanos qué necesitas..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors text-lg"
            >
              <Send className="w-5 h-5" />
              <span>Enviar por WhatsApp</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
