import { readFileSync, writeFileSync } from 'node:fs';
import { translations as translationsPorlamar } from './restaurant-translations.mjs';
import { translationsPampatar } from './restaurant-translations-pampatar.mjs';

const translations = { ...translationsPorlamar, ...translationsPampatar };
const OUT = 'src/data/restaurants.ts';
const RAW_FILES = ['/tmp/opencode/restaurants_raw.json', '/tmp/opencode/pampatar_raw.json'];

// Negocios incluidos (restaurantes, cafés y panaderías reales). Se excluyen
// bares sin cocina, licorerías, supermercados y minimarkets.
const INCLUDED = [
  'ChIJu6-AJQSPMYwRqRndL7nXQSI', // Casseros-café
  'ChIJgZUTCs6PMYwRuigCxUQH2BU', // Chino latino porlamar
  'ChIJjZgnF7yOMYwRQvsYlJYSuCg', // DI PASQUALE delicatessens
  'ChIJL_8ytdSPMYwRtFh_B5i1kkM', // El rancho de ramón
  'ChIJP7OxN4OPMYwRUAoWLiI3QVQ', // FRANCELINA FOOD
  'ChIJUdKXwI6PMYwRvnJXfvGwFKo', // Funky Buddha Gastropub
  'ChIJX4uRtuaOMYwRVMeP4Oz2Ynw', // Il Nonno Pizzeria Artesanal
  'ChIJl6h3IraOMYwRbO-J-p-p1jg', // La Casa de Rubén
  'ChIJZRlVm3mPMYwRsp5XM-Qhdpw', // La Guarida Ristorante
  'ChIJI5A7RACPMYwRpM3J_Xrq66k', // MAM CAFÉ Y VIDA
  'ChIJU2DHJbSOMYwRen7bYw_kG9w', // Pizzeria El Paseo
  'ChIJr9ChBbGOMYwRsYi0f3VAbfE', // Punto Criollo
  'ChIJKceELymPMYwRq5fBMnDQJjU', // SABINO CON TODO
  'ChIJKTFmUeuPMYwRGkPv3lR0aYA', // SUNRISE SMOKE GRILL & BAR
  'ChIJf239bOqOMYwRZ5f852ywtgg', // Sabanamar Baking
  'ChIJo8wUYY2PMYwRuqIlW9T1U3U', // Soda Bistro
  // Pampatar
  'ChIJKfWGiruPMYwRVxLquf1rSwM', // 11:11 Rooftop
  'ChIJNwjPLgCPMYwRz0uBsVFqGoU', // BRASAS Restaurante
  'ChIJ-96BlwqPMYwR1MtGSxemXik', // COCO BISTRO
  'ChIJAUAEi1OOMYwRevUmS1N4auc', // Charlies Cream
  'ChIJ62eWAxKPMYwR1LG8tlEuXRQ', // Cucina Simpatica
  'ChIJE8B2QtiPMYwREwUA9ms7Rxo', // De Gusto Bodegon
  'ChIJk7dUBEOPMYwRljbZESoOUIA', // El budare de pampatar
  'ChIJNbtMcwCPMYwR6FPpXEf37Zs', // Ennys Burger
  'ChIJtcLUAZqPMYwRgstr3v8nY7o', // Guayoyo Cafe Restaurant
  'ChIJJXtlAL2PMYwRIWatnrx9JTA', // Juana La Loca
  'ChIJraVlzyqPMYwRFONgaqm2WY8', // Kumbaya Portugal
  'ChIJz_NIvK2PMYwRdAycAwl3NHQ', // Leila
  'ChIJicS6-pePMYwRsWx4UfBj9DE', // Macaco House - LicoBar
  'ChIJK8TFy-6PMYwR-JzQM7cn1Y0', // Mahalo Gastro Place
  'ChIJN9eLAQCPMYwR9mXGgxwZKug', // NUMERO 1 - Restaurante Italiano
  'ChIJgVnoi66PMYwRme66ECrSGIU', // Restaurant Casa Azul Margarita
  'ChIJpcSxp72PMYwR4jIVaPe-LdY', // Restaurant Pola
  'ChIJX9nSxKSPMYwR0SmUNqHrgzI', // catabar
];

const CATEGORY = {
  'Coffee Shop': { es: 'Café', en: 'Coffee Shop' },
  'Chinese Restaurant': { es: 'Restaurante chino', en: 'Chinese Restaurant' },
  Bakery: { es: 'Panadería', en: 'Bakery' },
  Restaurant: { es: 'Restaurante', en: 'Restaurant' },
  'Italian Restaurant': { es: 'Restaurante italiano', en: 'Italian Restaurant' },
  'Bar & Grill': { es: 'Bar y parrilla', en: 'Bar & Grill' },
  Bar: { es: 'Bar y restaurante', en: 'Bar & Restaurant' },
  'Barbecue Restaurant': { es: 'Parrilla', en: 'Barbecue Restaurant' },
  'Brunch Restaurant': { es: 'Brunch', en: 'Brunch Restaurant' },
  Deli: { es: 'Delicatessen', en: 'Deli' },
  'Hamburger Restaurant': { es: 'Hamburguesas', en: 'Hamburger Restaurant' },
  'Portuguese Restaurant': { es: 'Restaurante portugués', en: 'Portuguese Restaurant' },
  Services: { es: 'Postres y café', en: 'Desserts & Coffee' },
};

const PRICE = {
  PRICE_LEVEL_FREE: 0,
  PRICE_LEVEL_INEXPENSIVE: 1,
  PRICE_LEVEL_MODERATE: 2,
  PRICE_LEVEL_EXPENSIVE: 3,
  PRICE_LEVEL_VERY_EXPENSIVE: 4,
};

const raw = RAW_FILES.flatMap((f) => JSON.parse(readFileSync(f, 'utf8')));
const byPlace = new Map(raw.map((r) => [r.placeId, r]));

const out = [];
for (const placeId of INCLUDED) {
  const r = byPlace.get(placeId);
  if (!r) {
    console.warn(`  ! sin datos geocodificados para ${placeId}`);
    continue;
  }
  const tr = translations[placeId] || [];
  const withText = r.reviews.filter((rv) => (rv.text || '').trim());
  if (tr.length !== withText.length) {
    console.warn(`  ! ${r.name}: ${withText.length} reseñas con texto vs ${tr.length} traducciones`);
  }
  const reviews = withText.map((rv, i) => ({
    author: rv.author || 'Anónimo',
    rating: typeof rv.rating === 'number' ? rv.rating : null,
    date: (rv.date || '').slice(0, 10),
    provider: rv.provider,
    url: rv.url,
    text: tr[i] || { es: rv.text, en: rv.text },
  }));

  out.push({
    id: r.placeId,
    name: r.name,
    category: CATEGORY[r.primaryType] || { es: r.primaryType, en: r.primaryType },
    address: r.address,
    lat: Number(r.lat.toFixed(6)),
    lng: Number(r.lng.toFixed(6)),
    rating: r.googleRating,
    ratingCount: r.googleRatingCount || 0,
    priceLevel: r.priceLevel ? PRICE[r.priceLevel] : undefined,
    googleMapsUri: r.googleMapsUri,
    website: r.websiteUri || undefined,
    phone: r.phone || undefined,
    reviews,
  });
}

out.sort((a, b) => (b.rating || 0) - (a.rating || 0) || b.ratingCount - a.ratingCount);

const header = `/**
 * ARCHIVO GENERADO por scripts/build-restaurants.mjs — NO EDITAR A MANO.
 * Datos de Google Places (geocodificados una vez) + reseñas del dataset
 * (Tripadvisor / Google Maps / Facebook) con traducción manual es/en.
 * Total: ${out.length} restaurantes, ${out.reduce((n, r) => n + r.reviews.length, 0)} reseñas.
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

`;

writeFileSync(OUT, header + `export const restaurants: Restaurant[] = ${JSON.stringify(out, null, 2)};\n`, 'utf8');
console.log(`Generados ${out.length} restaurantes, ${out.reduce((n, r) => n + r.reviews.length, 0)} reseñas → ${OUT}`);
