// components/ui/Card/Card.tsx
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  type: 'external' | 'internal';
  tag: string;
}

// Fungsi untuk memisahkan dan mewarnai judul (Custom Hook/Helper Sederhana)
const formatCardTitle = (title: string) => {
  if (title.includes("Website Kasir TalawangPOS")) {
    return (
      <>
        <span className="text-blue-400">Website Kasir</span> <span className="text-white">TalawangPOS</span>
      </>
    );
  }
  
  if (title.includes("Chords Transposer")) {
    return (
      <>
        <span className="text-white">Chords</span> <span className="text-emerald-400">Transposer</span>
      </>
    );
  }

  if (title.includes("Leaflet Map Integration")) {
    return (
      <>
        <span className="text-purple-400">Leaflet</span> <span className="text-white">Map Integration</span>
      </>
    );
  }

  return title; // Default jika tidak ada custom rule
};

export default function ProjectCard({ title, description, link, type, tag }: ProjectCardProps) {
  const isExternal = type === 'external';
  
  return (
    <div className="glass p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group shadow-lg shadow-black/20 hover:shadow-blue-900/10">
      <div className="flex justify-between items-center mb-4">
        {/* Tag Tech Stack */}
        <span className="text-[10px] font-bold px-3 py-1 bg-white/5 text-white/70 rounded-md uppercase tracking-wider border border-white/5">
          {tag}
        </span>
      </div>

      {/* Judul dengan warna campuran (Full Putih + Aksen Warna) */}
      <h3 className="text-xl font-bold mt-2 text-white transition-colors">
        {formatCardTitle(title)}
      </h3>
      
      {/* Deskripsi full putih tapi sedikit redup (text-white/80) agar tetap nyaman dibaca */}
      <p className="text-white/80 mt-3 text-sm leading-relaxed min-h-[50px]">
        {description}
      </p>
      
      <div className="pt-6 mt-2 border-t border-white/5">
        <Link 
          href={link} 
          target={isExternal ? '_blank' : '_self'}
          className="flex items-center justify-between text-sm font-medium text-white group-hover:text-blue-400 transition"
        >
          {isExternal ? 'Kunjungi Website' : 'Lihat Detail'}
          {isExternal ? (
            <ExternalLink size={16} className="opacity-70" />
          ) : (
            <ArrowRight size={16} className="opacity- group-hover:translate-x-1 transition-transform" />
          )}
        </Link>
      </div>
    </div>
  );
}