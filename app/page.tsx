"use client";

import Link from 'next/link';
import { ArrowRight, Github, Instagram, Linkedin, Mail, UserCircle2, LayoutGrid } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden flex flex-col justify-center">
      
      {/* --- 1. BACKGROUND ANIMASI (Sesuai Global CSS) --- */}
      <div className="bg-animate">
        {/* Beberapa blob untuk menciptakan efek liquid metalik yang menyebar */}
        <div className="liquid-blob" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
        <div className="liquid-blob" style={{ top: '50%', left: '60%', animationDelay: '-5s', width: '400px', height: '400px' }}></div>
        <div className="liquid-blob" style={{ top: '80%', left: '20%', animationDelay: '-10s' }}></div>
      </div>

      {/* --- 2. MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 w-full relative z-10">
        
        {/* Greeting Label */}
        <div className="flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left-4 duration-700">
          <span className="w-12 h-[1px] bg-blue-500"></span>
          <span className="text-blue-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase font-bold">
            Welcome to my personal gallery
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8 animate-in fade-in slide-in-from-left-6 duration-1000">
          HELLO, I'M <br />
          <span className="text-white">DIDAT</span><span className="text-blue-600">!</span> 
          <span className="block text-xl md:text-3xl mt-6 text-white/60 font-medium tracking-tight italic">
            Nice to meet you.
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-white/40 text-base md:text-lg leading-relaxed mb-10 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
          Software Engineering student at <span className="text-white">Ganesha University of Education</span>. 
          Focused on building functional digital experiences and interactive geospatial systems.
        </p>

        {/* Actions - Menggunakan class .glass dari CSS kamu */}
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left-10 duration-1000 delay-300">
          <Link href="/dashboard" className="group flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-600/20">
            <LayoutGrid size={18} />
            View Portfolio
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link href="/about" className="glass flex items-center justify-center gap-3 px-8 py-4 text-white font-bold rounded-xl transition-all">
            <UserCircle2 size={18} className="text-blue-500" />
            About Me
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-20 flex flex-col md:flex-row md:items-center gap-6 text-white/20 animate-in fade-in duration-1000 delay-500">
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-blue-500 transition-all hover:scale-110"><Github size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-all hover:scale-110"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-all hover:scale-110"><Instagram size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition-all hover:scale-110"><Mail size={20} /></a>
          </div>
          <div className="hidden md:block w-px h-4 bg-white/10"></div>
          <span className="text-[9px] uppercase tracking-[0.4em] font-bold">
            Based in Bali, Indonesia
          </span>
        </div>
      </div>

    </div>
  );
}