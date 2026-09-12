import type { Hotel, HotelRoom, Localized } from '../data/hotels';
import { hotelTranslationsEN, type HotelTranslation } from '../data/hotelTranslations';
import { tourTranslationsEN, tourFeatureLabelsEN } from '../data/tourTranslations';
import { attractionTranslationsEN, attractionFeatureLabelsEN } from '../data/attractionTranslations';

const API_BASE = 'https://venetravel.net/api';
const IMG_BASE = 'https://venetravel.net';

/** Respuesta cruda del listado/búsqueda de venetravel. */
interface RawHotelListItem {
  id: number;
  name?: string;
  categ?: number;
  categ_name?: string;
  destiny?: string;
  state_name?: string;
  descrip?: string;
  features?: string;
  image?: string;
  available?: boolean;
  type?: number;
  type_name?: string;
  plans?: Array<{ id: number; name: string }>;
  min_price_bs?: number;
  min_price_usd?: number;
  external_rating?: number;
  external_review_count?: number;
}

interface RawHab {
  nombre?: string;
  plan?: { id: number; name: string };
  descrip?: string;
  image?: string;
  ocupaciones?: Array<{ nombre?: string; adultos?: number; ninos?: number }>;
}

interface RawHotelDetail extends RawHotelListItem {
  features_list?: string[];
  direc?: string;
  check_in?: string;
  check_out?: string;
  images?: string[];
  logo?: string;
  habs?: RawHab[];
  google_maps_url?: string;
}

export interface VenetravelFilterOption {
  id: number;
  nombre: string;
}

export interface VenetravelFilters {
  categories: VenetravelFilterOption[];
  types: VenetravelFilterOption[];
  plans: VenetravelFilterOption[];
  features: VenetravelFilterOption[];
}

export interface HotelQuote {
  real_int_price: number;
  price_format: string;
  hab_name: string;
  oc_name: string;
  noches: number;
}

export interface Catalog {
  hotels: Hotel[];
  featureNames: Map<number, string>;
}

interface ApiEnvelope<T> {
  success: number;
  data: T;
  total?: number;
}

const DEFAULT_WHATSAPP = '584126204490';

const CATEGORY_EN: Record<string, string> = {
  '1 Estrella': '1-Star',
  '2 Estrellas': '2-Star',
  '3 Estrellas': '3-Star',
  '4 Estrellas': '4-Star',
  '5 Estrellas': '5-Star',
  'Sin Clasificación': 'Unrated',
  'Estándar': 'Standard',
  Turista: 'Tourist',
  Superior: 'Superior',
  Deluxe: 'Deluxe',
  VIP: 'VIP',
  Boutique: 'Boutique',
};

const TYPE_EN: Record<string, string> = {
  Hotel: 'Hotel',
  Motel: 'Motel',
  'Apto Vacacional': 'Vacation Apartment',
  Resort: 'Resort',
  Posada: 'Inn',
  Campamento: 'Camp',
  Otros: 'Other',
  'Hotel Boutique': 'Boutique Hotel',
  Catamaran: 'Catamaran',
  'Hotel Vacacional': 'Holiday Hotel',
};

function absImage(path?: string): string {
  if (!path) return '';
  const clean = String(path).trim();
  if (/^https?:\/\//i.test(clean)) return clean;
  return encodeURI(`${IMG_BASE}${clean.startsWith('/') ? clean : `/${clean}`}`);
}

export function slugify(name: string, fallbackId: number): string {
  const base = String(name || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return base || `hotel-${fallbackId}`;
}

function cleanText(value: unknown): string {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function shortDescription(text: string, max = 160): string {
  const oneLine = cleanText(text).replace(/\s+/g, ' ');
  if (oneLine.length <= max) return oneLine;
  const cut = oneLine.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 60 ? lastSpace : max).trim()}…`;
}

function capitalizeFirst(value: string): string {
  const s = String(value ?? '').trim().replace(/\s+/g, ' ');
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}

/** Precio en USD con coma decimal latina: 140 -> "$140,00", 2324 -> "$2.324,00". */
export function formatUsdLatin(amount?: number): string {
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0) return '';
  return `$${new Intl.NumberFormat('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(amount)}`;
}

function clampRating(external?: number): number {
  const r = Math.round(Number(external));
  if (!Number.isFinite(r) || r <= 0) return 3;
  return Math.min(5, Math.max(1, r));
}

function parseFeatureIds(raw?: string): number[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.map((n) => Number(n)).filter(Number.isFinite);
  } catch {
    // ignorar JSON inválido
  }
  return [];
}

function resolveAmenities(ids: number[], featureNames: Map<number, string>): string[] {
  const names = ids
    .map((id) => featureNames.get(id))
    .filter((n): n is string => Boolean(n));
  return [...new Set(names)];
}

function mapRooms(habs?: RawHab[]): HotelRoom[] | undefined {
  if (!Array.isArray(habs) || habs.length === 0) return undefined;
  const rooms = habs
    .filter((h) => h && h.nombre)
    .map((h) => {
      const desc = cleanText(h.descrip);
      const plan = h.plan?.name ? capitalizeFirst(h.plan.name) : '';
      return {
        name: { es: String(h.nombre).trim(), en: String(h.nombre).trim() },
        description: { es: desc, en: desc },
        plan: plan ? { es: plan, en: plan } : undefined,
        image: absImage(h.image),
      };
    });
  return rooms.length > 0 ? rooms : undefined;
}

/** Aplica la traducción manual (si existe) a un hotel del listado. */
function applyListTranslation(hotel: Hotel): Hotel {
  const tr = hotelTranslationsEN[hotel.id];
  if (!tr?.fullDescription) return hotel;
  return {
    ...hotel,
    description: { es: hotel.description.es, en: shortDescription(tr.fullDescription) || hotel.description.en },
    fullDescription: { es: hotel.fullDescription.es, en: tr.fullDescription },
  };
}

/** Aplica traducciones manuales a las habitaciones, alineadas por índice. */
function applyRoomTranslations(rooms: HotelRoom[] | undefined, tr?: HotelTranslation): HotelRoom[] | undefined {
  if (!rooms || !tr?.rooms) return rooms;
  return rooms.map((room, index) => {
    const localized = tr.rooms?.[index];
    if (!localized) return room;
    return {
      ...room,
      name: localized.name ? { es: room.name.es, en: localized.name } : room.name,
      description: { es: room.description.es, en: localized.description },
    };
  });
}

function mapListItem(item: RawHotelListItem, featureNames: Map<number, string>): Hotel {
  const name = cleanText(item.name) || `Hotel ${item.id}`;
  const descrip = cleanText(item.descrip);
  const short = shortDescription(descrip) || name;
  const destiny = capitalizeFirst(item.destiny || '');
  const priceUsd = Number(item.min_price_usd) || 0;
  const categEs = cleanText(item.categ_name);
  const typeEs = cleanText(item.type_name);

  const hotel: Hotel = {
    id: Number(item.id),
    slug: slugify(name, item.id),
    name,
    location: destiny || 'Venezuela',
    rating: clampRating(item.external_rating),
    priceUsd,
    price: formatUsdLatin(priceUsd) || 'Consultar',
    image: absImage(item.image),
    amenities: resolveAmenities(parseFeatureIds(item.features), featureNames),
    description: { es: short, en: short },
    fullDescription: { es: descrip || short, en: descrip || short },
    whatsappNumber: DEFAULT_WHATSAPP,
    category: categEs ? { es: categEs, en: CATEGORY_EN[categEs] || categEs } : undefined,
    type: typeEs ? { es: typeEs, en: TYPE_EN[typeEs] || typeEs } : undefined,
    country: 'Venezuela',
    city: destiny || undefined,
    available: item.available !== false,
    reviewCount: Number(item.external_review_count) || 0,
  };

  return applyListTranslation(hotel);
}

function mapDetail(raw: RawHotelDetail, featureNames: Map<number, string>): Hotel {
  const base = mapListItem(raw, featureNames);
  const images = Array.isArray(raw.images) ? raw.images.map(absImage).filter(Boolean) : [];
  const amenities = Array.isArray(raw.features_list) && raw.features_list.length > 0
    ? [...new Set(raw.features_list.map((a) => String(a).trim()).filter(Boolean))]
    : base.amenities;
  const address = cleanText(raw.direc);

  return {
    ...base,
    image: absImage(raw.image) || images[0] || base.image,
    images: images.length > 0 ? images : undefined,
    amenities,
    checkIn: cleanText(raw.check_in) || undefined,
    checkOut: cleanText(raw.check_out) || undefined,
    minStay: { es: '1 Noche', en: '1 Night' },
    rooms: applyRoomTranslations(mapRooms(raw.habs), hotelTranslationsEN[base.id]),
    address: address || undefined,
    googleMapsUrl: cleanText(raw.google_maps_url) || undefined,
  };
}

async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new Error(`API ${res.status} en ${url}`);
  return (await res.json()) as T;
}

async function loadCatalog(): Promise<Catalog> {
  const [hotelsRes, filtersRes] = await Promise.all([
    getJson<ApiEnvelope<RawHotelListItem[]>>(`${API_BASE}/hotels?q=a&limit=100`),
    getJson<ApiEnvelope<VenetravelFilters>>(`${API_BASE}/hotels/filters`),
  ]);

  if (!hotelsRes || hotelsRes.success !== 1 || !Array.isArray(hotelsRes.data)) {
    throw new Error('Respuesta inesperada del catálogo de hoteles');
  }

  const featureNames = new Map<number, string>();
  const filters = filtersRes?.success === 1 ? filtersRes.data : undefined;
  if (filters?.features) {
    for (const f of filters.features) featureNames.set(Number(f.id), String(f.nombre));
  }

  const byId = new Map<number, Hotel>();
  for (const item of hotelsRes.data) {
    if (!item || typeof item.id === 'undefined') continue;
    if (!byId.has(item.id)) byId.set(item.id, mapListItem(item, featureNames));
  }

  const hotels = [...byId.values()].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  return { hotels, featureNames };
}

let catalogPromise: Promise<Catalog> | null = null;

/** Catálogo de hoteles con caché en memoria (una sola descarga por sesión). */
export function getCatalog(): Promise<Catalog> {
  if (!catalogPromise) {
    catalogPromise = loadCatalog().catch((err) => {
      catalogPromise = null;
      throw err;
    });
  }
  return catalogPromise;
}

/** Detalle completo de un hotel por id. */
export async function getHotelDetail(id: number): Promise<Hotel> {
  const { featureNames } = await getCatalog();
  const json = await getJson<ApiEnvelope<RawHotelDetail>>(`${API_BASE}/hotels/${id}`);
  if (!json || json.success !== 1 || !json.data) {
    throw new Error(`No se encontró el hotel ${id}`);
  }
  return mapDetail(json.data, featureNames);
}

export interface QuoteParams {
  id: number;
  checkIn: string;
  checkOut: string;
  adultos: number;
  ninos?: number;
  habitacion?: number;
  habitaciones?: number;
}

/** Cotización real de estadía. Siempre en USD (tipo_precio=1). */
export async function quoteHotel(params: QuoteParams): Promise<HotelQuote> {
  const body = new URLSearchParams({
    id: String(params.id),
    c_in: params.checkIn,
    c_out: params.checkOut,
    adultos: String(params.adultos),
    ninos: String(params.ninos ?? 0),
    habitaciones: String(params.habitaciones ?? 1),
    tipo_precio: '1',
  });
  if (params.habitacion != null) body.append('habitacion', String(params.habitacion));

  const res = await fetch(`${API_BASE}/cotizar/hotel`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Cotización ${res.status}`);
  const json = (await res.json()) as Partial<HotelQuote> & { success?: number; message?: string };
  if (!json || json.success === 0 || !json.price_format) {
    throw new Error(json?.message || 'No se pudo cotizar');
  }
  return json as HotelQuote;
}

/* ======================== TOURS & ATTRACTIONS ======================== */

interface RawOfferFeature {
  id: string | number;
  name: string;
}

interface RawOfferPrices {
  adult_bs?: string | number;
  adult_usd?: string | number;
  child_bs?: string | number;
  child_usd?: string | number;
}

interface RawOfferDate {
  start: string;
  end: string;
  prices?: RawOfferPrices;
}

interface RawOffer {
  id: number;
  name?: string;
  destination?: string;
  description?: string;
  duration_id?: number;
  type_id?: number;
  image?: string;
  price_from?: number;
  currency_id?: number;
  features?: RawOfferFeature[];
  duration?: { id: number; name: string };
  type?: { id: number; name: string };
  images?: string[];
  main_image?: string;
  available_dates?: RawOfferDate[];
  // Solo atracciones
  address?: string;
  recomendaciones?: string;
  tyc?: string;
}

export interface OfferDate {
  /** Fecha ISO (YYYY-MM-DD). */
  start: string;
  end: string;
  adultUsd: number | null;
  childUsd: number | null;
}

export interface Offer {
  id: number;
  slug: string;
  name: Localized;
  destination: Localized;
  description: Localized;
  duration: Localized;
  type: Localized;
  features: Localized[];
  image: string;
  images: string[];
  priceFromUsd: number;
  price: string;
  dates: OfferDate[];
  address?: string;
}

export interface OfferQuote {
  precio_format: string;
  precio_int: number;
  adultos?: number;
  ninos?: number;
}

export interface OfferQuoteParams {
  id: number;
  fecha: string;
  adultos: number;
  ninos?: number;
  selectivos?: string[];
}

type OfferTranslation = {
  name?: string;
  destination?: string;
  description?: string;
  duration?: string;
  type?: string;
};

function parseUsd(value: unknown): number | null {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

/** dd-mm-yyyy (formato de venetravel) a ISO yyyy-mm-dd. */
function dmyToIso(value: string): string {
  const m = /^(\d{2})-(\d{2})-(\d{4})$/.exec(cleanText(value));
  return m ? `${m[3]}-${m[2]}-${m[1]}` : '';
}

function isPlaceholderDescription(text: string): boolean {
  return /^descripci[oó]n del tours?$/i.test(text.trim());
}

/** Deduplica pares .jpg/.webp (conserva la primera variante). */
function dedupeImages(paths: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of paths) {
    const url = absImage(p);
    if (!url) continue;
    const key = url.replace(/\.(webp|jpe?g|png)$/i, '').toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(url);
  }
  return out;
}

function mapOffer(
  raw: RawOffer,
  translation: OfferTranslation | undefined,
  featureDict: Record<string, string>,
  isDetail: boolean,
): Offer {
  const nameEs = cleanText(raw.name) || `Tour ${raw.id}`;
  const destEs = cleanText(raw.destination);
  const descEsRaw = cleanText(raw.description);
  const descEs = isPlaceholderDescription(descEsRaw) ? '' : descEsRaw;
  const durationEs = cleanText(raw.duration?.name || '');
  const typeEs = cleanText(raw.type?.name || '');

  const features: Localized[] = (raw.features || [])
    .map((f) => cleanText(f.name))
    .filter(Boolean)
    .map((n) => ({ es: n, en: featureDict[n] || n }));

  const images = isDetail ? dedupeImages(raw.images || []) : [];

  const dates: OfferDate[] = isDetail && Array.isArray(raw.available_dates)
    ? raw.available_dates
        .map((d) => ({
          start: dmyToIso(d.start),
          end: dmyToIso(d.end),
          adultUsd: parseUsd(d.prices?.adult_usd),
          childUsd: parseUsd(d.prices?.child_usd),
        }))
        .filter((d) => d.start && d.end)
    : [];

  const fromList = Number(raw.price_from);
  const dateMin = dates.reduce(
    (min, d) => (d.adultUsd != null && d.adultUsd < min ? d.adultUsd : min),
    Infinity,
  );
  const priceFromUsd = fromList > 0 ? fromList : Number.isFinite(dateMin) ? dateMin : 0;

  return {
    id: raw.id,
    slug: slugify(nameEs, raw.id),
    name: { es: nameEs, en: translation?.name || nameEs },
    destination: { es: destEs || 'Venezuela', en: translation?.destination || destEs || 'Venezuela' },
    description: { es: descEs, en: translation?.description || descEs },
    duration: { es: durationEs, en: translation?.duration || durationEs },
    type: { es: typeEs, en: translation?.type || typeEs },
    features,
    image: absImage(raw.main_image || raw.image) || images[0] || '',
    images,
    priceFromUsd,
    price: formatUsdLatin(priceFromUsd) || 'Consultar',
    dates,
    address: cleanText(raw.address) || undefined,
  };
}

let toursPromise: Promise<Offer[]> | null = null;

async function loadTours(): Promise<Offer[]> {
  const json = await getJson<ApiEnvelope<RawOffer[]>>(`${API_BASE}/tours?limit=200`);
  if (!json || json.success !== 1 || !Array.isArray(json.data)) {
    throw new Error('Respuesta inesperada del catálogo de tours');
  }
  return json.data
    .map((t) => mapOffer(t, tourTranslationsEN[t.id], tourFeatureLabelsEN, false))
    .filter((o) => Boolean(o.name.es))
    .sort((a, b) => a.name.es.localeCompare(b.name.es, 'es'));
}

/** Catálogo de tours con caché en memoria. */
export function getTours(): Promise<Offer[]> {
  if (!toursPromise) {
    toursPromise = loadTours().catch((err) => {
      toursPromise = null;
      throw err;
    });
  }
  return toursPromise;
}

/** Detalle de un tour por id (incluye galería y fechas/precios). */
export async function getTourDetail(id: number): Promise<Offer> {
  const json = await getJson<ApiEnvelope<RawOffer>>(`${API_BASE}/tours/${id}`);
  if (!json || json.success !== 1 || !json.data) throw new Error(`No se encontró el tour ${id}`);
  return mapOffer(json.data, tourTranslationsEN[id], tourFeatureLabelsEN, true);
}

let attractionsPromise: Promise<Offer[]> | null = null;

async function loadAttractions(): Promise<Offer[]> {
  const json = await getJson<ApiEnvelope<RawOffer[]>>(`${API_BASE}/attractions?limit=200`);
  if (!json || json.success !== 1 || !Array.isArray(json.data)) {
    throw new Error('Respuesta inesperada del catálogo de atracciones');
  }
  return json.data
    .map((a) => mapOffer(a, attractionTranslationsEN[a.id], attractionFeatureLabelsEN, false))
    .filter((o) => Boolean(o.name.es))
    .sort((a, b) => a.name.es.localeCompare(b.name.es, 'es'));
}

/** Catálogo de atracciones con caché en memoria. */
export function getAttractions(): Promise<Offer[]> {
  if (!attractionsPromise) {
    attractionsPromise = loadAttractions().catch((err) => {
      attractionsPromise = null;
      throw err;
    });
  }
  return attractionsPromise;
}

/** Detalle de una atracción por id. */
export async function getAttractionDetail(id: number): Promise<Offer> {
  const json = await getJson<ApiEnvelope<RawOffer>>(`${API_BASE}/attractions/${id}`);
  if (!json || json.success !== 1 || !json.data) throw new Error(`No se encontró la atracción ${id}`);
  return mapOffer(json.data, attractionTranslationsEN[id], attractionFeatureLabelsEN, true);
}

async function quoteOffer(kind: 'tour' | 'atraccion', params: OfferQuoteParams): Promise<OfferQuote> {
  const body = new URLSearchParams({
    id: String(params.id),
    fecha: params.fecha,
    adultos: String(params.adultos),
    ninos: String(params.ninos ?? 0),
    tipo_precio: '1',
  });
  for (const s of params.selectivos ?? []) body.append('selectivos[]', s);

  const res = await fetch(`${API_BASE}/cotizar/${kind}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
    body: body.toString(),
  });
  if (!res.ok) throw new Error(`Cotización ${res.status}`);
  const json = (await res.json()) as { success?: number; message?: string; precio_format?: string; precio_int?: number };
  if (!json || json.success === 0 || !json.precio_format) {
    throw new Error(json?.message || 'No se pudo cotizar');
  }
  return json as OfferQuote;
}

/** Cotización real de un tour (USD). */
export const quoteTour = (params: OfferQuoteParams) => quoteOffer('tour', params);

/** Cotización real de una atracción (USD). */
export const quoteAttraction = (params: OfferQuoteParams) => quoteOffer('atraccion', params);
