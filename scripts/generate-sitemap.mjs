import { readFileSync, writeFileSync } from 'node:fs';

const BASE = 'https://paseandoporvenezuela.com';
const today = new Date().toISOString().slice(0, 10);

const blogSrc = readFileSync('src/data/blog.ts', 'utf8');
const posts = [...blogSrc.matchAll(/slug:\s*'([^']+)'[\s\S]*?publishedAt:\s*'([^']+)'/g)].map((m) => ({
  slug: m[1],
  date: m[2],
}));

// Slugs de tours y atracciones (derivados del nombre; deben coincidir con
// el slugify() de src/lib/venetravel.ts). Actualizar si cambia el catálogo.
const tourSlugs = [
  'campamento-tibisay-canaima-4-noches-5-dias', 'campamento-tibisay-canaima-3-noches-4-dias',
  'full-day-isla-de-coche-catamaran-infinito', 'full-day-los-roques-posada-lagunita',
  'h2o-by-ld-hoteles-plan-residente', 'aria-by-ld-hoteles-plan-residente',
  'tapuy-lodge-by-ld-canaima-4-noches-5-dias', 'tapuy-lodge-by-ld-canaima-3-noches-4-dias',
  'full-day-unik-by-sunsol-hoteles', 'full-day-sunsol-ecoland', 'catamaran-odyssea',
  'full-day-los-roques-hotel-boutique-gran-roque', 'plan-margariteno-hesperia-playa-el-agua',
  'isla-de-cubagua-24-horas-campamento-lodge', 'full-day-isla-de-cubagua-lodge',
  'full-day-los-roques-posada-mediterraneo', 'full-day-con-buceo-en-archipielado-los-frailes',
  'full-day-con-snorkel-en-archipielado-los-frailes', 'waka-wena-canaima-5-dias-y-4-noches',
  'waka-wena-canaima-4-dias-y-3-noches', 'full-day-hotel-paradise-coche',
  'full-day-isla-de-coche-sunsol-festival', 'full-day-coche-catamaranes-del-caribe',
  'full-day-sunsol-isla-caribe', 'full-day-isla-de-cubagua-i-love-cubagua',
  'full-day-sunsol-punta-blanca', 'cabalgata-isla-de-margarita',
  'cabalgata-peninsula-de-macanao', 'jeep-tours-expedicion-margarita',
];
const attractionSlugs = [
  'waterland-encuentro-marino', 'waterland-encuentro-con-delfines',
  'waterland-nado-con-delfines', 'parque-el-agua',
];

// Pares de rutas localizadas: [esPath, enPath, priority, changefreq]
const pages = [
  ['/es', '/en', '1.0', 'weekly'],
  ['/es/restaurantes', '/en/restaurants', '0.9', 'weekly'],
  ['/es/tours', '/en/tours', '0.9', 'weekly'],
  ['/es/atracciones', '/en/attractions', '0.9', 'weekly'],
  ['/es/blog', '/en/blog', '0.8', 'weekly'],
  ...tourSlugs.map((s) => [`/es/tours/${s}`, `/en/tours/${s}`, '0.8', 'weekly']),
  ...attractionSlugs.map((s) => [`/es/atracciones/${s}`, `/en/attractions/${s}`, '0.8', 'monthly']),
  ...posts.map((p) => [`/es/blog/${p.slug}`, `/en/blog/${p.slug}`, '0.7', 'monthly', p.date]),
];

const esc = (s) => s.replace(/&/g, '&amp;');

const entries = pages
  .map(([es, en, priority, changefreq, lastmod]) => {
    const alternates = `
    <xhtml:link rel="alternate" hreflang="es" href="${BASE}${es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE}${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}${es}"/>`;
    const block = (loc) => `  <url>
    <loc>${esc(BASE + loc)}</loc>${alternates}
    <lastmod>${lastmod || today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    return `${block(es)}\n${block(en)}`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`;

writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log(`Sitemap generado: ${pages.length * 2} URLs (${posts.length} posts de blog)`);
