export type BlogCategory = 'beaches' | 'activities' | 'gastronomy' | 'culture' | 'tips';

export interface BlogPostTranslation {
  title: string;
  excerpt: string;
  content: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  author: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  category: BlogCategory;
  image: string;
  images?: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  translations: {
    es: BlogPostTranslation;
    en: BlogPostTranslation;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'mejores-playas-isla-margarita',
    category: 'beaches',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    publishedAt: '2024-01-15',
    readingTime: 6,
    translations: {
      es: {
        title: 'Las 10 Mejores Playas de Isla Margarita',
        excerpt: 'Descubre las playas paradisíacas que hacen de Margarita el destino favorito del Caribe venezolano. Desde aguas cristalinas hasta arenas doradas.',
        metaTitle: 'Las 10 Mejores Playas de Isla Margarita | Guía 2024',
        metaDescription: 'Descubre las playas más hermosas de Isla Margarita: Playa El Agua, Parguito, Guacuco y más. Guía completa con fotos, consejos y cómo llegar.',
        metaKeywords: 'playas Isla Margarita, mejores playas Margarita, Playa El Agua, Parguito, playas Venezuela, turismo Margarita',
        author: 'María González',
        content: [
          `Isla Margarita, conocida como la Perla del Caribe, alberga algunas de las playas más espectaculares de Venezuela. Con más de 50 kilómetros de costa, esta isla ofrece opciones para todos los gustos, desde playas tranquilas y familiares hasta lugares perfectos para el surf y la diversión.`,
          `## 1. Playa El Agua - La playa más popular`,
          `Considerada la playa más famosa de la isla, Playa El Agua se extiende por casi 4 kilómetros de fina arena dorada. Sus aguas turquesas y moderadas olas la convierten en el lugar ideal para familias y jóvenes por igual. A lo largo de la playa encontrarás numerosos restaurantes que ofrecen el famoso "arepón margariteño" y cocteles refrescantes.`,
          `El paseo marítimo es perfecto para caminar al atardecer, y los vendedores locales ofrecen artesanías y souvenirs típicos de la isla. Si buscas diversión, los fines de semana esta playa se llena de música y ambiente festivo.`,
          `## 2. Playa Parguito - Para los amantes del surf`,
          `Ubicada justo al lado de El Agua, Playa Parguito es el paraíso de los surfistas. Sus olas constantes y su ambiente relajado atraen a jóvenes y deportistas de todo el mundo. Aunque es menos concurrida que su vecina, ofrece una experiencia más auténtica y menos comercial.`,
          `El agua aquí es más profunda, por lo que es recomendable nadar con precaución. Sin embargo, es el lugar perfecto para tomar el sol y disfrutar de la brisa marina.`,
          `## 3. Playa Guacuco - Tranquilidad total`,
          `Si buscas escapar de las multitudes, Playa Guacuco es tu mejor opción. Esta extensa playa ubicada en la costa norte de la isla ofrece kilómetros de arena prácticamente virgen. Es ideal para largas caminatas, meditación o simplemente desconectar del mundo.`,
          `## 4. Playa Manzanillo - Naturaleza virgen`,
          `En el extremo oriental de la isla se encuentra Playa Manzanillo, una joya escondida rodeada de vegetación. Sus aguas cristalinas son perfectas para hacer snorkel y observar la vida marina local. Es menos conocida por los turistas, lo que la mantiene en un estado casi virgen.`,
          `## 5. La Caracola - Lujo y exclusividad`,
          `Para quienes buscan un ambiente más exclusivo, La Caracola ofrece playas privadas con servicio de primera clase. Los resorts de lujo dominan esta zona, pero también hay acceso público a algunas áreas. Es perfecta para lunas de miel y escapadas románticas.`,
          `## 6. Playa El Yaque - El kitesurf y windsurf`,
          `Considerada una de las mejores playas del mundo para la práctica de kitesurf y windsurf, El Yaque atrae a deportistas profesionales y aficionados durante todo el año. Sus vientos constantes y aguas poco profundas crean condiciones perfectas.`,
          `## 7. Playa Zaragoza - Familiar y segura`,
          `Cerca del aeropuerto, Playa Zaragoza es ideal para familias con niños pequeños. Sus aguas tranquilas y poco profundas permiten que los más pequeños disfruten con seguridad. Además, cuenta con numerosos quioscos y servicios.`,
          `## 8. Playa Pampatar - Historia y playa`,
          `Combina la diversión de la playa con la historia. Cerca del Castillo de Santa Rosa, esta playa urbana ofrece una vista impresionante de la fortaleza colonial mientras disfrutas del sol.`,
          `## 9. Playa Juventud - Ambiente joven`,
          `Frecuentada principalmente por jóvenes locales, esta playa ofrece un ambiente auténtico y relajado. Es perfecta para quienes quieren experimentar la cultura local y hacer amistades.`,
          `## 10. Playa Zaragoza de Juangriego`,
          `No confundir con la otra Zaragoza, esta playa en Juangriego es famosa por sus puestas de sol espectaculares. Es el lugar perfecto para terminar el día con una cerveza local y admirar los colores del atardecer caribeño.`,
          `## Consejos para tu visita`,
          `• Lleva protector solar biodegradable para cuidar los arrecifes`,
          `• La mejor época para visitar es de diciembre a abril`,
          `• Alquila un vehículo para explorar playas menos accesibles`,
          `• Respeta las señales de banderas en las playas`,
          `• Prueba el pescado fresco en los quioscos locales`,
          `Isla Margarita tiene una playa perfecta esperándote. Ya sea que busques aventura, relajación o diversión familiar, encontrarás tu paraíso personal en esta hermosa isla caribeña.`,
        ],
      },
      en: {
        title: 'The 10 Best Beaches of Margarita Island',
        excerpt: 'Discover the paradise beaches that make Margarita the favorite destination of the Venezuelan Caribbean. From crystal clear waters to golden sands.',
        metaTitle: 'The 10 Best Beaches of Margarita Island | Guide 2024',
        metaDescription: 'Discover the most beautiful beaches of Margarita Island: El Agua, Parguito, Guacuco and more. Complete guide with photos, tips and how to get there.',
        metaKeywords: 'Margarita Island beaches, best beaches Margarita, El Agua beach, Parguito, Venezuela beaches, Margarita tourism',
        author: 'Maria Gonzalez',
        content: [
          `Margarita Island, known as the Pearl of the Caribbean, is home to some of the most spectacular beaches in Venezuela. With more than 50 kilometers of coastline, this island offers options for all tastes, from quiet family beaches to perfect spots for surfing and fun.`,
          `## 1. Playa El Agua - The most popular beach`,
          `Considered the island's most famous beach, Playa El Agua stretches for almost 4 kilometers of fine golden sand. Its turquoise waters and moderate waves make it the ideal place for families and young people alike. Along the beach you'll find numerous restaurants offering the famous "Margarita arepón" and refreshing cocktails.`,
          `The boardwalk is perfect for sunset walks, and local vendors offer typical island crafts and souvenirs. If you're looking for fun, weekends see this beach fill with music and festive atmosphere.`,
          `## 2. Playa Parguito - For surf lovers`,
          `Located right next to El Agua, Playa Parguito is a surfer's paradise. Its constant waves and relaxed atmosphere attract young people and athletes from around the world. Though less crowded than its neighbor, it offers a more authentic and less commercial experience.`,
          `The water here is deeper, so swimming with caution is recommended. However, it's the perfect place to sunbathe and enjoy the sea breeze.`,
          `## 3. Playa Guacuco - Total tranquility`,
          `If you're looking to escape the crowds, Playa Guacuco is your best option. This extensive beach on the north coast of the island offers kilometers of virtually virgin sand. It's ideal for long walks, meditation, or simply disconnecting from the world.`,
          `## 4. Playa Manzanillo - Virgin nature`,
          `At the eastern tip of the island lies Playa Manzanillo, a hidden jewel surrounded by vegetation. Its crystal clear waters are perfect for snorkeling and observing local marine life. It's less known to tourists, which keeps it in an almost virgin state.`,
          `## 5. La Caracola - Luxury and exclusivity`,
          `For those seeking a more exclusive atmosphere, La Caracola offers private beaches with first-class service. Luxury resorts dominate this area, but there's also public access to some areas. It's perfect for honeymoons and romantic getaways.`,
          `## 6. Playa El Yaque - Kitesurfing and windsurfing`,
          `Considered one of the best beaches in the world for kitesurfing and windsurfing, El Yaque attracts professional athletes and enthusiasts year-round. Its constant winds and shallow waters create perfect conditions.`,
          `## 7. Playa Zaragoza - Family and safe`,
          `Near the airport, Playa Zaragoza is ideal for families with young children. Its calm, shallow waters allow the little ones to enjoy safely. Plus, it has numerous kiosks and services.`,
          `## 8. Playa Pampatar - History and beach`,
          `Combines beach fun with history. Near Castillo de Santa Rosa, this urban beach offers stunning views of the colonial fortress while you enjoy the sun.`,
          `## 9. Playa Juventud - Young atmosphere`,
          `Mainly frequented by local young people, this beach offers an authentic and relaxed atmosphere. It's perfect for those who want to experience local culture and make friends.`,
          `## 10. Playa Zaragoza de Juangriego`,
          `Not to be confused with the other Zaragoza, this beach in Juangriego is famous for its spectacular sunsets. It's the perfect place to end the day with a local beer and admire the colors of the Caribbean sunset.`,
          `## Tips for your visit`,
          `• Bring biodegradable sunscreen to protect the reefs`,
          `• The best time to visit is December to April`,
          `• Rent a vehicle to explore less accessible beaches`,
          `• Respect flag signs on the beaches`,
          `• Try fresh fish at local kiosks`,
          `Margarita Island has a perfect beach waiting for you. Whether you seek adventure, relaxation, or family fun, you'll find your personal paradise on this beautiful Caribbean island.`,
        ],
      },
    },
  },
  {
    id: '2',
    slug: 'gastronomia-margarita-imprescindible',
    category: 'gastronomy',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/699544/pexels-photo-699544.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    publishedAt: '2024-02-01',
    readingTime: 5,
    translations: {
      es: {
        title: 'Gastronomía de Isla Margarita: Sabores Imprescindibles',
        excerpt: 'Un recorrido culinario por los platos típicos, frutas tropicales y delicias locales que no puedes dejar de probar en tu visita a la isla.',
        metaTitle: 'Gastronomía Isla Margarita | Platos Típicos y Restaurantes 2024',
        metaDescription: 'Descubre la gastronomía de Isla Margarita: arepas, cazón, pescado fresco, frutas tropicales y los mejores restaurantes locales. Guía culinaria completa.',
        metaKeywords: 'gastronomía Isla Margarita, comida margariteña, platos típicos Margarita, restaurantes Margarita, arepas, cazón',
        author: 'Carlos Rodríguez',
        content: [
          `La gastronomía de Isla Margarita es un delicioso reflejo de su historia y geografía. Influenciada por la cocina caribeña, indígena y europea, la isla ofrece una variedad de sabores únicos que deleitan a los visitantes. Desde pescado fresco capturado el mismo día hasta frutas tropicales exóticas, cada comida es una experiencia sensorial.`,
          `## El Cazón: El rey de la gastronomía margariteña`,
          `El cazón es, sin duda, el plato más emblemático de la isla. Este pequeño tiburón se prepara de múltiples formas, siendo las más populares el cazón empanizado, en coco y al ajillo. Su carne blanca y suave tiene un sabor delicado que se combina perfectamente con tostones y ensalada.`,
          `Los locales suelen marinar el cazón en leche con ajo y limón antes de cocinarlo, lo que le da un toque especial. Puedes encontrarlo en casi todos los restaurantes de la isla, desde puestos callejeros hasta restaurantes de lujo.`,
          `## Las Arepas Margariteñas`,
          `Aunque las arepas son un alimento nacional en Venezuela, las de Margarita tienen características especiales. La "arepa margariteña" es más grande y delgada que las tradicionales, y se caracteriza por su elaboración en horno de barro, lo que le da un sabor ahumado inconfundible.`,
          `Las más famosas son las rellenas de cazón, pero también puedes encontrarlas con queso de mano fresco, pabellón, o simplemente con mantequilla y queso rallado.`,
          `## Pescado Fresco del Día`,
          `Gracias a su ubicación privilegiada en el Caribe, Margarita ofrece pescado de la más alta calidad. El mero, la corocoro, el pulpo y la langosta son capturados diariamente por pescadores locales. Muchos restaurantes te permiten elegir tu pescado directamente de la nevera de exhibición.`,
          `Las preparaciones más comunes son: Frito (crocante por fuera, jugoso por dentro), Al ajillo (con abundante ajo y mantequilla), En salsa de coco (una delicia caribeña), y A la plancha (para saborear el verdadero sabor del mar).`,
          `## Frutas Tropicales Exóticas`,
          `Los mercados locales son un paraíso de colores y sabores. Debes probar: Merey (anacardo) que se come fresco o asado, Cactus (tuna) dulce y refrescante, Mango que en temporada son los mejores del país, Patilla (sandía) perfecta para el calor, Guanábana ideal para jugos naturales, y Parchita (maracuyá) refrescante y aromática.`,
          `## Postres Típicos`,
          `No puedes irte sin probar: Quesillo (flan de caramelo suave y delicioso), Bienmesabe (postre de coco tradicional), Dulce de lechosa (dulce de papaya verde), y Majarete (similar al arroz con leche pero de maíz).`,
          `## Bebidas Refrescantes`,
          `Para acompañar tu comida: Chicha (bebida de arroz con canela y leche condensada), Malta (bebida de malta no alcohólica muy popular), Ron (Venezuela produce rones de clase mundial), Cerveza artesanal (cada vez hay más opciones locales), y Jugos naturales (de naranja, patilla, parchita, tamarindo).`,
          `## Consejos para comer en Margarita`,
          `• Pregunta por el "menú del día" para precios más económicos`,
          `• Los restaurantes de playa suelen tener los pescados más frescos`,
          `• Prueba los puestos callejeros para experiencias auténticas`,
          `• La propina suele ser del 10%, ya incluida en la cuenta`,
          `• Reserva con anticipación en restaurantes populares`,
          `La gastronomía de Margarita es una celebración de sabores del mar y la tierra. Cada plato cuenta una historia de tradición, familia y el amor por los ingredientes locales. ¡Buen provecho!`,
        ],
      },
      en: {
        title: 'Margarita Island Gastronomy: Must-Try Flavors',
        excerpt: 'A culinary journey through typical dishes, tropical fruits, and local delights you cannot miss on your visit to the island.',
        metaTitle: 'Margarita Island Gastronomy | Typical Dishes & Restaurants 2024',
        metaDescription: 'Discover Margarita Island gastronomy: arepas, cazón, fresh fish, tropical fruits and the best local restaurants. Complete culinary guide.',
        metaKeywords: 'Margarita Island gastronomy, margariteña food, typical dishes Margarita, Margarita restaurants, arepas, cazón',
        author: 'Carlos Rodriguez',
        content: [
          `Margarita Island's gastronomy is a delicious reflection of its history and geography. Influenced by Caribbean, indigenous, and European cuisine, the island offers a variety of unique flavors that delight visitors. From fresh fish caught the same day to exotic tropical fruits, every meal is a sensory experience.`,
          `## Cazón: The king of margariteña gastronomy`,
          `Cazón is undoubtedly the island's most emblematic dish. This small shark is prepared in multiple ways, with the most popular being breaded cazón, in coconut, and garlic-style. Its white, soft meat has a delicate flavor that combines perfectly with tostones and salad.`,
          `Locals usually marinate cazón in milk with garlic and lemon before cooking, giving it a special touch. You can find it in almost all island restaurants, from street stalls to luxury establishments.`,
          `## Margarita Arepas`,
          `Although arepas are a national food in Venezuela, those from Margarita have special characteristics. The "margarita arepa" is larger and thinner than traditional ones, and is characterized by its preparation in clay ovens, which gives it an unmistakable smoky flavor.`,
          `The most famous are filled with cazón, but you can also find them with fresh hand cheese, pabellón, or simply with butter and grated cheese.`,
          `## Fresh Catch of the Day`,
          `Thanks to its privileged location in the Caribbean, Margarita offers the highest quality fish. Grouper, corocoro, octopus, and lobster are caught daily by local fishermen. Many restaurants allow you to choose your fish directly from the display cooler.`,
          `The most common preparations are: Fried (crispy outside, juicy inside), Garlic-style (with plenty of garlic and butter), In coconut sauce (a Caribbean delight), and Grilled (to taste the true flavor of the sea).`,
          `## Exotic Tropical Fruits`,
          `Local markets are a paradise of colors and flavors. You must try: Merey (cashew) eaten fresh or roasted, Cactus (prickly pear) sweet and refreshing, Mango which in season are the best in the country, Patilla (watermelon) perfect for the heat, Guanábana ideal for natural juices, and Parchita (passion fruit) refreshing and aromatic.`,
          `## Typical Desserts`,
          `You can't leave without trying: Quesillo (soft and delicious caramel flan), Bienmesabe (traditional coconut dessert), Dulce de lechosa (green papaya sweet), and Majarete (similar to rice pudding but with corn).`,
          `## Refreshing Drinks`,
          `To accompany your meal: Chicha (rice drink with cinnamon and condensed milk), Malta (non-alcoholic malt beverage, very popular), Rum (Venezuela produces world-class rums), Craft beer (more and more local options), and Natural juices (orange, watermelon, passion fruit, tamarind).`,
          `## Tips for Eating in Margarita`,
          `• Ask for the "menu of the day" for more economical prices`,
          `• Beach restaurants usually have the freshest fish`,
          `• Try street stalls for authentic experiences`,
          `• Tip is usually 10%, already included in the bill`,
          `• Book in advance at popular restaurants`,
          `Margarita's gastronomy is a celebration of sea and land flavors. Every dish tells a story of tradition, family, and love for local ingredients. Enjoy your meal!`,
        ],
      },
    },
  },
  {
    id: '3',
    slug: 'que-hacer-margarita-7-dias',
    category: 'activities',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    publishedAt: '2024-02-20',
    readingTime: 8,
    translations: {
      es: {
        title: 'Qué Hacer en Isla Margarita: Itinerario de 7 Días Perfecto',
        excerpt: 'Una guía completa para aprovechar al máximo una semana en la Perla del Caribe. Playas, excursiones, compras y experiencias únicas.',
        metaTitle: 'Qué Hacer en Isla Margarita | Itinerario 7 Días Completo 2024',
        metaDescription: 'Itinerario completo de 7 días en Isla Margarita. Playas, excursiones, compras duty-free, restaurantes y actividades imperdibles. Guía detallada día por día.',
        metaKeywords: 'qué hacer Isla Margarita, itinerario Margarita, excursiones Margarita, actividades Margarita, turismo Margarita, guía 7 días',
        author: 'Laura Martínez',
        content: [
          `Isla Margarita es un destino que ofrece mucho más que hermosas playas. Con una rica historia, vibrante vida nocturna, compras libres de impuestos y una naturaleza exuberante, una semana te permitirá experimentar lo mejor de la Perla del Caribe. Aquí te presento un itinerario perfecto para 7 días.`,
          `## Día 1: Llegada y Playa El Agua`,
          `Al llegar al Aeropuerto Internacional del Caribe Santiago Mariño, toma un taxi o transporte privado a tu hotel. Te recomiendo hospedarte en la zona de Playa El Agua para estar cerca de todo. Empieza tu aventura en la playa más famosa de la isla. Disfruta del sol, nada en sus aguas turquesas y prueba el famoso "arepón margariteño" en alguno de los quioscos. No te pierdas el atardecer desde el paseo marítimo.`,
          `## Día 2: Macanao y Playa Punta Arenas`,
          `Alquila un vehículo 4x4 y cruza el Puente Sobre el Lago para llegar a la Península de Macanao. Este lado de la isla es más salvaje y menos desarrollado, ofreciendo paisajes desérticos impresionantes. Visita Playa Punta Arenas, una de las playas más hermosas y tranquilas de la isla. Sus aguas cristalinas y poca profundidad la hacen ideal para nadar y hacer snorkel.`,
          `## Día 3: El Yaque y Deportes Acuáticos`,
          `Dedica este día a Playa El Yaque, el paraíso del kitesurf y windsurf mundialmente famoso. Incluso si no practicas estos deportes, es fascinante ver a los profesionales. Actividades disponibles: clases de kitesurf para todos los niveles, alquiler de equipos de snorkel, paseos en kayak, masajes en la playa, o simplemente relajarte y tomar el sol. Si te gustan los deportes acuáticos, toma un ferry a Isla de Coche (30 minutos), que también tiene excelentes condiciones.`,
          `## Día 4: Historia y Cultura`,
          `Visita La Asunción, la capital del estado Nueva Esparta. No te pierdas la Catedral de La Asunción, una de las más antiguas de Venezuela, la Casa de la Cultura con exposiciones de arte local, y el Mercado Municipal para comprar artesanías. Luego dirígete a Pampatar para visitar el Castillo de Santa Rosa, fortaleza colonial del siglo XVII con vistas panorámicas, el centro histórico con calles empedradas, y la Iglesia Santísimo Cristo. Termina el día en Juangriego para ver una de las puestas de sol más espectaculares de Venezuela desde el Cerro El Morro.`,
          `## Día 5: Compras y Relax`,
          `Margarita es zona libre de impuestos, lo que hace que las compras sean muy atractivas. Centros comerciales recomendados: Sambil Margarita (el más grande y moderno), Centro Comercial Costa Azul (bien ubicado), y La Vela (opciones más económicas). Qué comprar: perfumes y cosméticos (hasta 40% de descuento), electrónica, licores, y ropa de marca. Después de comprar, relájate en un spa de tu hotel o visita Playa Guacuco para un ambiente más tranquilo.`,
          `## Día 6: Naturaleza y Aventura`,
          `Opción A: Parque Nacional Laguna de la Restinga. Un tour en lancha por los manglares es una experiencia única. Verás gran variedad de aves, cangrejos en los manglares, y paisajes de película. El tour incluye parada en un pueblo de pescadores donde puedes comer langosta fresca.`,
          `Opción B: Excursión a Coche o Cubagua. Isla de Coche tiene playas de arena blanca perfectas para deportes acuáticos. Cubagua fue la primera capital de Venezuela, ahora despoblada, con ruinas históricas y snorkeling excelente.`,
          `Opción C: Parque El Agua. Si prefieres aventura terrestre, este parque ofrece canopy, caminatas, piscinas naturales y cascadas.`,
          `## Día 7: Playas del Este y Despedida`,
          `Explora las playas menos conocidas del extremo oriental: Playa Manzanillo para snorkeling, Playa Puerto Cruz muy tranquila, y Playa El Tirano favorita de locales. Última oportunidad para comprar souvenirs: artesanías, dulces típicos como bienmesabe y quesillo, merey tostado, y ron venezolano. Termina tu viaje con una cena especial en uno de los mejores restaurantes de la isla. Prueba la langosta o el langostino al ajillo como broche de oro.`,
          `## Consejos adicionales`,
          `Alquilar un vehículo te da más libertad. Los taxis son abundantes pero regatea el precio. Hay buses públicos económicos pero poco frecuentes. Trae efectivo en dólares (cambian fácilmente). Algunos lugares aceptan tarjetas. Los cajeros automáticos pueden tener límites.`,
          `Temporada alta: diciembre-abril (clima perfecto, más gente). Temporada baja: mayo-noviembre (precios más bajos, más tranquilidad). La isla es generalmente segura pero usa el sentido común. No dejes objetos de valor en la playa. Mantén hidratación constante.`,
          `Este itinerario te permitirá descubrir lo mejor de Isla Margarita: sus playas paradisíacas, rica historia, deliciosa gastronomía y la calidez de su gente. ¡Que disfrutes tu aventura en la Perla del Caribe!`,
        ],
      },
      en: {
        title: 'What to Do in Margarita Island: Perfect 7-Day Itinerary',
        excerpt: 'A complete guide to make the most of a week in the Pearl of the Caribbean. Beaches, excursions, shopping and unique experiences.',
        metaTitle: 'What to Do in Margarita Island | Complete 7-Day Itinerary 2024',
        metaDescription: 'Complete 7-day itinerary for Margarita Island. Beaches, excursions, duty-free shopping, restaurants and unmissable activities. Detailed day-by-day guide.',
        metaKeywords: 'what to do Margarita Island, Margarita itinerary, Margarita excursions, Margarita activities, Margarita tourism, 7-day guide',
        author: 'Laura Martinez',
        content: [
          `Margarita Island is a destination that offers much more than beautiful beaches. With rich history, vibrant nightlife, duty-free shopping, and lush nature, a week will allow you to experience the best of the Pearl of the Caribbean. Here's a perfect 7-day itinerary.`,
          `## Day 1: Arrival and Playa El Agua`,
          `Upon arrival at Santiago Mariño Caribbean International Airport, take a taxi or private transport to your hotel. I recommend staying in the Playa El Agua area to be close to everything. Start your adventure at the island's most famous beach. Enjoy the sun, swim in its turquoise waters, and try the famous "Margarita arepón" at one of the kiosks. Don't miss the sunset from the boardwalk.`,
          `## Day 2: Macanao and Punta Arenas Beach`,
          `Rent a 4x4 vehicle and cross the Bridge Over the Lake to reach the Macanao Peninsula. This side of the island is wilder and less developed, offering stunning desert landscapes. Visit Playa Punta Arenas, one of the most beautiful and tranquil beaches on the island. Its crystal clear, shallow waters make it ideal for swimming and snorkeling.`,
          `## Day 3: El Yaque and Water Sports`,
          `Dedicate this day to Playa El Yaque, the world-famous kitesurfing and windsurfing paradise. Even if you don't practice these sports, it's fascinating to watch the professionals. Available activities: kitesurfing lessons for all levels, snorkel equipment rental, kayak rides, beach massages, or simply relaxing and sunbathing. If you like water sports, take a ferry to Isla de Coche (30 minutes), which also has excellent conditions.`,
          `## Day 4: History and Culture`,
          `Visit La Asunción, the capital of Nueva Esparta state. Don't miss the Cathedral of La Asunción, one of the oldest in Venezuela, the Casa de la Cultura with local art exhibitions, and the Municipal Market to buy crafts. Then head to Pampatar to visit Castillo de Santa Rosa, 17th century colonial fortress with panoramic views, the historic center with cobblestone streets, and the Santísimo Cristo Church. End the day in Juangriego to see one of the most spectacular sunsets in Venezuela from Cerro El Morro.`,
          `## Day 5: Shopping and Relaxation`,
          `Margarita is a duty-free zone, which makes shopping very attractive. Recommended shopping centers: Sambil Margarita (the largest and most modern), Centro Comercial Costa Azul (well located), and La Vela (more economical options). What to buy: perfumes and cosmetics (up to 40% discount), electronics, liquor, and brand name clothing. After shopping, relax at your hotel's spa or visit Playa Guacuco for a more tranquil atmosphere.`,
          `## Day 6: Nature and Adventure`,
          `Option A: Laguna de la Restinga National Park. A boat tour through the mangroves is a unique experience. You'll see great variety of birds, crabs in the mangroves, and movie-like landscapes. The tour includes a stop at a fishing village where you can eat fresh lobster.`,
          `Option B: Excursion to Coche or Cubagua. Isla de Coche has white sand beaches perfect for water sports. Cubagua was the first capital of Venezuela, now uninhabited, with historic ruins and excellent snorkeling.`,
          `Option C: Parque El Agua. If you prefer land adventure, this park offers zip lines, hiking, natural pools and waterfalls.`,
          `## Day 7: Eastern Beaches and Farewell`,
          `Explore the lesser-known beaches of the eastern tip: Playa Manzanillo for snorkeling, Playa Puerto Cruz very quiet, and Playa El Tirano favorite of locals. Last chance to buy souvenirs: crafts, typical sweets like bienmesabe and quesillo, roasted merey, and Venezuelan rum. End your trip with a special dinner at one of the island's best restaurants. Try lobster or garlic shrimp as the grand finale.`,
          `## Additional tips`,
          `Renting a vehicle gives you more freedom. Taxis are abundant but negotiate the price. There are economical public buses but infrequent. Bring cash in dollars (easily exchanged). Some places accept cards. ATMs may have limits.`,
          `High season: December-April (perfect weather, more people). Low season: May-November (lower prices, more tranquility). The island is generally safe but use common sense. Don't leave valuables on the beach. Maintain constant hydration.`,
          `This itinerary will allow you to discover the best of Margarita Island: its paradise beaches, rich history, delicious gastronomy, and the warmth of its people. Enjoy your adventure in the Pearl of the Caribbean!`,
        ],
      },
    },
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getLatestBlogPosts(limit?: number): BlogPost[] {
  const sorted = [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}