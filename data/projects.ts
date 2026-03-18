// data/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
  type: 'external' | 'internal';
  tag: string;
};

export const myProjects: Project[] = [
  {
    id: 1,
    title: "Website Kasir TalawangPOS",
    description: "Sistem manajemen penjualan dan stok barang real-time.",
    link: "https://talawangpos.site/",
    type: "external",
    tag: "Laravel / MySQL"
  },
  {
    id: 2,
    title: "Chords Transposer",
    description: "Memahami tangga nada dalam dunia music pada gitar.",
    link: "/dashboard/projects/static-web", 
    type: "internal",
    tag: "HTML / CSS"
  },
  {
    id: 3,
    title: "Leaflet Map Integration",
    description: "Implementasi pemetaan interaktif menggunakan Leaflet pada Next.js.",
    link: "/dashboard/projects/leaflet-map", // Nanti halaman ini kita buat
    type: "internal",
    tag: "Next.js / Leaflet"
  }
];