// app/dashboard/page.tsx
import { myProjects } from '@/data/projects'; // Gunakan @/ untuk path root
import ProjectCard from '@/components/ui/Card/card';

export default function DashboardPage() {
  return (
    <div className="max-w-5xl mx-auto">
      
<header className="mb-12 animate-in fade-in slide-in-from-left-6 duration-1000">
  {/* Judul: My (Biru) Projects (Putih) */}
  <h1 className="text-3xl font-bold tracking-tight">
    <span className="text-blue-500">MY</span> <span className="text-white">PROJECTS</span>
  </h1>
  
  {/* Deskripsi Bahasa Indonesia sesuai request */}
  <div className="mt-4 space-y-2">
    <p className="text-white/70 text-base leading-relaxed max-w-2xl">
      Dibawah ini adalah beberapa project individu dan juga hasil kolaborasi tim saya, 
      beberapa project masih dalam tahap pengembangan.
    </p>
    <p className="text-white font-bold text-sm tracking-widest">
      "SELAMAT DATANG DI GALERI PROJECT SAYA!"
    </p>
  </div>
  
  {/* Garis dekoratif tipis agar tetap estetik */}
  <div className="w-20 h-[2px] bg-blue-500/50 mt-6 rounded-full"></div>
</header>

      {/* Grid untuk menampilkan project */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myProjects.map((project) => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            link={project.link}
            type={project.type}
            tag={project.tag}
          />
        ))}
      </div>
    </div>
  );
}