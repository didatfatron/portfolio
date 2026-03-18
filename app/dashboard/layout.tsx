// app/dashboard/layout.tsx
"use client";

import { useState } from 'react';
import Sidebar from '@/components/navigation/sidebar/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Kita buat state di sini supaya bisa mengontrol margin konten utama
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen">
      {/* Kirim fungsi toggle ke Sidebar agar state-nya sinkron */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      {/* Berikan transisi pada margin-left (ml) */}
      <main 
        className={`flex-1 transition-all duration-500 ease-in-out 
        ${isSidebarOpen ? 'pl-64' : 'pl-20'}`}
      >
        <div className="p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}