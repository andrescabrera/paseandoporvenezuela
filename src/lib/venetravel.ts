import type { Hotel, HotelRoom } from '../data/hotels';
import { hotelTranslationsEN, type HotelTranslation } from '../data/hotelTranslations';

const API_BASE = 'https://www.venetravel.com/api';
const IMG_BASE = 'https://www.venetravel.com';

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

/** Precio en USD con coma decimal latina: 140 -> "$140,00". */
export function formatUsdLatin(amount?: number): string {
  if (typeof amount !== 'number' || !Number.isFinite(amount) || amount <= 0) return '';
  return `$${amount.toFixed(2).replace('.', ',')}`;
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
