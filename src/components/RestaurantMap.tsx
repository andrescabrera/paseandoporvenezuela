import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Restaurant } from '../data/restaurants';

interface Props {
  restaurants: Restaurant[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const CENTER: [number, number] = [10.966, -63.834];

export default function RestaurantMap({ restaurants, selectedId, onSelect }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;
    const map = L.map(containerRef.current, { scrollWheelZoom: false }).setView(CENTER, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    mapRef.current = map;
    const markers = markersRef.current;
    return () => {
      map.remove();
      mapRef.current = null;
      markers.clear();
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((m) => m.remove());
    markersRef.current.clear();

    restaurants.forEach((r) => {
      const active = r.id === selectedId;
      const icon = L.divIcon({
        className: 'restaurant-marker',
        html: `<span class="restaurant-marker__pin${active ? ' restaurant-marker__pin--active' : ''}"></span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
      const marker = L.marker([r.lat, r.lng], { icon, title: r.name }).addTo(map);
      marker.on('click', () => onSelectRef.current(r.id));
      markersRef.current.set(r.id, marker);
    });
  }, [restaurants, selectedId]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selectedId) return;
    const target = restaurants.find((r) => r.id === selectedId);
    if (target) map.panTo([target.lat, target.lng], { animate: true });
  }, [selectedId, restaurants]);

  return <div ref={containerRef} className="h-full w-full rounded-2xl overflow-hidden" />;
}
