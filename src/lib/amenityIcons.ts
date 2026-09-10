import type { ComponentType } from 'react';
import {
  Wifi, Waves, Coffee, Tv, Wind, UtensilsCrossed, Lock, Phone, Car, Dumbbell,
  Sparkles, Utensils, Wine, Snowflake, Zap, ShieldCheck, Shirt, Dog, Bike, Bus,
  Umbrella, Building2, Star, Sun, Baby, ConciergeBell,
} from 'lucide-react';
import { amenityLabelsEn } from '../data/hotels';

type IconType = ComponentType<{ className?: string }>;

/** Mapa de amenidad (nombre en español de venetravel) → icono. */
const AMENITY_ICONS: Record<string, IconType> = {
  WiFi: Wifi,
  'WiFi Gratis': Wifi,
  'A/A': Snowflake,
  'Aire Acondicionado': Snowflake,
  Playa: Waves,
  'Playa Privada': Waves,
  'Playa Caribe': Waves,
  'Club de Playa': Waves,
  'Bar de Playa': Waves,
  'Acceso Playa': Waves,
  'Ruta de Playa': Bus,
  Piscina: Waves,
  Piscinas: Waves,
  '3 Piscinas': Waves,
  '8 Piscinas': Waves,
  Solarium: Sun,
  Desayuno: Coffee,
  Cafetera: Coffee,
  Restaurante: UtensilsCrossed,
  Restaurantes: UtensilsCrossed,
  '3 Restaurantes': UtensilsCrossed,
  'Área de Snacks': UtensilsCrossed,
  Comedor: UtensilsCrossed,
  'Bodegón': UtensilsCrossed,
  'Cocina (Kitchenette)': UtensilsCrossed,
  Kitchenette: UtensilsCrossed,
  'Implementos De Cocina': UtensilsCrossed,
  'Cubertería': UtensilsCrossed,
  Cristaleria: UtensilsCrossed,
  'Horno Microondas': UtensilsCrossed,
  Nevera: Utensils,
  'Nevera Ejecutiva': Utensils,
  'MIni Bar': Wine,
  Bar: Wine,
  'Lobby Bar': Wine,
  'Bar Rooftop': Wine,
  Nightclub: Wine,
  Disco: Wine,
  TV: Tv,
  'TV Cable': Tv,
  Teléfono: Phone,
  Estacionamiento: Car,
  'Valet Parking': Car,
  Taxi: Car,
  'Traslados Aero/Hotel/Aero': Bus,
  'Traslados a Playa Cercana': Bus,
  Gimnasio: Dumbbell,
  'Cancha de Tenis': Dumbbell,
  'Deportes Acuáticos': Waves,
  Spa: Sparkles,
  'Spá': Sparkles,
  Sauna: Sparkles,
  Jacuzzi: Sparkles,
  'Área de Masajes': Sparkles,
  'Caja de Seguridad': Lock,
  'Caja De Seguridad': Lock,
  'Secador de cabello': Wind,
  'Secador De Cabello': Wind,
  Peluqueria: Wind,
  'Planta Elétrica': Zap,
  'Servicio Seguridad': ShieldCheck,
  'Lavandería': Shirt,
  'Room Service': ConciergeBell,
  Maletero: ConciergeBell,
  'Servicio Despertador': ConciergeBell,
  'Business Center': Building2,
  'Sala De Conferencia': Building2,
  'Cuna para Infantes': Baby,
  'Club Infantil': Baby,
  'Parque Infantil': Baby,
  'Salón De Juegos': Baby,
  'Acepta Mascotas': Dog,
  'Paseo en Bicicletas': Bike,
  'Toldos/Sillas Playa': Umbrella,
};

const FALLBACK_ICON: IconType = Star;

export function getAmenityIcon(amenity: string): IconType {
  return AMENITY_ICONS[amenity] ?? FALLBACK_ICON;
}

export function amenityLabel(amenity: string, lang: string): string {
  if (lang !== 'en') return amenity;
  return amenityLabelsEn[amenity] ?? amenity;
}
