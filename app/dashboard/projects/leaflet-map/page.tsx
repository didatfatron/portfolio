"use client";

import dynamic from 'next/dynamic';
import { ArrowLeft, Map as MapIcon, MousePointer2, Route, Layers } from 'lucide-react';
import Link from 'next/link';

// --- PROSES PEMANGGILAN DINAMIS (PENTING!) ---
const MapContent = dynamic(() => import('@/components/maps/LeafletMap'), { 
  ssr: false, // Mematikan Server Side Rendering untuk komponen ini
  loading: () => (
    <div className="h-full w-full bg-white/5 animate-pulse flex items-center justify-center rounded-[32px] border border-white/10 text-white/40 font-mono text-xs">
      LOADING GEOSPATIAL MODULE...
    </div>
  )
});

export default function LeafletPage() {
  return (
    <div className="max-w-7xl mx-auto pb-20 animate-in fade-in duration-700">
      {/* Tombol Kembali */}
      <Link href="/dashboard" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group w-fit cursor-pointer">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span>Kembali ke Dashboard</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Panel Deskripsi Tugas Dosen */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 glass rounded-[32px] border border-white/10 bg-blue-500/5">
            <h1 className="text-2xl font-bold text-white mb-4">Web GIS <span className="text-blue-400 font-mono text-sm block tracking-tighter">Plugin Integration</span></h1>
            <p className="text-white/60 text-xs leading-relaxed mb-6">
              Implementasi Leaflet Engine dengan fitur interaktif sesuai instruksi pengerjaan:
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <Layers size={16} className="text-emerald-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-white uppercase">Layer Control</p>
                  <p className="text-[9px] text-white/40 italic text-wrap">Grouping point lokasi layanan publik & ibadah.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MousePointer2 size={16} className="text-blue-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-white uppercase">Interactive Draw</p>
                  <p className="text-[9px] text-white/40 italic text-wrap">Toolbar untuk menggambar area polygon secara bebas.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Route size={16} className="text-purple-400 shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-white uppercase">Routing Machine</p>
                  <p className="text-[9px] text-white/40 italic text-wrap">Visualisasi rute navigasi otomatis antara dua koordinat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Peta */}
        <div className="lg:col-span-3 h-[700px] glass p-2 rounded-[40px] border border-white/10 shadow-2xl relative overflow-hidden">
          <MapContent />
        </div>
        
      </div>
    </div>
  );
}