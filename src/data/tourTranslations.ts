export interface TourTranslation {
  name?: string;
  destination?: string;
  description?: string;
  duration?: string;
  type?: string;
}

/**
 * Traducciones manuales al inglés de los tours de venetravel.com.
 * Clave = id numérico del tour. (Las descripciones marcadas como
 * "Descripción del tours" se tratan como vacías en el mapper).
 */
export const tourTranslationsEN: Record<number, TourTranslation> = {
  59: {
    name: 'Tibisay Canaima Camp – 4 Nights 5 Days',
    destination: 'Canaima',
    duration: '4 nights',
    type: 'National',
    description: `The experience includes from Thursday to Sunday:
- Air ticket Maiquetía – Canaima – Maiquetía
- Assistance from your arrival at Canaima airport
- Transfers to the LD Tapuy Lodge camp
- Welcome cocktail
- Full board (breakfast, lunch, dinner and snacks)
- Non-alcoholic drinks during meals
- Local guide and personalized attention
- Excursion to Sapo and Hacha Falls and a tour of the Canaima Lagoon
- Excursion to Angel Falls (overnight at the Tapuy Lodge base camp at Santo Ángel)

Not included:
- Airport tax
- Inparques fee (paid in cash directly in Canaima)
Venezuelans: US$ 40 for adults. US$ 20 for children under 12 and seniors. Foreigners: US$ 40`,
  },
  58: {
    name: 'Tibisay Canaima Camp – 3 Nights 4 Days',
    destination: 'Canaima',
    duration: '3 nights',
    type: 'National',
    description: `The experience includes from Thursday to Sunday:
- Air ticket Maiquetía – Canaima – Maiquetía
- Assistance from your arrival at Canaima airport
- Transfers to the camp
- Welcome cocktail
- Full board (breakfast, lunch, dinner and snacks)
- Non-alcoholic drinks during meals
- Local guide and personalized attention
- Excursion to Sapo and Hacha Falls and a tour of the Canaima Lagoon
- Excursion to Angel Falls (overnight at the Tapuy Lodge base camp at Santo Ángel)

Not included:
- Airport tax
- Inparques fee (paid in cash directly in Canaima)
Venezuelans: US$ 40 for adults. US$ 20 for children under 12 and seniors. Foreigners: US$ 40`,
  },
  57: {
    name: 'Full Day Coche Island – Catamaran Infinito',
    destination: 'Coche Island',
    duration: 'Full Day',
    type: 'National',
  },
  56: {
    name: 'Full Day Los Roques – Posada Lagunita',
    destination: 'Los Roques',
    duration: 'Full Day',
    type: 'National',
  },
  55: {
    name: 'H2O by LD Hoteles – Resident Plan',
    destination: 'Margarita Island',
    duration: 'Daily',
    type: 'National',
    description: 'A plan designed especially for those who live in Nueva Esparta State and wish to disconnect from the routine with the exclusive service offered by this spectacular boutique hotel, without having to travel to other destinations.',
  },
  54: {
    name: 'ARIA by LD Hoteles – Resident Plan',
    destination: 'Margarita Island',
    duration: 'Daily',
    type: 'National',
    description: 'A plan designed especially for those who live in Nueva Esparta State and wish to disconnect from the routine with the exclusive service offered by this spectacular boutique hotel, without having to travel to other destinations.',
  },
  53: {
    name: 'Tapuy Lodge by LD Canaima – 4 Nights 5 Days',
    destination: 'Canaima',
    duration: '4 nights',
    type: 'National',
    description: `The LD Tapuy Lodge experience includes from Sunday to Thursday:
- Air ticket Maiquetía – Canaima – Maiquetía
- Assistance from your arrival at Canaima airport
- Transfers to the LD Tapuy Lodge camp
- Welcome cocktail
- Full board (breakfast, lunch, dinner and snacks)
- Non-alcoholic drinks during meals
- Local guide and personalized attention
- Excursion to Sapo and Hacha Falls and a tour of the Canaima Lagoon
- Excursion to Angel Falls (overnight at the Tapuy Lodge base camp at Santo Ángel)

Not included:
- Airport tax
- Inparques fee (paid in cash directly in Canaima)
Venezuelans: US$ 40 for adults. US$ 20 for children under 12 and seniors. Foreigners: US$ 40`,
  },
  52: {
    name: 'Tapuy Lodge by LD Canaima – 3 Nights 4 Days',
    destination: 'Canaima',
    duration: '3 nights',
    type: 'National',
    description: `The LD Tapuy Lodge experience includes from Thursday to Sunday:
- Air ticket Maiquetía – Canaima – Maiquetía
- Assistance from your arrival at Canaima airport
- Transfers to the LD Tapuy Lodge camp
- Welcome cocktail
- Full board (breakfast, lunch, dinner and snacks)
- Non-alcoholic drinks during meals
- Local guide and personalized attention
- Excursion to Sapo and Hacha Falls and a tour of the Canaima Lagoon
- Excursion to Angel Falls (overnight at the Tapuy Lodge base camp at Santo Ángel)

Not included:
- Airport tax
- Inparques fee (paid in cash directly in Canaima)
Venezuelans: US$ 40 for adults. US$ 20 for children under 12 and seniors. Foreigners: US$ 40`,
  },
  51: {
    name: 'Full Day UNIK by Sunsol Hoteles',
    destination: 'Margarita Island',
    duration: 'Full Day',
    type: 'National',
    description: `Share and enjoy a day of fun or relaxation with your family and friends, or simply let yourself be carried away by the special atmosphere offered by the Unik by SunSol Hoteles hotel on Margarita Island.

From 10:30 am to 5:00 pm, the hotel's facilities will be at your disposal for your use and enjoyment. Enjoy a refreshing welcome cocktail, the pool on the terrace with its spectacular city views, a selection of national drinks, a buffet lunch and snacks in an exclusive setting.`,
  },
  50: {
    name: 'Full Day Sunsol Ecoland',
    destination: 'Margarita Island',
    duration: 'Full Day',
    type: 'National',
    description: `Share and enjoy a day of fun or relaxation with your family and friends, or simply let yourself be carried away by the special atmosphere offered by the SunSol Ecoland hotel on Margarita Island.

From 10:30 am to 5:00 pm, the hotel's pools or beach will be at your disposal with a selection of national drinks, a buffet lunch and snacks. You can also use the facilities and enjoy pedal boats, bicycles, kayaks and mini golf, among other activities, for a pleasant and rewarding experience you will surely enjoy.`,
  },
  49: {
    name: 'Catamaran Odyssea',
    destination: 'Los Roques',
    duration: 'Daily',
    type: 'National',
    description: `If you are thinking of chartering a boat for the first time, you will be glad you chose the comfortable catamaran of Paradise Los Roques.

Enjoy your private boat on the most beautiful beaches in the world, while the Captain recommends the best islands to visit, the Chef prepares special meals for everyone and the Sailor takes care of all the details on board and on the beach.`,
  },
  48: {
    name: 'Full Day Los Roques – Hotel Boutique Gran Roque',
    destination: 'Los Roques',
    duration: 'Full Day',
    type: 'National',
    description: 'An exclusive package to pamper yourself with superior quality service in the beautiful, paradisiacal Los Roques Archipelago. Enjoy a day of sun and crystal-clear beaches at the nearby keys to connect with the solitude and stillness of these settings and simply make the most of this wonderful natural destination.',
  },
  44: {
    name: 'Margarita Resident Plan – Hesperia Playa El Agua',
    destination: 'Margarita Island',
    duration: '1 night',
    type: 'National',
    description: 'This is a lodging plan designed and intended exclusively for residents of Margarita Island so they can enjoy a complete and fun stay at the Hesperia Playa El Agua hotel with friends or family at a reduced rate during the low season that is simply impossible to find at any other hotel on the island.',
  },
  43: {
    name: 'Cubagua Island 24 Hours (Camp Lodge)',
    destination: 'Cubagua Island',
    duration: '24 hours',
    type: 'National',
    description: 'This tour is meant for those who wish, for just 24 hours, to enjoy the exotic Cubagua Island at the Cubagua Lodge Camp — to share and have fun in the crystal-clear waters of its beach and spend a day full of fun and exciting activities, then let themselves be carried away by the island\'s nighttime calm and be part of a splendid night enlivened by the sounds of the sea and the vibrant moonlight. Without a doubt, a magical, unrepeatable occasion you will not forget.',
  },
  42: {
    name: 'Full Day Cubagua Island (Lodge)',
    destination: 'Cubagua Island',
    duration: 'Full Day',
    type: 'National',
    description: `Cubagua Island is part of Nueva Esparta State, along with Margarita Island and Coche Island. It was visited by Christopher Columbus on his third voyage and served as a pirates' refuge while also being the base for pearl harvesting by the colonizers of the conquest era.

The Full Day takes place on Cubagua Island and at the Cubagua Lodge Camp, a simple but cozy space with everything you need to enjoy a day of beach, sun, good food and lots of fun.`,
  },
  41: {
    name: 'Full Day Los Roques – Posada Mediterráneo',
    destination: 'Los Roques',
    duration: 'Full Day',
    type: 'National',
    description: 'An exclusive package to pamper yourself with superior quality service in the beautiful, paradisiacal Los Roques Archipelago. Enjoy a day of sun and crystal-clear beaches at the nearby keys to connect with the solitude and stillness of these settings and simply make the most of this wonderful natural destination.',
  },
  40: {
    name: 'Full Day Diving in Los Frailes Archipelago',
    destination: 'Los Frailes Island',
    duration: 'Full Day',
    type: 'National',
    description: 'Just 35 minutes from Margarita Island lies the Los Frailes Archipelago, a natural space with a quiet beach of crystal-clear waters and exotic marine species, surrounded by characteristic vegetation that makes it a truly special place for snorkeling and diving and, of course, for resting, relaxing and enjoying a pleasant, unforgettable beach day.',
  },
  39: {
    name: 'Full Day Snorkeling in Los Frailes Archipelago',
    destination: 'Los Frailes Island',
    duration: 'Full Day',
    type: 'National',
    description: 'Just 35 minutes from Margarita Island lies the Los Frailes Archipelago, a natural space with a quiet beach of crystal-clear waters and exotic marine species, surrounded by characteristic vegetation that makes it a truly special place for snorkeling and diving and, of course, for resting, relaxing and enjoying a pleasant, unforgettable beach day.',
  },
  38: {
    name: 'Waka Wena Canaima 5 Days & 4 Nights',
    destination: 'Canaima',
    duration: '4 nights',
    type: 'National',
    description: 'This tour is the chance to discover and enjoy a unique destination such as Canaima National Park in Venezuela. Connect with this land of jungles and savannahs for 5 days and 4 nights with the VIP attention and service you and your loved ones deserve, staying at the Ara Merú Lodge camp, located inside the park itself, where you will have comfortable rooms with superior finishes and details, all meals and use of the facilities. Also, venture out on excursions to the Canaima Lagoon and El Hacha, Sapo and La Golondrina Falls, and bicycle rides through truly imposing landscapes.',
  },
  37: {
    name: 'Waka Wena Canaima 4 Days & 3 Nights',
    destination: 'Canaima',
    duration: '3 nights',
    type: 'National',
    description: 'This tour is the chance to discover and enjoy a unique destination such as Canaima National Park in Venezuela. Connect with this land of jungles and savannahs for 4 days and 3 nights with the VIP attention and service you and your loved ones deserve, staying at the Ara Merú Lodge camp, located inside the park itself, where you will have comfortable rooms with superior finishes and details, all meals and use of the facilities. Also, venture out on excursions to the Canaima Lagoon and El Hacha, Sapo and La Golondrina Falls, and bicycle rides through truly imposing landscapes.',
  },
  35: {
    name: 'Full Day Hotel Paradise Coche',
    destination: 'Coche Island',
    duration: 'Full Day',
    type: 'National',
    description: 'Enjoy a unique, paradisiacal destination such as Coche Island and the facilities of the Coche Paradise Hotel for a day in which you can have fun, share with others or simply relax on one of the best beaches in the Caribbean.',
  },
  34: {
    name: 'Full Day Coche Island (Sunsol Festival)',
    destination: 'Coche Island',
    duration: 'Full Day',
    type: 'National',
    description: `After boarding at the Concorde Pier, the exciting journey begins, lasting approximately 1 hour and 30 minutes, depending on sailing conditions.

Once on board you can enjoy a light snack, and as you enter the open sea the entertainment and open bar begin, led by the SunSol Festival team. If you prefer, you can simply sit back and enjoy the beautiful views or sunbathe on deck with a refreshing cocktail.

Upon disembarking at Playa La Punta on Coche Island, you will enjoy a private area with umbrellas and lounge chairs, lunch and recreational activities.

Around 5:00 pm, the return to Margarita Island begins, and for about 2 hours you can rest or join in the fun by taking part in the activities and games led by the entertainment team.

Upon arrival at the pier, the land transfer of the participants begins and the tour ends.`,
  },
  31: {
    name: 'Full Day Coche – Catamaranes del Caribe',
    destination: 'Coche Island',
    duration: 'Full Day',
    type: 'National',
    description: 'A fun and pleasant day of sailing by catamaran from Margarita Island to Coche Island, with entertainment, drinks and snacks during the roughly 50-minute crossing until you reach the paradisiacal Playa La Punta on Coche Island.',
  },
  20: {
    name: 'Full Day Sunsol Isla Caribe',
    destination: 'Margarita Island',
    duration: 'Full Day',
    type: 'National',
    description: `Enjoy a special day at the SunSol Isla Caribe Hotel. Come from 10:30 am with your family or friends, relax and let yourself be carried away by a pleasant atmosphere with entertainment at any of our pools or on the beach.

Share pleasant moments with national drinks and snacks, plus a buffet lunch at any of our restaurants, and keep enjoying until 6:00 pm.`,
  },
  18: {
    name: 'Full Day Cubagua Island (I Love Cubagua)',
    destination: 'Cubagua Island',
    duration: 'Full Day',
    type: 'National',
    description: `Cubagua Island is part of Nueva Esparta State, along with Margarita Island and Coche Island. It was visited by Christopher Columbus on his third voyage and served as a pirates' refuge while also being the base for pearl harvesting by the colonizers of the conquest era.

The island has a camp built in the middle of an oil field by the sea, which features a natural spa thanks to the accumulation of hydrocarbon products in the subsoil — an excellent opportunity to take a toning mud bath (mud therapy) and enjoy the turquoise waters and white sands that complement the recreational activities that will make this tour fun and unforgettable.`,
  },
  16: {
    name: 'Full Day Sunsol Punta Blanca',
    destination: 'Coche Island',
    duration: 'Full Day',
    type: 'National',
    description: 'SunSol Hotel Punta Blanca offers an alternative to enjoy Coche Island during a day of sun, beach and good food, and the perfect place to rest, have fun or simply have a good time at one of the most paradisiacal spots in the Caribbean.',
  },
  14: {
    name: 'Horseback Ride – Margarita Island',
    destination: 'Margarita Island',
    duration: '2 hours',
    type: 'National',
    description: 'A magical horseback riding experience through beautiful Caribbean landscapes on Margarita Island, to live an unforgettable equestrian adventure that offers the chance to observe different species of protected flora and fauna that inhabit these areas.',
  },
  13: {
    name: 'Horseback Ride – Macanao Peninsula',
    destination: 'Margarita Island',
    duration: '2 hours',
    type: 'National',
    description: 'A horseback route to enjoy the ecological riches and landscapes of the Macanao Peninsula on Margarita Island. No riding experience is required, so do not miss this ecological outing that promotes contact with the local fauna and flora, nature conservation and equestrian culture.',
  },
  8: {
    name: 'Jeep Tours – Margarita Expedition',
    destination: 'Margarita Island',
    duration: 'Full Day',
    type: 'National',
    description: 'A fun and exciting Full Day ride in rugged 4x4 vehicles around emblematic places, spectacular landscapes and refreshing beaches of Margarita Island.',
  },
};

/** Traducción de los "features" (servicios incluidos). */
export const tourFeatureLabelsEN: Record<string, string> = {
  'Boleto Aéreo': 'Air Ticket',
  Hotel: 'Hotel',
  Desayuno: 'Breakfast',
  Almuerzo: 'Lunch',
  Cena: 'Dinner',
  Merienda: 'Snack',
  'Almuerzo Buffet': 'Buffet Lunch',
  'Snacks Ligeros': 'Light Snacks',
  'Traslado Terrestre': 'Land Transfer',
  'Traslado Marítimo': 'Sea Transfer',
  'Traslado Aero/Hotel/Aero': 'Airport/Hotel/Airport Transfer',
  'Open Bar': 'Open Bar',
  'Bebidas Nacionales': 'National Drinks',
  'Bebidas No Alcohólicas': 'Non-Alcoholic Drinks',
  'Baños e instalaciones': 'Restrooms & Facilities',
  Baños: 'Restrooms',
  Asistencia: 'Assistance',
  'Asistencia Personalizada': 'Personalized Assistance',
  'Guía Bilingue': 'Bilingual Guide',
  'Sillas/Toldos en la Playa': 'Beach Chairs & Umbrellas',
  'Acceso a Playa': 'Beach Access',
  'Animación y Recreación': 'Entertainment & Recreation',
  'Juegos No Motorizados': 'Non-Motorized Water Sports',
  Piscinas: 'Pools',
  Salvavidas: 'Lifeguard',
  Estacionamiento: 'Parking',
  'Entrada Parque': 'Park Entrance',
  'Entrada al Parque': 'Park Entrance',
  'Acceso Discapacitados': 'Wheelchair Access',
  'Acceso Privado a Club de Playa': 'Private Beach Club Access',
  'Accesso Privado a Club de Playa': 'Private Beach Club Access',
  'Early Check In (11:00 am)': 'Early Check-In (11:00 am)',
  'Late Check Out (04:00 pm)': 'Late Check-Out (04:00 pm)',
  'Desayuno a la Carta Frente al Mar': 'À la carte Breakfast by the Sea',
  Snorkeling: 'Snorkeling',
  'Paseo a Cayos Cercanos': 'Trip to Nearby Keys',
  'Paseos en Bicicletas': 'Bicycle Rides',
  'Lunch Box (Cava)': 'Lunch Box (Cooler)',
  'Seguridad Privada': 'Private Security',
  'Vehículos 4x4': '4x4 Vehicles',
  'Excursiones Terrestres': 'Land Excursions',
  'Uso de Instalaciones': 'Use of Facilities',
};
