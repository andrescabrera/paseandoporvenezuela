export interface Localized {
  es: string;
  en: string;
}

export interface Hotel {
  id: number;
  slug: string;
  name: string;
  location: string;
  rating: number;
  price: string;
  image: string;
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
  rooms?: Array<{
    name: Localized;
    description: Localized;
    price: Localized;
  }>;
}

export const amenityLabelsEn: Record<string, string> = {
  WiFi: 'WiFi',
  'TV Cable': 'Cable TV',
  'A/A': 'A/C',
  Kitchenette: 'Kitchenette',
  'Caja de Seguridad': 'Safe',
  'Secador de cabello': 'Hair Dryer',
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
};

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
    description: {
      es: 'Hotel ideal cerca del Centro Comercial La Vela',
      en: 'Ideal hotel near La Vela Shopping Mall'
    },
    fullDescription: {
      es: 'Ubicado en la exclusiva zona a escasos 300 metros del Centro Comercial La Vela y tan solo cinco minutos de los principales centros de diversión de Margarita: hermosas playas, casino, centros comerciales y demás atracciones turísticas. El Margarita Dynasty Hotel & Suites es el lugar ideal para quien piensa disfrutar lo mejor de la Isla de Margarita.',
      en: 'Located in an exclusive area just 300 meters from La Vela Shopping Mall and only five minutes from Margarita\'s main entertainment centers: beautiful beaches, casino, shopping malls and other tourist attractions. Margarita Dynasty Hotel & Suites is the perfect place for those who want to enjoy the best of Margarita Island.'
    },
    whatsappNumber: '584126204490',
    category: { es: '3 Estrellas', en: '3-Star' },
    type: { es: 'Hotel', en: 'Hotel' },
    country: 'Venezuela',
    city: 'Porlamar',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: { es: '1 Noche', en: '1 Night' },
    rooms: [
      {
        name: { es: 'Habitación Estándar', en: 'Standard Room' },
        description: {
          es: 'Habitaciones con balcón y una o dos camas Queen. TV por cable. Baño con ducha. Nevera. A/A. Kitchenette. Secador de cabello. Teléfono. Caja de Seguridad y WiFi. Ocupación máxima de 2 adultos y 1 niño.',
          en: 'Rooms with balcony and one or two Queen beds. Cable TV. Shower bath. Refrigerator. A/C. Kitchenette. Hair dryer. Telephone. Safe and WiFi. Maximum occupancy of 2 adults and 1 child.'
        },
        price: { es: '$51 por noche', en: '$51/night' }
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
    description: {
      es: 'Resort todo incluido frente a Playa El Tirano',
      en: 'All-inclusive resort facing El Tirano Beach'
    },
    fullDescription: {
      es: 'Disfruta de un resort todo incluido con 452 habitaciones con aire acondicionado, nevera y TV de pantalla plana. Con acceso directo a Playa El Tirano, el hotel ofrece 3 piscinas al aire libre, club nocturno, gimnasio y centro de spa. Los huéspedes pueden disfrutar de desayuno buffet gratuito, 3 restaurantes en el lugar, 2 bares de playa y servicio de traslado gratuito a la playa. Las instalaciones incluyen centro de conferencias, servicio de conserjería y estacionamiento gratuito.',
      en: 'Enjoy an all-inclusive resort with 452 air-conditioned rooms with refrigerator and flat-screen TV. With direct access to El Tirano Beach, the hotel offers 3 outdoor pools, a nightclub, gym and spa center. Guests can enjoy a free buffet breakfast, 3 on-site restaurants, 2 beach bars and a free shuttle service to the beach. Facilities include a conference center, concierge service and free parking.'
    },
    whatsappNumber: '584126204490',
    category: { es: '4 Estrellas', en: '4-Star' },
    type: { es: 'Resort Todo Incluido', en: 'All-Inclusive Resort' },
    country: 'Venezuela',
    city: 'Puerto Fermín',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: { es: '1 Noche', en: '1 Night' },
    rooms: [
      {
        name: { es: 'Habitación Estándar', en: 'Standard Room' },
        description: {
          es: 'Habitaciones con aire acondicionado, balcón privado, baño con ducha de lluvia y secador de pelo. TV por cable. Nevera. Caja de seguridad. WiFi gratis. Agua embotellada de cortesía. Servicio de limpieza diario.',
          en: 'Rooms with air conditioning, private balcony, rain shower bath and hair dryer. Cable TV. Refrigerator. Safe. Free WiFi. Complimentary bottled water. Daily housekeeping.'
        },
        price: { es: '$101 por noche', en: '$101/night' }
      },
      {
        name: { es: 'Suite con Jacuzzi', en: 'Jacuzzi Suite' },
        description: {
          es: 'Amplias suites con todas las comodidades de las habitaciones estándar más bañera de hidromasaje privada. Ventanas grandes con vistas espectaculares. TV plasma y aire acondicionado premium.',
          en: 'Spacious suites with all standard room amenities plus a private jacuzzi tub. Large windows with spectacular views. Plasma TV and premium air conditioning.'
        },
        price: { es: '$145 por noche', en: '$145/night' }
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
    description: {
      es: 'Resort todo incluido en la playa más famosa de Margarita',
      en: "All-inclusive resort on the most famous beach in Margarita"
    },
    fullDescription: {
      es: 'Resort todo incluido de 4 estrellas con 300 habitaciones con aire acondicionado, TV por cable y escritorio de trabajo. Ubicado directamente en Playa El Agua, la playa más hermosa de Margarita. El hotel ofrece 8 piscinas, 3 canchas de tenis, 3 restaurantes, 5 bares y un club nocturno. Los huéspedes disfrutan de servicios ilimitados incluyendo desayuno buffet gratuito, centro de wellness con sauna y masajes, gimnasio, área de juegos para niños y actividades supervisadas. Estacionamiento gratuito y recepción 24 horas.',
      en: '4-star all-inclusive resort with 300 air-conditioned rooms featuring cable TV and work desks. Located right on Playa El Agua, the most beautiful beach in Margarita. The hotel offers 8 pools, 3 tennis courts, 3 restaurants, 5 bars and a nightclub. Guests enjoy unlimited services including a free buffet breakfast, a wellness center with sauna and massages, a gym, a children\'s play area and supervised activities. Free parking and 24-hour reception.'
    },
    whatsappNumber: '584126204490',
    category: { es: '4 Estrellas', en: '4-Star' },
    type: { es: 'Resort Todo Incluido', en: 'All-Inclusive Resort' },
    country: 'Venezuela',
    city: 'Playa El Agua',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: { es: '1 Noche', en: '1 Night' },
    rooms: [
      {
        name: { es: 'Habitación Estándar', en: 'Standard Room' },
        description: {
          es: 'Habitaciones con decoración colorida, aire acondicionado, TV por cable, escritorio de trabajo y baño completo. Vistas al jardín o piscina del hotel. Caja de seguridad incluida.',
          en: 'Rooms with colorful decor, air conditioning, cable TV, work desk and full bathroom. Garden or pool views. Safe included.'
        },
        price: { es: '$100 por noche', en: '$100/night' }
      },
      {
        name: { es: 'Habitación Premium', en: 'Premium Room' },
        description: {
          es: 'Habitaciones amplias con todas las comodidades estándar más mejores vistas y ubicación. Espacios más cómodos para relajarse con familia.',
          en: 'Spacious rooms with all standard amenities plus better views and location. More comfortable spaces to relax with family.'
        },
        price: { es: '$135 por noche', en: '$135/night' }
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
    description: {
      es: 'Resort familiar con playa de arena blanca en Pedro González',
      en: 'Family resort with white sand beach in Pedro González'
    },
    fullDescription: {
      es: 'Resort ubicado en la costa norte de Margarita con acceso a las mejores playas. Cuenta con 2 áreas de piscinas, playa privada de arena blanca de una milla de largo con deportes acuáticos, gimnasio completamente equipado, spa de servicio completo con jacuzzi, discoteca, cine, restaurantes, área de actividades para niños y pista de go-karts. El resort ofrece sección de lujo premium con TV plasma, duchas escocesas y acabados en mármol. Bar de servicio completo y servicio de lavandería. Recepción 24 horas. A 35 km del aeropuerto Santiago Mariño, aproximadamente 45 minutos del bulevar.',
      en: 'Resort located on Margarita\'s north coast with access to the best beaches. It features 2 pool areas, a private one-mile white-sand beach with water sports, a fully equipped gym, a full-service spa with jacuzzi, a disco, a cinema, restaurants, a kids\' activity area and a go-kart track. The resort offers a premium luxury section with plasma TV, Scottish showers and marble finishes. Full-service bar and laundry service. 24-hour reception. 35 km from Santiago Mariño airport, approximately 45 minutes from the boulevard.'
    },
    whatsappNumber: '584126204490',
    category: { es: '4 Estrellas', en: '4-Star' },
    type: { es: 'Resort', en: 'Resort' },
    country: 'Venezuela',
    city: 'Pedro González',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: { es: '1 Noche', en: '1 Night' },
    rooms: [
      {
        name: { es: 'Habitación Estándar', en: 'Standard Room' },
        description: {
          es: 'Habitaciones con aire acondicionado, TV, baño privado y balcón. Ambiente familiar y acogedor con todas las comodidades básicas para una estadía confortable.',
          en: 'Rooms with air conditioning, TV, private bathroom and balcony. A family-friendly and welcoming atmosphere with all basic amenities for a comfortable stay.'
        },
        price: { es: '$94 por noche', en: '$94/night' }
      },
      {
        name: { es: 'Habitación Premium', en: 'Premium Room' },
        description: {
          es: 'Habitaciones nuevas de lujo con TV plasma, duchas escocesas, acabados en mármol y decoración moderna. Ubicadas en el ala premium del resort con comodidades superiores.',
          en: 'Brand-new luxury rooms with plasma TV, Scottish showers, marble finishes and modern decor. Located in the resort\'s premium wing with superior amenities.'
        },
        price: { es: '$130 por noche', en: '$130/night' }
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
    description: {
      es: 'Hotel boutique de lujo dentro del Centro Comercial Sambil',
      en: 'Luxury boutique hotel inside Sambil Shopping Mall'
    },
    fullDescription: {
      es: 'Hotel boutique de 5 estrellas ubicado dentro del Centro Comercial Sambil Margarita con acceso directo a compras y entretenimiento. El hotel ofrece 134 habitaciones con minibar, aire acondicionado, TV de pantalla plana y WiFi gratis. Servicio de habitaciones 24 horas y espacios de trabajo. Piscina al aire libre, bar rooftop con vistas panorámicas, restaurante en el lugar y desayuno buffet de excelente calidad. Gimnasio, vestuarios y jacuzzi. Centro de negocios y sala de conferencias. Transporte al aeropuerto y estacionamiento gratuito. A 15 minutos a pie del centro de Porlamar. Clasificado #3 de 82 hoteles en Margarita.',
      en: '5-star boutique hotel located inside Sambil Margarita Shopping Mall with direct access to shopping and entertainment. The hotel offers 134 rooms with minibar, air conditioning, flat-screen TV and free WiFi. 24-hour room service and workspaces. Outdoor pool, rooftop bar with panoramic views, on-site restaurant and an excellent buffet breakfast. Gym, changing rooms and jacuzzi. Business center and conference room. Airport transportation and free parking. 15-minute walk from Porlamar center. Ranked #3 out of 82 hotels in Margarita.'
    },
    whatsappNumber: '584126204490',
    category: { es: '5 Estrellas', en: '5-Star' },
    type: { es: 'Hotel Boutique', en: 'Boutique Hotel' },
    country: 'Venezuela',
    city: 'Pampatar',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: { es: '1 Noche', en: '1 Night' },
    rooms: [
      {
        name: { es: 'Habitación Estándar', en: 'Standard Room' },
        description: {
          es: 'Habitaciones cómodas con minibar, aire acondicionado, TV de pantalla plana, WiFi gratis, escritorio de trabajo, baño con secador de pelo y toallas de baño. Servicio de habitaciones 24 horas.',
          en: 'Comfortable rooms with minibar, air conditioning, flat-screen TV, free WiFi, work desk, bathroom with hair dryer and bath towels. 24-hour room service.'
        },
        price: { es: '$59 por noche', en: '$59/night' }
      },
      {
        name: { es: 'Habitación con Balcón', en: 'Room with Balcony' },
        description: {
          es: 'Habitaciones con todas las comodidades estándar más balcón privado y área de estar. Vistas superiores del complejo comercial o la ciudad.',
          en: 'Rooms with all standard amenities plus a private balcony and living area. Superior views of the commercial complex or the city.'
        },
        price: { es: '$79 por noche', en: '$79/night' }
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
    description: {
      es: 'Resort frente al mar con atardeceres espectaculares en Juan Griego',
      en: 'Seaside resort with spectacular sunsets in Juan Griego'
    },
    fullDescription: {
      es: 'Resort de 4 estrellas ubicado en Juan Griego, a 10 minutos en auto del monumento histórico nacional Fortín de La Galera. El hotel ofrece piscina al aire libre y fácil acceso a Playa Caribe a 19 minutos caminando. Habitaciones con aire acondicionado, TV, baño privado y vistas al mar o jardines. Restaurante en el lugar, bar y estacionamiento gratuito. Juan Griego es famoso por sus atardeceres espectaculares sobre el mar Caribe y su ambiente tranquilo y pintoresco. A 43 minutos del Aeropuerto Internacional Santiago Mariño.',
      en: '4-star resort located in Juan Griego, 10 minutes by car from the Fortín de La Galera national historic monument. The hotel offers an outdoor pool and easy access to Caribbean Beach, a 19-minute walk. Rooms with air conditioning, TV, private bathroom and sea or garden views. On-site restaurant, bar and free parking. Juan Griego is famous for its spectacular sunsets over the Caribbean Sea and its peaceful, picturesque atmosphere. 43 minutes from Santiago Mariño International Airport.'
    },
    whatsappNumber: '584126204490',
    category: { es: '4 Estrellas', en: '4-Star' },
    type: { es: 'Resort', en: 'Resort' },
    country: 'Venezuela',
    city: 'Juan Griego',
    checkIn: '3:00 PM',
    checkOut: '12:00 PM',
    minStay: { es: '1 Noche', en: '1 Night' },
    rooms: [
      {
        name: { es: 'Habitación Estándar', en: 'Standard Room' },
        description: {
          es: 'Habitaciones cómodas con aire acondicionado, TV, baño privado y vistas a los jardines del hotel. Ambiente tranquilo y acogedor ideal para descansar.',
          en: 'Comfortable rooms with air conditioning, TV, private bathroom and views of the hotel gardens. A peaceful and welcoming atmosphere ideal for rest.'
        },
        price: { es: '$63 por noche', en: '$63/night' }
      },
      {
        name: { es: 'Habitación Vista al Mar', en: 'Sea View Room' },
        description: {
          es: 'Habitaciones con todas las comodidades estándar más vistas panorámicas al mar Caribe. Disfruta de los famosos atardeceres de Juan Griego desde tu balcón privado.',
          en: 'Rooms with all standard amenities plus panoramic views of the Caribbean Sea. Enjoy the famous Juan Griego sunsets from your private balcony.'
        },
        price: { es: '$85 por noche', en: '$85/night' }
      }
    ]
  }
];