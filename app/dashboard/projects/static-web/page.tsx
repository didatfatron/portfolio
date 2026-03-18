"use client";

import { useState } from 'react';
import { ArrowLeft, Music, ChevronRight, ChevronLeft, BookOpen, Guitar, Award } from 'lucide-react';
import Link from 'next/link';

// Data Chord Dasar (Indeks 0 = Senar 1/Bawah, Indeks 5 = Senar 6/Atas)
const chordPositions: Record<string, (number | string)[]> = {
  "C":  [0, 1, 0, 2, 3, "x"],
  "C#": [4, 6, 6, 6, 4, "x"],
  "D":  [2, 3, 2, 0, "x", "x"],
  "D#": [6, 8, 8, 8, 6, "x"],
  "E":  [0, 0, 1, 2, 2, 0],
  "F":  [1, 1, 2, 3, 3, 1],
  "F#": [2, 2, 3, 4, 4, 2],
  "G":  [3, 0, 0, 0, 2, 3],
  "G#": [4, 4, 5, 6, 6, 4],
  "A":  [0, 2, 2, 2, 0, "x"],
  "A#": [1, 3, 3, 3, 1, "x"],
  "B":  [2, 4, 4, 4, 2, "x"],
};

export default function StaticWebDetail() {
  const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const [activeNote, setActiveNote] = useState("C");

  const handleNext = () => {
    const currentIndex = chromaticScale.indexOf(activeNote);
    setActiveNote(chromaticScale[(currentIndex + 1) % 12]);
  };

  const handlePrev = () => {
    const currentIndex = chromaticScale.indexOf(activeNote);
    setActiveNote(chromaticScale[(currentIndex - 1 + 12) % 12]);
  };

  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in duration-700">
      <Link href="/dashboard" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 group w-fit cursor-pointer">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        <span>Kembali ke Dashboard</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
            <p className="text-emerald-400 text-[10px] font-bold tracking-widest uppercase">Guitarist Companion</p>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight leading-tight">
            Interactive <span className="text-emerald-400">Chord Visualizer</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Eksplorasi posisi jari pada papan fret gitar dengan sistem 6-fret dinamis. Cocok untuk memahami chord dasar maupun <i>bar chords</i> yang lebih kompleks.
          </p>
          
          <div className="glass p-6 rounded-2xl border border-white/10">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
              {chromaticScale.map((note) => (
                <button 
                  key={note} 
                  onClick={() => setActiveNote(note)}
                  className={`h-12 flex items-center justify-center rounded-xl border transition-all cursor-pointer font-bold
                    ${activeNote === note ? 'bg-emerald-500 border-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'bg-white/5 border-white/10 text-white hover:border-white/30'}`}
                >
                  {note}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FRETBOARD VISUALIZATION (6-FRET SYSTEM) */}
        <div className="glass p-10 rounded-[40px] border border-white/10 shadow-2xl relative">
          <div className="flex items-center justify-between mb-10 text-white">
            <button onClick={handlePrev} className="p-3 glass rounded-full hover:bg-white/10 cursor-pointer active:scale-90 transition-all"><ChevronLeft /></button>
            <div className="text-center">
              <span className="text-[10px] text-emerald-500 font-bold tracking-[0.3em] uppercase">Chord Dasar</span>
              <h2 className="text-6xl font-black mt-1 tracking-tighter">{activeNote}</h2>
            </div>
            <button onClick={handleNext} className="p-3 glass rounded-full hover:bg-white/10 cursor-pointer active:scale-90 transition-all"><ChevronRight /></button>
          </div>

          {/* Neck Rendering with 6 Frets */}
          <div className="flex flex-col-reverse justify-between h-64 bg-white/5 rounded-3xl border border-white/5 p-8 relative">
             {/* Frets (Garis Vertikal) - Sekarang ada 6 Fret */}
             <div className="absolute inset-y-0 inset-x-8 flex justify-between pointer-events-none opacity-20">
                {[...Array(7)].map((_, i) => <div key={i} className="w-[2px] h-full bg-white"></div>)}
             </div>

             {/* Strings */}
             {chordPositions[activeNote].map((fret, stringIdx) => (
                <div key={stringIdx} className="w-full h-[1px] bg-white/30 relative flex items-center">
                  <span className="absolute -left-10 text-[10px] text-white/30 font-mono">S{stringIdx + 1}</span>
                  
                  {/* Finger Dot Logic untuk 6 Fret */}
                  {typeof fret === 'number' && fret > 0 && (
                    <div 
                      className="absolute w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-[11px] font-black text-black shadow-[0_0_15px_#10b981] z-20"
                      /* Penyesuaian kalkulasi posisi agar tidak tenggelam: 
                         Kita asumsikan fretboard menampilkan rentang fret yang relevan untuk chord tersebut */
                      style={{ 
                        left: activeNote === "C#" || activeNote === "G#" || activeNote === "D#"
                          ? `${((fret - (activeNote === "G#" ? 3 : activeNote === "C#" ? 3 : 5)) * 16) + 8}%` 
                          : `${(fret * 15) - 5}%` 
                      }}
                    >
                      {fret}
                    </div>
                  )}

                  <div className="absolute -right-8 text-[11px] font-bold">
                      {fret === "x" ? <span className="text-red-500/60 font-mono tracking-tighter">✕</span> : fret === 0 ? <span className="text-emerald-500/60 font-mono tracking-tighter">○</span> : ""}
                  </div>
                </div>
             ))}
          </div>
          <p className="text-center text-[10px] text-white/20 mt-8 tracking-widest uppercase">6-Fretboard View (Headstock Left)</p>
        </div>
      </div>

      {/* FOOTER FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <BookOpen className="text-blue-400" />, title: "Precision Mapping", desc: "Penempatan titik jari yang akurat untuk memudahkan transisi antar chord." },
          { icon: <Guitar className="text-emerald-400" />, title: "6-Fret System", desc: "Ruang lingkup fret yang lebih luas untuk mengakomodasi bar chords dan nada tinggi." },
          { icon: <Award className="text-purple-400" />, title: "Learning Mode", desc: "Navigasi intuitif untuk membantu menghafal urutan kromatik secara visual." }
        ].map((feature, i) => (
          <div key={i} className="glass p-8 rounded-3xl border border-white/5">
            <div className="p-3 bg-white/5 w-fit rounded-2xl mb-4">{feature.icon}</div>
            <h3 className="text-white font-bold">{feature.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}