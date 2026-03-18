// app/dashboard/about/page.tsx
import { socialMedia } from '@/data/socials';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-3xl font-bold text-white mb-6 tracking-tight">
        About <span className="text-blue-400">Me</span>
      </h1>
      
      <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl">
        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          Halo! dibawah ini beberapa sosial mediaku, ingin berkenalan lebih lanjut?. 
        </p>

        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
          Contact & Social Media
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialMedia.map((social) => {
            const IconComponent = social.icon;
            return (
              <Link 
                key={social.name} 
                href={social.url} 
                target="_blank"
                className={`flex items-center gap-4 p-5 rounded-2xl text-white transition-all hover:scale-[1.03] active:scale-95 border border-white/5 hover:border-white/20 shadow-xl ${social.color}`}
              >
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-md">
                  <IconComponent size={24} />
                </div>
                <div>
                  <p className="text-[10px] opacity-70 uppercase font-black tracking-[0.2em]">{social.name}</p>
                  <p className="text-lg font-bold tracking-tight">{social.label}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}