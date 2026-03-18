"use client";

import { useState } from 'react';
import Link from 'next/link';
import { 
  Home, LayoutDashboard, User, Trophy, 
  ChevronDown, ChevronRight, Medal, Menu, LogOut, X 
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [isAchievementOpen, setIsAchievementOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false); // State untuk Window Intro

  return (
    <>
      <aside 
        className={`fixed left-0 top-0 h-full transition-all duration-500 z-50 glass
        ${isOpen ? 'w-64' : 'w-20'} `}
      >
        {/* Top Section: Home & Toggle */}
        <div className={`flex items-center p-6 ${isOpen ? 'justify-between' : 'justify-center flex-col gap-4'}`}>
          <Link href="/" className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/50 transition-all group shadow-lg">
            <Home size={22} className="text-white group-hover:scale-110 transition-transform" />
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 text-gray-400 transition-all shadow-lg"
          >
            {isOpen ? <ChevronRight size={20} className="rotate-180" /> : <Menu size={20} />}
          </button>
        </div>

        {/* Profile Shortcut - Sekarang Menggunakan Tombol untuk Membuka Window */}
        <div className={`px-6 mb-6 ${!isOpen && 'flex justify-center'}`}>
          <button 
            onClick={() => setShowIntro(true)}
            className={`flex items-center gap-3 p-3 glass border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group cursor-pointer ${!isOpen ? 'w-12 h-12 justify-center' : 'w-full text-left'}`}
          >
            {/* Foto Profil */}
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-blue-400 transition-colors shrink-0">
              <img 
                src="/profile/profile.jpg" 
                alt="Didat Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {isOpen && (
              <div className="overflow-hidden whitespace-nowrap">
                <p className="text-sm font-bold text-white leading-none group-hover:text-blue-400 transition-colors">Didat Akmal F.</p>
                <p className="text-[10px] text-gray-400 mt-1 italic">View Profile</p>
              </div>
            )}
          </button>
        </div>

        {/* Navigation - Only Visible when Open */}
        {isOpen && (
          <nav className="px-4 space-y-2 animate-in fade-in duration-500">
            <Link href="/dashboard" className="flex items-center gap-4 p-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition group">
              <LayoutDashboard size={20} className="group-hover:text-blue-400" />
              <span className="font-medium">Projects</span>
            </Link>

            <div>
              <button 
                onClick={() => setIsAchievementOpen(!isAchievementOpen)}
                className="w-full flex items-center justify-between p-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition group cursor-pointer"
  >
                <div className="flex items-center gap-4">
                  <Trophy size={20} className="group-hover:text-yellow-400" />
                  <span className="font-medium">Achievements</span>
                </div>
                {isAchievementOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
              </button>
              
              {isAchievementOpen && (
                <div className="ml-10 mt-1 space-y-1 border-l border-white/10">
                  <Link href="/dashboard/achievements/non-academy" className="flex items-center gap-2 p-2 pl-4 text-sm text-gray-400 hover:text-white transition">
                    <Medal size={14} />
                    Non-Academy
                  </Link>
                </div>
              )}
            </div>

            <Link href="/dashboard/about" className="flex items-center gap-4 p-3 text-gray-300 hover:bg-white/10 hover:text-white rounded-xl transition group">
              <User size={20} className="group-hover:text-emerald-400" />
              <span className="font-medium">About Me</span>
            </Link>

            <div className="pt-10 border-t border-white/5 mt-6">
              <Link href="/" className="flex items-center gap-4 p-3 text-gray-400 hover:text-red-500 transition">
                <LogOut size={20} />
                <span className="text-sm font-medium">Exit Page</span>
              </Link>
            </div>
          </nav>
        )}
      </aside>

      {/* WINDOW MODAL (INTRODUCTION POP-UP) */}
      {showIntro && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Overlay Gelap Transparan */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setShowIntro(false)}
          ></div>

          {/* Konten Window (Glassmorphism) */}
          <div className="relative glass w-full max-w-4xl p-8 md:p-12 rounded-[40px] border border-white/20 shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button 
              onClick={() => setShowIntro(false)}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full text-white/50 hover:text-white transition"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-white">
              {/* Foto Profil Besar */}
              <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img 
                  src="/profile/profile.jpg" 
                  alt="Didat Akmal Fatron" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Teks Introduction */}
              <div className="text-white/90 leading-relaxed text-lg space-y-5">
                <p className="text-xl">Hello everyone,</p>
                <p>
                  My name is <span className="font-bold text-white uppercase">"DIDAT AKMAL FATRON"</span>, 
                  but you can call me <span className="font-bold text-white uppercase">"DIDAT"</span>. 
                  I am originally from Singaraja, and currently, I still live in Banyuasri, Singaraja.
                </p>
                <p>
                  I am a student at <span className="font-bold text-blue-400 uppercase">"GANESHA UNIVERSITY OF EDUCATION"</span>, 
                  majoring in Informatics Engineering with a focus on <span className="font-bold text-white uppercase">"SOFTWARE ENGINEERING"</span>.
                </p>
                <p>
                  <span className="font-bold text-white uppercase">"ONE OF MY TECHNICAL INTERESTS"</span> is Artificial Intelligence. 
                  I find AI very interesting because it helps me a lot in my daily activities, 
                  such as completing assignments and exploring new ideas.
                </p>
                <p>
                  <span className="font-bold text-white uppercase">"FOR PROJECTS OR RELEVANT EXPERIENCE"</span>, 
                  I have worked on a small academic project during my third semester. 
                  I developed a cashier web application using Laravel.
                </p>
                <p>
                  For my short-term goal, I would like to work at a technology company after graduation 
                  to gain experience and improve my skills. In the long term, I hope to build my own business 
                  where I can apply the knowledge and skills I gained during my studies.
                </p>
                <p className="pt-6 font-bold text-blue-400 text-right tracking-widest italic">
                  THANK YOU.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}