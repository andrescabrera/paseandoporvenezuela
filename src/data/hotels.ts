export interface Localized {
  es: string;
  en: string;
}

export interface HotelRoom {
  name: Localized;
  description: Localized;
  plan?: Localized;
  image?: string;
}

export interface Hotel {
  id: number;
  slug: string;
  name: string;
  location: string;
  rating: number;
  /** Precio mínimo en USD (numérico) para ordenar/filtrar. */
  priceUsd: number;
  /** Precio mínimo formateado en USD con coma latina (ej. "$140,00"). */
  price: string;
  image: string;
  images?: string[];
  amenities: string[];
  description: Localized;
  fullDescription: Localized;
  whatsappNumber: string;
  category?: Localized;
  type?: Localized;
  country?: string;
  city?: string;
  checkIn?: string;
  checkOut?: string;
  minStay?: Localized;
  rooms?: HotelRoom[];
  available?: boolean;
  reviewCount?: number;
  address?: string;
  googleMapsUrl?: string;
}

/**
 * Traducción de amenidades (features) al inglés.
 * Los textos libres que devuelve venetravel.com se mantienen en español como
 * fallback; solo se traducen etiquetas cortas y recurrentes.
 */
export const amenityLabelsEn: Record<string, string> = {
  WiFi: 'WiFi',
  'TV Cable': 'Cable TV',
  'A/A': 'A/C',
  Kitchenette: 'Kitchenette',
  'Caja de Seguridad': 'Safe',
  'Caja De Seguridad': 'Safe',
  'Secador de cabello': 'Hair Dryer',
  'Secador De Cabello': 'Hair Dryer',
  'WiFi Gratis': 'Free WiFi',
  'Playa Privada': 'Private Beach',
  'Todo Incluido': 'All Inclusive',
  '3 Piscinas': '3 Pools',
  Spa: 'Spa',
  Nightclub: 'Nightclub',
  Restaurantes: 'Restaurants',
  'Acceso Playa': 'Beach Access',
  '8 Piscinas': '8 Pools',
  '3 Restaurantes': '3 Restaurants',
  '5 Bares': '5 Bars',
  Piscinas: 'Pools',
  'Deportes Acuáticos': 'Water Sports',
  Disco: 'Disco',
  'Centro Comercial Sambil': 'Sambil Mall',
  Piscina: 'Pool',
  'Bar Rooftop': 'Rooftop Bar',
  Restaurante: 'Restaurant',
  Gimnasio: 'Gym',
  Jacuzzi: 'Jacuzzi',
  'Playa Caribe': 'Caribbean Beach',
  Bar: 'Bar',
  Estacionamiento: 'Parking',
  'Club Infantil': 'Kids Club',
  'Bodegón': 'Deli',
  'Spá': 'Spa',
  'Sala De Conferencia': 'Conference Room',
  Solarium: 'Solarium',
  'Parque Infantil': 'Playground',
  'Salón De Juegos': 'Game Room',
  'Lobby Bar': 'Lobby Bar',
  'Aire Acondicionado': 'Air Conditioning',
  Teléfono: 'Telephone',
  Nevera: 'Refrigerator',
  Comedor: 'Dining Room',
  'Habitación Discapacitados': 'Accessible Room',
  Cafetera: 'Coffee Maker',
  'Sala de Estar': 'Living Room',
  'Cocina (Kitchenette)': 'Kitchenette',
  Sauna: 'Sauna',
  'Amenidades Especiales': 'Special Amenities',
  'Horno Microondas': 'Microwave',
  'Cubertería': 'Cutlery',
  'Implementos De Cocina': 'Kitchen Utensils',
  Cristaleria: 'Glassware',
  TV: 'TV',
  Taxi: 'Taxi',
  'Acepta Mascotas': 'Pet Friendly',
  Playa: 'Beach',
  'Acceso Discapacitados': 'Accessible Access',
  'MIni Bar': 'Mini Bar',
  'Lavandería': 'Laundry',
  'Bar de Playa': 'Beach Bar',
  'Business Center': 'Business Center',
  'Toldos/Sillas Playa': 'Beach Tents/Chairs',
  'Coctail de Bienvenida': 'Welcome Cocktail',
  Peluqueria: 'Hairdresser',
  'Nevera Ejecutiva': 'Mini Fridge',
  'Room Service': 'Room Service',
  Maletero: 'Porter',
  'Valet Parking': 'Valet Parking',
  'Servicio Seguridad': 'Security Service',
  'Servicio Despertador': 'Wake-up Service',
  'Cancha de Tenis': 'Tennis Court',
  'Planta Elétrica': 'Backup Power',
  'Ruta de Playa': 'Beach Shuttle',
  'Traslados Aero/Hotel/Aero': 'Airport Transfers',
  'Fuente de Agua': 'Drinking Water',
  'Club de Playa': 'Beach Club',
  'Cuna para Infantes': 'Baby Crib',
  'Animación y Recreación': 'Entertainment & Recreation',
  'Show Nocturnos': 'Evening Shows',
  'Tienda de Souvenirs': 'Souvenir Shop',
  'Traslados a Playa Cercana': 'Nearby Beach Transfers',
  'Área de Snacks': 'Snack Area',
  'Área de Masajes': 'Massage Area',
  Excursiones: 'Excursions',
  'Paseo en Bicicletas': 'Bike Rides',
};
