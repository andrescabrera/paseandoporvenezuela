/**
 * ARCHIVO GENERADO por scripts/build-restaurants.mjs — NO EDITAR A MANO.
 * Datos de Google Places (geocodificados una vez) + reseñas del dataset
 * (Tripadvisor / Google Maps / Facebook) con traducción manual es/en.
 * Total: 34 restaurantes, 262 reseñas.
 */

export interface LocalizedText {
  es: string;
  en: string;
}

export interface RestaurantReview {
  author: string;
  rating: number | null;
  date: string;
  provider: string;
  url: string;
  text: LocalizedText;
}

export interface Restaurant {
  id: string;
  name: string;
  category: LocalizedText;
  address: string;
  lat: number;
  lng: number;
  rating: number;
  ratingCount: number;
  priceLevel?: number;
  googleMapsUri: string;
  website?: string;
  phone?: string;
  reviews: RestaurantReview[];
}

export const restaurants: Restaurant[] = [
  {
    "id": "ChIJicS6-pePMYwRsWx4UfBj9DE",
    "name": "Macaco House - LicoBar",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "CALLE JOSE MARIA VARGAS, Pampatar 6301, Nueva Esparta, Venezuela",
    "lat": 10.999132,
    "lng": -63.796316,
    "rating": 5,
    "ratingCount": 4,
    "googleMapsUri": "https://maps.google.com/?cid=3599611885986016433&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.macacohouse.com/",
    "phone": "0424-8094518",
    "reviews": [
      {
        "author": "Vanessa Salazar",
        "rating": 5,
        "date": "2026-04-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pGWmFHMWliVmhGTFdORFVqaDFSa1oyZVVkcWFGRRAB!2m1!1s0x0:0x31f463f051786cb1!3m1!1s2@1:CAIQACodChtycF9oOjFZaG1ibVhFLWNDUjh1RkZ2eUdqaFE%7C%7C?hl=en",
        "text": {
          "en": "I ate the trifasica!! It was delicious, 120g of protein, great flavor, exquisite 👌🏻 Highly recommended!!! Excellent place",
          "es": "¡Comí la trifásica! Estaba deliciosa, 120 g de proteína, gran sabor, exquisita 👌🏻 ¡Muy recomendada! Excelente lugar."
        }
      },
      {
        "author": "Freddy Chourio",
        "rating": 5,
        "date": "2026-04-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT214WU1WSTJZaTFKYlc5RGVXZ3hSMG8yWVdSdmMzYxAB!2m1!1s0x0:0x31f463f051786cb1!3m1!1s2@1:CAIQACodChtycF9oOmxYMVI2Yi1JbW9DeWgxR0o2YWRvc3c%7C%7C?hl=en",
        "text": {
          "en": "Excellent view, 100% recommended.\nPleasant atmosphere, nice breeze.\nGood food, they offer drinks, and a great place to spend time with family.\n\nMrs. Marle's personalized service ensures your meal is exactly as you'd like it.",
          "es": "Excelente vista, 100 % recomendado.\nAmbiente agradable, buena brisa.\nBuena comida, ofrecen bebidas y es un gran lugar para compartir en familia.\n\nEl servicio personalizado de la señora Marle hace que tu comida quede exactamente como la quieres."
        }
      },
      {
        "author": "Daniela Melendez",
        "rating": 5,
        "date": "2026-04-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xSNWVuTmpObVZTZDFCRWNXSlJOMDFYTUc1T05HYxAB!2m1!1s0x0:0x31f463f051786cb1!3m1!1s2@1:CAIQACodChtycF9oOlR5enNjNmVSd1BEcWJRN01XMG5ONGc%7C%7C?hl=en",
        "text": {
          "en": "The food is simply spectacular 😍✨\nEverything is so good: the burgers, the empanadas, the tequeños… and don't even get me started on the Cabimera arepa, a true delight! 🤤\n\nI wholeheartedly recommend it. I invite you to come and enjoy this beautiful and wonderful place 💛",
          "es": "La comida es simplemente espectacular 😍✨\nTodo está buenísimo: las hamburguesas, las empanadas, los tequeños... ¡y ni hablar de la arepa cabimera, un verdadero deleite! 🤤\n\nLo recomiendo de todo corazón. Te invito a venir y disfrutar de este hermoso y maravilloso lugar 💛"
        }
      }
    ]
  },
  {
    "id": "ChIJL_8ytdSPMYwRtFh_B5i1kkM",
    "name": "El rancho de ramón",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "S/n Paseo de, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.956267,
    "lng": -63.840762,
    "rating": 5,
    "ratingCount": 3,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=4869153811706370228&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.tiktok.com/@ramn.guevara47?_r=1&_t=ZS-94JJ5tR3AlJ",
    "phone": "0412-0352477",
    "reviews": [
      {
        "author": "Sharif hage",
        "rating": 5,
        "date": "2026-05-31",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xGWk5YSk1UV0pFYlZJemRqTlBVVk0yTm1SUlFYYxAB!2m1!1s0x0:0x4392b598077f58b4!3m1!1s2@1:CAIQACodChtycF9oOlFZNXJMTWJEbVIzdjNPUVM2NmRRQXc%7C%7C?hl=en",
        "text": {
          "en": "Good food, good service",
          "es": "Buena comida, buen servicio"
        }
      }
    ]
  },
  {
    "id": "ChIJNbtMcwCPMYwR6FPpXEf37Zs",
    "name": "Ennys Burger",
    "category": {
      "es": "Hamburguesas",
      "en": "Hamburger Restaurant"
    },
    "address": "X6X5+9X4, La Caranta 1, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.998393,
    "lng": -63.790032,
    "rating": 5,
    "ratingCount": 3,
    "googleMapsUri": "https://maps.google.com/?cid=11235908531232789480&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/ennysburger?igsh=Yzh0anQzaWIxZm81",
    "phone": "0412-3573899",
    "reviews": [
      {
        "author": "Victor Hugo León",
        "rating": 5,
        "date": "2024-12-16",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUN2ejkzX3NBRRAB!2m1!1s0x0:0x9bedf7475ce953e8!3m1!1s2@1:CIHM0ogKEICAgICvz93_sAE%7C%7C?hl=en",
        "text": {
          "en": "They have a delicious garlic and pecorino cheese sauce.",
          "es": "Tienen una salsa de ajo y queso pecorino deliciosa."
        }
      }
    ]
  },
  {
    "id": "ChIJZRlVm3mPMYwRsp5XM-Qhdpw",
    "name": "La Guarida Ristorante",
    "category": {
      "es": "Restaurante italiano",
      "en": "Italian Restaurant"
    },
    "address": "Isla de Margarita, Av. Santiago Mariño, entre calles Cedeño, y Marcano, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.959335,
    "lng": -63.843249,
    "rating": 5,
    "ratingCount": 1,
    "googleMapsUri": "https://maps.google.com/?cid=11274235981166255794&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/laguaridaristorante/",
    "phone": "0424-8095305",
    "reviews": [
      {
        "author": "sophia valdiviesp",
        "rating": 5,
        "date": "2026-05-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xGc1JrczBWVk5hU0VZeWFHTmllSGhmVkcxSk9HYxAB!2m1!1s0x0:0x9c7621e433579eb2!3m1!1s2@1:CAIQACodChtycF9oOlFsRks0VVNaSEYyaGNieHhfVG1JOGc%7C%7C?hl=en",
        "text": {
          "en": "A wonderful place; I went three times in one week. The food is exquisite and the service was top-notch. A very peaceful and intimate setting, perfect for both families and business meetings. Excellent prices considering the portion sizes and the quality of the dishes; I can't wait to go back.",
          "es": "Un lugar maravilloso; fui tres veces en una semana. La comida es exquisita y el servicio fue de primera. Un ambiente muy tranquilo e íntimo, perfecto tanto para familias como para reuniones de negocios. Precios excelentes considerando el tamaño de las porciones y la calidad de los platos; no veo la hora de volver."
        }
      }
    ]
  },
  {
    "id": "ChIJI5A7RACPMYwRpM3J_Xrq66k",
    "name": "MAM CAFÉ Y VIDA",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "C.C LA VELA NIVEL ARENA, Porlamar 6311, Nueva Esparta, Venezuela",
    "lat": 10.979467,
    "lng": -63.820901,
    "rating": 4.9,
    "ratingCount": 64,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=12244137825901596068&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/mamcafeyvida/",
    "phone": "0412-1123866",
    "reviews": [
      {
        "author": "Nate Kapitanski",
        "rating": 5,
        "date": "2026-09-09",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25GT1h6QkZSRW95Tlc1S2MyZE5UVTg0UTBvNGNYYxAB!2m1!1s0x0:0xa9ebea7afdc9cda4!3m1!1s2@1:CAIQACodChtycF9oOnFOXzBFREoyNW5Kc2dNTU84Q0o4cXc%7C%7C?hl=en",
        "text": {
          "en": "Love this restaurant! The food is always great and the staff is super nice. Highly recommended if you're near CC La Vela!",
          "es": "¡Me encanta este restaurante! La comida siempre es excelente y el personal es súper amable. ¡Muy recomendado si estás cerca del CC La Vela!"
        }
      },
      {
        "author": "Mary",
        "rating": 5,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tOT2QxWllhV1ZSTmpJdGNFdENhVGxNYzJGMWFtYxAB!2m1!1s0x0:0xa9ebea7afdc9cda4!3m1!1s2@1:CAIQACodChtycF9oOkNOd1ZYaWVRNjItcEtCaTlMc2F1amc%7C%7C?hl=en",
        "text": {
          "en": "We want to emphasize the excellent service we received; Viviana is incredibly attentive. We had a delicious peach cake 🍑 and the coffees were superb. We highly recommend it!",
          "es": "Queremos destacar el excelente servicio que recibimos; Viviana es increíblemente atenta. Comimos una deliciosa torta de durazno 🍑 y los cafés fueron magníficos. ¡Lo recomendamos ampliamente!"
        }
      },
      {
        "author": "johanna madureri",
        "rating": 5,
        "date": "2026-09-05",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2taQmIwbEtjRlZTTTI5UlVYZDRUSEJsVFZCWk0wRRAB!2m1!1s0x0:0xa9ebea7afdc9cda4!3m1!1s2@1:CAIQACodChtycF9oOkZBb0lKcFVSM29RUXd4THBlTVBZM0E%7C%7C?hl=en",
        "text": {
          "en": "I love my mom's cooking! My daughter and I enjoy coming here and eating delicious and healthy food!! It's one of our favorite places on the island!!",
          "es": "¡Me encanta la comida de mi mamá! Mi hija y yo disfrutamos venir aquí y comer rico y saludable. ¡Es uno de nuestros lugares favoritos de la isla!"
        }
      },
      {
        "author": "Nela Azocar",
        "rating": 5,
        "date": "2026-09-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21OaFVGaGphRmRzYlVReVNrdFlORWx2U0dkQlpWRRAB!2m1!1s0x0:0xa9ebea7afdc9cda4!3m1!1s2@1:CAIQACodChtycF9oOmNhUFhjaFdsbUQySktYNElvSGdBZVE%7C%7C?hl=en",
        "text": {
          "en": "I loved everything; it is an excellent option when you want to eat healthy. The ice cream is delicious, and I also had the grilled chicken wraps, which were very tasty. Highly recommended! The staff are friendly and helpful and knowledgeable about the menu.",
          "es": "Me encantó todo; es una excelente opción cuando quieres comer saludable. El helado es delicioso y también probé los wraps de pollo a la parrilla, que estaban muy sabrosos. ¡Muy recomendado! El personal es amable, servicial y conoce bien el menú."
        }
      },
      {
        "author": "Daniela perez",
        "rating": 5,
        "date": "2026-08-31",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xCdmJIYzVXbTVIZUdVNVZUZEhXSEpOUjNSYU1XYxAB!2m1!1s0x0:0xa9ebea7afdc9cda4!3m1!1s2@1:CAIQACodChtycF9oOlBvbHc5Wm5HeGU5VTdHWHJNR3RaMWc%7C%7C?hl=en",
        "text": {
          "en": "Super delicious! Finally a place with gluten-free options! Yeni served us with so much kindness!",
          "es": "¡Súper delicioso! ¡Por fin un lugar con opciones sin gluten! ¡Yeni nos atendió con muchísima amabilidad!"
        }
      },
      {
        "author": "Lucy ChU",
        "rating": 5,
        "date": "2026-08-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tKeVkzZGpSVWw1YldNeFVtSjNTSHBzUjNaWFNHYxAB!2m1!1s0x0:0xa9ebea7afdc9cda4!3m1!1s2@1:CAIQACodChtycF9oOkJyY3djRUl5bWMxUmJ3SHpsR3ZXSGc%7C%7C?hl=en",
        "text": {
          "en": "If you're looking for healthy yet delicious food, Mam is the perfect place! I highly recommend it for breakfast, lunch, afternoon tea, or dinner. Jenny served us this time, and everything was 10/10. But in general, all the staff are excellent.",
          "es": "Si buscas comida saludable y a la vez deliciosa, ¡Mam es el lugar perfecto! Lo recomiendo mucho para desayuno, almuerzo, merienda o cena. Esta vez nos atendió Jenny y todo estuvo 10/10. Pero en general, todo el personal es excelente."
        }
      },
      {
        "author": "enrique urdaneta",
        "rating": 5,
        "date": "2026-08-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xKTVRIaFJjMVZPWDIxQ2IyaENSM1k1WDJaNGJuYxAB!2m1!1s0x0:0xa9ebea7afdc9cda4!3m1!1s2@1:CAIQACodChtycF9oOlJMTHhRc1VOX21Cb2hCR3Y5X2Z4bnc%7C%7C?hl=en",
        "text": {
          "en": "The place was lovely, the food was delicious, and the service was excellent! Everyone treated us very well, and Jenny was especially nice and gave us excellent service! 100% recommended!",
          "es": "¡El lugar era precioso, la comida deliciosa y el servicio excelente! Todos nos trataron muy bien, y Jenny fue especialmente amable y nos dio un servicio excelente. ¡100 % recomendado!"
        }
      },
      {
        "author": "Ricardo Montilla Hernandez",
        "rating": null,
        "date": "2022-04-19",
        "provider": "facebook",
        "url": "https://www.facebook.com/ricardo.montilla.personal/posts/pfbid0UE8wkESRDEWa3R6Nof2cHfp9oMxHPAEcWwhk5pSrxWZn1WHpUu8rbkErw5tewJfMl",
        "text": {
          "en": "Simply extraordinary!!",
          "es": "¡Simplemente extraordinario!"
        }
      }
    ]
  },
  {
    "id": "ChIJ-96BlwqPMYwR1MtGSxemXik",
    "name": "COCO BISTRO",
    "category": {
      "es": "Postres y café",
      "en": "Desserts & Coffee"
    },
    "address": "Near, X5WX+GCH el rey de la empanadas, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.996334,
    "lng": -63.801416,
    "rating": 4.8,
    "ratingCount": 16,
    "googleMapsUri": "https://maps.google.com/?cid=2981002622343236564&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/cocobistro",
    "phone": "0424-8651547",
    "reviews": [
      {
        "author": "José Joaquín Bustamante",
        "rating": 5,
        "date": "2026-05-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2paUlUzVmhURmw0U0ZKS01XTnVZbmczV0U5aU9FRRAB!2m1!1s0x0:0x295ea6174b46cbd4!3m1!1s2@1:CAIQACodChtycF9oOjZRU3VhTFl4SFJKMWNuYng3WE9iOEE%7C%7C?hl=en",
        "text": {
          "en": "My wife and I came from Chile and we absolutely loved the coconut candies at this place! The coconut flavor is amazing and they're super generous with the condensed milk. They're perfect for a little treat! I'll definitely be back for more. Highly recommended if you're ever in the area!",
          "es": "¡Mi esposa y yo venimos de Chile y nos encantaron los cocos de este lugar! El sabor a coco es increíble y son súper generosos con la leche condensada. ¡Son perfectos para un antojito! Sin duda volveré por más. ¡Muy recomendados si andas por la zona!"
        }
      },
      {
        "author": "Jean Carlos Ramirez",
        "rating": 5,
        "date": "2025-09-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xjeFNYaG5XVXRaV0dWMFowRTVNMFYyY0ZWMlpGRRAB!2m1!1s0x0:0x295ea6174b46cbd4!3m1!1s2@1:CAIQACodChtycF9oOlcxSXhnWUtZWGV0Z0E5M0V2cFV2ZFE%7C%7C?hl=en",
        "text": {
          "en": "The best on the island and excellent service",
          "es": "Los mejores de la isla y excelente servicio."
        }
      },
      {
        "author": "Liz de Ramirez",
        "rating": 5,
        "date": "2025-09-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xvMFdYQTBhMmt4WHpsd2IxWmlNRE5aVGpOSWNtYxAB!2m1!1s0x0:0x295ea6174b46cbd4!3m1!1s2@1:CAIQACodChtycF9oOlo0WXA0a2kxXzlwb1ZiMDNZTjNIcmc%7C%7C?hl=en",
        "text": {
          "en": "The best coconut candy of your life",
          "es": "El mejor coco de tu vida."
        }
      },
      {
        "author": "Elsy Tavares",
        "rating": 5,
        "date": "2025-05-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VKdjN5ZXZhN3BDd2VREAE!2m1!1s0x0:0x295ea6174b46cbd4!3m1!1s2@1:CIHM0ogKEJv3yeva7pCweQ%7C%7C?hl=en",
        "text": {
          "en": "Delicious coconut candies. The place isn't visible because you have to walk past a huge tree. But it's very cozy.",
          "es": "Deliciosos cocos. El lugar no se ve porque hay que pasar un árbol enorme. Pero es muy acogedor."
        }
      },
      {
        "author": "Jorge Rodriguez",
        "rating": 3,
        "date": "2025-01-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURmcWNyVk5BEAE!2m1!1s0x0:0x295ea6174b46cbd4!3m1!1s2@1:CIHM0ogKEICAgIDfqcrVNA%7C%7C?hl=en",
        "text": {
          "en": "Good coconut candies, but not yet the best.",
          "es": "Buenos cocos, pero aún no los mejores."
        }
      },
      {
        "author": "Agua'e Panela",
        "rating": 5,
        "date": "2024-09-27",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNuaGZyQmtBRRAB!2m1!1s0x0:0x295ea6174b46cbd4!3m1!1s2@1:CIHM0ogKEICAgICnhfrBkAE%7C%7C?hl=en",
        "text": {
          "en": "Excellent and delicious coconut candies, I highly recommend them.",
          "es": "Excelentes y deliciosos cocos, los recomiendo mucho."
        }
      },
      {
        "author": "Jan junior Parra",
        "rating": 5,
        "date": "2024-09-27",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNua1k2RjVBRRAB!2m1!1s0x0:0x295ea6174b46cbd4!3m1!1s2@1:CIHM0ogKEICAgICnkY6F5AE%7C%7C?hl=en",
        "text": {
          "en": "I'm super mega delighted with the strawberry coconut candy and Flips...I really love the atmosphere of the place 😍😍",
          "es": "Estoy súper mega encantada con el coco de fresa y los Flips... me encanta el ambiente del lugar 😍😍"
        }
      }
    ]
  },
  {
    "id": "ChIJgZUTCs6PMYwRuigCxUQH2BU",
    "name": "Chino latino porlamar",
    "category": {
      "es": "Restaurante chino",
      "en": "Chinese Restaurant"
    },
    "address": "Calle ortega entre Marcano y Cedeño, Isla de Margarita, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.959652,
    "lng": -63.838753,
    "rating": 4.8,
    "ratingCount": 11,
    "googleMapsUri": "https://maps.google.com/?cid=1574016061710411962&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/chinolatino.porlamar?igsh=MTAxNWs5M2d4dGQ5cg==",
    "phone": "0412-1166480",
    "reviews": [
      {
        "author": "Cruz Natacha Rivero Santos",
        "rating": 3,
        "date": "2026-08-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25WMExUUTFRMUJmUkdzNFdVcEtTVk55U0dVelZFRRAB!2m1!1s0x0:0x15d80744c50228ba!3m1!1s2@1:CAIQACodChtycF9oOnV0LTQ1Q1BfRGs4WUpKSVNySGUzVEE%7C%7C?hl=en",
        "text": {
          "en": "It's tasty and inexpensive. The staff are friendly.",
          "es": "Es sabroso y económico. El personal es amable."
        }
      },
      {
        "author": "ADRIANA ALVARADO",
        "rating": 5,
        "date": "2026-03-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21ZMWMxUm5VMng1TUdOMGNVRTJYekYyU1RadU0yYxAB!2m1!1s0x0:0x15d80744c50228ba!3m1!1s2@1:CAIQACodChtycF9oOmY1c1RnU2x5MGN0cUE2XzF2STZuM2c%7C%7C?hl=en",
        "text": {
          "en": "The best Chinese food, highly recommended, plus the atmosphere is very peaceful.",
          "es": "La mejor comida china, muy recomendada; además el ambiente es muy tranquilo."
        }
      },
      {
        "author": "Mayerlyn Coronado",
        "rating": 5,
        "date": "2026-03-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2sxR1ZtcE9lSFZCVUdaVVJqSXdSRzh6UzFNNGNGRRAB!2m1!1s0x0:0x15d80744c50228ba!3m1!1s2@1:CAIQACodChtycF9oOk1GVmpOeHVBUGZURjIwRG8zS1M4cFE%7C%7C?hl=en",
        "text": {
          "en": "Their food is excellent, I love it.",
          "es": "Su comida es excelente, me encanta."
        }
      },
      {
        "author": "Meilyn Rodriguez",
        "rating": 5,
        "date": "2026-03-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21aclkySk1Sa3B2VHpGNlV6VTVXRmh2VURablJrRRAB!2m1!1s0x0:0x15d80744c50228ba!3m1!1s2@1:CAIQACodChtycF9oOmZrY2JMRkpvTzF6UzU5WFhvUDZnRkE%7C%7C?hl=en",
        "text": {
          "en": "The best Chinese food I've ever had 😍. I can't wait to go back to Margarita for her food 🍲",
          "es": "La mejor comida china que he probado 😍. No veo la hora de volver a Margarita por su comida 🍲"
        }
      },
      {
        "author": "luis leiva",
        "rating": 5,
        "date": "2026-03-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21jd1prVlBjbTgyZWxSbGFGVlpVMUJKTjJONmMzYxAB!2m1!1s0x0:0x15d80744c50228ba!3m1!1s2@1:CAIQACodChtycF9oOmcwZkVPcm82elRlaFVZU1BJN2N6c3c%7C%7C?hl=en",
        "text": {
          "en": "The best",
          "es": "Lo mejor"
        }
      }
    ]
  },
  {
    "id": "ChIJu6-AJQSPMYwRqRndL7nXQSI",
    "name": "Casseros-café",
    "category": {
      "es": "Café",
      "en": "Coffee Shop"
    },
    "address": "Av. Francisco Esteban Gómez, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.974199,
    "lng": -63.831881,
    "rating": 4.8,
    "ratingCount": 8,
    "googleMapsUri": "https://maps.google.com/?cid=2468491261147683241&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/casserosmgta?igsh=MWd3MG1yY2R5dGc0MA==",
    "phone": "0414-7853576",
    "reviews": [
      {
        "author": "rosa ormida briceño de gimenez",
        "rating": 5,
        "date": "2025-05-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VMM3JscTJYX2FxSHp3RRAB!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEL3rlq2X_aqHzwE%7C%7C?hl=en",
        "text": {
          "en": "Excellent service",
          "es": "Excelente servicio"
        }
      },
      {
        "author": "cruz Calzadilla",
        "rating": 5,
        "date": "2025-04-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURvZ2ZPaF9BRRAB!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEICAgMDogfOh_AE%7C%7C?hl=en",
        "text": {
          "en": "Everything was excellent: the service, the food, the juices, especially the natural pear juice, which was very good. I highly recommend it.",
          "es": "Todo estuvo excelente: el servicio, la comida, los jugos y en especial el jugo natural de pera, que estaba muy bueno. Lo recomiendo ampliamente."
        }
      },
      {
        "author": "anibal espinoza",
        "rating": 4,
        "date": "2024-10-18",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNYdVlHNnBnRRAB!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEICAgICXuYG6pgE%7C%7C?hl=en",
        "text": {
          "en": "Good good ☕☕☕🎂",
          "es": "Bueno, bueno ☕☕☕🎂"
        }
      },
      {
        "author": "Johanquin Oriach",
        "rating": 5,
        "date": "2024-07-13",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURyaUlEUUxnEAE!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEICAgIDriIDQLg%7C%7C?hl=en",
        "text": {
          "en": "Excellent service, product quality and flavor",
          "es": "Excelente servicio, calidad del producto y sabor"
        }
      },
      {
        "author": "Osdely Reyes",
        "rating": 5,
        "date": "2024-07-09",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNybGZ2QzRBRRAB!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEICAgICrlfvC4AE%7C%7C?hl=en",
        "text": {
          "en": "Excellent! Very cozy place, unbeatable service, and delicious coffee.",
          "es": "¡Excelente! Un lugar muy acogedor, servicio inmejorable y un café delicioso."
        }
      },
      {
        "author": "Ana Lucia Daly",
        "rating": 4,
        "date": "2024-04-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUREMnItRDhBRRAB!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEICAgIDD2r-D8AE%7C%7C?hl=en",
        "text": {
          "en": "It's affordable and the food is good, perfect for when you're in a pinch and can't cook.",
          "es": "Es económico y la comida es buena, perfecto para cuando andas con prisa y no puedes cocinar."
        }
      },
      {
        "author": "Mariana Diaz",
        "rating": 5,
        "date": "2024-04-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNEODRidTZBRRAB!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEICAgICD84bu6AE%7C%7C?hl=en",
        "text": {
          "en": "They have Wi-Fi for working, very good service, welcoming and quite nice",
          "es": "Tienen Wi-Fi para trabajar, muy buen servicio, acogedor y bastante agradable."
        }
      },
      {
        "author": "Alfonzo Rafael Escalona Salazar",
        "rating": 5,
        "date": "2024-03-23",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNEcUtpSUVREAE!2m1!1s0x0:0x2241d7b92fdd19a9!3m1!1s2@1:CIHM0ogKEICAgICDqKiIEQ%7C%7C?hl=en",
        "text": {
          "en": "Excellent service, very good food, a variety of pastas, and a phenomenal pasticho.",
          "es": "Excelente servicio, muy buena comida, variedad de pastas y un pasticho fenomenal."
        }
      }
    ]
  },
  {
    "id": "ChIJU2DHJbSOMYwRen7bYw_kG9w",
    "name": "Pizzeria El Paseo",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.954199,
    "lng": -63.844213,
    "rating": 4.7,
    "ratingCount": 920,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=15860521267466305146&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://linktr.ee/pizzeriaelpaseomgta",
    "phone": "0424-8925818",
    "reviews": [
      {
        "author": "Martha Cecilia",
        "rating": 4,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25KRWN6QjBRbmhmVGtaNlNrVm1RbXBQVWxWNVZVRRAB!2m1!1s0x0:0xdc1be40f63db7e7a!3m1!1s2@1:CAIQACodChtycF9oOnJEczB0QnhfTkZ6SkVmQmpPUlV5VUE%7C%7C?hl=en",
        "text": {
          "en": "Great atmosphere, right on the seafront.",
          "es": "Gran ambiente, justo frente al mar."
        }
      },
      {
        "author": "Leonardo Morón",
        "rating": 4,
        "date": "2026-09-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkc1QwVlRWVXBxWTNKc1UwbE9lbmRpWDNGdGExRRAB!2m1!1s0x0:0xdc1be40f63db7e7a!3m1!1s2@1:CAIQACodChtycF9oOjdsT0VTVUpqY3JsU0lOendiX3Fta1E%7C%7C?hl=en",
        "text": {
          "en": "The staff is very friendly. The pizzas are good. The music is a bit loud for my taste. It's a shame that Paseo Romulo Gallegos isn't well lit; it would be great to walk there after a meal.",
          "es": "El personal es muy amable. Las pizzas son buenas. La música es un poco fuerte para mi gusto. Es una lástima que el Paseo Rómulo Gallegos no esté bien iluminado; sería genial caminar por allí después de comer."
        }
      },
      {
        "author": "Julio Noguera",
        "rating": 5,
        "date": "2026-09-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2psMFRtSkhha3hyVWxZdFFrNWpPVXhSTWpKaFIzYxAB!2m1!1s0x0:0xdc1be40f63db7e7a!3m1!1s2@1:CAIQACodChtycF9oOjl0TmJHakxrUlYtQk5jOUxRMjJhR3c%7C%7C?hl=en",
        "text": {
          "en": "Excellent service",
          "es": "Excelente servicio"
        }
      },
      {
        "author": "Jean Maita",
        "rating": 5,
        "date": "2026-08-31",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25OVk1IaEpSa1JUUjJSNWVtUkJXVFZrVWpGNk1IYxAB!2m1!1s0x0:0xdc1be40f63db7e7a!3m1!1s2@1:CAIQACodChtycF9oOnNVMHhJRkRTR2R5emRBWTVkUjF6MHc%7C%7C?hl=en",
        "text": {
          "en": "The best",
          "es": "Lo mejor"
        }
      },
      {
        "author": "Virginia",
        "rating": 5,
        "date": "2026-08-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21oMlNucERlSEZRU0Y5YVJFRndPVlJGWkVaWFZWRRAB!2m1!1s0x0:0xdc1be40f63db7e7a!3m1!1s2@1:CAIQACodChtycF9oOmh2SnpDeHFQSF9aREFwOVRFZEZXVVE%7C%7C?hl=en",
        "text": {
          "en": "Excellent, the pizzas are delicious 👌",
          "es": "Excelente, las pizzas son deliciosas 👌"
        }
      },
      {
        "author": "Ivonne Petit",
        "rating": 5,
        "date": "2026-08-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xsdFYxaElWMFl3WWpVMGFqUkVObVZPUVVKTlZHYxAB!2m1!1s0x0:0xdc1be40f63db7e7a!3m1!1s2@1:CAIQACodChtycF9oOlltV1hIV0YwYjU0ajRENmVOQUJNVGc%7C%7C?hl=en",
        "text": {
          "en": "Excellent!! The best atmosphere, great music, and the service was fantastic—everyone was so friendly. I went with three kids, and instead of worrying, I was completely relaxed. The pizzas were amazing! Plus, the price was incredible!!!",
          "es": "¡¡Excelente!! El mejor ambiente, buena música y el servicio fue fantástico: todos fueron muy amables. Fui con tres niños y, en vez de preocuparme, estuve totalmente relajado. ¡Las pizzas estuvieron increíbles! ¡Además, el precio fue increíble!"
        }
      }
    ]
  },
  {
    "id": "ChIJraVlzyqPMYwRFONgaqm2WY8",
    "name": "Kumbaya Portugal",
    "category": {
      "es": "Restaurante portugués",
      "en": "Portuguese Restaurant"
    },
    "address": "6316, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 11.000184,
    "lng": -63.823963,
    "rating": 4.7,
    "ratingCount": 15,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=10329488059101405972&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://instagram.com/kumbaya.mgta?igshid=MmU2YjMzNjRlOQ==",
    "phone": "0412-0961243",
    "reviews": [
      {
        "author": "alejandra velasquez",
        "rating": 5,
        "date": "2026-08-18",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xGWk0xVmFhakJHYUVkck1XMDRZMjFhWVdrMFFYYxAB!2m1!1s0x0:0x8f59b6a96a60e314!3m1!1s2@1:CAIQACodChtycF9oOlFZM1VaajBGaEdrMW04Y21aYWk0QXc%7C%7C?hl=en",
        "text": {
          "en": "Excellent experience and service, I loved it for enjoying and spending time with friends and family🍷",
          "es": "Excelente experiencia y servicio; me encantó para disfrutar y compartir con amigos y familia 🍷"
        }
      },
      {
        "author": "Vera Abbott",
        "rating": 5,
        "date": "2026-05-28",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2t0NVVYRnZVRVZ6YW5wVGNpMWtiMnRPZG1Fd1lYYxAB!2m1!1s0x0:0x8f59b6a96a60e314!3m1!1s2@1:CAIQACodChtycF9oOkt5UXFvUEVzanpTci1kb2tOdmEwYXc%7C%7C?hl=en",
        "text": {
          "en": "We ordered three set menus and were amazed at how fresh the fish was and how delicious all the food was. The calamari and shrimp that accompanied the fish were also incredibly fresh. Everything was cooked perfectly, with juicy fish and tender calamari. The service was also top-notch—a family business where you can tell they do everything with enthusiasm and the best intentions. We'll be back! Thank you!",
          "es": "Pedimos tres menús del día y quedamos asombrados de lo fresco que estaba el pescado y de lo deliciosa que estaba toda la comida. Los calamares y camarones que acompañaban el pescado también estaban increíblemente frescos. Todo estaba perfectamente cocinado, con pescado jugoso y calamares tiernos. El servicio también fue de primera: un negocio familiar donde se nota que hacen todo con entusiasmo y las mejores intenciones. ¡Volveremos! ¡Gracias!"
        }
      },
      {
        "author": "Daniel Del Gallego",
        "rating": 5,
        "date": "2026-04-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21zd1dWRnlkM2xITlUwNU1YTkpRbEJJVmtGcU1GRRAB!2m1!1s0x0:0x8f59b6a96a60e314!3m1!1s2@1:CAIQACodChtycF9oOmswWVFyd3lHNU05MXNJQlBIVkFqMFE%7C%7C?hl=en",
        "text": {
          "en": "It's like being invited to a family home for a meal, where they've cooked with love!\n\nPlaces that leave you with unforgettable memories and incredible culinary experiences.\n\nThe owners explained in detail all the dedication and effort they've put into developing their products, explaining them with passion and affection.\n\nThank you!",
          "es": "¡Es como que te inviten a casa de una familia a comer, donde cocinaron con amor!\n\nLugares que te dejan recuerdos inolvidables y experiencias culinarias increíbles.\n\nLos dueños explicaron en detalle toda la dedicación y el esfuerzo que han puesto en desarrollar sus productos, explicándolos con pasión y cariño.\n\n¡Gracias!"
        }
      },
      {
        "author": "Racof",
        "rating": 4,
        "date": "2025-12-16",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21aR1JsOHlNVnBMTVZsbGJHaDBWMEZaVVhVNU4wRRAB!2m1!1s0x0:0x8f59b6a96a60e314!3m1!1s2@1:CAIQACodChtycF9oOmZGRl8yMVpLMVllbGh0V0FZUXU5N0E%7C%7C?hl=en",
        "text": {
          "en": "Specializing in Portuguese cuisine. A small and cozy space. The chef and manager are a charming Portuguese couple who warmly attend to the customers.",
          "es": "Especializado en cocina portuguesa. Un espacio pequeño y acogedor. El chef y la gerente son una encantadora pareja portuguesa que atiende con calidez a los clientes."
        }
      },
      {
        "author": "Alfonzo Rafael Escalona Salazar",
        "rating": 5,
        "date": "2025-08-15",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT20xYVRVTlZlSGd0WVdGelJsRnVibFpMVW5KcFJrRRAB!2m1!1s0x0:0x8f59b6a96a60e314!3m1!1s2@1:CAIQACodChtycF9oOm1aTUNVeHgtYWFzRlFublZLUnJpRkE%7C%7C?hl=en",
        "text": {
          "en": "A very welcoming place, excellent service, it is a family business run by its owners, the food is exquisite, the prices are in line with the quality of the dishes and the ambiance. I highly recommend the octopus in any of its preparations; they are truly excellent.",
          "es": "Un lugar muy acogedor, excelente servicio; es un negocio familiar atendido por sus dueños. La comida es exquisita y los precios están acordes con la calidad de los platos y el ambiente. Recomiendo mucho el pulpo en cualquiera de sus preparaciones; son realmente excelentes."
        }
      },
      {
        "author": "Jorge de Sousa",
        "rating": 5,
        "date": "2025-03-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTUR3aHBQWUZ3EAE!2m1!1s0x0:0x8f59b6a96a60e314!3m1!1s2@1:CIHM0ogKEICAgMDwhpPYFw%7C%7C?hl=en",
        "text": {
          "en": "Run by the family. Portuguese and Venezuelan food. Excellent service. Greetings!",
          "es": "Atendido por la familia. Comida portuguesa y venezolana. Excelente servicio. ¡Saludos!"
        }
      },
      {
        "author": "Navquin Studio",
        "rating": 5,
        "date": "2025-02-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURnc09ESFF3EAE!2m1!1s0x0:0x8f59b6a96a60e314!3m1!1s2@1:CIHM0ogKEICAgMDgsODHQw%7C%7C?hl=en",
        "text": {
          "en": "🇵🇹 Unique flavors, memorable experience. 🇻🇪",
          "es": "🇵🇹 Sabores únicos, experiencia memorable. 🇻🇪"
        }
      }
    ]
  },
  {
    "id": "ChIJE8B2QtiPMYwREwUA9ms7Rxo",
    "name": "De Gusto Bodegon",
    "category": {
      "es": "Delicatessen",
      "en": "Deli"
    },
    "address": "X5WX+97M, C. Joaquín Maneiro, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.995955,
    "lng": -63.801838,
    "rating": 4.7,
    "ratingCount": 11,
    "googleMapsUri": "https://maps.google.com/?cid=1893547503207318803&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/degustobodegon/?hl=es-la",
    "reviews": [
      {
        "author": "Hector Contreras",
        "rating": 5,
        "date": "2021-12-10",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURHNl9hRlZnEAE!2m1!1s0x0:0x1a473b6bf6000513!3m1!1s2@1:CIHM0ogKEICAgIDG6_aFVg%7C%7C?hl=en",
        "text": {
          "en": "Excellent service combined with good prices!",
          "es": "¡Excelente servicio combinado con buenos precios!"
        }
      },
      {
        "author": "Jose Hernandez",
        "rating": 5,
        "date": "2021-11-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNHM18tTWlnRRAB!2m1!1s0x0:0x1a473b6bf6000513!3m1!1s2@1:CIHM0ogKEICAgICG3_-MigE%7C%7C?hl=en",
        "text": {
          "en": "Excellent, good service, good prices, pleasant atmosphere",
          "es": "Excelente, buen servicio, buenos precios, ambiente agradable."
        }
      },
      {
        "author": "Yamil Canizalez",
        "rating": 5,
        "date": "2021-08-19",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURhLXN1OUtnEAE!2m1!1s0x0:0x1a473b6bf6000513!3m1!1s2@1:CIHM0ogKEICAgIDa-su9Kg%7C%7C?hl=en",
        "text": {
          "en": "Excellent and good service",
          "es": "Excelente y buen servicio."
        }
      },
      {
        "author": "Marly Martinez",
        "rating": 5,
        "date": "2021-08-09",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNhcThfclFREAE!2m1!1s0x0:0x1a473b6bf6000513!3m1!1s2@1:CIHM0ogKEICAgICaq8_rQQ%7C%7C?hl=en",
        "text": {
          "en": "Excellent service",
          "es": "Excelente servicio."
        }
      }
    ]
  },
  {
    "id": "ChIJX4uRtuaOMYwRVMeP4Oz2Ynw",
    "name": "Il Nonno Pizzeria Artesanal",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "Hotel la samana, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.972242,
    "lng": -63.823264,
    "rating": 4.6,
    "ratingCount": 1146,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=8962997705660942164&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/ilnonno_pizzeria/",
    "phone": "0414-7791898",
    "reviews": [
      {
        "author": "Martha Cecilia",
        "rating": 4,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2kxTlNtODRabXcwWVcxQk1uWjZXVFZNTkhZMU9XYxAB!2m1!1s0x0:0x7c62f6ece08fc754!3m1!1s2@1:CAIQACodChtycF9oOi1NSm84Zmw0YW1BMnZ6WTVMNHY1OWc%7C%7C?hl=en",
        "text": {
          "en": "Divine atmosphere.",
          "es": "Ambiente divino."
        }
      },
      {
        "author": "DAVID DA SILVA",
        "rating": 5,
        "date": "2026-09-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tJNVZXeEJZVVpKZUd4TU0xaGpNM2R6Y2kxaU5VRRAB!2m1!1s0x0:0x7c62f6ece08fc754!3m1!1s2@1:CAIQACodChtycF9oOkI5VWxBYUZJeGxMM1hjM3dzci1iNUE%7C%7C?hl=en",
        "text": {
          "en": "Very pleasant atmosphere, the pasta was perfectly cooked and delicious, and the pizzas had a thin crust and were very tasty.\n\n100% worth repeating.",
          "es": "Ambiente muy agradable, la pasta estaba perfectamente cocida y deliciosa, y las pizzas tenían masa fina y estaban muy sabrosas.\n\n100 % para repetir."
        }
      },
      {
        "author": "Liborio Mauro",
        "rating": 5,
        "date": "2026-09-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s5bWJ6QnRkM0l0WlhOd1NHVk9WbHBYV0VaM2VIYxAB!2m1!1s0x0:0x7c62f6ece08fc754!3m1!1s2@1:CAIQACodChtycF9oOk9mbzBtd3ItZXNwSGVOVlpXWEZ3eHc%7C%7C?hl=en",
        "text": {
          "en": "A spectacular outdoor spot, and the food is quite good. It's a tradition every time we go to Margarita Island.",
          "es": "Un lugar al aire libre espectacular y la comida es bastante buena. Es una tradición cada vez que vamos a la Isla de Margarita."
        }
      },
      {
        "author": "Luis Rojas Lozada",
        "rating": 5,
        "date": "2026-09-02",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tkeFdFdGxhRnBSTjNSM2RXeE5hM0kyWldsc1FuYxAB!2m1!1s0x0:0x7c62f6ece08fc754!3m1!1s2@1:CAIQACodChtycF9oOkdxWEtlaFpRN3R3dWxNa3I2ZWlsQnc%7C%7C?hl=en",
        "text": {
          "en": "Excellent service, good food, great attention! The waitress heard me saying I was getting mosquito bites and brought me repellent, I wasn't expecting that haha excellent service 🩷🩷✨",
          "es": "¡Excelente servicio, buena comida, gran atención! La mesera me escuchó decir que me estaban picando los mosquitos y me trajo repelente; no me lo esperaba, jaja, excelente servicio 🩷🩷✨"
        }
      },
      {
        "author": "Anibal Fasanaro",
        "rating": 5,
        "date": "2026-09-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2poUWRFSjVNemRoUmxsTVYxUndjVnB2T0hoUWVtYxAB!2m1!1s0x0:0x7c62f6ece08fc754!3m1!1s2@1:CAIQACodChtycF9oOjhQdEJ5MzdhRllMV1RwcVpvOHhQemc%7C%7C?hl=en",
        "text": {
          "en": "The place has a lovely theme, excellent service, a very good menu, and a playground for the little ones in the family. Thank you so much!",
          "es": "El lugar tiene una temática lindísima, excelente servicio, muy buen menú y un parque para los más pequeños de la familia. ¡Muchas gracias!"
        }
      },
      {
        "author": "manuel caraballo",
        "rating": 5,
        "date": "2026-08-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURRaVliQlFREAE!2m1!1s0x0:0x7c62f6ece08fc754!3m1!1s2@1:CIHM0ogKEICAgIDQiYbBQQ%7C%7C?hl=en",
        "text": {
          "en": "The best pizzas on the island",
          "es": "Las mejores pizzas de la isla"
        }
      },
      {
        "author": "Carlimar T. Golindano G.",
        "rating": 5,
        "date": "2026-08-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21GaFNHZG5Wa0kxUkdoeFlXTlhlbWMyYkRoVVFYYxAB!2m1!1s0x0:0x7c62f6ece08fc754!3m1!1s2@1:CAIQACodChtycF9oOmFhSGdnVkI1RGhxYWNXemc2bDhUQXc%7C%7C?hl=en",
        "text": {
          "en": "Excellent, service and food 10/10",
          "es": "Excelente, servicio y comida 10/10"
        }
      }
    ]
  },
  {
    "id": "ChIJl6h3IraOMYwRbO-J-p-p1jg",
    "name": "La Casa de Rubén",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "X544+8WJ, Av. Santiago Mariño, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.955849,
    "lng": -63.842734,
    "rating": 4.6,
    "ratingCount": 404,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=4095647415708282732&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/lacasaderuben.mgta/?hl=es-la",
    "phone": "0424-8499341",
    "reviews": [
      {
        "author": "Rafael3000",
        "rating": 2,
        "date": "2026-07-06",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r1067204373-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "nothing like the original, I ordered a double fosforera and it was a soup, the Catalan salad was a ball of mush and the stingray pie disappointed me, it must improve, Chef Rubén set the standards very high, the service is good but incidentally it is very expensive for what it is and where they are, it comes out to an average of 30 to 35$.",
          "es": "nada que ver con el original; pedí una fosforera doble y era una sopa, la ensalada catalana era una bola de puré y el pastel de chucho me decepcionó. Tiene que mejorar; el chef Rubén dejó el listón muy alto. El servicio es bueno, pero de paso es muy caro para lo que es y donde están; sale en un promedio de 30 a 35 $."
        }
      },
      {
        "author": "Roberto P",
        "rating": 5,
        "date": "2026-03-30",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r1054800855-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "good place to eat we enjoyed it",
          "es": "buen lugar para comer, lo disfrutamos"
        }
      },
      {
        "author": "ASVZ",
        "rating": 5,
        "date": "2023-04-08",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r885250516-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The appetizer trilogy, the original pastel de chucho, the grilled octopus and the fish fingers were delicious. The prices are in line with the restaurants at Playa El Ángel. I will be back.",
          "es": "La trilogía de entrada, el original pastel de chucho, el pulpo a la brasa y los dedos de pescado estaban deliciosos. Los precios están al promedio de los restaurantes de playa El Ángel. Volveré."
        }
      },
      {
        "author": "juliomoralesve",
        "rating": 5,
        "date": "2021-11-11",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r818249880-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "A delicious meal that captures all the Margaritan flavor, a clean atmosphere, excellent service, but the food is definitely another level. I will certainly go back.",
          "es": "Una comida deliciosa que capta todo el sabor margariteño, ambiente limpio, excelente atención, pero definitivamente la comida es otro nivel. Sin duda voy a repetir."
        }
      },
      {
        "author": "Skull Divers",
        "rating": 5,
        "date": "2020-11-04",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r776456912-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Tradition, great seasoning and excellent service; truly, whether you come back after 5 years, a month or 10 years, you'll be able to repeat the wonderful experience of eating at this place. Its owner is undoubtedly an icon of island cuisine and the service is first-rate. Coming to Margarita means stopping by La Casa de Rubén.",
          "es": "Tradición, buena sazón y excelente atención; de verdad que vengas 5 años, un mes o 10 años después vas a poder repetir la experiencia maravillosa de comer en este lugar. Su dueño es sin duda un ícono de la comida insular y la atención es de primera. Venir a Margarita es pasar por la Casa de Rubén."
        }
      },
      {
        "author": "Rafael3000",
        "rating": 3,
        "date": "2019-10-31",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r722820785-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "It's a good reference, but they treat regular customers better; the rest of us are second or third in line for options and portions. They should treat everyone equally. If you don't mind, you can go. The place is neglected.",
          "es": "Es una buena referencia, pero tratan mejor a la clientela conocida; el resto somos de segunda o tercera en las opciones y raciones. Deberían tratar a todos por igual. Si no te importa, puedes ir. Local descuidado."
        }
      },
      {
        "author": "EOrtega",
        "rating": 4,
        "date": "2019-09-04",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r706222976-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "An iconic spot in Margarita, excellent food, good service. The decor is quite local and unpretentious. The Catalan salad and the pastel de chucho are almost mandatory. Worth going.",
          "es": "Un sitio icónico de Margarita, excelente comida, buen servicio. La decoración es bastante local, sin pretensiones. La ensalada catalana y el pastel de chucho son casi obligatorios. Vale la pena ir."
        }
      },
      {
        "author": "Gabriela A",
        "rating": 3,
        "date": "2019-08-21",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r701592805-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "We're on vacation in Margarita, and I confess that every time we come it's a must-stop for its wonderful pastel de chucho and its Catalan salad! But please pay attention to the cleanliness of the place and its details! Everything should be in harmony: food, cleanliness and painted walls; the A/C isn't working with cables hanging outside. Just a suggestion — I'm a regular at that place, but it looks very neglected!",
          "es": "¡Estamos de vacaciones en Margarita y confieso que cada vez que venimos es parada obligada por su maravilloso pastel de chucho y su ensalada catalana! ¡Pero por favor pongan cuidado a la limpieza del local y sus detalles! Todo debe estar en armonía: comida, limpieza y pintura de paredes; el aire sin funcionar y con cables por fuera. Solo una sugerencia, soy asidua a ese lugar, pero se nota muy descuidado."
        }
      },
      {
        "author": "Carlos G",
        "rating": 4,
        "date": "2019-08-07",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r696286729-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The classics: pastel de chucho and Catalan salad. A pleasant place; perhaps it keeps its tradition without innovating. Still worth visiting. You always eat very well.",
          "es": "Lo clásico: pastel de chucho y ensalada catalana. Lugar agradable; quizá mantiene su tradición, sin innovar en cosas nuevas. Pero igual vale la pena visitarlo. Siempre se come muy bien."
        }
      },
      {
        "author": "fcovilela",
        "rating": 5,
        "date": "2019-06-05",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084110-r678962113-La_Casa_de_Ruben-Porlamar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "An excellent taste of Margaritan food... exquisite typical cuisine with personalized attention from its own owner... its employees, as always, very kind and cordial.",
          "es": "Excelente degustación de la comida margariteña... exquisita comida típica con la atención personalizada de su propio dueño... sus empleados, como siempre, muy amables y cordiales."
        }
      },
      {
        "author": "Publingenio Margarita",
        "rating": 5,
        "date": "2026-08-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pnMFlqRTVNVWR6UzFSVWRISjVaVEZXTUdwUWNXYxAB!2m1!1s0x0:0x38d6a99ffa89ef6c!3m1!1s2@1:CAIQACodChtycF9oOjg0YjE5MUdzS1RUdHJ5ZTFWMGpQcWc%7C%7C?hl=en",
        "text": {
          "en": "The best restaurant serving Margarita Island cuisine, featuring authentic and special flavors created by Chef Rubén Santiago, a gastronomic cultural heritage.",
          "es": "El mejor restaurante de cocina de la Isla de Margarita, con sabores auténticos y especiales creados por el chef Rubén Santiago, un patrimonio cultural gastronómico."
        }
      },
      {
        "author": "josef solomonoff",
        "rating": 5,
        "date": "2026-08-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2psNFlTMU5UazFOYmtKV1pXdEZUamRtZFV0VFlrRRAB!2m1!1s0x0:0x38d6a99ffa89ef6c!3m1!1s2@1:CAIQACodChtycF9oOjl4YS1NTk1NbkJWZWtFTjdmdUtTYkE%7C%7C?hl=en",
        "text": {
          "en": "Words cannot describe this spectacle of flavors ❤️",
          "es": "Las palabras no pueden describir este espectáculo de sabores ❤️"
        }
      },
      {
        "author": "Analia Amor",
        "rating": 5,
        "date": "2026-06-27",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pSNWJrTkdiMU52UlhCS1VWQjJRMnQ0UkhaQk4yYxAB!2m1!1s0x0:0x38d6a99ffa89ef6c!3m1!1s2@1:CAIQACodChtycF9oOjR5bkNGb1NvRXBKUVB2Q2t4RHZBN2c%7C%7C?hl=en",
        "text": {
          "en": "It's exceptional!!! The best Chucho cake on the island",
          "es": "¡Es excepcional! El mejor pastel de chucho de la isla."
        }
      },
      {
        "author": "emilio colon",
        "rating": 1,
        "date": "2026-04-30",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tkTVVVUnFXa1IxZEMxeVpHcHJWSEJaT0ZSc1RHYxAB!2m1!1s0x0:0x38d6a99ffa89ef6c!3m1!1s2@1:CAIQACodChtycF9oOkdMUURqWkR1dC1yZGprVHBZOFRsTGc%7C%7C?hl=en",
        "text": {
          "en": "Friends, \"FUE\" isn't what it used to be. The food is reheated, oily, and tasteless. It's a real shame. They try their best to be friendly, but the food isn't good quality, and it made my wife sick. I ordered Chucho's cake, and I barely touched it. Friends, it's a pity.",
          "es": "Amigos, \"FUE\" ya no es lo que era. La comida está recalentada, grasosa y sin sabor. Es una verdadera lástima. Se esfuerzan por ser amables, pero la comida no es de buena calidad y le hizo daño a mi esposa. Pedí el pastel de chucho y apenas lo probé. Amigos, es una pena."
        }
      },
      {
        "author": "Mercy Leiva",
        "rating": 4,
        "date": "2026-04-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21kWGVsYzBlR3hDYkZNMWRrOHdha3BOYjJzNWRWRRAB!2m1!1s0x0:0x38d6a99ffa89ef6c!3m1!1s2@1:CAIQACodChtycF9oOmdXelc0eGxCbFM1dk8wakpNb2s5dVE%7C%7C?hl=en",
        "text": {
          "en": "Despite having made a reservation for lunch, upon arrival there was not enough availability of the restaurant's signature dish.",
          "es": "A pesar de haber reservado para el almuerzo, al llegar no había suficiente disponibilidad del plato insignia del restaurante."
        }
      },
      {
        "author": "Josue Caldera",
        "rating": 5,
        "date": "2026-04-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xWRFZUZGpaRFpTTVMxMGNISnhNSHByWWpsck4wRRAB!2m1!1s0x0:0x38d6a99ffa89ef6c!3m1!1s2@1:CAIQACodChtycF9oOlVDVTdjZDZSMS10cHJxMHprYjlrN0E%7C%7C?hl=en",
        "text": {
          "en": "Excellent place to eat and drink. Typical and tasty dishes. They have air conditioning, and you can even write little notes on the walls with a marker to leave your mark.",
          "es": "Excelente lugar para comer y beber. Platos típicos y sabrosos. Tienen aire acondicionado y hasta puedes escribir notitas en las paredes con un marcador para dejar tu huella."
        }
      },
      {
        "author": "Johny Bermudez",
        "rating": 5,
        "date": "2026-04-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT214RmFGZ3laRU4zU0VkRE9EQnBiWEY1WldOaWRXYxAB!2m1!1s0x0:0x38d6a99ffa89ef6c!3m1!1s2@1:CAIQACodChtycF9oOmxFaFgyZEN3SEdDODBpbXF5ZWNidWc%7C%7C?hl=en",
        "text": {
          "en": "Ever since I arrived on Margarita Island, locals kept recommending this restaurant. I went on my first day there, and it was definitely the best choice. I have been back, and I can tell you it is one of the best, from the food to the service. You absolutely have to try the famous \"Pastel de Chucho\" (Chucho Pie); it is part of the experience on this enchanting island. Thank you.",
          "es": "Desde que llegué a la Isla de Margarita, los locales no dejaban de recomendarme este restaurante. Fui el primer día y sin duda fue la mejor elección. He vuelto y puedo decirte que es de los mejores, desde la comida hasta el servicio. Tienes que probar el famoso \"pastel de chucho\"; es parte de la experiencia en esta isla encantadora. Gracias."
        }
      }
    ]
  },
  {
    "id": "ChIJ62eWAxKPMYwR1LG8tlEuXRQ",
    "name": "Cucina Simpatica",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "X5VH+JCV, Av. Santiago Mariño, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.994112,
    "lng": -63.82139,
    "rating": 4.6,
    "ratingCount": 269,
    "priceLevel": 3,
    "googleMapsUri": "https://maps.google.com/?cid=1467379982085698004&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://cucinasimpatica.com.ve/",
    "phone": "0424-8914944",
    "reviews": [
      {
        "author": "anatsanchez",
        "rating": 5,
        "date": "2026-07-25",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d27473175-r1069897235-Cucina_Simpatica-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "A wonderful place, with excellent service and a pleasant atmosphere. The food is very good.",
          "es": "Un lugar maravilloso, con excelente servicio y un ambiente agradable. La comida es muy buena."
        }
      },
      {
        "author": "NELLArest",
        "rating": 5,
        "date": "2025-09-04",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d27473175-r1028803266-Cucina_Simpatica-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Delicious pasta , very careful attention .. know how to offer and show your menu the staff is trained. \nEnough quantities and the homemade pasta has a wide range of amazing sauces. \nFor those who dare they have pastas with sea urchin, roe of smooth \nIt was our 4 visit, we'll come back.. we'll come back..,",
          "es": "Pasta deliciosa y una atención muy esmerada: saben ofrecer y mostrar su menú, el personal está capacitado.\nCantidades suficientes y la pasta casera tiene una amplia variedad de salsas increíbles.\nPara los que se atrevan, tienen pastas con erizo de mar y huevas.\nEra nuestra cuarta visita; volveremos... volveremos..."
        }
      },
      {
        "author": "KarenCortes",
        "rating": 5,
        "date": "2024-07-25",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d27473175-r961486722-Cucina_Simpatica-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent Italian food, simple and tasty. Nice atmosphere, impeccable and pleasant attention. Everything was fresh, well, tasty. Located in the heart of Jorge Coll. Vale la\nShame to go...",
          "es": "Excelente comida italiana, sencilla y sabrosa. Buen ambiente, atención impecable y agradable. Todo fresco, bien hecho y sabroso. Ubicado en el corazón de Jorge Coll. Vale la\npena ir..."
        }
      },
      {
        "author": "Rafael Herrera Anzivino",
        "rating": 5,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tsM2RTMU1jSFZTVWtaeVkzcGxhMDF6UmxNeVVGRRAB!2m1!1s0x0:0x145d2e51b6bcb1d4!3m1!1s2@1:CAIQACodChtycF9oOkl3dS1McHVSUkZyY3pla01zRlMyUFE%7C%7C?hl=en",
        "text": {
          "en": "Delicious homemade Italian food.",
          "es": "Deliciosa comida italiana casera."
        }
      },
      {
        "author": "manuel caraballo",
        "rating": 5,
        "date": "2026-08-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tvNGJXWlBiRFpmTTJreldVSllXV05zVkVGb2QxRRAB!2m1!1s0x0:0x145d2e51b6bcb1d4!3m1!1s2@1:CAIQACodChtycF9oOko4bWZPbDZfM2kzWUJYWWNsVEFod1E%7C%7C?hl=en",
        "text": {
          "en": "I really enjoyed the food; a very welcoming restaurant with truly Italian dishes (Una vera rappresentazione dell'Italia in Venezuela)",
          "es": "Disfruté mucho la comida; un restaurante muy acogedor con platos verdaderamente italianos (Una vera rappresentazione dell'Italia in Venezuela)."
        }
      },
      {
        "author": "Maria Fernanda Pérez",
        "rating": 3,
        "date": "2026-08-13",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21SZloydHRTa0ZUUTJoUFVHa3haM2gxVERKME4xRRAB!2m1!1s0x0:0x145d2e51b6bcb1d4!3m1!1s2@1:CAIQACodChtycF9oOmRfZ2ttSkFTQ2hPUGkxZ3h1TDJ0N1E%7C%7C?hl=en",
        "text": {
          "en": "There are 5 or 6 Italian restaurants on the island where the food is better. The place is pleasant, the service is good, and parking is easy, but unfortunately, the food doesn't live up to the dining room experience. I ordered pasta al vongole, which was bland, tasteless, and completely overcooked. The rest of the table ordered pappardelle with ossobuco ragu, which was also rather bland; in this case, it was cooked al dente but lacked flavor. The children had the pesto pasta, and the carbonara was just acceptable. The prices are exorbitant for the quality. I recommend visiting Gambero Rosso, Gaia, Francelina, Carissa, and Portarossa.",
          "es": "Hay 5 o 6 restaurantes italianos en la isla donde se come mejor. El lugar es agradable, el servicio es bueno y el estacionamiento es fácil, pero lamentablemente la comida no está a la altura de la experiencia del salón. Pedí pasta al vongole, que estaba sosa, sin sabor y completamente pasada. El resto de la mesa pidió pappardelle con ragú de ossobuco, también bastante sosa; en este caso estaba al dente pero sin sabor. Los niños pidieron la pasta al pesto, y la carbonara era apenas aceptable. Los precios son exorbitantes para la calidad. Recomiendo visitar Gambero Rosso, Gaia, Francelina, Carissa y Portarossa."
        }
      },
      {
        "author": "Paola Giannone",
        "rating": 5,
        "date": "2026-08-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2kxelYwWkZRbXBJVWtzMVgybzVOMUZyU0hoT1ptYxAB!2m1!1s0x0:0x145d2e51b6bcb1d4!3m1!1s2@1:CAIQACodChtycF9oOi1zV0ZFQmpIUks1X2o5N1FrSHhOZmc%7C%7C?hl=en",
        "text": {
          "en": "The food was excellent, the service very good, and the atmosphere welcoming. I highly recommend it! ✅",
          "es": "La comida fue excelente, el servicio muy bueno y el ambiente acogedor. ¡Lo recomiendo mucho! ✅"
        }
      },
      {
        "author": "Tatiana Fox",
        "rating": 5,
        "date": "2026-07-31",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21SWFZFSnNOVmRwTjJkM1pDMVBhRmd4UmpjMFYyYxAB!2m1!1s0x0:0x145d2e51b6bcb1d4!3m1!1s2@1:CAIQACodChtycF9oOmRXVEJsNVdpN2d3ZC1PaFgxRjc0V2c%7C%7C?hl=en",
        "text": {
          "en": "I had the pleasure of visiting Cucina Simpatica on Jorge Coll after several people recommended it. I went with high expectations... and they still managed to exceed them.\n\nI ordered tiramisu, eggplant with vinaigrette, and focaccia, and I was left wanting more. Everything was absolutely delicious. The tiramisu was heavenly, and both the focaccia and the eggplant were exquisite.\n\nI also took a peek inside the restaurant, and I must say the service was excellent. The staff's friendliness is evident from the moment you walk in, and the place is simply beautiful. You can see the care and attention they've put into every detail, creating a truly charming atmosphere.\n\nI'm so happy to be back in Margarita and find places of this quality, where extraordinary food, exceptional service, and an experience that makes you want to return come together. This is the Venezuela worth talking about and supporting.\n\n100% recommended.",
          "es": "Tuve el placer de visitar Cucina Simpatica en Jorge Coll después de que varias personas me la recomendaran. Fui con altas expectativas... y aun así lograron superarlas.\n\nPedí tiramisú, berenjena a la vinagreta y focaccia, y me quedé con ganas de más. Todo estaba absolutamente delicioso. El tiramisú era celestial, y tanto la focaccia como la berenjena estaban exquisitas.\n\nTambién eché un vistazo al interior del restaurante y debo decir que el servicio fue excelente. La amabilidad del personal se nota desde que entras, y el lugar es simplemente hermoso. Se ve el cuidado y la atención que han puesto en cada detalle, creando un ambiente realmente encantador.\n\nEstoy muy feliz de volver a Margarita y encontrar lugares de esta calidad, donde se combinan comida extraordinaria, servicio excepcional y una experiencia que te dan ganas de volver. Esta es la Venezuela de la que vale la pena hablar y apoyar.\n\n100 % recomendado."
        }
      },
      {
        "author": "Carlos Enrique Lamanna Olaizola",
        "rating": 4,
        "date": "2026-05-30",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210WWJYcHRNR3B0VURSYWFtUTRiWFI0U0RCbFVuYxAB!2m1!1s0x0:0x145d2e51b6bcb1d4!3m1!1s2@1:CAIQACodChtycF9oOmtYbXptMGptUDRaamQ4bXR4SDBlUnc%7C%7C?hl=en",
        "text": {
          "en": "The food was excellent. The menu was very good. The service (Salomé) was outstanding. Highly recommended.",
          "es": "La comida fue excelente. El menú era muy bueno. El servicio (Salomé) fue sobresaliente. Muy recomendado."
        }
      }
    ]
  },
  {
    "id": "ChIJP7OxN4OPMYwRUAoWLiI3QVQ",
    "name": "FRANCELINA FOOD",
    "category": {
      "es": "Restaurante italiano",
      "en": "Italian Restaurant"
    },
    "address": "X5HH+RP, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.979484,
    "lng": -63.820566,
    "rating": 4.5,
    "ratingCount": 2304,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=6071194392613751376&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/francelina.ve/",
    "phone": "0412-2595133",
    "reviews": [
      {
        "author": "Carlos Eduardo Rojas",
        "rating": 3,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21oUlRVVnBkakJqUkY5RVdFSlpXa2RrYjBSUVVtYxAB!2m1!1s0x0:0x544137222e160a50!3m1!1s2@1:CAIQACodChtycF9oOmhRTUVpdjBjRF9EWEJZWkdkb0RQUmc%7C%7C?hl=en",
        "text": {
          "en": "The portions were very small, and none of the dishes were anything special. I would expect more from a restaurant at those prices.",
          "es": "Las porciones eran muy pequeñas y ninguno de los platos era nada del otro mundo. Esperaría más de un restaurante con esos precios."
        }
      },
      {
        "author": "Miguel Angel Herrera Solorzano",
        "rating": 5,
        "date": "2026-09-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tObFdsVnZTWEExTm5nMlZYbG9jMlpoTFhnM00wRRAB!2m1!1s0x0:0x544137222e160a50!3m1!1s2@1:CAIQACodChtycF9oOkNlWlVvSXA1Nng2VXloc2ZhLXg3M0E%7C%7C?hl=en",
        "text": {
          "en": "Very good",
          "es": "Muy bueno"
        }
      },
      {
        "author": "Luis Eduardo Peláez Díaz",
        "rating": 5,
        "date": "2026-09-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2paQ1psaE5VMTkyTkhNMGVEUkZjVU14T0VWclNrRRAB!2m1!1s0x0:0x544137222e160a50!3m1!1s2@1:CAIQACodChtycF9oOjZCZlhNU192NHM0eDRFcUMxOEVrSkE%7C%7C?hl=en",
        "text": {
          "en": "A bit pricey, but the food was very good",
          "es": "Un poco caro, pero la comida estaba muy buena."
        }
      },
      {
        "author": "Carlos Kandutsch",
        "rating": 3,
        "date": "2026-09-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2toSlRtOHpSMEZTVVRVMlNIbzFkRWs1VUROQllVRRAB!2m1!1s0x0:0x544137222e160a50!3m1!1s2@1:CAIQACodChtycF9oOkhJTm8zR0FSUTU2SHo1dEk5UDNBYUE%7C%7C?hl=en",
        "text": {
          "en": "The ice cream shop: excellent, the flavors are spectacular, there's a great variety, prices are a bit high depending on the extras you order. I don't understand why they have a counter in front of the ice cream but make you go all the way up to the main counter, which is always packed, to order ice cream.\n\nThe restaurant: overrated, the food is average, the flavor is nothing special, and the prices are quite high. For example, a steak with fries costs $30 for 200 grams of meat. Even in Caracas, restaurants specializing in American cuts of meat don't charge those prices.\n\nWe ate: Emiliana pizza\nPala Ripiena pizza\nRegular Margherita pizza\n2 Frappuccino lemonades\n1 Chinotto (a type of soda)\n1 Diet Pepsi\n1 large coffee\nWe paid $75\n\nThe atmosphere: excellent, super nice and cozy.",
          "es": "La heladería: excelente, los sabores son espectaculares, hay mucha variedad; los precios son algo altos según los extras que pidas. No entiendo por qué tienen un mostrador frente a los helados pero te obligan a subir hasta el mostrador principal, que siempre está lleno, para pedir el helado.\n\nEl restaurante: sobrevalorado, la comida es normal, el sabor no tiene nada especial y los precios son bastante altos. Por ejemplo, un bisteck con papas cuesta 30 $ por 200 gramos de carne. Ni en Caracas los restaurantes especializados en cortes americanos cobran esos precios.\n\nComimos: pizza Emiliana\nPizza Pala Ripiena\nPizza Margarita normal\n2 limonadas Frappuccino\n1 Chinotto (un tipo de refresco)\n1 Pepsi Light\n1 café grande\nPagamos 75 $\n\nEl ambiente: excelente, súper lindo y acogedor."
        }
      },
      {
        "author": "Atilano Principal",
        "rating": 5,
        "date": "2026-09-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21kcldtbFZhbWhNYTBOWWVUSlZUVFUzVlZFNWNFRRAB!2m1!1s0x0:0x544137222e160a50!3m1!1s2@1:CAIQACodChtycF9oOmdrWmlVamhMa0NYeTJVTTU3VVE5cEE%7C%7C?hl=en",
        "text": {
          "en": "Everything was great. Very pleased with Nicolas's excellent service.",
          "es": "Todo estuvo excelente. Muy satisfecho con el excelente servicio de Nicolás."
        }
      },
      {
        "author": "Camila Principal",
        "rating": 5,
        "date": "2026-09-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tKb2RWaFhMVFY0TlZabE1VaDJYME4xUnpKdlpFRRAB!2m1!1s0x0:0x544137222e160a50!3m1!1s2@1:CAIQACodChtycF9oOkJodVhXLTV4NVZlMUh2X0N1RzJvZEE%7C%7C?hl=en",
        "text": {
          "en": "Everything was great, the food was very good as always, thank you for the service and attention from Nicolás",
          "es": "Todo estuvo excelente, la comida muy buena como siempre; gracias por el servicio y la atención de Nicolás."
        }
      }
    ]
  },
  {
    "id": "ChIJr9ChBbGOMYwRsYi0f3VAbfE",
    "name": "Punto Criollo",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "Calle Igualdad, Edificio Flor Violeta, Entre Fraternidad Y Fajardo, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.95696,
    "lng": -63.848414,
    "rating": 4.5,
    "ratingCount": 1361,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=17396631808999983281&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://instagram.com/puntocriollo_porlamar",
    "phone": "0412-5394939",
    "reviews": [
      {
        "author": "Rogervant",
        "rating": 4,
        "date": "2024-03-29",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r944419052-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "It was definitely good for the price! and delicious, the meat had a very soft taste, there was a milk sauce on it, not bad, definitely recommended, friendly staff!! And quiet!!",
          "es": "¡Definitivamente bueno por el precio! Y delicioso: la carne tenía un sabor muy suave, con una salsa de leche encima, nada mal. ¡Muy recomendado, personal amable! ¡Y tranquilo!"
        }
      },
      {
        "author": "Rafael3000",
        "rating": 2,
        "date": "2022-06-03",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r841186549-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "The food quality is low, very greasy, made without care, and the service is average; the area is very run-down. I used to go when I was very young and it was a reference; now I won't go back. Solidarity price... what a shame, it used to be good, but good-quality competition has emerged in Pampatar and Porlamar.",
          "es": "La calidad de la comida es baja, muy grasosa, hecha sin cariño, y el servicio es normal; la zona está muy deteriorada. Iba cuando era muy joven y era referencia; ahora no vuelvo más. Precio solidario... qué lástima, era bueno, pero ha surgido competencia de buena cocina en Pampatar y Porlamar."
        }
      },
      {
        "author": "milanyela",
        "rating": 5,
        "date": "2020-08-16",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r765248691-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "Excellent food, flavor, presentation and service. I recommend it when visiting Porlamar. Excellent prices. The service is immediate; they don't keep you waiting.",
          "es": "Excelente comida, sabor, presentación y atención. Se los recomiendo al visitar Porlamar. Excelentes precios. La atención es inmediata, no te dejan esperando."
        }
      },
      {
        "author": "jaina r",
        "rating": 5,
        "date": "2020-05-20",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r755247362-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "The best restaurant on the island, wonderful and generous dishes, first-rate juices, 10/10 service.",
          "es": "El mejor restaurante de la isla, platos maravillosos y bien servidos, jugos de primera, atención de 10."
        }
      },
      {
        "author": "Santanaindira",
        "rating": 5,
        "date": "2020-02-24",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r747274377-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "Punto Criollo, an excellent restaurant at a good price, personalized service, very friendly, large portions, reasonable prices in line with the portion sizes. We think it's one of the best options on the island if you want to eat affordably, with variety, flavor, a good atmosphere and as a family.",
          "es": "Punto Criollo, excelente restaurante a buen precio, atención personalizada, muy amables, porciones grandes, precios razonables acordes al tamaño de las porciones. Nos parece una de las mejores opciones de la isla si se quiere comer económico, variado, sabroso, con buen ambiente y en familia."
        }
      },
      {
        "author": "Rogervant",
        "rating": 4,
        "date": "2019-12-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r733978941-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "It's always good! And many different menus available! Everything is well taken care of! The people are friendly, the place is neat and clean. Recommended.",
          "es": "¡Siempre está bueno! ¡Y hay muchos menús diferentes disponibles! ¡Todo está bien cuidado! La gente es amable, el local es ordenado y limpio. Recomendado."
        }
      },
      {
        "author": "Andres R",
        "rating": 4,
        "date": "2019-11-25",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r728774396-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "With a great selection of arepas fillings and good lunch plates, this restaurant has kept its reputation of good food and good service for more than 20 years. A fruit shake and a filled arepa make a good breakfast or lunch at an affordable price. Always a good alternative.",
          "es": "Con una gran variedad de rellenos para arepas y buenos platos de almuerzo, este restaurante ha mantenido su reputación de buena comida y buen servicio por más de 20 años. Un batido de frutas y una arepa rellena hacen un buen desayuno o almuerzo a un precio accesible. Siempre una buena alternativa."
        }
      },
      {
        "author": "176shaheed",
        "rating": 1,
        "date": "2019-11-06",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r724399761-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "Great taste, extra large portions, par excellence service and low price is what you get at Punto Criollo. Returning soon... bon appetite",
          "es": "Gran sabor, porciones extra grandes, un servicio por excelencia y precios bajos es lo que encuentras en Punto Criollo. Volveré pronto... ¡buen provecho!"
        }
      },
      {
        "author": "Ruocco R",
        "rating": 4,
        "date": "2019-09-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r711921303-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "In general the food is good and the service is fast; although when there are many people there's plenty of staff... that's why the response is fast. I've been to other restaurants in Margarita where they leave you waiting up to an hour for a dish.",
          "es": "En general la comida es buena y la atención es rápida, aunque cuando hay mucha gente hay mucho personal... por eso la respuesta es rápida. He ido a otros restaurantes en Margarita donde a uno lo dejan esperando hasta una hora por un plato."
        }
      },
      {
        "author": "Dámaso V",
        "rating": 5,
        "date": "2019-09-04",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316062-d1084123-r706382978-Restaurant_Punto_Criollo-Porlamar_Margarita_Island_Coastal_Islands_Insular_Regio.html",
        "text": {
          "en": "The service is excellent, enough staff who meet the service standards of a good restaurant; the dishes are mainly good-quality criollo food.",
          "es": "La atención es excelente, suficiente personal que cumple con los estándares de atención de un buen restaurante; los platos son principalmente comida criolla de buena calidad."
        }
      },
      {
        "author": "Luis Miquel",
        "rating": 2,
        "date": "2026-09-02",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xOR2VVbGtiVVV3T1V4NlRGWk5XRm95ZVhsbFRtYxAB!2m1!1s0x0:0xf16d40757fb488b1!3m1!1s2@1:CAIQACodChtycF9oOlNGeUlkbUUwOUx6TFZNWFoyeXllTmc%7C%7C?hl=en",
        "text": {
          "en": "It's a very old restaurant that's completely outdated. The atmosphere is depressing. The food is decent but unpretentious, and the dishes are expensive. The waiter who served us had a bad attitude.",
          "es": "Es un restaurante muy antiguo y completamente anticuado. El ambiente es deprimente. La comida es decente pero sin pretensiones, y los platos son caros. El mesero que nos atendió tenía mala actitud."
        }
      },
      {
        "author": "Julio Noguera",
        "rating": 5,
        "date": "2026-09-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURlXzRiUFJREAE!2m1!1s0x0:0xf16d40757fb488b1!3m1!1s2@1:CIHM0ogKEICAgIDe_4bPRQ%7C%7C?hl=en",
        "text": {
          "en": "Excellent and 100% recommended",
          "es": "Excelente y 100 % recomendado"
        }
      },
      {
        "author": "Anibal Fasanaro",
        "rating": 5,
        "date": "2026-09-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25WeVVFaERkVEZ3ZDJkbU5rSTVaak5aTFhoWWVWRRAB!2m1!1s0x0:0xf16d40757fb488b1!3m1!1s2@1:CAIQACodChtycF9oOnVyUEhDdTFwd2dmNkI5ZjNZLXhYeVE%7C%7C?hl=en",
        "text": {
          "en": "A great place to eat fish... or any kind of set menu... excellent, thank you!",
          "es": "Un gran lugar para comer pescado... o cualquier menú del día... excelente, ¡gracias!"
        }
      },
      {
        "author": "Gerardo José González Gómez",
        "rating": 5,
        "date": "2026-08-27",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2sxdVZsOWpRakZ3YVZKaVoxcGFXbTAwVGpoQ1dWRRAB!2m1!1s0x0:0xf16d40757fb488b1!3m1!1s2@1:CAIQACodChtycF9oOk1uVl9jQjFwaVJiZ1paWm00TjhCWVE%7C%7C?hl=en",
        "text": {
          "en": "The best food on the island. As always.",
          "es": "La mejor comida de la isla. Como siempre."
        }
      },
      {
        "author": "Juan Andrade",
        "rating": 5,
        "date": "2026-08-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25GUGFUWmFiVlpDYms1TGNFdHZOakYzWjBVMllrRRAB!2m1!1s0x0:0xf16d40757fb488b1!3m1!1s2@1:CAIQACodChtycF9oOnFPaTZabVZCbk5LcEtvNjF3Z0U2YkE%7C%7C?hl=en",
        "text": {
          "en": "Excellent, very good service, excellent menu overall.",
          "es": "Excelente, muy buen servicio, excelente menú en general."
        }
      },
      {
        "author": "Heilin Rosas",
        "rating": 1,
        "date": "2026-08-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2toRFMzTTRVbk5LV1ZsaFUza3hNMmRvTWpKQlQwRRAB!2m1!1s0x0:0xf16d40757fb488b1!3m1!1s2@1:CAIQACodChtycF9oOkhDS3M4UnNKWVlhU3kxM2doMjJBT0E%7C%7C?hl=en",
        "text": {
          "en": "They need to be more careful, because I ordered the $14.50 grill for one person and they charged me for the $29 one... and I complained and nothing, they charge whatever they want and on top of that the meat was awful, very tough, inedible.",
          "es": "Deben tener más cuidado, porque pedí la parrilla para una persona de 14,50 $ y me cobraron la de 29 $... y me quejé y nada: cobran lo que quieren y encima la carne estaba horrible, muy dura, incomible."
        }
      }
    ]
  },
  {
    "id": "ChIJtcLUAZqPMYwRgstr3v8nY7o",
    "name": "Guayoyo Cafe Restaurant",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "C. El Cristo, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.995804,
    "lng": -63.787158,
    "rating": 4.5,
    "ratingCount": 648,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=13430622493650701186&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.ldhoteles.com/hoteles/aria-by-ld",
    "phone": "0412-0940284",
    "reviews": [
      {
        "author": "Juann D",
        "rating": 3,
        "date": "2026-07-04",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1066723774-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "It has the best view of Margarita Island! You will not find a better place than this. I only ask the management to revamp the food; there are many things to improve.",
          "es": "¡Tiene la mejor vista de la Isla de Margarita! No encontrarás un lugar mejor que este. Solo le pido a la gerencia que renueve la comida; hay muchas cosas por mejorar."
        }
      },
      {
        "author": "Pad A",
        "rating": 5,
        "date": "2026-06-21",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1065123459-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Well, excellent view and excellent food.",
          "es": "Bueno, excelente vista y excelente comida."
        }
      },
      {
        "author": "Betty F",
        "rating": 3,
        "date": "2026-05-26",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1061775973-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The place is beautiful, cozy, and has a stunning view. However, when we asked the waiter about the size of the ceviche portion, he said it came in a quite deep plate and was a good portion; upon arrival, it indeed came in a deep plate, but the ceviche portion was approximately 2 tablespoons. I found it to be a complete joke given the price to pay. In other places I visited on the island, the ceviche portions were large (and the plates were also individual), the price was exactly the same or lower, and they surpassed it in flavor and quality. I believe that waiters should be completely honest when discussing food portions; that is why they are asked. I mentioned it to the waiter, and his only solution was, \"Please leave your comment and complaint on this page.\" Of course, it did not make me want to eat anything else nor did it make me want to return; they should improve the food portions and the service.",
          "es": "El lugar es hermoso, acogedor y tiene una vista impresionante. Sin embargo, cuando le preguntamos al mesero por el tamaño de la porción del ceviche, dijo que venía en un plato bastante hondo y que era una buena porción; al llegar, efectivamente venía en un plato hondo, pero la porción de ceviche era de aproximadamente 2 cucharadas. Me pareció una burla total por el precio a pagar. En otros lugares que visité en la isla, las porciones de ceviche eran grandes (y los platos también eran individuales), el precio era igual o menor, y lo superaban en sabor y calidad. Creo que los meseros deberían ser totalmente honestos al hablar de las porciones; por eso se les pregunta. Se lo comenté al mesero y su única solución fue: \"Deje su comentario y queja en esta página\". Por supuesto, no me dieron ganas de comer nada más ni de volver; deberían mejorar las porciones y el servicio."
        }
      },
      {
        "author": "Franshesca Alex... H",
        "rating": 4,
        "date": "2026-05-03",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1058726400-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "I ordered a burger and the meat was unopened, burned and the bread was burned, it had almost no taste",
          "es": "Pedí una hamburguesa y la carne estaba cruda, quemada, y el pan quemado; casi no tenía sabor."
        }
      },
      {
        "author": "Alfredo M",
        "rating": 5,
        "date": "2026-03-27",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1054355710-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent food and attention, place to enjoy",
          "es": "Excelente comida y atención, un lugar para disfrutar."
        }
      },
      {
        "author": "Dioner V",
        "rating": 5,
        "date": "2026-01-05",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1045024256-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The experience was great, even though it was full, the attention was quick and the food and drinks excellent. I ordered a chicken burger that they offer as a crispy, but in my case I asked them to make it for me and they did, thank you very much. The burger was delicious, a spectacular bread, the taste nothing to envy the big chains. We also ordered some small ones and they were spectacular, without a doubt, some of the best I have eaten on the island. Friends ordered hot chocolate with churros and told us they were very good. Overall the experience was 10/10.",
          "es": "La experiencia fue genial; aunque estaba lleno, la atención fue rápida y la comida y las bebidas excelentes. Pedí una hamburguesa de pollo que ofrecen como crispy, pero en mi caso pedí que me la hicieran así y lo hicieron, muchas gracias. La hamburguesa estaba deliciosa, un pan espectacular, el sabor no tiene nada que envidiar a las grandes cadenas. También pedimos unas pequeñas y estaban espectaculares; sin duda, de las mejores que he comido en la isla. Unos amigos pidieron chocolate caliente con churros y nos dijeron que estaban muy buenos. En general la experiencia fue 10/10."
        }
      },
      {
        "author": "Marycarmen",
        "rating": 2,
        "date": "2026-01-05",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1044946882-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The inedible pizza, raw , is better the one they sell in the super I do not recommend, the attention of the waiters bad, they do not come to see if something is needed, the food takes a long time and that was not many people, they can improve because the spectacular place, pity that there was no seafood not tartar, the skewers were good, the divine music",
          "es": "La pizza incomible, cruda; es mejor la que venden en el súper. No la recomiendo. La atención de los meseros, mala: no vienen a ver si necesitas algo, la comida tarda mucho y no había mucha gente. Pueden mejorar porque el lugar es espectacular. Lástima que no había mariscos ni tártaro. Las brochetas estaban buenas y la música, divina."
        }
      },
      {
        "author": "Maria Valentina G",
        "rating": 1,
        "date": "2025-12-28",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1043915545-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "I've never had worse restaurant service. Bad service. With 3 weeks reservation, we were not given a table until 1 hour later. The service took care of us completely badly, ignoring us, mixing orders, forgetting what we ordered, returning every 20 minutes. The charcoal was overcooked and was not pancheta but bacon. They invented a recipe for coconut lemonade, if they don't and can't offer it, don't offer it. \n\nIn general, I would not return or recommend this place, no matter how good of esteem I have on the whole island.",
          "es": "Nunca me habían atendido peor en un restaurante. Mal servicio. Con reserva de 3 semanas, no nos dieron mesa hasta 1 hora después. El servicio nos atendió pésimo: nos ignoraban, mezclaban los pedidos, olvidaban lo que pedíamos, volvían cada 20 minutos. El carbón estaba pasado y no era pancheta sino tocineta. Se inventaron una receta de limonada de coco; si no la tienen y no pueden ofrecerla, que no la ofrezcan.\n\nEn general, no volvería ni recomendaría este lugar, por más buena estima que tenga de toda la isla."
        }
      },
      {
        "author": "Valeria G",
        "rating": 1,
        "date": "2025-12-28",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1043915182-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Dismal service, the waiters were rude and negligent. Eternal waiting times to receive anything (change of tables, drinks, meals). Poor food preparation, especially carbonara pasta.",
          "es": "Servicio deplorable, los meseros fueron groseros y negligentes. Tiempos de espera eternos para recibir cualquier cosa (cambio de mesa, bebidas, comidas). Mala preparación de la comida, sobre todo la pasta carbonara."
        }
      },
      {
        "author": "Mariana C",
        "rating": 1,
        "date": "2025-12-28",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d1020318-r1043914791-Guayoyo_Gastro_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Bad experience. Starting with we booked 1 month before coming and when we arrived we were kept waiting about 1 hour to sit on the terrace. Second, we ordered coconut lemonades and they were nothing to do with what was expected, the lemon was on the one hand the taste of coconut tasted old how little it felt.  As for the main dishes, we ordered pasta carbonara that was not al dente, the salsa carbonara did not cream, and it did not feel the flavor of guanciale, believing that it is bacon rather than guanciale. For each order it took more than 25 minutes both to respond and to bring the order. And the meals came at different times, some finished eating before the carbonaras arrived. \n\nThe lousy service, we were ignored and the deal was rude. Both with each other and with us. \n\nNo desire to return.",
          "es": "Mala experiencia. Para empezar, reservamos 1 mes antes y al llegar nos tuvieron esperando alrededor de 1 hora para sentarnos en la terraza. Segundo, pedimos limonadas de coco y no tenían nada que ver con lo esperado: el limón por un lado y el sabor a coco sabía viejo, apenas se sentía. En cuanto a los platos principales, pedimos pasta carbonara que no estaba al dente, la salsa carbonara no cremaba y no se sentía el sabor del guanciale; creo que es tocineta y no guanciale. Cada pedido tardó más de 25 minutos tanto en responder como en traerlo. Y las comidas llegaron en momentos distintos; algunos terminaron de comer antes de que llegaran las carbonaras.\n\nEl servicio, pésimo: nos ignoraron y el trato fue grosero. Tanto entre ellos como con nosotros.\n\nSin ganas de volver."
        }
      },
      {
        "author": "fer rosa",
        "rating": 5,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pGSGNXeE1aamh4U2xrMVRGVTRUVlpyWlZWRFNYYxAB!2m1!1s0x0:0xba6327ffde6bcb82!3m1!1s2@1:CAIQACodChtycF9oOjFHcWxMZjhxSlk1TFU4TVZrZVVDSXc%7C%7C?hl=en",
        "text": {
          "en": "It's the perfect spot to drop in mid-afternoon for a delicious coffee while watching the sunset, or to linger for dinner under the stars.\nThe food lives up to the experience. It's simply excellent: beautifully presented dishes, fresh ingredients, and well-balanced flavors that will please any palate. What's more, the service is attentive and friendly, making you feel comfortable from the moment you arrive.",
          "es": "Es el lugar perfecto para entrar a media tarde a tomar un café delicioso mientras ves el atardecer, o para quedarte a cenar bajo las estrellas.\nLa comida está a la altura de la experiencia. Es simplemente excelente: platos bellamente presentados, ingredientes frescos y sabores bien equilibrados que complacerán a cualquier paladar. Además, el servicio es atento y amable, y te hace sentir cómodo desde que llegas."
        }
      },
      {
        "author": "Carlos Luis",
        "rating": 5,
        "date": "2026-09-03",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s1d09IZHdVVWRwWWxKcVpIaDFSVXRHWDFKYVVIYxAB!2m1!1s0x0:0xba6327ffde6bcb82!3m1!1s2@1:CAIQACodChtycF9oOk5wOHdwUUdpYlJqZHh1RUtGX1JaUHc%7C%7C?hl=en",
        "text": {
          "en": "An excellent experience at Guayoyo Gastro Bar in Pampatar. The place has a spectacular ocean view, ideal for enjoying the sunset and spending a very pleasant time in a relaxed atmosphere. The service was excellent: the staff was very friendly, attentive, and always looking out for us. Without a doubt, a charming place, perfect for sharing and enjoying a beautiful view. Highly recommended!",
          "es": "Una excelente experiencia en Guayoyo Gastro Bar de Pampatar. El lugar tiene una vista espectacular al océano, ideal para disfrutar del atardecer y pasar un rato muy agradable en un ambiente relajado. El servicio fue excelente: el personal fue muy amable, atento y siempre pendiente de nosotros. Sin duda, un lugar encantador, perfecto para compartir y disfrutar de una vista hermosa. ¡Muy recomendado!"
        }
      },
      {
        "author": "Gabrianny Zaa",
        "rating": 4,
        "date": "2026-08-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21aaGJuQlVORmxoTW10MVlqQmxkakZyUkRWVU4zYxAB!2m1!1s0x0:0xba6327ffde6bcb82!3m1!1s2@1:CAIQACodChtycF9oOmZhbnBUNFlhMmt1YjBldjFrRDVUN3c%7C%7C?hl=en",
        "text": {
          "en": "The place is beautiful, and even more so for watching the sunset.\nPrices are a bit high. A coconut coffee is $7.",
          "es": "El lugar es hermoso, y más aún para ver el atardecer.\nLos precios son un poco altos. Un café de coco cuesta 7 $."
        }
      },
      {
        "author": "Raquel Morales",
        "rating": 5,
        "date": "2026-08-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tOTVlsVkJTWHB3UW0xRFRscG9VbkZLU21WdVgzYxAB!2m1!1s0x0:0xba6327ffde6bcb82!3m1!1s2@1:CAIQACodChtycF9oOkNMYlVBSXpwQm1DTlpoUnFKSmVuX3c%7C%7C?hl=en",
        "text": {
          "en": "The octopus carpaccio and the traditional ceviche are incomparable 🤤",
          "es": "El carpaccio de pulpo y el ceviche tradicional son incomparables 🤤"
        }
      },
      {
        "author": "Jeinson Andres Rangel Marquina",
        "rating": 5,
        "date": "2026-06-27",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21SMmFUZzBkRE50YkZOM1YwRjROMVIzT0hsamNtYxAB!2m1!1s0x0:0xba6327ffde6bcb82!3m1!1s2@1:CAIQACodChtycF9oOmR2aTg0dDNtbFN3V0F4N1R3OHljcmc%7C%7C?hl=en",
        "text": {
          "en": "Excellent! Spectacular views and incredible service. One of my favorite places I've ever been! And I'm just sightseeing!",
          "es": "¡Excelente! Vistas espectaculares y un servicio increíble. ¡Uno de mis lugares favoritos en los que he estado! ¡Y solo estoy de paseo!"
        }
      },
      {
        "author": "Wilmersolorzano",
        "rating": 5,
        "date": "2026-06-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21SR2JWZHJWa2RXVVdNMldVUnZhVVF4TW1Ka2JVRRAB!2m1!1s0x0:0xba6327ffde6bcb82!3m1!1s2@1:CAIQACodChtycF9oOmRGbVdrVkdWUWM2WURvaUQxMmJkbUE%7C%7C?hl=en",
        "text": {
          "en": "Everything was excellent, congratulations!",
          "es": "¡Todo estuvo excelente, felicitaciones!"
        }
      }
    ]
  },
  {
    "id": "ChIJpcSxp72PMYwR4jIVaPe-LdY",
    "name": "Restaurant Pola",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "C. J.M Vargas, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.999536,
    "lng": -63.795276,
    "rating": 4.5,
    "ratingCount": 596,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=15433201467880977122&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/polarestaurant/",
    "phone": "0412-3519201",
    "reviews": [
      {
        "author": "JUANCHACIN",
        "rating": 4,
        "date": "2026-05-17",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r1060512969-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "If you are in Pampatar and want to eat traditionally but with great comfort, then Pola is an excellent choice! Incredibly located with access to the beach, two floors, and a terrace with a sea view. We ordered grouper soup and fried snapper. Everything was very tasty, with good presentation. Normal service. It could be better for the place. It is a place to discover and try various dishes. Without a doubt, I will return on my next trip to Isla Margarita.",
          "es": "Si estás en Pampatar y quieres comer tradicional pero con mucha comodidad, ¡Pola es una excelente opción! Increíblemente ubicado, con acceso a la playa, dos pisos y una terraza con vista al mar. Pedimos sopa de cherna y pargo frito. Todo muy sabroso y con buena presentación. Servicio normal; podría ser mejor para el lugar. Es un sitio para descubrir y probar varios platos. Sin duda volveré en mi próximo viaje a la Isla de Margarita."
        }
      },
      {
        "author": "ERNESTO ANDRES R",
        "rating": 4,
        "date": "2023-08-29",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r913562076-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The view is spectacular... The place is traditional and traditional, the treatment is close and very in line with the Family, excellent Jesús! Delicious food.\n\nMaybe the flat one was the cashier when paying.... The rest 💯",
          "es": "La vista es espectacular... El lugar es tradicional, el trato es cercano y muy familiar, ¡excelente Jesús! Comida deliciosa.\n\nQuizá lo flojo fue la cajera al pagar... El resto 💯"
        }
      },
      {
        "author": "Isabela F",
        "rating": 2,
        "date": "2022-07-16",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r848204913-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Pedí un pastel de chucho estaba malisimo, salado, no era el pastel de chucho tradicional, no tenía plátano ni bechamel, muy malo. Caro para lo que es.",
          "es": "Pedí un pastel de chucho y estaba malísimo, salado; no era el pastel de chucho tradicional, no tenía plátano ni bechamel. Muy malo. Caro para lo que es."
        }
      },
      {
        "author": "Rafael3000",
        "rating": 5,
        "date": "2022-05-29",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r840274508-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent Venezuelan eastern cuisine, average prices around $16 per person; I recommend the fish soup, Sierra wheel, and fried snapper. Good view, go up to the second floor. Good service, with parking.",
          "es": "Excelente cocina oriental venezolana; precios promedio de 16 $ por persona. Recomiendo la sopa de pescado, la rueda de Sierra y el pargo frito. Buena vista, sube al piso 2. Buena atención, con estacionamiento."
        }
      },
      {
        "author": "Cristina C",
        "rating": 5,
        "date": "2019-10-09",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r716436820-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent service and seafood.\nGood variety of drinks.\nWith a new sea-view terrace.\nBeautiful",
          "es": "Excelente atención y comida del mar.\nBuena variedad de bebidas.\nCon una nueva terraza con vista al mar.\nHermoso."
        }
      },
      {
        "author": "BigShaman",
        "rating": 4,
        "date": "2019-03-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r660384651-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Whenever I visit the island, it's a must for me; it's one of the best chucho (seasoned shark meat) on the island. You can order the chucho as a pie or as the typical Margariteño Pabellón dish.\nParking, good atmosphere, good service.",
          "es": "Siempre que visito la isla es parada obligada, es uno de los mejores chucho (carne de tiburón aliñada) de la isla. Se puede pedir el chucho en pastel o en plato típico de pabellón margariteño.\nEstacionamiento, buen ambiente, buen servicio."
        }
      },
      {
        "author": "aszczedrin",
        "rating": 5,
        "date": "2019-02-13",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r651952331-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Whenever we go to Margarita it is a mandatory stop. Excellent food, a cozy place and good service.",
          "es": "Siempre que vamos a Margarita es una parada obligatoria. Excelente comida, un sitio acogedor y buena atención."
        }
      },
      {
        "author": "Emilyn B",
        "rating": 5,
        "date": "2019-02-06",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r650577084-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "A truly magical experience! From the architecture of the restaurant, the decor, to the views! It is a truly privileged spot in the Bay of Pampatar! The service spectacular, the food delicious! Impossible not to want to return many times. When I return to Venezuela and come back to Margarita, I will not fail to stop by Pola!",
          "es": "¡Una experiencia realmente mágica! Desde la arquitectura del restaurante, la decoración, ¡hasta las vistas! ¡Es un sitio realmente privilegiado en la Bahía de Pampatar! El servicio, espectacular; la comida, deliciosa. ¡Imposible no querer volver muchas veces! Cuando vuelva a Venezuela y regrese a Margarita, no dejaré de pasar por Pola."
        }
      },
      {
        "author": "Andrés B",
        "rating": 5,
        "date": "2018-10-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r627292000-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Pleasant place, good atmosphere. Excellent service, located in front of the sea. A menu that highlights the typical and tasty Margaritan food. 100% recommended; after 4 pm apply some repellent since the mosquitoes start to bother a bit.",
          "es": "Lugar agradable, buen ambiente. Excelente atención, situado frente al mar. Un menú que resalta lo típico y sabroso de la comida margariteña. 100 % recomendado; luego de las 4 pm ponerse un poco de repelente, ya que los mosquitos comienzan a molestar un poco."
        }
      },
      {
        "author": "Luisana d",
        "rating": 5,
        "date": "2018-09-29",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6672636-r620400199-Restaurant_Pola-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The best service on the Island, I highly recommend it: fresh food, fresh fish and seafood, and above all a delicious pastel de chucho. The waiter Juan pleased us on each visit we made to the restaurant; you really enjoy the food and the atmosphere.",
          "es": "La mejor atención de la isla, lo recomiendo ampliamente: comida fresca, pescados y mariscos frescos y, sobre todo, un delicioso pastel de chucho. El mesonero Juan nos agradó en cada visita que hicimos al restaurante; se disfruta mucho la comida y el ambiente."
        }
      },
      {
        "author": "Carlos Eduardo Rojas",
        "rating": 5,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21sS2FYbGxkR2d4ZVV4blUwTnpaV1J4VFV0T1JtYxAB!2m1!1s0x0:0xd62dbef7681532e2!3m1!1s2@1:CAIQACodChtycF9oOmlKaXlldGgxeUxnU0NzZWRxTUtORmc%7C%7C?hl=en",
        "text": {
          "en": "Delicious food, generous portions, and great service. All for less than other similar options on the island. Highly recommended.",
          "es": "Comida deliciosa, porciones generosas y un gran servicio. Todo por menos que otras opciones similares de la isla. Muy recomendado."
        }
      },
      {
        "author": "Annarien Gramcko",
        "rating": 5,
        "date": "2026-08-30",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tad1ptVlFRUzFLYTJJMlpVc3daak54VmtSemNGRRAB!2m1!1s0x0:0xd62dbef7681532e2!3m1!1s2@1:CAIQACodChtycF9oOkZwZmVQQS1Ka2I2ZUswZjNxVkRzcFE%7C%7C?hl=en",
        "text": {
          "en": "What a delightful discovery this restaurant is! The local cuisine is bursting with flavor and distinctive seasoning. I loved it! José's service was excellent, and the restaurant has several different atmospheres so you can choose the one that best suits your taste. 100% recommended.",
          "es": "¡Qué descubrimiento tan agradable es este restaurante! La cocina local está llena de sabor y sazón distintivo. ¡Me encantó! El servicio de José fue excelente, y el restaurante tiene varios ambientes distintos para que elijas el que mejor se adapte a tu gusto. 100 % recomendado."
        }
      },
      {
        "author": "Julio Noguera",
        "rating": 5,
        "date": "2026-08-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210alRFdFdRMTlKVTFoYVJEQXpTelUzWldSV1FtYxAB!2m1!1s0x0:0xd62dbef7681532e2!3m1!1s2@1:CAIQACodChtycF9oOmtjTEtWQ19JU1haRDAzSzU3ZWRWQmc%7C%7C?hl=en",
        "text": {
          "en": "One of the best restaurants in Margarita with a great view and excellent service.\nGreat for families.",
          "es": "Uno de los mejores restaurantes de Margarita, con una gran vista y un servicio excelente.\nIdeal para familias."
        }
      },
      {
        "author": "Edgar Quintero",
        "rating": 5,
        "date": "2026-08-18",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pWbVRUUm9NMjVGVjBGalFYbzBlak5vU2tWeWRWRRAB!2m1!1s0x0:0xd62dbef7681532e2!3m1!1s2@1:CAIQACodChtycF9oOjVmTTRoM25FV0FjQXo0ejNoSkVydVE%7C%7C?hl=en",
        "text": {
          "en": "When you're in Margarita, always go to Pola.\nVery tasty.",
          "es": "Cuando estés en Margarita, ve siempre a Pola.\nMuy sabroso."
        }
      },
      {
        "author": "Leonardo Chacón",
        "rating": 5,
        "date": "2026-08-10",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pVd2JWRkRibWN3WlhwU1JUa3pSVFZJZFRSV1lsRRAB!2m1!1s0x0:0xd62dbef7681532e2!3m1!1s2@1:CAIQACodChtycF9oOjUwbVFDbmcwZXpSRTkzRTVIdTRWYlE%7C%7C?hl=en",
        "text": {
          "en": "Wonderful place facing the bay of Pampatar",
          "es": "Lugar maravilloso frente a la bahía de Pampatar."
        }
      },
      {
        "author": "Ellie",
        "rating": 2,
        "date": "2026-06-27",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xwV2VFMUpkVEJKUTIxbWJYcDRTMUpRV1hKSGIyYxAB!2m1!1s0x0:0xd62dbef7681532e2!3m1!1s2@1:CAIQACodChtycF9oOlpWeE1JdTBJQ21mbXp4S1JQWXJHb2c%7C%7C?hl=en",
        "text": {
          "en": "I recently arrived in Venezuela and this place was recommended to me. When I arrived, I liked the atmosphere, but the service was pathetic. The first waiter came to the table looking annoyed and without greeting or welcoming us. And then there were three more waiters who left much to be desired in terms of service. The food was delicious, the view beautiful... but for me, service is super important.",
          "es": "Llegué recientemente a Venezuela y me recomendaron este lugar. Al llegar, me gustó el ambiente, pero el servicio fue patético. El primer mesero llegó a la mesa con cara de fastidio, sin saludar ni darnos la bienvenida. Y luego hubo tres meseros más que dejaron mucho que desear en cuanto al servicio. La comida estaba deliciosa, la vista hermosa... pero para mí, el servicio es súper importante."
        }
      },
      {
        "author": "Manuel Castro Gómez",
        "rating": 5,
        "date": "2026-06-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xBNFFYWjROMkZCWWpFemQyRmthR0ZSUmxKZlFWRRAB!2m1!1s0x0:0xd62dbef7681532e2!3m1!1s2@1:CAIQACodChtycF9oOlA4QXZ4N2FBYjEzd2FkaGFRRlJfQVE%7C%7C?hl=en",
        "text": {
          "en": "A world-class experience. From the moment we arrived, they made us feel right at home, with impeccable and warm service.\n\nA very special shout-out to Andy, whose kindness, professionalism, and excellent service made the experience even more memorable. People like him make all the difference and make you want to come back.\n\nThe food was extraordinary, with authentic flavors, fresh ingredients, and impeccable presentation. You can taste the love and dedication in every dish.\n\nWithout a doubt, a highly recommended restaurant for those seeking fine dining and exceptional service.\n\nEverything was beautiful, absolutely fantastic! 🤗",
          "es": "Una experiencia de clase mundial. Desde que llegamos nos hicieron sentir como en casa, con un servicio impecable y cálido.\n\nUn agradecimiento muy especial a Andy, cuya amabilidad, profesionalismo y excelente servicio hicieron la experiencia aún más memorable. Personas como él marcan la diferencia y dan ganas de volver.\n\nLa comida fue extraordinaria, con sabores auténticos, ingredientes frescos y una presentación impecable. Se saborea el amor y la dedicación en cada plato.\n\nSin duda, un restaurante muy recomendado para quienes buscan alta cocina y un servicio excepcional.\n\n¡Todo fue hermoso, absolutamente fantástico! 🤗"
        }
      }
    ]
  },
  {
    "id": "ChIJJXtlAL2PMYwRIWatnrx9JTA",
    "name": "Juana La Loca",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "C. J.M Vargas, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.999342,
    "lng": -63.795922,
    "rating": 4.5,
    "ratingCount": 594,
    "googleMapsUri": "https://maps.google.com/?cid=3469317337028322849&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/juanalalocarest/",
    "phone": "0424-8534069",
    "reviews": [
      {
        "author": "Luisana B",
        "rating": 5,
        "date": "2026-07-04",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r1066724593-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "A very warm place, in front of the sea, with very nice and cozy decor, and good service from its staff. \n\nAs an appetizer, we ordered the trilogy of tartare, which was very tasty, especially the grouper tartare.\n\nAnd for the main course, grilled octopus with chimichurri, very delicious ♥️\n\nTruly a destination worth visiting.",
          "es": "Un lugar muy cálido, frente al mar, con una decoración muy linda y acogedora, y buen servicio de su personal.\n\nDe entrada pedimos la trilogía de tártaros, que estaba muy sabrosa, en especial el tártaro de cherna.\n\nY de plato principal, pulpo a la brasa con chimichurri, muy delicioso ♥️\n\nRealmente un destino que vale la pena visitar."
        }
      },
      {
        "author": "Hanen K",
        "rating": 5,
        "date": "2026-06-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r1065265980-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent service and the food is a 10 out of 10.",
          "es": "Excelente servicio y la comida es un 10 de 10."
        }
      },
      {
        "author": "Yuli B",
        "rating": 5,
        "date": "2026-06-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r1065265484-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Everything is very tasty and the service is very good.",
          "es": "Todo está muy sabroso y el servicio es muy bueno."
        }
      },
      {
        "author": "Mafalda V",
        "rating": 5,
        "date": "2026-05-13",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r1060073511-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "What a great way to welcome visitors to the island.\n\nWe went straight from the airport to dinner.\n\nWe ordered several dishes to share. I loved the octopus, cooked to perfection.\n\nCalm atmosphere, good music, good service, delicious food. Perfect for an evening with a partner or friends.",
          "es": "Qué gran manera de dar la bienvenida a los visitantes de la isla.\n\nFuimos directo del aeropuerto a cenar.\n\nPedimos varios platos para compartir. Me encantó el pulpo, cocinado a la perfección.\n\nAmbiente tranquilo, buena música, buen servicio, comida deliciosa. Perfecto para una noche en pareja o con amigos."
        }
      },
      {
        "author": "andres g",
        "rating": 4,
        "date": "2025-05-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r1008713353-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "I went with my wife to a special snack, I wanted to surprise her and so it was, I was also surprised, high category cuisine, the experience from the entrance immerses you in another reality, with a neoclassical medieval touch, the game in the warmth of the lighting the textures of design, coupled with it the food a show, I can recommend the ceviche brings a touch of parchita sauce very good. Not only was I there but we were offered to see their themed rooms, this because they had the conditions to do it. If you go ask. I enjoyed it again.",
          "es": "Fui con mi esposa a una merienda especial; quería sorprenderla y así fue, yo también quedé sorprendido. Cocina de alta categoría; la experiencia desde la entrada te sumerge en otra realidad, con un toque medieval neoclásico, el juego de luces cálidas y las texturas del diseño, junto con la comida, un espectáculo. Puedo recomendar el ceviche, que trae un toque de salsa de parchita muy bueno. No solo estuve allí, sino que nos ofrecieron ver sus habitaciones temáticas, porque tenían las condiciones para hacerlo. Si vas, pídelo. Lo disfruté nuevamente."
        }
      },
      {
        "author": "Mario L",
        "rating": 3,
        "date": "2025-05-05",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r1006031507-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Nice place, a little overrated on the issue of wine prices more expensive than in mercedes or dairy, however good the place cannot overestimate by 100% + that the cost, good food, attention 1/2, high prices, would not return, is margarita not miami, tourism is not one to visit you once.",
          "es": "Bonito lugar, un poco sobrevalorado en cuanto a los precios del vino, más caros que en Mercedes o en el Dairy. Aunque el lugar es bueno, no pueden sobreestimar el costo en más del 100 %. Buena comida, atención regular, precios altos. No volvería: es Margarita, no Miami; el turismo no es para visitarte una sola vez."
        }
      },
      {
        "author": "Bethzaly R",
        "rating": 5,
        "date": "2025-04-15",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r1002816677-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent experience! Delicious food and service from the best on the Island. The reservation system works very well. The menu is varied for all tastes without being extensive. Desserts close the evening with a golden clasp",
          "es": "¡Excelente experiencia! Comida deliciosa y un servicio de los mejores de la isla. El sistema de reservas funciona muy bien. El menú es variado para todos los gustos sin ser extenso. Los postres cierran la velada con broche de oro."
        }
      },
      {
        "author": "Jesusdelascio",
        "rating": 5,
        "date": "2024-08-18",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r965477759-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Sublime, a classic yet modern restaurant that has managed to maintain quality over the years. A very tasteful, warm decoration. Spectacular service. \n\nBe sure to try their signature cocktail",
          "es": "Sublime, un restaurante clásico y a la vez moderno que ha sabido mantener la calidad con los años. Una decoración muy de buen gusto y cálida. Servicio espectacular.\n\nNo dejes de probar su cóctel de la casa."
        }
      },
      {
        "author": "diinslc",
        "rating": 5,
        "date": "2024-04-07",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r945637296-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "We only stopped for refreshing drinks and I cannot am say enough about how wonderful they were and how amazing the bartender/ server was. Do ask about the art work on the walls and the skeleton in the dungeon because the historical inspiration permeates the experience if you know what you are looking at. The drinks were great; sorry we couldn’t stay for dinner!",
          "es": "Solo paramos a tomar unas bebidas refrescantes y no puedo describir lo maravillosas que estaban ni lo increíble que fue el bartender/mesero. Pregunta por las obras de arte de las paredes y el esqueleto del calabozo, porque la inspiración histórica impregna la experiencia si sabes qué estás mirando. Las bebidas estuvieron geniales; ¡lástima que no pudimos quedarnos a cenar!"
        }
      },
      {
        "author": "Vacation54377851328",
        "rating": 5,
        "date": "2024-02-13",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g678022-d6529249-r938009741-Juana_La_Loca_Rest_Bar-Pampatar_Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Hosted a private party here a few weeks ago and the owner, Jorge, and his staff were so accommodating! Our guests raved about the food and the expertly crafted cocktails and several party guests came back here a few times while we were in San Juan because we loved the vibe and the drinks so much. They make a whiskey cocktail with palo santo that I still think about. Can't recommend this place to folks enough! If you're in OSJ definitely visit!",
          "es": "Hicimos una fiesta privada aquí hace unas semanas y el dueño, Jorge, y su personal fueron muy atentos. Nuestros invitados quedaron encantados con la comida y los cócteles magistralmente elaborados, y varios volvieron aquí algunas veces mientras estábamos en San Juan porque nos encantó la vibra y las bebidas. Preparan un cóctel de whisky con palo santo que todavía recuerdo. ¡No puedo recomendar este lugar lo suficiente! Si estás en OSJ, definitivamente visítalo."
        }
      },
      {
        "author": "Crisbel Barra",
        "rating": 3,
        "date": "2026-08-30",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25NdE5rbDJWa3cwVjBGUmNTMDVWbmxMUlhwc1VGRRAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOnMtNkl2Vkw0V0FRcS05VnlLRXpsUFE%7C%7C?hl=en",
        "text": {
          "en": "It's a spectacular place; just being there is an experience in itself. The main dishes weren't the most appealing; they lacked flavor.",
          "es": "Es un lugar espectacular; solo estar allí ya es una experiencia en sí misma. Los platos principales no fueron los más atractivos; les faltaba sabor."
        }
      },
      {
        "author": "Mike",
        "rating": 4,
        "date": "2026-08-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2toYVREZHFOMHd5WnpoV04yUnZhRzkyV0RZM2JYYxAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOkhaTDdqN0wyZzhWN2RvaG92WDY3bXc%7C%7C?hl=en",
        "text": {
          "en": "Excellent, but quite expensive!",
          "es": "¡Excelente, pero bastante caro!"
        }
      },
      {
        "author": "Carlos Llorente",
        "rating": 5,
        "date": "2026-08-21",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21wMlZXTlRZVkZwY1V4MVFXWk5ZUzFrWW01dldVRRAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOmp2VWNTYVFpcUx1QWZNYS1kYm5vWUE%7C%7C?hl=en",
        "text": {
          "en": "The entire experience was excellent. The team greets you with great charisma, the food is delicious, and the place is very pleasant for sharing with a partner or family. We tried the tartare trio, the creamy black squid rice, the grouper with leek, and the chocolate fondant. I don't know which was best; they were all excellent. Ender, our waiter, helped make the dinner even better; his recommendations for wine pairings and dish selection were perfect. Very good service, very good food, and a very good atmosphere.",
          "es": "Toda la experiencia fue excelente. El equipo te recibe con mucho carisma, la comida es deliciosa y el lugar es muy agradable para compartir en pareja o en familia. Probamos el trío de tártaros, el arroz negro cremoso con calamar, la cherna con puerro y el fondant de chocolate. No sé cuál fue el mejor; todos estuvieron excelentes. Ender, nuestro mesero, ayudó a que la cena fuera aún mejor; sus recomendaciones de maridaje y elección de platos fueron perfectas. Muy buen servicio, muy buena comida y muy buen ambiente."
        }
      },
      {
        "author": "Attilio Pinto",
        "rating": 5,
        "date": "2026-08-21",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT20xcVRGVmtZVzFtZW5WSVRsWkRXVXBKTFVzek0zYxAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOm1qTFVkYW1menVITlZDWUpJLUszM3c%7C%7C?hl=en",
        "text": {
          "en": "Excellent experience, order the tartare trio, highly recommended",
          "es": "Excelente experiencia; pide el trío de tártaros, muy recomendado."
        }
      },
      {
        "author": "vanessa calderon",
        "rating": 5,
        "date": "2026-08-21",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xkSmVFOWFPWHA1YWxCcVNHRkJkVUUzWjFsSlEwRRAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOldJeE9aOXp5alBqSGFBdUE3Z1lJQ0E%7C%7C?hl=en",
        "text": {
          "en": "I recommend the tartar trio",
          "es": "Recomiendo el trío de tártaros."
        }
      },
      {
        "author": "Andre Sambrano F",
        "rating": 5,
        "date": "2026-08-21",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pOSFNIWTFVRTUxWWtSMVFpMUhkMU10T0hsV01uYxAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOjNHSHY1UE51YkR1Qi1Hd1MtOHlWMnc%7C%7C?hl=en",
        "text": {
          "en": "One of the best restaurants on the island. Both their crispy and creamy rice dishes are a must-try! What's most impressive is the way they blend the flavors to create an undeniable harmony. I've been twice already, and I would definitely return every time I'm on the island. Their service is also very well-trained and incredibly attentive. 20/10 🤍",
          "es": "Uno de los mejores restaurantes de la isla. ¡Tanto sus arroces crujientes como los cremosos son imperdibles! Lo más impresionante es cómo combinan los sabores para crear una armonía innegable. Ya he ido dos veces y sin duda volvería cada vez que esté en la isla. Su servicio también está muy bien formado y es increíblemente atento. 20/10 🤍"
        }
      },
      {
        "author": "Daniela Díaz (Danileiny)",
        "rating": 1,
        "date": "2026-08-19",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xCdFZHWmZiRVJ0ZUZwSVQxRklNRU5LWWpodFMzYxAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOlBtVGZfbERteFpIT1FIMENKYjhtS3c%7C%7C?hl=en",
        "text": {
          "en": "I am completely dissatisfied with the service I received during my visit, as I had a truly terrible experience, especially considering it was a birthday celebration.\n\nI ordered a birthday dessert by phone. However, when the celebration arrived, they brought me a flan that I hadn't ordered, without even giving me the opportunity to choose from the dessert menu. They simply decided which dessert to bring me and, to my further surprise, charged me for it, even though it wasn't what I ordered.\n\nAdditionally, the presentation was quite disappointing. The \"Happy Birthday\" message was written very carelessly, apparently with fingers or some other utensil, completely crooked, and with an appearance that was completely inappropriate for a special occasion.\n\nFrankly, I consider this a lack of respect for the customer. When someone chooses a restaurant to celebrate an important day and is also paying high prices, they expect to receive appropriate service, attention to detail, and to feel well taken care of. Nothing we consume is free because the prices are high, so the least one expects is good service and an experience that makes one want to return.",
          "es": "Estoy totalmente insatisfecho con el servicio que recibí durante mi visita, pues tuve una experiencia realmente terrible, sobre todo considerando que era una celebración de cumpleaños.\n\nPedí por teléfono un postre de cumpleaños. Sin embargo, cuando llegó la celebración, me trajeron un flan que no había pedido, sin siquiera darme la oportunidad de elegir del menú de postres. Simplemente decidieron qué postre traerme y, para mi mayor sorpresa, me lo cobraron, aunque no era lo que había pedido.\n\nAdemás, la presentación fue bastante decepcionante. El mensaje de \"Feliz cumpleaños\" estaba escrito muy descuidadamente, al parecer con los dedos o algún otro utensilio, completamente torcido y con un aspecto totalmente inapropiado para una ocasión especial.\n\nFrancamente, considero que esto es una falta de respeto al cliente. Cuando alguien elige un restaurante para celebrar un día importante y además paga precios altos, espera recibir un servicio adecuado, atención al detalle y sentirse bien atendido. Nada de lo que consumimos es gratis porque los precios son altos, así que lo mínimo que uno espera es buen servicio y una experiencia que dé ganas de volver."
        }
      },
      {
        "author": "Miguel Goncalves",
        "rating": 5,
        "date": "2026-08-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xaWU0wUndTRU5HYkhoeVFXdElVRU15ZUV4TmVXYxAB!2m1!1s0x0:0x30257dbc9ead6621!3m1!1s2@1:CAIQACodChtycF9oOlZYM0RwSENGbHhyQWtIUEMyeExNeWc%7C%7C?hl=en",
        "text": {
          "en": "An excellent experience that shouldn't be missed on any visit to the island. Everything was great, with excellent attention to detail and superb dishes.",
          "es": "Una experiencia excelente que no debería faltar en ninguna visita a la isla. Todo estuvo genial, con una excelente atención al detalle y platos soberbios."
        }
      }
    ]
  },
  {
    "id": "ChIJgVnoi66PMYwRme66ECrSGIU",
    "name": "Restaurant Casa Azul Margarita",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "Playa el ángel, Pampatar 0295, Nueva Esparta, Venezuela",
    "lat": 10.989172,
    "lng": -63.818558,
    "rating": 4.5,
    "ratingCount": 110,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=9590646484596616857&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "http://instagram.com/casaazulmgta",
    "phone": "0424-8848707",
    "reviews": [
      {
        "author": "Maria Fernanda V",
        "rating": 5,
        "date": "2026-05-27",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r1061909570-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent food and excellent service. Come try their lunch menu. Incredible and super good prices.",
          "es": "Excelente comida y excelente servicio. Ven a probar su menú de almuerzo. Precios increíbles y muy buenos."
        }
      },
      {
        "author": "adriana s",
        "rating": 5,
        "date": "2026-04-28",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r1057996807-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Bros is the ultimate, the best hot dogs on the island",
          "es": "Bros es lo máximo, los mejores perros calientes de la isla."
        }
      },
      {
        "author": "Richard L",
        "rating": 5,
        "date": "2026-04-28",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r1057996751-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "excellent attention!!! the best daisy hotdogs. have no competition",
          "es": "¡¡Excelente atención!! Los mejores perros calientes \"daisy\". No tienen competencia."
        }
      },
      {
        "author": "Jesusdelascio",
        "rating": 4,
        "date": "2024-08-18",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r965479105-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "On a gastronomic street, this space offers fast food of excellent quality and attention. Your hot dogs are great.",
          "es": "En una calle gastronómica, este espacio ofrece comida rápida de excelente calidad y atención. Sus perros calientes son geniales."
        }
      },
      {
        "author": "Javier D",
        "rating": 5,
        "date": "2024-06-06",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r953914559-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent service, the best doggis on the island, the best burgers. Excellent atmosphere, excellent treatment, especially from their employees, especially Yornielis and Jhonatan, they are very good at what they do.",
          "es": "Excelente servicio, los mejores doggis de la isla, las mejores hamburguesas. Excelente ambiente y trato, sobre todo de sus empleados, en especial Yornielis y Jhonatan; son muy buenos en lo que hacen."
        }
      },
      {
        "author": "javier r",
        "rating": 5,
        "date": "2024-05-13",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r950610864-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "The best on the island, a unique experience, don't forget to go to bros, the best meat, the best potatoes and the best service, friends, thank you",
          "es": "Lo mejor de la isla, una experiencia única. No dejes de ir a Bros: la mejor carne, las mejores papas y el mejor servicio. Amigos, gracias."
        }
      },
      {
        "author": "Valentina B",
        "rating": 5,
        "date": "2024-05-09",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r950090028-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "I loved Bros. It is an excellent family place for lunch or dinner delicious street food style food. I ate the rockstar burger (house suggestion) and I will definitely order it again!!! The staff was very friendly and attentive at all times. I recommend it 100%",
          "es": "Me encantó Bros. Es un excelente lugar familiar para almorzar o cenar comida deliciosa estilo street food. Comí la hamburguesa rockstar (sugerencia de la casa) y sin duda la volveré a pedir. El personal fue muy amable y atento en todo momento. Lo recomiendo 100 %."
        }
      },
      {
        "author": "yorgelis g",
        "rating": 5,
        "date": "2024-04-26",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r948301367-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Excellent place to spend some time with family and friends, recommended 100%, their customer service is wonderful, I love their burgers 😋",
          "es": "Excelente lugar para pasar un rato con familia y amigos, recomendado 100 %. Su atención al cliente es maravillosa, me encantan sus hamburguesas 😋"
        }
      },
      {
        "author": "Franklin G",
        "rating": 4,
        "date": "2023-08-22",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r912040233-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "1. Good decoration, 2. Good service, 3. varied menu and corresponding price, 4. good portions, 5. delivery time is what can be improved, the rest is always a good option",
          "es": "1. Buena decoración, 2. Buen servicio, 3. Menú variado y precio acorde, 4. Buenas porciones, 5. El tiempo de entrega es lo que se puede mejorar; el resto siempre es una buena opción."
        }
      },
      {
        "author": "María José León N",
        "rating": 5,
        "date": "2022-04-10",
        "provider": "tripadvisor",
        "url": "https://www.tripadvisor.com/ShowUserReviews-g316061-d19241022-r833978321-Bros_Margarita-Margarita_Island_Coastal_Islands_Insular_Region.html",
        "text": {
          "en": "Están ubicados en una espectacular zona de la isla, tienen un menú que ofrece comida rápida y un poco de comida libanesa. Excelente atención, comida muy rica, buen ambiente, es un establecimiento limpio y cómodo a la hora de disfrutar un rato con amigos. Y como no se olvidaron de los más pequeños de la casa, también cuentan con cajita feliz. Si vienen a la isla de Margarita se los  Recomiendo al 100%",
          "es": "Están ubicados en una zona espectacular de la isla; tienen un menú que ofrece comida rápida y algo de comida libanesa. Excelente atención, comida muy rica, buen ambiente; es un establecimiento limpio y cómodo para disfrutar un rato con amigos. Y como no se olvidaron de los más pequeños de la casa, también cuentan con cajita feliz. Si vienen a la Isla de Margarita, los recomiendo al 100 %."
        }
      },
      {
        "author": "Nárjara León",
        "rating": 2,
        "date": "2026-09-10",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25odVNsUlVWMTlEV25kYU0zaE9ZV1EyVjFwVVozYxAB!2m1!1s0x0:0x8518d22a10baee99!3m1!1s2@1:CAIQACodChtycF9oOnhuSlRUV19DWndaM3hOYWQ2V1pUZ3c%7C%7C?hl=en",
        "text": {
          "en": "Nice place. Maybe I was just unlucky, but the day I went there were no waiters. Only one woman was serving, and even though only three tables were occupied, she couldn't keep up. We waited 15 minutes for a mojito and a whiskey, plus another 30 minutes for two appetizers. They were quite small for the price, by the way. I won't be back.",
          "es": "Buen lugar. Quizá solo tuve mala suerte, pero el día que fui no había meseros. Solo una mujer atendía y, aunque solo había tres mesas ocupadas, no daba abasto. Esperamos 15 minutos por un mojito y un whisky, y otros 30 minutos por dos entradas. Por cierto, eran bastante pequeñas para el precio. No volveré."
        }
      },
      {
        "author": "Cesar Abel Espitia",
        "rating": 5,
        "date": "2026-08-05",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25SRlNXTnhaSE5GUzBGaWRrVXdRVWRHYW5ReFRsRRAB!2m1!1s0x0:0x8518d22a10baee99!3m1!1s2@1:CAIQACodChtycF9oOnRFSWNxZHNFS0FidkUwQUdGanQxTlE%7C%7C?hl=en",
        "text": {
          "en": "Excellent, 100% recommended",
          "es": "Excelente, 100 % recomendado."
        }
      },
      {
        "author": "David Ordaz",
        "rating": 5,
        "date": "2026-06-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210MmFHdzNWMVpaV0hKRWEzRlZZMTlWUkZkMVZWRRAB!2m1!1s0x0:0x8518d22a10baee99!3m1!1s2@1:CAIQACodChtycF9oOmt2aGw3V1ZZWHJEa3FVY19VRFd1VVE%7C%7C?hl=en",
        "text": {
          "en": "Good prices, service, quality and atmosphere, highly recommended.",
          "es": "Buenos precios, servicio, calidad y ambiente; muy recomendado."
        }
      },
      {
        "author": "Ana Carolina Felizola",
        "rating": 5,
        "date": "2026-05-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21WVU1XOXdVemR6YkU5VFRUazFTV3BrY0ZKUmFYYxAB!2m1!1s0x0:0x8518d22a10baee99!3m1!1s2@1:CAIQACodChtycF9oOmVUMW9wUzdzbE9TTTk1SWpkcFJRaXc%7C%7C?hl=en",
        "text": {
          "en": "La Casa Azul in Playa El Ángel is a true gem 💎 located in one of Margarita's most vibrant culinary areas. From the moment you arrive, you're greeted with a stylish and colorful welcome 🏠💙.\n\nWhat makes this place special is the perfect balance between a cozy atmosphere and high-level cuisine 🍽️. The dishes stand out for their use of fresh ingredients and a visually stunning presentation ✨. Whether you're looking to enjoy fresh fish 🐟 or a special dinner with a good glass of wine 🍷, the service is always attentive and makes you feel right at home.\n\nIt's the ideal place to share unforgettable moments, enjoy good conversation, and let yourself be carried away by the flavors of the island in an environment full of character 🌴🌊. Highly recommended if you're visiting the area! ⭐⭐⭐⭐⭐",
          "es": "La Casa Azul en Playa El Ángel es una verdadera joya 💎 ubicada en una de las zonas culinarias más vibrantes de Margarita. Desde que llegas, te recibe una bienvenida con estilo y color 🏠💙.\n\nLo que hace especial a este lugar es el equilibrio perfecto entre un ambiente acogedor y una cocina de alto nivel 🍽️. Los platos destacan por el uso de ingredientes frescos y una presentación visualmente impresionante ✨. Ya sea que quieras disfrutar de un pescado fresco 🐟 o de una cena especial con una buena copa de vino 🍷, el servicio es siempre atento y te hace sentir como en casa.\n\nEs el lugar ideal para compartir momentos inolvidables, disfrutar de una buena conversación y dejarte llevar por los sabores de la isla en un entorno lleno de carácter 🌴🌊. ¡Muy recomendado si visitas la zona! ⭐⭐⭐⭐⭐"
        }
      },
      {
        "author": "Jesús Alvarado V",
        "rating": 4,
        "date": "2026-04-28",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xWZmMxTnhPV05oWWxZNFJraEdWMHRHYVVoUU1tYxAB!2m1!1s0x0:0x8518d22a10baee99!3m1!1s2@1:CAIQACodChtycF9oOlVfc1NxOWNhYlY4RkhGV0tGaUhQMmc%7C%7C?hl=en",
        "text": {
          "en": "Excellent location, exemplary service. Great variety of delicious dishes.\nIt's very bright from the outside.",
          "es": "Excelente ubicación, servicio ejemplar. Gran variedad de platos deliciosos.\nEs muy luminoso por fuera."
        }
      },
      {
        "author": "Isabela Reyes",
        "rating": 5,
        "date": "2026-03-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pCMVRFaFFYMHRHTFdSZlIwaHhVSE55YlVGdmIwRRAB!2m1!1s0x0:0x8518d22a10baee99!3m1!1s2@1:CAIQACodChtycF9oOjB1TEhQX0tGLWRfR0hxUHNybUFvb0E%7C%7C?hl=en",
        "text": {
          "en": "Spectacular",
          "es": "Espectacular"
        }
      },
      {
        "author": "Frau Musterfrau",
        "rating": 2,
        "date": "2026-01-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21SWFZWZEVZbE5xWldJNVZHdE9XbVpaUW1sV1gzYxAB!2m1!1s0x0:0x8518d22a10baee99!3m1!1s2@1:CAIQACodChtycF9oOmRXVVdEYlNqZWI5VGtOWmZZQmlWX3c%7C%7C?hl=en",
        "text": {
          "en": "The price and performance don't match. It's okay, but not really good. Too expensive for the quality. The location isn't very convenient on the road.",
          "es": "La relación precio-calidad no cuadra. Está bien, pero no es realmente bueno. Demasiado caro para la calidad. La ubicación no es muy conveniente sobre la vía."
        }
      }
    ]
  },
  {
    "id": "ChIJAUAEi1OOMYwRevUmS1N4auc",
    "name": "Charlies Cream",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "al lado del central madeirence, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.994068,
    "lng": -63.821082,
    "rating": 4.4,
    "ratingCount": 775,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=16675272869431145850&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.facebook.com/pages/Charlies-Cream/364824473563750",
    "phone": "0412-9080743",
    "reviews": [
      {
        "author": "SERSE MANCINI",
        "rating": 5,
        "date": "2026-08-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21KQlIwaEhOWFJ5UmxGUFUzcFFkalZ0UVVOb2NGRRAB!2m1!1s0x0:0xe76a78534b26f57a!3m1!1s2@1:CAIQACodChtycF9oOmJBR0hHNXRyRlFPU3pQdjVtQUNocFE%7C%7C?hl=en",
        "text": {
          "en": "5 stars",
          "es": "5 estrellas"
        }
      },
      {
        "author": "Doly Urbina",
        "rating": 5,
        "date": "2026-08-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2kxRE4yMXROV3BOWVhJeVZXaGxVVGc1Y2xOUFRsRRAB!2m1!1s0x0:0xe76a78534b26f57a!3m1!1s2@1:CAIQACodChtycF9oOi1DN21tNWpNYXIyVWhlUTg5clNPTlE%7C%7C?hl=en",
        "text": {
          "en": "My favorites are chicken soup and caprese pizza.",
          "es": "Mis favoritos son la sopa de pollo y la pizza caprese."
        }
      },
      {
        "author": "Martha Elena Andrade Garcia",
        "rating": 5,
        "date": "2026-08-19",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21GUU5GbDVRV1ZNZERsbFdISk5WR2g2WHpkZlpGRRAB!2m1!1s0x0:0xe76a78534b26f57a!3m1!1s2@1:CAIQACodChtycF9oOmFQNFl5QWVMdDllWHJNVGh6XzdfZFE%7C%7C?hl=en",
        "text": {
          "en": "Delicious ice cream, coffee, desserts, breakfasts, etc. A very good place.",
          "es": "Deliciosos helados, café, postres, desayunos, etc. Un lugar muy bueno."
        }
      },
      {
        "author": "Ettore De Angelis",
        "rating": 5,
        "date": "2026-08-15",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT201MlF6aFdjakJWVURKVGRFWjVkR2haYkdwV2RtYxAB!2m1!1s0x0:0xe76a78534b26f57a!3m1!1s2@1:CAIQACodChtycF9oOm52QzhWcjBVUDJTdEZ5dGhZbGpWdmc%7C%7C?hl=en",
        "text": {
          "en": "Optimum",
          "es": "Óptimo"
        }
      },
      {
        "author": "Andres Garcia",
        "rating": 1,
        "date": "2026-08-03",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xaelJVYzFSMDVSTlVOSmVWZFVRM2RWVW04ek1YYxAB!2m1!1s0x0:0xe76a78534b26f57a!3m1!1s2@1:CAIQACodChtycF9oOlZzRUc1R05RNUNJeVdUQ3dVUm8zMXc%7C%7C?hl=en",
        "text": {
          "en": "excessively expensive.",
          "es": "excesivamente caro."
        }
      },
      {
        "author": "MochileandoContigo",
        "rating": 5,
        "date": "2026-07-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2w5U05FTm1kbWhDT0ZNd2JEQTRTMHRQWVdsMFZtYxAB!2m1!1s0x0:0xe76a78534b26f57a!3m1!1s2@1:CAIQACodChtycF9oOl9SNENmdmhCOFMwbDA4S0tPYWl0Vmc%7C%7C?hl=en",
        "text": {
          "en": "Visiting Charlie's Cream was an absolute surprise from beginning to end. We went craving something sweet, but what we found was a top-notch gastronomic experience. From the moment you walk through the door, you're enveloped in a super pleasant, clean atmosphere with an excellent vibe that makes you feel welcome immediately. The staff greeted us with huge smiles and a kindness that is so highly valued these days; they explain everything patiently, and it's clear they're passionate about what they do.\n\nBut let's talk about what's truly important: the desserts. What a sublime delight! We ordered a variety of options, and absolutely everything we tasted was exquisite, fresh, and made with impeccably high-quality ingredients. They weren't your typical cloying desserts; each bite had the perfect balance of flavors and textures, and an artistic presentation that was a feast for the eyes. You can see the care, love, and technique they put into each creation. It was a true feast for the palate. We'll be back.",
          "es": "Visitar Charlie's Cream fue una sorpresa absoluta de principio a fin. Fuimos con antojo de algo dulce, pero encontramos una experiencia gastronómica de primer nivel. Desde que cruzas la puerta te envuelve un ambiente súper agradable, limpio y con una vibra excelente que te hace sentir bienvenido de inmediato. El personal nos recibió con una gran sonrisa y una amabilidad que hoy se valora mucho; explican todo con paciencia y se nota que aman lo que hacen.\n\nPero hablemos de lo verdaderamente importante: los postres. ¡Qué delicia tan sublime! Pedimos una variedad de opciones y absolutamente todo lo que probamos estaba exquisito, fresco y hecho con ingredientes impecables y de altísima calidad. No eran los típicos postres empalagosos; cada bocado tenía el equilibrio perfecto de sabores y texturas, y una presentación artística que era un deleite para la vista. Se ve el cuidado, el amor y la técnica que ponen en cada creación. Fue un verdadero festín para el paladar. Volveremos."
        }
      }
    ]
  },
  {
    "id": "ChIJK8TFy-6PMYwR-JzQM7cn1Y0",
    "name": "Mahalo Gastro Place",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "Av Aldonza Manrique, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.988687,
    "lng": -63.818147,
    "rating": 4.4,
    "ratingCount": 331,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=10220118597189016824&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://mahalomgta.com/",
    "phone": "0424-8808463",
    "reviews": [
      {
        "author": "Anmari San Vicente",
        "rating": 5,
        "date": "2026-09-09",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tsU1JXRTRNRk0yVTIxWk0xbGFSMnBhYkd0VlEwRRAB!2m1!1s0x0:0x8dd527b733d09cf8!3m1!1s2@1:CAIQACodChtycF9oOklSRWE4MFM2U21ZM1laR2pabGtVQ0E%7C%7C?hl=en",
        "text": {
          "en": "It's a must-stop every time we go to Margarita; they have everything from sushi to hamburgers, and everything is very good.",
          "es": "Es parada obligatoria cada vez que vamos a Margarita; tienen desde sushi hasta hamburguesas, y todo está muy bueno."
        }
      },
      {
        "author": "Glairat Reinoza",
        "rating": 3,
        "date": "2026-08-15",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT20xSFRsWklNRW8xT1VjeFZrWmpRbUpTUTFCSldtYxAB!2m1!1s0x0:0x8dd527b733d09cf8!3m1!1s2@1:CAIQACodChtycF9oOm1HTlZIMEo1OUcxVkZjQmJSQ1BJWmc%7C%7C?hl=en",
        "text": {
          "en": "It's inconvenient having to make two separate payments when we order delivery. It's a bit absurd.",
          "es": "Es incómodo tener que hacer dos pagos separados cuando pedimos delivery. Es un poco absurdo."
        }
      },
      {
        "author": "Carla Linares",
        "rating": 5,
        "date": "2026-08-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2podFpFcFNRamhHTFZsbFZqUmtNbEpwV2poblJFRRAB!2m1!1s0x0:0x8dd527b733d09cf8!3m1!1s2@1:CAIQACodChtycF9oOjhtZEpSQjhGLVllVjRkMlJpWjhnREE%7C%7C?hl=en",
        "text": {
          "en": "My favorite food",
          "es": "Mi comida favorita"
        }
      },
      {
        "author": "Rada Dahouk",
        "rating": 5,
        "date": "2026-08-10",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25KQk5HbHZXSGR3YTJZeE9ETkxNMEp4TTFSWGRIYxAB!2m1!1s0x0:0x8dd527b733d09cf8!3m1!1s2@1:CAIQACodChtycF9oOnJBNGlvWHdwa2YxODNLM0JxM1RXdHc%7C%7C?hl=en",
        "text": {
          "en": "Everything was spectacular.",
          "es": "Todo estuvo espectacular."
        }
      },
      {
        "author": "Karen Verushka Leydenz Romero",
        "rating": 5,
        "date": "2026-08-09",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pCRFoycHhWV0l0Y1hCTFJtWTJjVXBFZEdOVmJuYxAB!2m1!1s0x0:0x8dd527b733d09cf8!3m1!1s2@1:CAIQACodChtycF9oOjBDZ2pxVWItcXBLRmY2cUpEdGNVbnc%7C%7C?hl=en",
        "text": {
          "en": "I simply love him!!!",
          "es": "¡Simplemente me encanta!"
        }
      },
      {
        "author": "Ildemaro Rodriguez",
        "rating": 5,
        "date": "2026-08-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2t3d1JGTm9WRXRCTUdabFUwRTRTM2xEVmtWVU5sRRAB!2m1!1s0x0:0x8dd527b733d09cf8!3m1!1s2@1:CAIQACodChtycF9oOkwwRFNoVEtBMGZlU0E4S3lDVkVUNlE%7C%7C?hl=en",
        "text": {
          "en": "Seeing that it was a mixed sushi menu with Chinese food, I was a little nervous. However, the two rolls I tried were excellent, especially the Spicy Tuna, a very basic roll, which was fantastic.\n\nThe young man who served me, Juan Pablo, was extremely pleasant, efficient, and friendly—top-notch. His service, not only to me but to the other tables as well, added a very pleasant touch to my visit. I definitely recommend you stop by, ask for him, and try the sushi rolls.",
          "es": "Al ver que era un menú de sushi mixto con comida china, estaba un poco nervioso. Sin embargo, los dos rolls que probé estuvieron excelentes, sobre todo el Spicy Tuna, un roll muy básico, que estuvo fantástico.\n\nEl joven que me atendió, Juan Pablo, fue extremadamente agradable, eficiente y amable: de primera. Su servicio, no solo conmigo sino con las demás mesas, le dio un toque muy agradable a mi visita. Definitivamente recomiendo que pases, lo pidas a él y pruebes los rolls de sushi."
        }
      }
    ]
  },
  {
    "id": "ChIJUdKXwI6PMYwRvnJXfvGwFKo",
    "name": "Funky Buddha Gastropub",
    "category": {
      "es": "Bar y parrilla",
      "en": "Bar & Grill"
    },
    "address": "Hotel la Samanna de Margarita, Av. Francisco Esteban Gómez, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.972262,
    "lng": -63.823634,
    "rating": 4.4,
    "ratingCount": 276,
    "googleMapsUri": "https://maps.google.com/?cid=12255615037235229374&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.ubikate.com.ve/web/bares-restaurantes-en-margarita-funky-buddha-gastropub-el-mejor-en-la-isla-de-margarita",
    "phone": "0295-2620632",
    "reviews": [
      {
        "author": "Ismara Hernandez",
        "rating": 5,
        "date": "2021-03-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNLNE1mN1dnEAE!2m1!1s0x0:0xaa14b0f17e5772be!3m1!1s2@1:CIHM0ogKEICAgICK4Mf7Wg%7C%7C?hl=en",
        "text": {
          "en": "Pleasant atmosphere, good service and prices in relation to the quality",
          "es": "Ambiente agradable, buen servicio y precios acordes con la calidad."
        }
      },
      {
        "author": "Keylimar Cox",
        "rating": 5,
        "date": "2021-01-30",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUN5anJiZkZBEAE!2m1!1s0x0:0xaa14b0f17e5772be!3m1!1s2@1:CIHM0ogKEICAgICyjrbfFA%7C%7C?hl=en",
        "text": {
          "en": "The service they provide is excellent.",
          "es": "El servicio que brindan es excelente."
        }
      },
      {
        "author": "Roberto Reyes González",
        "rating": 4,
        "date": "2021-01-30",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUN5anNLM0J3EAE!2m1!1s0x0:0xaa14b0f17e5772be!3m1!1s2@1:CIHM0ogKEICAgICyjsK3Bw%7C%7C?hl=en",
        "text": {
          "en": "Very good",
          "es": "Muy bueno"
        }
      },
      {
        "author": "cesare de riseis",
        "rating": 5,
        "date": "2020-10-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURDcllMTmNREAE!2m1!1s0x0:0xaa14b0f17e5772be!3m1!1s2@1:CIHM0ogKEICAgIDCrYLNcQ%7C%7C?hl=en",
        "text": {
          "en": "Good service. Quality.",
          "es": "Buen servicio. Calidad."
        }
      }
    ]
  },
  {
    "id": "ChIJKTFmUeuPMYwRGkPv3lR0aYA",
    "name": "SUNRISE SMOKE GRILL & BAR",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "PROLONGACION 4 DE MAYO EDIFICIO DIANMARCA PB, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.976943,
    "lng": -63.836118,
    "rating": 4.4,
    "ratingCount": 130,
    "googleMapsUri": "https://maps.google.com/?cid=9253054817275691802&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/sunrisemgta/?hl=es",
    "phone": "0412-1960601",
    "reviews": [
      {
        "author": "Elizabeth Sinnette",
        "rating": 5,
        "date": "2023-08-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURwaVppd2NnEAE!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgIDpiZiwcg%7C%7C?hl=en",
        "text": {
          "en": "Excellent",
          "es": "Excelente"
        }
      },
      {
        "author": "Arnaldo Moros",
        "rating": 5,
        "date": "2023-03-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNSbE9DWVRREAE!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgICRlOCYTQ%7C%7C?hl=en",
        "text": {
          "en": "Nice place, good food, great value for money, great service!",
          "es": "Buen lugar, buena comida, excelente relación calidad-precio, ¡gran servicio!"
        }
      },
      {
        "author": "Rafael Ktir3 Espinoza",
        "rating": 5,
        "date": "2023-03-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNSMklqb1dnEAE!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgICR2IjoWg%7C%7C?hl=en",
        "text": {
          "en": "Great atmosphere, a great opportunity to enjoy some good cocktails and a double-decker burger, highly recommended",
          "es": "Gran ambiente, una gran oportunidad para disfrutar de unos buenos cócteles y una hamburguesa doble; muy recomendado."
        }
      },
      {
        "author": "LA AMARILLA M",
        "rating": 5,
        "date": "2023-02-15",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNoOGVQdkxBEAE!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgICh8ePvLA%7C%7C?hl=en",
        "text": {
          "en": "Excellent service",
          "es": "Excelente servicio"
        }
      },
      {
        "author": "Born Air",
        "rating": 5,
        "date": "2023-01-21",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURCNGY2S2pRRRAB!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgIDB4f6KjQE%7C%7C?hl=en",
        "text": {
          "en": "THE BEST restaurant in Rom",
          "es": "EL MEJOR restaurante de Rom"
        }
      },
      {
        "author": "V V",
        "rating": 4,
        "date": "2023-01-19",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURCam83Y0J3EAE!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgIDBjo7cBw%7C%7C?hl=en",
        "text": {
          "en": "The grill for 2 is actually for 3, very good cold beer, place with parking and bathroom, very nicely decorated, they have a varied menu.",
          "es": "La parrilla para 2 en realidad es para 3, muy buena cerveza bien fría, lugar con estacionamiento y baño, muy bien decorado, tienen un menú variado."
        }
      },
      {
        "author": "Grey Valera",
        "rating": 1,
        "date": "2022-10-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUMtb08yQjBRRRAB!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgIC-oO2B0QE%7C%7C?hl=en",
        "text": {
          "en": "I only recommend the meats and hamburgers. I made the mistake (my foolishness) of ordering sushi (at a restaurant that mainly specializes in meat) and it was a big error. I also ordered delivery (be careful when ordering delivery, don't forget that it's included and the cost varies, so ask because they don't give you the information and you want to avoid surprises). I had to assemble the mini-rolls myself. Prices are okay, but the children's menus are probably designed for infants. Overall, more of a disappointment than a success.",
          "es": "Solo recomiendo las carnes y las hamburguesas. Cometí el error (mi tontería) de pedir sushi (en un restaurante especializado principalmente en carne) y fue un gran error. También pedí delivery (ojo al pedir delivery, no olvides que va incluido y el costo varía, así que pregunta, porque no te dan la información y querrás evitar sorpresas). Tuve que armar yo mismo los mini rolls. Los precios están bien, pero los menús infantiles probablemente estén diseñados para bebés. En general, más una decepción que un acierto."
        }
      },
      {
        "author": "Celeste",
        "rating": 4,
        "date": "2022-10-21",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURlNTQtZUlBEAE!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgIDe54-eIA%7C%7C?hl=en",
        "text": {
          "en": "It's beautiful 😻 the food is delicious.",
          "es": "Es hermoso 😻 la comida es deliciosa."
        }
      },
      {
        "author": "Gabriel Galaviz",
        "rating": 5,
        "date": "2022-10-13",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURlcWVtZ1dREAE!2m1!1s0x0:0x80697454deef431a!3m1!1s2@1:CIHM0ogKEICAgIDeqemgWQ%7C%7C?hl=en",
        "text": {
          "en": "Excellent hamburgers",
          "es": "Excelentes hamburguesas"
        }
      },
      {
        "author": "Collura David",
        "rating": null,
        "date": "2017-11-18",
        "provider": "facebook",
        "url": "https://www.facebook.com/permalink.php?story_fbid=pfbid09xuhMnuQo9MbKGX5wytqAQArKhw7TX6MVGaz9b2v7yZKvGtEVDTbeALhefF98x7Vl&id=100014805818264",
        "text": {
          "en": "very good pizza, also try the octopus salad",
          "es": "muy buena pizza, prueba también la ensalada de pulpo"
        }
      },
      {
        "author": "Sergio Andres Osorio Sanchez",
        "rating": null,
        "date": "2017-01-23",
        "provider": "facebook",
        "url": "https://www.facebook.com/sergiosorio/posts/pfbid02BwoCbmzA1RGg4akfgMMtNfYm2HrVrJ7QPzfAWksCj9EvzmeCzciU4QHKUdVNFBHcl",
        "text": {
          "en": "Excellent food and service with the best outdoor music; Pizzeria El Paseo, the best on the island.",
          "es": "Excelente comida y servicio y con la mejor música al aire libre; Pizzeria El Paseo, la mejor de la isla."
        }
      },
      {
        "author": "Victoria Perez",
        "rating": null,
        "date": "2016-12-16",
        "provider": "facebook",
        "url": "https://www.facebook.com/victoriaelena.perezmarin/posts/pfbid0JvRRMtBK3rKNUFUA4LNXZ9g8zRfMJiUi4peErbr38j4NiPWz8zS9ejyh3QwrPrZvl",
        "text": {
          "en": "Besides serving the best pizzas, its atmosphere is super pleasant. My favorite pizzas... the ones from El Paseo!",
          "es": "Además de servir las mejores pizzas, su ambiente es súper agradable. Mis pizzas favoritas... ¡las del Paseo!"
        }
      }
    ]
  },
  {
    "id": "ChIJKceELymPMYwRq5fBMnDQJjU",
    "name": "SABINO CON TODO",
    "category": {
      "es": "Bar y parrilla",
      "en": "Bar & Grill"
    },
    "address": "Calle Fermin, & Calle Malave, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.962588,
    "lng": -63.841384,
    "rating": 4.4,
    "ratingCount": 81,
    "googleMapsUri": "https://maps.google.com/?cid=3829977713431648171&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/sabinocontodo",
    "phone": "0414-7820811",
    "reviews": [
      {
        "author": "Jhonny Rivero",
        "rating": 5,
        "date": "2026-05-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tKaWJHVlhPRWR5VVRoMU5HSTJMWFJJY0dwUFIwRRAB!2m1!1s0x0:0x3526d07032c197ab!3m1!1s2@1:CAIQACodChtycF9oOkJibGVXOEdyUTh1NGI2LXRIcGpPR0E%7C%7C?hl=en",
        "text": {
          "en": "Excellent atmosphere",
          "es": "Excelente ambiente"
        }
      },
      {
        "author": "Gregoris Rafael Villarroel Silva",
        "rating": 4,
        "date": "2026-01-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21oVFUyeEdaRGRNUVhFdGQxZElOVlUwUlZOVVVsRRAB!2m1!1s0x0:0x3526d07032c197ab!3m1!1s2@1:CAIQACodChtycF9oOmhTU2xGZDdMQXEtd1dINVU0RVNUUlE%7C%7C?hl=en",
        "text": {
          "en": "A pleasant atmosphere, good service, and a great location. Highly recommended.",
          "es": "Un ambiente agradable, buen servicio y una gran ubicación. Muy recomendado."
        }
      },
      {
        "author": "Cesar Coronel",
        "rating": 5,
        "date": "2025-11-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25KR04yNUpMV0pUTURCUVJsazRNVWhTUWtaUVYwRRAB!2m1!1s0x0:0x3526d07032c197ab!3m1!1s2@1:CAIQACodChtycF9oOnJGN25JLWJTMDBQRlk4MUhSQkZQV0E%7C%7C?hl=en",
        "text": {
          "en": "It has a new location. The service is top-notch; it's one of the few places on the island that stays open until the early hours of the morning in Mariño.",
          "es": "Tiene una nueva ubicación. El servicio es de primera; es uno de los pocos lugares de la isla que permanece abierto hasta la madrugada en Mariño."
        }
      },
      {
        "author": "Crusher P",
        "rating": 5,
        "date": "2025-07-19",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tJMFkxVlZNRzl1ZGxkMk5FZ3hVMkp4YVVscU5GRRAB!2m1!1s0x0:0x3526d07032c197ab!3m1!1s2@1:CAIQACodChtycF9oOkI0Y1VVMG9udld2NEgxU2JxaUlqNFE%7C%7C?hl=en",
        "text": {
          "en": "I ate very good here",
          "es": "Comí muy bien aquí"
        }
      },
      {
        "author": "Adrián Trujillo",
        "rating": 4,
        "date": "2025-02-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURmd2U3clJREAE!2m1!1s0x0:0x3526d07032c197ab!3m1!1s2@1:CIHM0ogKEICAgIDfwe7rRQ%7C%7C?hl=en",
        "text": {
          "en": "From the first time I visited Sabino, I was captivated. The music on DJ nights is simply spectacular, creating an incredible atmosphere for enjoying yourself and dancing. The owners' service is top-notch; they're always attentive and eager to make you feel right at home.\n\nThe place is very well-stocked, with a variety of snacks, hot dogs, and hamburgers to satisfy all tastes. Plus, the drinks are very affordable, with a combo of 3 beers for $2. The best part is that it has two distinct areas: one cool and comfortable with air conditioning, and another outdoors where you can enjoy the breeze while smoking a cigarette.\n\nCongratulations to Sabino and Fransenka for creating such a welcoming and fun space. I wish them continued success!",
          "es": "Desde la primera vez que visité Sabino quedé cautivado. La música en las noches de DJ es simplemente espectacular y crea un ambiente increíble para divertirse y bailar. El servicio de los dueños es de primera; siempre están atentos y con ganas de hacerte sentir como en casa.\n\nEl lugar está muy bien surtido, con variedad de pasapalos, perros calientes y hamburguesas para todos los gustos. Además, las bebidas son muy económicas, con un combo de 3 cervezas por 2 $. Lo mejor es que tiene dos áreas bien diferenciadas: una fresca y cómoda con aire acondicionado, y otra al aire libre donde puedes disfrutar de la brisa mientras fumas un cigarrillo.\n\n¡Felicitaciones a Sabino y Fransenka por crear un espacio tan acogedor y divertido! ¡Les deseo mucho éxito!"
        }
      }
    ]
  },
  {
    "id": "ChIJN9eLAQCPMYwR9mXGgxwZKug",
    "name": "NUMERO 1 - Restaurante Italiano",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.996562,
    "lng": -63.800062,
    "rating": 4.4,
    "ratingCount": 64,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=16729211376081724918&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/numero1pampatar/",
    "phone": "0414-9834684",
    "reviews": [
      {
        "author": "Gianfranco Del Nostro",
        "rating": 5,
        "date": "2026-09-03",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xobFN6aHNlV2sxYWtONFUwMUVTVVZ3TW5aSVFrRRAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOlhlSzhseWk1akN4U01ESUVwMnZIQkE%7C%7C?hl=en",
        "text": {
          "en": "Excellent restaurant, good food, desserts, exceptional service and atmosphere",
          "es": "Excelente restaurante, buena comida y postres, servicio y ambiente excepcionales."
        }
      },
      {
        "author": "Valentina Saracino",
        "rating": 5,
        "date": "2026-08-19",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkeVpYUnZSMDR4YlZwWWNsQnNWRUZPZUhSSWFHYxAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOjdyZXRvR04xbVpYclBsVEFOeHRIaGc%7C%7C?hl=en",
        "text": {
          "en": "On August 15th, we returned to Numero 1 in Pampatar, and I must say it was an experience that will forever remain in my heart! 🌟\nWe chose the Lomito, a melt-in-your-mouth fillet cooked with a mastery that only true food enthusiasts can achieve! Every bite was an explosion of flavor, with the meat tender and succulent!\nTo accompany it, we opted for the Gran Sasso gnocchi, a true delight in every bite. Soft and wrapped in a rich, creamy sauce, they were an embrace of flavors that made us feel at home. Each dish was a celebration of Italian cuisine, prepared with fresh ingredients and passion.\nA special thanks goes to Giorgio, whose attentiveness and friendliness made our evening even more magical. His helpfulness and suggestions illuminated our experience, making the service not only impeccable, but also warm and welcoming.\nThe atmosphere at Numero 1 is simply enchanting, where every detail is carefully crafted. It's a gorgeous, stylish, and designer place, and even the bathroom is beautiful and refined, a further sign of their attention to detail.\nI can't wait to come back and discover other wonders on the menu! If you're in Pampatar, you absolutely can't miss this gem. It's a place where the passion for cooking shines through in every dish and every smile! 🍽️❤️\nAnd finally, we also enjoyed live music until late, and we danced! It was so much fun! Thanks guys, see you soon!!",
          "es": "El 15 de agosto volvimos a Numero 1 en Pampatar, ¡y debo decir que fue una experiencia que quedará por siempre en mi corazón! 🌟\nElegimos el Lomito, ¡un filete que se deshace en la boca, cocinado con una maestría que solo los verdaderos amantes de la comida logran! ¡Cada bocado era una explosión de sabor, con la carne tierna y jugosa!\nPara acompañar, optamos por los gnocchi Gran Sasso, un verdadero deleite en cada bocado. Suaves y envueltos en una salsa rica y cremosa, eran un abrazo de sabores que nos hicieron sentir como en casa. Cada plato fue una celebración de la cocina italiana, preparada con ingredientes frescos y pasión.\nUn agradecimiento especial para Giorgio, cuya atención y simpatía hicieron nuestra velada aún más mágica. Su disposición y sus sugerencias iluminaron nuestra experiencia, haciendo que el servicio no solo fuera impecable, sino también cálido y acogedor.\nEl ambiente de Numero 1 es simplemente encantador, donde cada detalle está cuidadosamente elaborado. Es un lugar hermoso, con estilo y de diseño, y hasta el baño es precioso y refinado, una muestra más de su atención al detalle.\n¡No veo la hora de volver y descubrir otras maravillas del menú! Si estás en Pampatar, no puedes dejar de visitar esta joya. ¡Es un lugar donde la pasión por la cocina brilla en cada plato y en cada sonrisa! 🍽️❤️\nY por último, también disfrutamos de música en vivo hasta tarde, ¡y bailamos! ¡Fue muy divertido! ¡Gracias, chicos, nos vemos pronto!"
        }
      },
      {
        "author": "Estefanía Flores",
        "rating": 5,
        "date": "2026-08-11",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pnMlducGlNRzl5VjJGSU4yVjZZbEZtZFc1WllWRRAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOjg2WnpiMG9yV2FIN2V6YlFmdW5ZYVE%7C%7C?hl=en",
        "text": {
          "en": "I tried their platter, pasta, and desserts. Everything was delicious, and the service was excellent. Highly recommended 😊",
          "es": "Probé su bandeja, pasta y postres. Todo estaba delicioso y el servicio fue excelente. Muy recomendado 😊"
        }
      },
      {
        "author": "Carlos Cordova",
        "rating": 1,
        "date": "2026-08-03",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pOYVV6VkdVMmh6V2tkME16aHZUbkJtVFcxU01rRRAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOjNaUzVGU2hzWkd0MzhvTnBmTW1SMkE%7C%7C?hl=en",
        "text": {
          "en": "Honestly, this was my first and last visit because the worst thing you can do at an Italian restaurant is not serve al dente pasta, freeze the focaccia, and serve it as a Margherita pizza. The pizza (frozen focaccia) had no sauce, just an excess of cheese that never melted into the dough because it was frozen. I don't recommend it, especially with Portarossa right next door... so now you know where to go for dinner!",
          "es": "Sinceramente, esta fue mi primera y última visita, porque lo peor que puedes hacer en un restaurante italiano es no servir la pasta al dente, congelar la focaccia y servirla como pizza Margarita. La pizza (focaccia congelada) no tenía salsa, solo un exceso de queso que nunca se derritió en la masa porque estaba congelada. No lo recomiendo, sobre todo teniendo Portarossa justo al lado... ¡así que ya sabes dónde ir a cenar!"
        }
      },
      {
        "author": "Ana Chacin",
        "rating": 5,
        "date": "2026-07-23",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pCTkxURlpTVTlmWjB4UE1XbE1RWE5hVkRKTWVHYxAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOjBNLTFZSU9fZ0xPMWlMQXNaVDJMeGc%7C%7C?hl=en",
        "text": {
          "en": "Friendly and prompt service. Excellent food. Pleasant atmosphere.",
          "es": "Servicio amable y rápido. Excelente comida. Ambiente agradable."
        }
      },
      {
        "author": "Leonardo Pup",
        "rating": 5,
        "date": "2026-07-12",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xoQmRVTnRWblo0T0ZaMVNtZzJYM2RRT0Vwb2FGRRAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOlhBdUNtVnZ4OFZ1Smg2X3dQOEpoaFE%7C%7C?hl=en",
        "text": {
          "en": "Authentic Italian flavors and tradition, Number 1!",
          "es": "¡Sabores y tradición auténticamente italianos, Number 1!"
        }
      },
      {
        "author": "Thomas Vidotto",
        "rating": 5,
        "date": "2026-07-03",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25jM2VETnBNak5GWVc4d2FVdDNRa2d4TWtRMk1HYxAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOnc3eDNpMjNFYW8waUt3QkgxMkQ2MGc%7C%7C?hl=en",
        "text": {
          "en": "Best Place in Margarita, The Owners are from Italy and they're super smart and the environment is super clean and fresh.",
          "es": "El mejor lugar de Margarita. Los dueños son de Italia, son súper atentos y el ambiente es súper limpio y fresco."
        }
      },
      {
        "author": "zack fair",
        "rating": 5,
        "date": "2026-07-02",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21kdVdUTlJTMWx6ZEY5dE9HVkpUVEpsWkZaWk4yYxAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOmduWTNRS1lzdF9tOGVJTTJlZFZZN2c%7C%7C?hl=en",
        "text": {
          "en": "Best restaurant on Isla Margarita so far!\nWithout a doubt👍",
          "es": "¡El mejor restaurante de la Isla de Margarita hasta ahora!\nSin duda 👍"
        }
      },
      {
        "author": "Claudio Stivanin",
        "rating": 5,
        "date": "2026-06-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xCSldFTnpZa0ZuTVcxTGFVNURTVE01TkRCTFJYYxAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOlBJWENzYkFnMW1LaU5DSTM5NDBLRXc%7C%7C?hl=en",
        "text": {
          "en": "Excellent dishes, fish or meat always top-notch. Italian owners, always a warm welcome, and very professional staff.",
          "es": "Excelentes platos; el pescado o la carne, siempre de primera. Dueños italianos, siempre una bienvenida cálida y un personal muy profesional."
        }
      },
      {
        "author": "Dario Talavera",
        "rating": 5,
        "date": "2026-06-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pGdE4yaFlRM2xUV0VjMmFsaFlkazVrTFd0MGNIYxAB!2m1!1s0x0:0xe82a191c83c665f6!3m1!1s2@1:CAIQACodChtycF9oOjFtN2hYQ3lTWEc2alhYdk5kLWt0cHc%7C%7C?hl=en",
        "text": {
          "en": "Excellent location, decor, service, and food. The prices are also very good; a place to definitely return to.",
          "es": "Excelente ubicación, decoración, servicio y comida. Los precios también son muy buenos; un lugar al que definitivamente hay que volver."
        }
      }
    ]
  },
  {
    "id": "ChIJk7dUBEOPMYwRljbZESoOUIA",
    "name": "El budare de pampatar",
    "category": {
      "es": "Brunch",
      "en": "Brunch Restaurant"
    },
    "address": "22 C. San Martin, Porlamar 6316, Nueva Esparta, Venezuela",
    "lat": 10.995456,
    "lng": -63.8026,
    "rating": 4.4,
    "ratingCount": 45,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=9245905608842491542&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/elbudaredepampatar/",
    "reviews": [
      {
        "author": "Teodoro R. Salazar Ll.",
        "rating": 1,
        "date": "2026-08-31",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xkTGRVMTJVbHBCTWpWbmJIbHdjazlDWlMxWlRsRRAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOldLdU12UlpBMjVnbHlwck9CZS1ZTlE%7C%7C?hl=en",
        "text": {
          "en": "Terrible service, they don't have the capacity to handle the number of tables they have, I don't recommend it.",
          "es": "Pésimo servicio, no tienen capacidad para atender la cantidad de mesas que tienen. No lo recomiendo."
        }
      },
      {
        "author": "Pedro Longart",
        "rating": 5,
        "date": "2026-06-12",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21Wd1lWOUxjbWRMV0RSTk1IQm9jakkzTm1oV1VrRRAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOmVwYV9LcmdLWDRNMHBocjI3NmhWUkE%7C%7C?hl=en",
        "text": {
          "en": "Great value for money",
          "es": "Excelente relación calidad-precio."
        }
      },
      {
        "author": "Alberto Venegas",
        "rating": 5,
        "date": "2026-04-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT201d2ExSlpTSE5QV0hCbVNEaGhMVlZtVUhoYWRXYxAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOm5wa1JZSHNPWHBmSDhhLVVmUHhadWc%7C%7C?hl=en",
        "text": {
          "en": "Excellent food and service. Perfect for breakfast or lunch.",
          "es": "Excelente comida y servicio. Perfecto para desayunar o almorzar."
        }
      },
      {
        "author": "Luis Sanquirico",
        "rating": 2,
        "date": "2026-04-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25kS1MyWkZjblYxVW5nNGVtUlpNRXQ2WkV0TlYxRRAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOndKS2ZFcnV1Ung4emRZMEt6ZEtNV1E%7C%7C?hl=en",
        "text": {
          "en": "Poor customer service",
          "es": "Mala atención al cliente."
        }
      },
      {
        "author": "Francisco Ferrer",
        "rating": 5,
        "date": "2026-02-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s4MGQwOTBhRXhTZUZGWVFuWkpZa05hYVhGT1FuYxAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOk80d090aExSeFFYQnZJYkNaaXFOQnc%7C%7C?hl=en",
        "text": {
          "en": "Excellent arepas and empanadas made to order",
          "es": "Excelentes arepas y empanadas hechas a la orden."
        }
      },
      {
        "author": "Yonniel Guerra",
        "rating": 5,
        "date": "2025-12-13",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT20wNGMwOHlSSHBqVVc1V2FqRlRSelEyZFc5T1RWRRAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOm04c08yRHpjUW5WajFTRzQ2dW9OTVE%7C%7C?hl=en",
        "text": {
          "en": "Very good experience",
          "es": "Muy buena experiencia."
        }
      },
      {
        "author": "Nárjara León",
        "rating": 5,
        "date": "2025-11-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2twd1RUQmZYMVpoWlU1U04wWlFiMWRMYUhvMlExRRAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOkpwTTBfX1ZhZU5SN0ZQb1dLaHo2Q1E%7C%7C?hl=en",
        "text": {
          "en": "The best empanadas and arepas on the island.",
          "es": "Las mejores empanadas y arepas de la isla."
        }
      },
      {
        "author": "francis figue",
        "rating": 5,
        "date": "2025-10-04",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21JMmJVNDRlbFJ3TUZveVZsSnNNbEpZY1c5SFVHYxAB!2m1!1s0x0:0x80500e2a11d93696!3m1!1s2@1:CAIQACodChtycF9oOmI2bU44elRwMFoyVlJsMlJYcW9HUGc%7C%7C?hl=en",
        "text": {
          "en": "Excellent Food",
          "es": "Excelente comida."
        }
      }
    ]
  },
  {
    "id": "ChIJX9nSxKSPMYwR0SmUNqHrgzI",
    "name": "catabar",
    "category": {
      "es": "Bar y restaurante",
      "en": "Bar & Restaurant"
    },
    "address": "Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.996275,
    "lng": -63.801574,
    "rating": 4.3,
    "ratingCount": 48,
    "googleMapsUri": "https://maps.google.com/?cid=3640012001483434449&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://linktr.ee/Catabar__?utm_source=linktree_profile_share&ltsid=b3a0d4be-b063-4a9e-b44f-bb775616e1f9",
    "phone": "0422-4749999",
    "reviews": [
      {
        "author": "Arq. Willianny Alfonzo G.",
        "rating": 5,
        "date": "2026-08-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT214M1ptdGhSRVZuWVc5c00zWkhVMnQyVkY5RU0wRRAB!2m1!1s0x0:0x3283eba1369429d1!3m1!1s2@1:CAIQACodChtycF9oOmx3ZmthREVnYW9sM3ZHU2t2VF9EM0E%7C%7C?hl=en",
        "text": {
          "en": "What an incredible place! The entire culinary offering and cocktail menu are top-notch, but what truly sets it apart is the passion and care with which the service is provided. We were fascinated that both the servers and the chef himself approached us to explain the details of each dish, and that the bartender did the same with his cocktails. That personalized and professional touch truly adds enormous value to the evening.\n\nWe tried everything, and each option was impeccable, but without a doubt, the classic smoked steak tartare with whole-grain mustard seeds and baby capers stole the show. It was our absolute favorite of the night!\n\nThe ambiance of the place is beautiful, very pleasant, and has a special charm. Without a doubt, Catabar has tremendous potential and an amazing vibe. Highly recommended, and we'll be back a thousand times!",
          "es": "¡Qué lugar tan increíble! Toda la oferta culinaria y la carta de cócteles son de primer nivel, pero lo que realmente lo distingue es la pasión y el cuidado con que se brinda el servicio. Nos fascinó que tanto los meseros como el propio chef se acercaran a explicarnos los detalles de cada plato, y que el bartender hiciera lo mismo con sus cócteles. Ese toque personalizado y profesional le da un valor enorme a la velada.\n\nProbamos todo y cada opción fue impecable, pero sin duda el clásico tártar de carne ahumado con semillas de mostaza a la antigua y alcaparras baby se robó el show. ¡Fue nuestro favorito absoluto de la noche!\n\nEl ambiente del lugar es hermoso, muy agradable y con un encanto especial. Sin duda, Catabar tiene un potencial enorme y una vibra increíble. ¡Muy recomendado, y volveremos mil veces!"
        }
      },
      {
        "author": "Nicole Holzportz",
        "rating": 3,
        "date": "2025-04-12",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTURJalkzcTlnRRAB!2m1!1s0x0:0x3283eba1369429d1!3m1!1s2@1:CIHM0ogKEICAgMDIjY3q9gE%7C%7C?hl=en",
        "text": {
          "en": "It looks great in the photos, but unfortunately the bar no longer seems to exist; there's just an empty building at that address.\n\nIt looks great in the photos, but unfortunately the bar seems to be gone; there's just an empty building at that address.",
          "es": "Se ve genial en las fotos, pero lamentablemente el bar parece ya no existir; solo hay un edificio vacío en esa dirección."
        }
      },
      {
        "author": "maya da rocha",
        "rating": 5,
        "date": "2024-01-21",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUROZ3VPZnl3RRAB!2m1!1s0x0:0x3283eba1369429d1!3m1!1s2@1:CIHM0ogKEICAgIDNguOfywE%7C%7C?hl=en",
        "text": {
          "en": "The best of the best",
          "es": "Lo mejor de lo mejor"
        }
      },
      {
        "author": "Abraham El pro",
        "rating": 5,
        "date": "2023-04-15",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURSc0x5bTJ3RRAB!2m1!1s0x0:0x3283eba1369429d1!3m1!1s2@1:CIHM0ogKEICAgIDRsLym2wE%7C%7C?hl=en",
        "text": {
          "en": "Excellent place to party",
          "es": "Excelente lugar para rumbear"
        }
      }
    ]
  },
  {
    "id": "ChIJo8wUYY2PMYwRuqIlW9T1U3U",
    "name": "Soda Bistro",
    "category": {
      "es": "Bar y parrilla",
      "en": "Bar & Grill"
    },
    "address": "C.C. Bayside isla de margarita, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.974867,
    "lng": -63.818914,
    "rating": 4.2,
    "ratingCount": 195,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=8454371217915617978&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://linktr.ee/Soda.Bistro",
    "phone": "0424-8840959",
    "reviews": [
      {
        "author": "Yerffenson Maita",
        "rating": 5,
        "date": "2026-09-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xsclpVVllXR0kwWW5WT1UwTmFjWFoyU0V0aWMwRRAB!2m1!1s0x0:0x7553f5d45b25a2ba!3m1!1s2@1:CAIQACodChtycF9oOllrZUVYWGI0YnVOU0NacXZ2SEtic0E%7C%7C?hl=en",
        "text": {
          "en": "Excellent atmosphere to leave stress behind and enjoy life, good music for all tastes 😊",
          "es": "Excelente ambiente para dejar atrás el estrés y disfrutar la vida, buena música para todos los gustos 😊"
        }
      },
      {
        "author": "richard lugo",
        "rating": 5,
        "date": "2026-07-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xOcWJIQnlVR3BhUVRGeGRuWk1UVTFpUmtseGNWRRAB!2m1!1s0x0:0x7553f5d45b25a2ba!3m1!1s2@1:CAIQACodChtycF9oOlNqbHByUGpaQTFxdnZMTU1iRklxcVE%7C%7C?hl=en",
        "text": {
          "en": "Come and see for yourself, you won't regret it",
          "es": "Ven y compruébalo tú mismo, no te arrepentirás."
        }
      },
      {
        "author": "Lisandra Rivas",
        "rating": 3,
        "date": "2026-06-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2trNE5HeHlaRWRCVTNwbU9HNTBXRVJMVEhGbWFVRRAB!2m1!1s0x0:0x7553f5d45b25a2ba!3m1!1s2@1:CAIQACodChtycF9oOkk4NGxyZEdBU3pmOG50WERLTHFmaUE%7C%7C?hl=en",
        "text": {
          "en": "Brilliant",
          "es": "Brillante"
        }
      },
      {
        "author": "Guillermo Longart",
        "rating": 3,
        "date": "2026-02-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2taaWNrdDJaRk55TjJOblNGTk9iemhqY2xJd2IxRRAB!2m1!1s0x0:0x7553f5d45b25a2ba!3m1!1s2@1:CAIQACodChtycF9oOkZickt2ZFNyN2NnSFNObzhjclIwb1E%7C%7C?hl=en",
        "text": {
          "en": "We need to add something new.",
          "es": "Necesitamos agregar algo nuevo."
        }
      }
    ]
  },
  {
    "id": "ChIJNwjPLgCPMYwRz0uBsVFqGoU",
    "name": "BRASAS Restaurante",
    "category": {
      "es": "Parrilla",
      "en": "Barbecue Restaurant"
    },
    "address": "X6X3+QQ8, Pampatar 6316, Nueva Esparta, Venezuela",
    "lat": 10.999411,
    "lng": -63.79554,
    "rating": 4.2,
    "ratingCount": 27,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=9591095255541828559&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://brasasrestaurant.com.ve/",
    "phone": "0414-8447020",
    "reviews": [
      {
        "author": "Carlos Luis",
        "rating": 5,
        "date": "2026-09-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT201SE5XZEtlR04yVGxwdFgxVnpNSFkzVVdOWVpsRRAB!2m1!1s0x0:0x851a6a51b1814bcf!3m1!1s2@1:CAIQACodChtycF9oOm5HNWdKeGN2TlptX1VzMHY3UWNYZlE%7C%7C?hl=en",
        "text": {
          "en": "Excellent experience at Las Brasas in Pampatar. Its location on the shores of Pampatar Bay provides a spectacular, relaxed atmosphere, perfect for enjoying a delicious meal by the sea. We tried a very hearty seafood soup and a mixed platter of fried seafood, plantain chips, and salad—all very tasty and with generous portions. The service was excellent, attentive throughout. Great food, a wonderful atmosphere, and a stunning view.",
          "es": "Excelente experiencia en Las Brasas de Pampatar. Su ubicación a orillas de la Bahía de Pampatar brinda un ambiente espectacular y relajado, perfecto para disfrutar de una comida deliciosa junto al mar. Probamos una sopa de mariscos muy contundente y un plato mixto de mariscos fritos, tostones y ensalada: todo muy sabroso y con porciones generosas. El servicio fue excelente, atento en todo momento. Buena comida, un ambiente maravilloso y una vista impresionante."
        }
      },
      {
        "author": "Fidel Yacoub",
        "rating": 5,
        "date": "2026-09-05",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xseWExOW1UVzFaTFZSa2JsWnJhVkJPVVVoeloxRRAB!2m1!1s0x0:0x851a6a51b1814bcf!3m1!1s2@1:CAIQACodChtycF9oOllya19mTW1ZLVRkblZraVBOUUhzZ1E%7C%7C?hl=en",
        "text": {
          "en": "Excellent service, taste and location 10/10",
          "es": "Excelente servicio, sabor y ubicación 10/10."
        }
      },
      {
        "author": "Diego",
        "rating": 5,
        "date": "2026-08-19",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21oQ2R6QnhNbkZVVDNoRVVrUjJaRVJYTkd0M1drRRAB!2m1!1s0x0:0x851a6a51b1814bcf!3m1!1s2@1:CAIQACodChtycF9oOmhCdzBxMnFUT3hEUkR2ZERXNGt3WkE%7C%7C?hl=en",
        "text": {
          "en": "Excellent pizzas at good prices",
          "es": "Excelentes pizzas a buen precio."
        }
      },
      {
        "author": "luis heumann",
        "rating": 1,
        "date": "2026-08-17",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tSTlMzQjJNV1o1Tm1wdU9GcFFTREpNYVRVMVJsRRAB!2m1!1s0x0:0x851a6a51b1814bcf!3m1!1s2@1:CAIQACodChtycF9oOkRNS3B2MWZ5NmpuOFpQSDJMaTU1RlE%7C%7C?hl=en",
        "text": {
          "en": "It took two hours to get my chicken. They made me wait an hour only to tell me it still wasn't ready. Then they made me wait another hour. The waiter's service was terrible.",
          "es": "Tardaron dos horas en traerme el pollo. Me hicieron esperar una hora solo para decirme que aún no estaba listo. Luego me hicieron esperar otra hora. El servicio del mesero fue terrible."
        }
      },
      {
        "author": "Raiza Perez Acosta",
        "rating": 1,
        "date": "2026-08-11",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xkeFZqVk5UMmRWTlhCVGJFWldjbnBtYW1oamVuYxAB!2m1!1s0x0:0x851a6a51b1814bcf!3m1!1s2@1:CAIQACodChtycF9oOldxVjVNT2dVNXBTbEZWcnpmamhjenc%7C%7C?hl=en",
        "text": {
          "en": "Upon entering, my family and I explicitly asked about the pizzas and their sizes. After sitting at our table for 20 minutes, having already chosen our flavors, we called the waiter, who only then informed us that although they always served pizzas from 3:30, the same time we arrived, that day they would have pizzas an hour and a half later. It was a completely unpleasant, unjustified, and tasteless experience, since we announced upon arrival that we were there for pizzas. My mother is 84 years old, and we had to walk much further, even hungrier, to find another place. A terrible experience!",
          "es": "Al entrar, mi familia y yo preguntamos explícitamente por las pizzas y sus tamaños. Después de estar 20 minutos en la mesa, con los sabores ya elegidos, llamamos al mesero, quien solo entonces nos informó que, aunque siempre servían pizzas desde las 3:30, la misma hora a la que llegamos, ese día las tendrían una hora y media más tarde. Fue una experiencia del todo desagradable, injustificada y sin sentido, ya que avisamos al llegar que íbamos por las pizzas. Mi madre tiene 84 años y tuvimos que caminar mucho más, con aún más hambre, para encontrar otro lugar. ¡Una experiencia terrible!"
        }
      },
      {
        "author": "Frank Arleo",
        "rating": 5,
        "date": "2026-07-06",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xJMFNuVnZiMWxzYVdoclpGbE1USFF5TFdsbmJHYxAB!2m1!1s0x0:0x851a6a51b1814bcf!3m1!1s2@1:CAIQACodChtycF9oOlI0SnVvb1lsaWhrZFlMTHQyLWlnbGc%7C%7C?hl=en",
        "text": {
          "en": "Margariteña pizza is a true delight",
          "es": "La pizza margariteña es un verdadero deleite."
        }
      }
    ]
  },
  {
    "id": "ChIJf239bOqOMYwRZ5f852ywtgg",
    "name": "Sabanamar Baking",
    "category": {
      "es": "Panadería",
      "en": "Bakery"
    },
    "address": "X5C7+2C5, Av. Romulo Betancourt, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.970014,
    "lng": -63.836396,
    "rating": 4,
    "ratingCount": 1080,
    "googleMapsUri": "https://maps.google.com/?cid=627883179859810151&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "http://panaderiasabanamar.blogspot.com/",
    "phone": "0295-2642531",
    "reviews": [
      {
        "author": "Carlos Roomer",
        "rating": 5,
        "date": "2026-08-24",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21GVFVuSjRiRjl2UlhacFlWVnlZVEJzZUhJNU5FRRAB!2m1!1s0x0:0x8b6b06ce7fc9767!3m1!1s2@1:CAIQACodChtycF9oOmFTUnJ4bF9vRXZpYVVyYTBseHI5NEE%7C%7C?hl=en",
        "text": {
          "en": "Good service, they respond to requests and the pizzas come out quickly. Order the extra-toasted pizzas; they taste much better.",
          "es": "Buen servicio, responden a los pedidos y las pizzas salen rápido. Pide las pizzas extra tostadas; saben mucho mejor."
        }
      },
      {
        "author": "francisco javier rodriguez mendez",
        "rating": 5,
        "date": "2026-08-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25aSlYxTndOeTFOVms1NU0xWTRVRUkyWWxkQ2NuYxAB!2m1!1s0x0:0x8b6b06ce7fc9767!3m1!1s2@1:CAIQACodChtycF9oOnZJV1NwNy1NVk55M1Y4UEI2YldCcnc%7C%7C?hl=en",
        "text": {
          "en": "They're open Monday to Sunday until 10 pm! And they offer delivery.",
          "es": "¡Están abiertos de lunes a domingo hasta las 10 pm! Y ofrecen delivery."
        }
      },
      {
        "author": "Herman Rodriguez",
        "rating": 5,
        "date": "2026-04-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25CVFJrNU5XRkJuUkZGNGFEaHNiWGhCVVc1V1IzYxAB!2m1!1s0x0:0x8b6b06ce7fc9767!3m1!1s2@1:CAIQACodChtycF9oOnBTRk5NWFBnRFF4aDhsbXhBUW5WR3c%7C%7C?hl=en",
        "text": {
          "en": "The best bread on the island.",
          "es": "El mejor pan de la isla."
        }
      },
      {
        "author": "Maria Valerio",
        "rating": 5,
        "date": "2026-02-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUNxMW91dWtnRRAB!2m1!1s0x0:0x8b6b06ce7fc9767!3m1!1s2@1:CIHM0ogKEICAgICq1ouukgE%7C%7C?hl=en",
        "text": {
          "en": "🤑😎🤤🤤🤤 Excellent",
          "es": "🤑😎🤤🤤🤤 Excelente"
        }
      },
      {
        "author": "Julimar Gonzalez",
        "rating": 1,
        "date": "2026-02-01",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSURocmF6TVRREAE!2m1!1s0x0:0x8b6b06ce7fc9767!3m1!1s2@1:CIHM0ogKEICAgIDhrazMTQ%7C%7C?hl=en",
        "text": {
          "en": "Attention: In January 2026, I observed the unsanitary conditions of the bread, due to the flies that landed on it because it was left uncovered. I asked one of the workers to please try to put cellophane or something over the bread to protect it, but she laughed, probably because of my surprised expression. Be careful when buying bread at this place; it could become a public health issue. The space needs better lighting and its appearance needs improvement. If they are careless on the outside, I don't want to imagine what it's like inside where they make their bread. I would have liked to give a better review, but I am concerned about the flies landing on the bread that the consumer ends up buying.",
          "es": "Atención: en enero de 2026 observé las condiciones antihigiénicas del pan, por las moscas que se posaban en él al estar descubierto. Le pedí a una de las trabajadoras que, por favor, intentara ponerle celofán o algo para proteger el pan, pero se rió, probablemente por mi cara de sorpresa. Ten cuidado al comprar pan en este lugar; podría convertirse en un problema de salud pública. El espacio necesita mejor iluminación y mejorar su apariencia. Si son descuidados por fuera, no quiero imaginar cómo será por dentro, donde hacen su pan. Me hubiera gustado dar una mejor reseña, pero me preocupan las moscas que se posan en el pan que el consumidor termina comprando."
        }
      },
      {
        "author": "Eucaris Patino",
        "rating": 5,
        "date": "2026-01-20",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2t4bmFUaHBhVU15ZGtwS2JuRkRjMUJyUm1kWFJsRRAB!2m1!1s0x0:0x8b6b06ce7fc9767!3m1!1s2@1:CAIQACodChtycF9oOkxnaThpaUMydkpKbnFDc1BrRmdXRlE%7C%7C?hl=en",
        "text": {
          "en": "The best bakery on the island",
          "es": "La mejor panadería de la isla"
        }
      }
    ]
  },
  {
    "id": "ChIJKfWGiruPMYwRVxLquf1rSwM",
    "name": "11:11 Rooftop",
    "category": {
      "es": "Bar y parrilla",
      "en": "Bar & Grill"
    },
    "address": "1063, Pampatar 1063, Nueva Esparta, Venezuela",
    "lat": 10.996554,
    "lng": -63.811423,
    "rating": 4,
    "ratingCount": 18,
    "googleMapsUri": "https://maps.google.com/?cid=237402142857106007&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "http://1111rooftop.com/menu/",
    "phone": "0412-5891115",
    "reviews": [
      {
        "author": "Christian Valenzuela",
        "rating": 4,
        "date": "2026-07-28",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25saVkwVnFhSEZYTkROd05YcFVibkEzVGkxVk1WRRAB!2m1!1s0x0:0x34b6bfdb9ea1257!3m1!1s2@1:CAIQACodChtycF9oOnliY0VqaHFXNDNwNXpUbnA3Ti1VMVE%7C%7C?hl=en",
        "text": {
          "en": "Good place to eat a good meal at a good price",
          "es": "Buen lugar para comer bien a buen precio."
        }
      },
      {
        "author": "Rosalbanellys Calvo Calvo",
        "rating": 1,
        "date": "2026-07-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21GMWFtZExOa0ZUVEZWc2JHUjFabG90U2xrM2JsRRAB!2m1!1s0x0:0x34b6bfdb9ea1257!3m1!1s2@1:CAIQACodChtycF9oOmF1amdLNkFTTFVsbGR1ZlotSlk3blE%7C%7C?hl=en",
        "text": {
          "en": "My friend and I went with a Spanish tourist to whom we spoke highly of the place, but they wouldn't let us in because he was wearing cropped shorts.\n\nWell, there are other places to eat sushi. I recommend the lobster sushi at Sambil as a second option.",
          "es": "Mi amiga y yo fuimos con un turista español a quien le hablamos maravillas del lugar, pero no nos dejaron entrar porque llevaba shorts cortos.\n\nBueno, hay otros lugares para comer sushi. Recomiendo el sushi de langosta del Sambil como segunda opción."
        }
      },
      {
        "author": "cacharro",
        "rating": 1,
        "date": "2026-07-26",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21NMlVGcHNiMkpRYUVaWFkwaHVNbkpuVDNaU1NVRRAB!2m1!1s0x0:0x34b6bfdb9ea1257!3m1!1s2@1:CAIQACodChtycF9oOmM2UFpsb2JQaEZXY0huMnJnT3ZSSUE%7C%7C?hl=en",
        "text": {
          "en": "From Spain\nCould you please update the information on Google Maps? It says it's open when it's actually closed. My time is valuable, especially on vacation.",
          "es": "Desde España.\n¿Podrían por favor actualizar la información en Google Maps? Dice que está abierto cuando en realidad está cerrado. Mi tiempo es valioso, sobre todo de vacaciones."
        }
      },
      {
        "author": "Carlos Yepez",
        "rating": 5,
        "date": "2026-03-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25Oc1J6WjRhazVsUkRVNE9IVjZjVVkzTkRKSFgxRRAB!2m1!1s0x0:0x34b6bfdb9ea1257!3m1!1s2@1:CAIQACodChtycF9oOnNsRzZ4ak5lRDU4OHV6cUY3NDJHX1E%7C%7C?hl=en",
        "text": {
          "en": "Great music and drinks, it can get hot sometimes",
          "es": "Buena música y buenos tragos; a veces hace calor."
        }
      },
      {
        "author": "Victor Marcillo",
        "rating": 5,
        "date": "2026-03-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tWUFFVWmxZWEZTUVVvMlNWRnljR2gxU2xnMk0xRRAB!2m1!1s0x0:0x34b6bfdb9ea1257!3m1!1s2@1:CAIQACodChtycF9oOkVPQUZlYXFSQUo2SVFycGh1Slg2M1E%7C%7C?hl=en",
        "text": {
          "en": "Amazing atmosphere, everyone was so friendly. A truly luxurious experience. Thank you!",
          "es": "Ambiente increíble, todos fueron muy amables. Una experiencia realmente de lujo. ¡Gracias!"
        }
      },
      {
        "author": "Joseph Bolaños",
        "rating": 5,
        "date": "2026-03-13",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2kxSVUwTnFVVjh3ZUhOTGVISnNVSFJWUTNKbFZrRRAB!2m1!1s0x0:0x34b6bfdb9ea1257!3m1!1s2@1:CAIQACodChtycF9oOi1IU0NqUV8weHNLeHJsUHRVQ3JlVkE%7C%7C?hl=en",
        "text": {
          "en": "The best sushi and the best cocktails on Margarita Island, without a doubt",
          "es": "El mejor sushi y los mejores cócteles de la Isla de Margarita, sin duda."
        }
      },
      {
        "author": "Jesus Joel Martinez ortiz",
        "rating": 2,
        "date": "2026-03-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tjMlpFaHhZVGhoVEhrM1oxRnhTalpYVUhSQldsRRAB!2m1!1s0x0:0x34b6bfdb9ea1257!3m1!1s2@1:CAIQACodChtycF9oOkc2ZEhxYThhTHk3Z1FxSjZXUHRBWlE%7C%7C?hl=en",
        "text": {
          "en": "Visiting from Miami, Florida, our group of friends was denied entry by security personnel because they are under 21 years old, while in Venezuela the minimum age is 18! This is unacceptable from your administration.",
          "es": "Visitando desde Miami, Florida, a nuestro grupo de amigos el personal de seguridad nos negó la entrada porque son menores de 21 años, ¡cuando en Venezuela la edad mínima es 18! Esto es inaceptable por parte de su administración."
        }
      }
    ]
  },
  {
    "id": "ChIJjZgnF7yOMYwRQvsYlJYSuCg",
    "name": "DI PASQUALE delicatessens",
    "category": {
      "es": "Panadería",
      "en": "Bakery"
    },
    "address": "X583+H42, Calle San Rafael, Porlamar 6301, Nueva Esparta, Venezuela",
    "lat": 10.966397,
    "lng": -63.847242,
    "rating": 3.8,
    "ratingCount": 498,
    "priceLevel": 2,
    "googleMapsUri": "https://maps.google.com/?cid=2934115595170937666&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "http://dipascuale.com/",
    "phone": "0295-2639658",
    "reviews": [
      {
        "author": "wndestudio diseño",
        "rating": 5,
        "date": "2026-08-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21GU1lsaHlWbEZSUzI5R1gxZE1aazF0WkVObllYYxAB!2m1!1s0x0:0x28b812969418fb42!3m1!1s2@1:CAIQACodChtycF9oOmFSYlhyVlFRS29GX1dMZk1tZENnYXc%7C%7C?hl=en",
        "text": {
          "en": "Very good bakery",
          "es": "Muy buena panadería"
        }
      },
      {
        "author": "Juddy Prieto",
        "rating": 5,
        "date": "2026-06-29",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pWMldVTmhRVkpNTTFWVlZUbDRSRGhqTkRGT1RXYxAB!2m1!1s0x0:0x28b812969418fb42!3m1!1s2@1:CAIQACodChtycF9oOjV2WUNhQVJMM1VVVTl4RDhjNDFOTWc%7C%7C?hl=en",
        "text": {
          "en": "The sweets were very good. And the mini pizzas too.",
          "es": "Los dulces estaban muy buenos. Y las mini pizzas también."
        }
      },
      {
        "author": "Moreno Lo.",
        "rating": 4,
        "date": "2026-04-02",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2xOak1qSkxWbmhHVTBwS04yWmxOM2xNV1RGc1pVRRAB!2m1!1s0x0:0x28b812969418fb42!3m1!1s2@1:CAIQACodChtycF9oOlNjMjJLVnhGU0pKN2ZlN3lMWTFsZUE%7C%7C?hl=en",
        "text": {
          "en": "Ok",
          "es": "Ok"
        }
      }
    ]
  },
  {
    "id": "ChIJz_NIvK2PMYwRdAycAwl3NHQ",
    "name": "Leila",
    "category": {
      "es": "Restaurante",
      "en": "Restaurant"
    },
    "address": "X5QW+69V, Av Aldonza Manrique, Porlamar 6316, Nueva Esparta, Venezuela",
    "lat": 10.988111,
    "lng": -63.804071,
    "rating": 3.4,
    "ratingCount": 12,
    "googleMapsUri": "https://maps.google.com/?cid=8373448487787564148&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
    "website": "https://www.instagram.com/leilarestaurant.oficial?igsh=Z284aW9oMXUwMzFh",
    "reviews": [
      {
        "author": "Jose Alejandro Perez Marrero",
        "rating": 5,
        "date": "2026-08-25",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25sVmFsZEdVMDFuZVhGalRUWlpNMUpaWTFwSFIxRRAB!2m1!1s0x0:0x74347709039c0c74!3m1!1s2@1:CAIQACodChtycF9oOnlValdGU01neXFjTTZZM1JZY1pHR1E%7C%7C?hl=en",
        "text": {
          "en": "A very good Arabic restaurant at the Downtown beach club, with excellent service. We ordered our food and they brought it to us poolside at the Tibisay Hotel. I recommend the Aleppo platter, which includes a variety of dishes and sauces and is enough for 2-3 people.",
          "es": "Un muy buen restaurante árabe en el beach club Downtown, con excelente servicio. Pedimos la comida y nos la llevaron a la piscina del Hotel Tibisay. Recomiendo la bandeja Alepo, que incluye variedad de platos y salsas y alcanza para 2 o 3 personas."
        }
      },
      {
        "author": "Quetzal Coatl",
        "rating": 1,
        "date": "2026-03-08",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pVNWFUVXlXVXBwVlZCdk1GSXplVlZmVlZsWE1XYxAB!2m1!1s0x0:0x74347709039c0c74!3m1!1s2@1:CAIQACodChtycF9oOjU5aTUyWUppVVBvMFIzeVVfVVlXMWc%7C%7C?hl=en",
        "text": {
          "en": "The food was okay, but what bothered me most was that they tell you one price, but when I paid I realized they'd raised it. It's highway robbery. I ordered at other places and they charged me exactly what they quoted, but not here. I don't recommend it; there's a reason it's always empty.",
          "es": "La comida estaba bien, pero lo que más me molestó es que te dicen un precio y al pagar me di cuenta de que lo habían subido. Es un atraco. En otros lugares pedí y me cobraron exactamente lo que me cotizaron, pero aquí no. No lo recomiendo; por algo siempre está vacío."
        }
      },
      {
        "author": "Eyce Travelling",
        "rating": 5,
        "date": "2025-11-10",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2twb1ZHbFRMVFJuZFdaeFZuVnlOa2hYUVRkRU9GRRAB!2m1!1s0x0:0x74347709039c0c74!3m1!1s2@1:CAIQACodChtycF9oOkpoVGlTLTRndWZxVnVyNkhXQTdEOFE%7C%7C?hl=en",
        "text": {
          "en": "Excellent food, everything delicious 🤤.",
          "es": "Excelente comida, todo delicioso 🤤."
        }
      },
      {
        "author": "Alex Enebral Fernandez",
        "rating": 1,
        "date": "2025-06-07",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21KSlIzcGlaMW80TlMwM01tSTBURFU1YjBGeE1tYxAB!2m1!1s0x0:0x74347709039c0c74!3m1!1s2@1:CAIQACodChtycF9oOmJJR3piZ1o4NS03MmI0TDU5b0FxMmc%7C%7C?hl=en",
        "text": {
          "en": "The food was good, but as a foreigner, I was ripped off and experienced what they call the \"Chilean package\"... where they offered a two-for-one deal, but it wasn't what it seemed. If you don't want to have to argue to get what they promised, I don't recommend it. I will admit, though, that the food and the atmosphere were nice.",
          "es": "La comida estaba buena, pero como extranjero me estafaron y viví lo que llaman el \"paquete chileno\": ofrecían un dos por uno que no era lo que parecía. Si no quieres tener que discutir para que te den lo prometido, no lo recomiendo. Eso sí, admito que la comida y el ambiente eran agradables."
        }
      },
      {
        "author": "Yolimar Gomez",
        "rating": 1,
        "date": "2025-05-05",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnTUNZc1kyNXJnRRAB!2m1!1s0x0:0x74347709039c0c74!3m1!1s2@1:CIHM0ogKEICAgMCYsY25rgE%7C%7C?hl=en",
        "text": {
          "en": "Beware of the discrepancies between the digital and physical menus; the prices don't match, and when it comes time to pay, they round up all the prices in their favor. We complained, demanding to pay the correct amount, including the 10% service charge (which we've never had a problem paying before), but they forced us to pay more because they rounded up even more in their favor. I think it's outrageous because they're making more money by stealing from each customer. In the end, we paid because we knew they'd deduct it from the waiter's pay. The owner is pretentious, the service is terrible, and I won't be back.",
          "es": "Ojo con las discrepancias entre el menú digital y el físico: los precios no coinciden y, a la hora de pagar, redondean todos los precios a su favor. Nos quejamos exigiendo pagar el monto correcto, incluido el 10 % de servicio (que nunca hemos tenido problema en pagar), pero nos obligaron a pagar más porque redondearon aún más a su favor. Me parece un atropello, porque están ganando más robándole a cada cliente. Al final pagamos porque sabíamos que se lo iban a descontar del sueldo al mesero. El dueño es pretencioso, el servicio es pésimo y no vuelvo."
        }
      },
      {
        "author": "Marilyn Perdomo",
        "rating": 5,
        "date": "2025-03-14",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnTURRdTZfdUhREAE!2m1!1s0x0:0x74347709039c0c74!3m1!1s2@1:CIHM0ogKEICAgMDQu6_uHQ%7C%7C?hl=en",
        "text": {
          "en": "This is the place to truly enjoy Arabic cuisine, specializing in gastronomy, with excellent service and a beautiful atmosphere overlooking the sea. Highly recommended.",
          "es": "Este es el lugar para disfrutar de verdad la cocina árabe, especializada en gastronomía, con excelente servicio y un hermoso ambiente frente al mar. Muy recomendado."
        }
      },
      {
        "author": "Pedro Vasquez",
        "rating": 1,
        "date": "2024-12-22",
        "provider": "google-maps",
        "url": "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUR2dVllQlhnEAE!2m1!1s0x0:0x74347709039c0c74!3m1!1s2@1:CIHM0ogKEICAgIDvuYeBXg%7C%7C?hl=en",
        "text": {
          "en": "The chicken gave me and my dad an allergic reaction, and the boss thought it tasted like...",
          "es": "El pollo nos dio una reacción alérgica a mí y a mi papá, y al jefe le pareció que sabía como..."
        }
      }
    ]
  }
];
