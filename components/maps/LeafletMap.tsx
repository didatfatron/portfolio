"use client";

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, LayersControl, LayerGroup } from 'react-leaflet';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import { MapPin } from 'lucide-react';

import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

// Custom Icon Helper
const createReactIcon = (color: string) => {
  const iconHtml = renderToString(
    <div style={{ color: color, filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}>
      <MapPin size={32} fill={color} fillOpacity={0.2} strokeWidth={2.5} />
    </div>
  );
  return L.divIcon({
    html: iconHtml,
    className: 'custom-react-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

function GISController() {
  const map = useMap();
  const isMounted = useRef(false); // Kunci utama untuk mencegah double init

  useEffect(() => {
    // Jika sudah pernah mounted, jangan jalankan lagi (mencegah double toolbar)
    if (!map || isMounted.current) return;
    
    isMounted.current = true;
    let routingControl: any = null;
    let drawControl: any = null;

    const setupGIS = async () => {
      // Import Plugins
      await import('leaflet-draw');
      // @ts-ignore
      await import('leaflet-routing-machine');

      // --- 1. CLEANUP PRE-EXISTING ---
      // Kita cari secara manual di container map apakah ada toolbar yang nyangkut
      map.eachLayer((layer: any) => {
        if (layer instanceof L.FeatureGroup && (layer as any)._leaflet_id === 'drawn-items') {
          map.removeLayer(layer);
        }
      });

      // --- 2. DRAW CONTROL ---
      const drawnItems = new L.FeatureGroup();
      (drawnItems as any)._leaflet_id = 'drawn-items'; // Kasih ID unik buat gampang dihapus nanti
      map.addLayer(drawnItems);

      drawControl = new (L as any).Control.Draw({
        position: 'topleft',
        edit: { featureGroup: drawnItems },
        draw: {
          polygon: { shapeOptions: { color: '#3b82f6' } },
          marker: { icon: createReactIcon('#3b82f6') },
          polyline: true,
          rectangle: true,
          circle: false
        }
      });
      map.addControl(drawControl);

      // --- 3. ROUTING CONTROL ---
      routingControl = (L as any).Routing.control({
        waypoints: [],
        lineOptions: { styles: [{ color: "#22c55e", weight: 6 }] },
        show: false,
        addWaypoints: true,
        createMarker: (i: number, wp: any, n: number) => {
          return L.marker(wp.latLng, { 
            icon: createReactIcon(i === 0 ? '#10b981' : i === n - 1 ? '#ef4444' : '#3b82f6') 
          });
        }
      }).addTo(map);

      // Event Handlers
      map.on('contextmenu', (e) => {
        const wps = routingControl.getWaypoints().filter((wp: any) => wp.latLng).map((wp: any) => wp.latLng);
        routingControl.setWaypoints([...wps, e.latlng]);
      });

      map.on((L as any).Draw.Event.CREATED, (e: any) => {
        drawnItems.addLayer(e.layer);
      });
    };

    setupGIS();

    // CLEANUP LENGKAP
    return () => {
      isMounted.current = false;
      if (map) {
        if (routingControl) {
          try { map.removeControl(routingControl); } catch (e) {}
        }
        if (drawControl) {
          try { map.removeControl(drawControl); } catch (e) {}
        }
      }
    };
  }, [map]);

  return null;
}

export default function LeafletMap() {
  return (
    <div className="h-full w-full relative">
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-react-icon { background: none !important; border: none !important; }
        .leaflet-routing-container { display: none !important; }
      `}} />

      <MapContainer center={[-8.148, 115.101]} zoom={15} className="h-full w-full rounded-[32px]">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GISController />
      </MapContainer>
    </div>
  );
}