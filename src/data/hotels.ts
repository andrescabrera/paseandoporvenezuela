export interface Hotel {
  id: number;
  slug: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  image: string;
  amenities: string[];
  description: string;
  fullDescription: string;
  whatsappNumber: string;
  category?: string;
  type?: string;
  country?: string;
  city?: string;
  checkIn?: string;
  checkOut?: string;
  minStay?: string;
  rooms?: Array<{
    name: string;
    description: string;
    price: string;
  }>;
}

export const hotelsData: Hotel[] = [
  {
    id: 1,
    slug: 'dynasty',
    name: 'Margarita Dynasty Hotel & Suites',
    location: 'Porlamar',
    rating: 3,
    price: '$51',
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'TV Cable', 'A/A', 'Kitchenette', 'Caja de Seguridad', 'Secador de cabello'],
    description: 'Hotel ideal cerca del Centro Comercial La Vela',
    fullDescription: 'Ubicado en la exclusiva zona a escasos 300 metros del Centro Comercial La Vela y tan solo cinco minutos de los principales centros de diversión de Margarita: hermosas playas, casino, centros comerciales y demás atracciones turísticas. El Margarita Dynasty Hotel & Suites es el lugar ideal para quien piensa disfrutar lo mejor de la Isla de Margarita.',
    whatsappNumber: '584126204490',
    category: '3 Estrellas',
    type: 'Hotel',
    country: 'Venezuela',
    city: 'Porlamar',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: '1 Noche',
    rooms: [
      {
        name: 'Habitación Estándar',
        description: 'Habitaciones con balcón y una o dos camas Queen. TV por cable. Baño con ducha. Nevera. A/A. Kitchenette. Secador de cabello. Teléfono. Caja de Seguridad y WiFi. Ocupación máxima de 2 adultos y 1 niño.',
        price: '$51 por noche'
      }
    ]
  },
  {
    id: 2,
    slug: 'sunsol-isla-caribe',
    name: 'Sunsol Isla Caribe',
    location: 'Playa El Yaque',
    rating: 4,
    price: '$85',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Resort todo incluido con actividades acuáticas',
    fullDescription: 'Disfruta de un resort todo incluido con acceso a actividades acuáticas emocionantes. El Sunsol Isla Caribe es el lugar perfecto para familias y aventureros que buscan experiencias completas en un ambiente tropical.',
    whatsappNumber: '584126204490'
  },
  {
    id: 3,
    slug: 'hesperia-playa-el-agua',
    name: 'Hesperia Playa El Agua',
    location: 'Playa El Agua',
    rating: 5,
    price: '$145',
    image: 'https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Elegancia y confort en el corazón de Margarita',
    fullDescription: 'Experimenta la elegancia y el confort en el Hesperia Playa El Agua. Este boutique hotel combina la sofisticación europea con la calidez caribeña, ofreciendo una experiencia incomparable en una de las playas más hermosas de Margarita.',
    whatsappNumber: '584126204490'
  },
  {
    id: 4,
    slug: 'hotel-dunes',
    name: 'Hotel Dunes',
    location: 'Pedro González',
    rating: 4,
    price: '$95',
    image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Ambiente familiar con acceso directo a la playa',
    fullDescription: 'El Hotel Dunes es tu destino familiar ideal. Con acceso directo a la playa y un ambiente cálido y acogedor, es perfecto para crear recuerdos inolvidables con tus seres queridos.',
    whatsappNumber: '584126204490'
  },
  {
    id: 5,
    slug: 'lidotel-hotel-boutique',
    name: 'Lidotel Hotel Boutique',
    location: 'Porlamar',
    rating: 5,
    price: '$110',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Boutique hotel con servicio personalizado',
    fullDescription: 'Lidotel Hotel Boutique ofrece un servicio personalizado de clase mundial. Ubicado en el corazón de Porlamar, es el lugar perfecto para viajeros que buscan atención personalizada y confort de lujo.',
    whatsappNumber: '584126204490'
  },
  {
    id: 6,
    slug: 'costa-caribe-beach-hotel',
    name: 'Costa Caribe Beach Hotel',
    location: 'Juan Griego',
    rating: 4,
    price: '$75',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Playa', 'Desayuno'],
    description: 'Vistas increíbles del atardecer caribeño',
    fullDescription: 'Costa Caribe Beach Hotel es conocido por sus vistas increíbles del atardecer caribeño. Ubicado en Juan Griego, ofrece una experiencia auténtica con la belleza natural de la isla.',
    whatsappNumber: '584126204490'
  }
];
