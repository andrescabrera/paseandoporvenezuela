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
    image: '/images/hotels/hotel-margarita-dynasty.jpg',
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
    location: 'Puerto Fermín',
    rating: 4,
    price: '$101',
    image: '/images/hotels/hotel-sunsol-isla-caribe.jpg',
    amenities: ['WiFi Gratis', 'Playa Privada', 'Todo Incluido', '3 Piscinas', 'Spa', 'Nightclub', 'Restaurantes'],
    description: 'Resort todo incluido frente a Playa El Tirano',
    fullDescription: 'Disfruta de un resort todo incluido con 452 habitaciones con aire acondicionado, nevera y TV de pantalla plana. Con acceso directo a Playa El Tirano, el hotel ofrece 3 piscinas al aire libre, club nocturno, gimnasio y centro de spa. Los huéspedes pueden disfrutar de desayuno buffet gratuito, 3 restaurantes en el lugar, 2 bares de playa y servicio de traslado gratuito a la playa. Las instalaciones incluyen centro de conferencias, servicio de conserjería y estacionamiento gratuito.',
    whatsappNumber: '584126204490',
    category: '4 Estrellas',
    type: 'Resort Todo Incluido',
    country: 'Venezuela',
    city: 'Puerto Fermín',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: '1 Noche',
    rooms: [
      {
        name: 'Habitación Estándar',
        description: 'Habitaciones con aire acondicionado, balcón privado, baño con ducha de lluvia y secador de pelo. TV por cable. Nevera. Caja de seguridad. WiFi gratis. Agua embotellada de cortesía. Servicio de limpieza diario.',
        price: '$101 por noche'
      },
      {
        name: 'Suite con Jacuzzi',
        description: 'Amplias suites con todas las comodidades de las habitaciones estándar más bañera de hidromasaje privada. Ventanas grandes con vistas espectaculares. TV plasma y aire acondicionado premium.',
        price: '$145 por noche'
      }
    ]
  },
  {
    id: 3,
    slug: 'hesperia-playa-el-agua',
    name: 'Hesperia Playa El Agua',
    location: 'Playa El Agua',
    rating: 4,
    price: '$100',
    image: '/images/hotels/hotel-hesperia-playa-el-agua.jpg',
    amenities: ['WiFi Gratis', 'Todo Incluido', 'Acceso Playa', '8 Piscinas', 'Spa', '3 Restaurantes', '5 Bares'],
    description: 'Resort todo incluido en la playa más famosa de Margarita',
    fullDescription: 'Resort todo incluido de 4 estrellas con 300 habitaciones con aire acondicionado, TV por cable y escritorio de trabajo. Ubicado directamente en Playa El Agua, la playa más hermosa de Margarita. El hotel ofrece 8 piscinas, 3 canchas de tenis, 3 restaurantes, 5 bares y un club nocturno. Los huéspedes disfrutan de servicios ilimitados incluyendo desayuno buffet gratuito, centro de wellness con sauna y masajes, gimnasio, área de juegos para niños y actividades supervisadas. Estacionamiento gratuito y recepción 24 horas.',
    whatsappNumber: '584126204490',
    category: '4 Estrellas',
    type: 'Resort Todo Incluido',
    country: 'Venezuela',
    city: 'Playa El Agua',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: '1 Noche',
    rooms: [
      {
        name: 'Habitación Estándar',
        description: 'Habitaciones con decoración colorida, aire acondicionado, TV por cable, escritorio de trabajo y baño completo. Vistas al jardín o piscina del hotel. Caja de seguridad incluida.',
        price: '$100 por noche'
      },
      {
        name: 'Habitación Premium',
        description: 'Habitaciones amplias con todas las comodidades estándar más mejores vistas y ubicación. Espacios más cómodos para relajarse con familia.',
        price: '$135 por noche'
      }
    ]
  },
  {
    id: 4,
    slug: 'hotel-dunes',
    name: 'Dunes Hotel & Beach Resort',
    location: 'Pedro González',
    rating: 4,
    price: '$94',
    image: '/images/hotels/hotel-dunes.webp',
    amenities: ['WiFi', 'Playa Privada', 'Piscinas', 'Deportes Acuáticos', 'Spa', 'Disco', 'Restaurantes'],
    description: 'Resort familiar con playa de arena blanca en Pedro González',
    fullDescription: 'Resort ubicado en la costa norte de Margarita con acceso a las mejores playas. Cuenta con 2 áreas de piscinas, playa privada de arena blanca de una milla de largo con deportes acuáticos, gimnasio completamente equipado, spa de servicio completo con jacuzzi, discoteca, cine, restaurantes, área de actividades para niños y pista de go-karts. El resort ofrece sección de lujo premium con TV plasma, duchas escocesas y acabados en mármol. Bar de servicio completo y servicio de lavandería. Recepción 24 horas. A 35 km del aeropuerto Santiago Mariño, aproximadamente 45 minutos del bulevar.',
    whatsappNumber: '584126204490',
    category: '4 Estrellas',
    type: 'Resort',
    country: 'Venezuela',
    city: 'Pedro González',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: '1 Noche',
    rooms: [
      {
        name: 'Habitación Estándar',
        description: 'Habitaciones con aire acondicionado, TV, baño privado y balcón. Ambiente familiar y acogedor con todas las comodidades básicas para una estadía confortable.',
        price: '$94 por noche'
      },
      {
        name: 'Habitación Premium',
        description: 'Habitaciones nuevas de lujo con TV plasma, duchas escocesas, acabados en mármol y decoración moderna. Ubicadas en el ala premium del resort con comodidades superiores.',
        price: '$130 por noche'
      }
    ]
  },
  {
    id: 5,
    slug: 'lidotel-hotel-boutique',
    name: 'Lidotel Hotel Boutique Margarita',
    location: 'Pampatar',
    rating: 5,
    price: '$59',
    image: '/images/hotels/hotel-lidotel-sambil.jpg',
    amenities: ['WiFi Gratis', 'Centro Comercial Sambil', 'Piscina', 'Bar Rooftop', 'Restaurante', 'Gimnasio', 'Jacuzzi'],
    description: 'Hotel boutique de lujo dentro del Centro Comercial Sambil',
    fullDescription: 'Hotel boutique de 5 estrellas ubicado dentro del Centro Comercial Sambil Margarita con acceso directo a compras y entretenimiento. El hotel ofrece 134 habitaciones con minibar, aire acondicionado, TV de pantalla plana y WiFi gratis. Servicio de habitaciones 24 horas y espacios de trabajo. Piscina al aire libre, bar rooftop con vistas panorámicas, restaurante en el lugar y desayuno buffet de excelente calidad. Gimnasio, vestuarios y jacuzzi. Centro de negocios y sala de conferencias. Transporte al aeropuerto y estacionamiento gratuito. A 15 minutos a pie del centro de Porlamar. Clasificado #3 de 82 hoteles en Margarita.',
    whatsappNumber: '584126204490',
    category: '5 Estrellas',
    type: 'Hotel Boutique',
    country: 'Venezuela',
    city: 'Pampatar',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: '1 Noche',
    rooms: [
      {
        name: 'Habitación Estándar',
        description: 'Habitaciones cómodas con minibar, aire acondicionado, TV de pantalla plana, WiFi gratis, escritorio de trabajo, baño con secador de pelo y toallas de baño. Servicio de habitaciones 24 horas.',
        price: '$59 por noche'
      },
      {
        name: 'Habitación con Balcón',
        description: 'Habitaciones con todas las comodidades estándar más balcón privado y área de estar. Vistas superiores del complejo comercial o la ciudad.',
        price: '$79 por noche'
      }
    ]
  },
  {
    id: 6,
    slug: 'costa-caribe-beach-hotel',
    name: 'Costa Caribe Hotel Beach & Resort',
    location: 'Juan Griego',
    rating: 4,
    price: '$63',
    image: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=800',
    amenities: ['WiFi', 'Piscina', 'Playa Caribe', 'Restaurante', 'Bar', 'Estacionamiento'],
    description: 'Resort frente al mar con atardeceres espectaculares en Juan Griego',
    fullDescription: 'Resort de 4 estrellas ubicado en Juan Griego, a 10 minutos en auto del monumento histórico nacional Fortín de La Galera. El hotel ofrece piscina al aire libre y fácil acceso a Playa Caribe a 19 minutos caminando. Habitaciones con aire acondicionado, TV, baño privado y vistas al mar o jardines. Restaurante en el lugar, bar y estacionamiento gratuito. Juan Griego es famoso por sus atardeceres espectaculares sobre el mar Caribe y su ambiente tranquilo y pintoresco. A 43 minutos del Aeropuerto Internacional Santiago Mariño.',
    whatsappNumber: '584126204490',
    category: '4 Estrellas',
    type: 'Resort',
    country: 'Venezuela',
    city: 'Juan Griego',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: '1 Noche',
    rooms: [
      {
        name: 'Habitación Estándar',
        description: 'Habitaciones cómodas con aire acondicionado, TV, baño privado y vistas a los jardines del hotel. Ambiente tranquilo y acogedor ideal para descansar.',
        price: '$63 por noche'
      },
      {
        name: 'Habitación Vista al Mar',
        description: 'Habitaciones con todas las comodidades estándar más vistas panorámicas al mar Caribe. Disfruta de los famosos atardeceres de Juan Griego desde tu balcón privado.',
        price: '$85 por noche'
      }
    ]
  }
];
