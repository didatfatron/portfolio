// app/dashboard/achievements/non-academy/page.tsx
export default function NonAcademyPage() {
  const experiences = [
    {
      id: 1,
      title: "UniPin Indomaret Championship",
      rank: "JUARA 1 TINGKAT PROVINSI",
      desc: "Pengalaman pertama saya berhasil menjuarai turnamen yang digelar oleh UniPin dan di sponsori oleh ESI (E-sports Indonesia) Acara ini di selenggarakan di Denpasar dan tim saya berhasil menempatkan posisi pertama dalam turnamen ini sekaligus menjadi salah satu perwakilan dari Bali untuk melaju ke babak kualifikasi tingkat Nasional.",
      img: "/achievements/pengalaman1.jpg",
      align: "left",
    },
    {
      id: 2,
      title: "Planet Gadget Championship",
      rank: "JUARA 1 TINGKAT UMUM",
      desc: "Saya juga pernah memenangkan kompetisi Mobile Legends yang diadakan oleh www.planetgadget.store.id yang diadakan di Singaraja. Di sini saya berhasil menempatkan tim saya pada juara 1 pada tingkat umum.",
      img: "/achievements/pengalaman2.jpg",
      align: "right",
    },
    {
      id: 3,
      title: "Never Cup VOL 1. Denpasar",
      rank: "GRAND FINALIST",
      desc: "pengalaman saya yang paling berkesan dalam dunia kompetitif mobile legends adalah saat mengikuti perlombaan tingkat umum yang di adakan oleh Never cup VOL 1. di Denpasar pada kompetisi kali ini saya gagal menempatkan tim saya pada posisi pertama tapi justru pada kompetisi inilah yang paling berkesan bagi saya karena pada saat itu tim kami berada pada performa tertingginya dan sangat jarang mengalami kekalahan, namun pada ajang ini tim kami harus kalah pada grand final, melalui kompetisi ini saya belajar tim yang kuat bukanlah tim yang tidak pernah kalah melainkan tim yang terbentuk dari banyaknya kekalahan. melalui pengalaman ini juga kami justru menjadi tim yang lebih solid dan lebih kuat dari sebelumnya.",
      img: "/achievements/pengalaman3.jpg",
      align: "left",
    },
    
  ];

  return (
    <div className="max-w-5xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <header className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight">
          <span className="text-blue-500">NON-ACADEMIC</span> <span className="text-white">ACHIEVEMENTS</span>
        </h1>
        <p className="text-white/60 mt-3 text-sm tracking-widest uppercase font-medium">
          Pengalaman Kompetitif Mobile Legends
        </p>
        <div className="w-20 h-[2px] bg-blue-500/50 mt-6 rounded-full"></div>
      </header>

      {/* Zig-Zag Content */}
      <div className="space-y-32">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`flex flex-col ${exp.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="glass p-2 rounded-3xl border border-white/10 shadow-2xl">
                <img 
                  src={exp.img} 
                  alt={exp.title}
                  className="rounded-2xl w-full h-64 md:h-80 object-cover opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 space-y-4">
              <span className="text-[10px] font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md uppercase tracking-wider border border-blue-500/20">
                {exp.rank}
              </span>
              <h2 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h2>
              <p className="text-white/80 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <footer className="mt-40 max-w-3xl mx-auto text-center space-y-8 animate-in fade-in duration-1000">
        <div className="flex flex-col items-center">
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500/50 to-transparent mb-6"></div>
          
          <p className="text-white/80 text-lg leading-relaxed italic">
            "Ini adalah beberapa dokumentasi kejuaraan yang ingin saya abadikan di sini. 
            Ada banyak kejuaraan-kejuaraan lain yang saya menangkan, namun mungkin dari ketiga ini 
            adalah yang paling berkesan bagi saya.  Dari pengalaman ini saya sangat bangga bisa berpartisipasi dalam ajang non-akademik 
            dari banyaknya kompetisi yang saya ikuti. Momen-momen di atas adalah bagian kecil yang sangat penting 
            di hidup saya, dan dari pengalaman-pengalaman seperti ini saya banyak belajar hal-hal baru 
            yang tidak hanya saya kembangkan pada skema non-akademik dalam diri saya, 
            tetapi juga dalam dunia nyata."
          </p>
        </div>

        {/* Dekorasi Akhir */}
        <div className="pt-10">
          <p className="text-[10px] tracking-[0.5em] text-blue-500/50 font-bold uppercase">
            End of Documentation
          </p>
        </div>
      </footer>
    </div>
  );
}