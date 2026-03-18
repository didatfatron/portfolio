// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* Background Animation */}
        <div className="bg-animate">
          {/* Bola-bola cairan perak */}
          <div className="liquid-blob top-[10%] left-[20%] w-[400px] h-[400px]"></div>
          <div className="liquid-blob top-[50%] left-[60%] w-[300px] h-[300px]" style={{ animationDelay: '-5s' }}></div>
          <div className="liquid-blob top-[70%] left-[10%] w-[500px] h-[500px]" style={{ animationDelay: '-10s' }}></div>
        </div>

        {/* Filter SVG untuk efek Cairan/Gooey (Tidak terlihat di layar) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
              <feColorMatrix 
                in="blur" 
                mode="matrix" 
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -15" 
                result="goo" 
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
        
        {children}
      </body>
    </html>
  );
}