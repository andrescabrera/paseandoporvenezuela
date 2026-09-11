import { readFileSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const DATASET = process.argv[2] || 'data/dataset_restaurant-review-aggregator_2026-09-09_02-29-24-112.json';
const OUT = process.argv[3] || '/tmp/opencode/restaurants_raw.json';
const KEY = process.env.GOOGLE_MAPS_API_KEY;

if (!KEY) {
  console.error('Falta GOOGLE_MAPS_API_KEY (usa: source .env && node scripts/geocode-restaurants.mjs)');
  process.exit(1);
}

const FIELD_MASK = [
  'id', 'displayName', 'formattedAddress', 'location', 'rating', 'userRatingCount',
  'types', 'primaryTypeDisplayName', 'googleMapsUri', 'websiteUri',
  'nationalPhoneNumber', 'priceLevel',
].join(',');

const rows = JSON.parse(readFileSync(DATASET, 'utf8'));

// Agrupar reseñas por placeId
const byPlace = new Map();
for (const r of rows) {
  const pid = r.googleMapsPlaceId;
  if (!pid) continue;
  if (!byPlace.has(pid)) byPlace.set(pid, []);
  byPlace.get(pid).push(r);
}

console.log(`Restaurantes únicos (placeId): ${byPlace.size}`);

function fetchPlace(placeId) {
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
  const out = execFileSync('curl', [
    '-s', '--max-time', '30',
    '-H', `X-Goog-Api-Key: ${KEY}`,
    '-H', `X-Goog-FieldMask: ${FIELD_MASK}`,
    '-A', 'Mozilla/5.0',
    url,
  ], { encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
  return JSON.parse(out);
}

const results = [];
let fail = 0;
for (const [placeId, reviews] of byPlace.entries()) {
  try {
    const p = fetchPlace(placeId);
    if (!p.location) {
      console.log(`  ! sin location: ${placeId} (${reviews[0]?.placeName})`);
      fail += 1;
      continue;
    }
    results.push({
      placeId,
      name: p.displayName?.text || reviews[0]?.placeName,
      address: p.formattedAddress || reviews[0]?.placeAddress,
      lat: p.location.latitude,
      lng: p.location.longitude,
      googleRating: p.rating ?? null,
      googleRatingCount: p.userRatingCount ?? null,
      types: p.types ?? [],
      primaryType: p.primaryTypeDisplayName?.text ?? null,
      googleMapsUri: p.googleMapsUri ?? null,
      websiteUri: p.websiteUri ?? null,
      phone: p.nationalPhoneNumber ?? null,
      priceLevel: p.priceLevel ?? null,
      reviews: reviews.map((r) => ({
        id: r.reviewId,
        provider: r.provider,
        url: r.reviewUrl,
        title: r.reviewTitle,
        text: r.reviewText,
        rating: r.reviewRating,
        date: r.reviewDate,
        author: r.authorName,
      })),
    });
    console.log(`  ok ${p.displayName?.text} | ${p.location.latitude.toFixed(4)},${p.location.longitude.toFixed(4)} | ${p.types?.slice(0,3).join(',')}`);
  } catch (err) {
    console.log(`  x ${placeId} (${reviews[0]?.placeName}): ${err.message}`);
    fail += 1;
  }
  await new Promise((r) => setTimeout(r, 250));
}

writeFileSync(OUT, JSON.stringify(results, null, 2), 'utf8');
console.log(`\nGuardados ${results.length} negocios (fallos: ${fail}) en ${OUT}`);
