import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useEffect, useState } from "react";

export default function Footer() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowCenter, setWindowCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setWindowCenter({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX - windowCenter.x);
    mouseY.set(e.clientY - windowCenter.y);
  };

  const physics = { damping: 12, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, physics);
  const springY = useSpring(mouseY, physics);
  
  const textX = useTransform(springX, (v) => v * 0.05);
  const textY = useTransform(springY, (v) => v * 0.05);
  const textSkew = useTransform(springX, (v) => v * 0.04); // Leans the text aggressively

  const glitchX1 = useTransform(springX, (v) => v * -0.25);
  const glitchY1 = useTransform(springY, (v) => v * 0.2);

  const glitchX2 = useTransform(springX, (v) => v * 0.3);
  const glitchY2 = useTransform(springY, (v) => v * -0.25);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer onMouseMove={handleMouseMove} className="pt-24 md:pt-32 bg-[#0A0A0A] border-t-2 border-zinc-900 relative overflow-hidden flex flex-col justify-between">
      <div className="max-w-[90vw] mx-auto w-full mb-24 md:mb-48 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          
          <div className="col-span-2">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-8 text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
              THE<br/><span className="text-[#00FF55]">AGENCY</span>
            </h2>
            <p className="font-bold text-[10px] text-zinc-500 uppercase tracking-[0.2em] leading-loose max-w-sm" style={{ fontFamily: "'Silkscreen', cursive" }}>
              Where Artificial Intelligence meets human brutality. We decentralize premium storytelling for startups and D2C brands.
            </p>
          </div>
          
          <div>
            <h4 className="font-extrabold text-[12px] text-zinc-700 uppercase tracking-widest mb-8 border-b-2 border-zinc-900 pb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              // INDEX
            </h4>
            <ul className="space-y-4 font-black flex flex-col">
              {[
                { name: "THE LAB", href: "#lab" },
                { name: "FEATURED WORK", href: "#work" },
                { name: "THE SHIFT", href: "#shift" },
                { name: "CONNECTION", href: "#contact" }
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="group flex items-center text-[10px] text-zinc-400 hover:text-[#00FF55] transition-all duration-300 uppercase tracking-[0.2em]" style={{ fontFamily: "'Silkscreen', cursive" }}>
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-4">
                      →
                    </span>
                    <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-[12px] text-zinc-700 uppercase tracking-widest mb-8 border-b-2 border-zinc-900 pb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              // EXTERNAL
            </h4>
            <ul className="space-y-4 font-black flex flex-col">
              {["INSTAGRAM", "LINKEDIN", "TWITTER"].map((platform, i) => (
                <li key={i}>
                  <a href="#" className="group flex items-center text-[10px] text-zinc-400 hover:text-white transition-all duration-300 uppercase tracking-[0.2em]" style={{ fontFamily: "'Silkscreen', cursive" }}>
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 mr-4">
                      →
                    </span>
                    <span className="-translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
                      {platform}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Back to top abstract target */}
        <div className="absolute top-0 right-0">
          <button 
            onClick={scrollToTop}
            className="group w-24 h-24 border-2 border-zinc-800 hover:border-[#00FF55] flex items-center justify-center relative overflow-hidden transition-colors duration-300"
          >
            <span className="text-[#00FF55] font-extrabold text-3xl group-hover:-translate-y-8 transition-transform duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>↑</span>
            <span className="absolute bottom-[-100%] group-hover:bottom-2 text-[#00FF55] text-[8px] font-black tracking-widest uppercase transition-all duration-300" style={{ fontFamily: "'Silkscreen', cursive" }}>TOP</span>
            <div className="absolute inset-0 bg-[#00FF55]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Massive Screen-Spanning Interactive Lockup */}
      <div className="relative w-full flex items-end justify-center overflow-hidden leading-[0.85] select-none border-t border-zinc-900 pt-16 pb-4 group" style={{ fontFamily: "'Syne', sans-serif" }}>

         {/* Glitch Underlayer 1 (Magenta - Moves Opposite) */}
         <motion.h1 
           className="absolute text-[9.5vw] md:text-[10.5vw] tracking-tighter font-extrabold uppercase whitespace-nowrap px-4 text-[#FF0055] opacity-0 group-hover:opacity-100 mix-blend-screen blur-[1px] transition-opacity duration-75"
           style={{ x: glitchX1, y: glitchY1, skewX: textSkew }}
         >
           AIDEA LABS.
         </motion.h1>

         {/* Glitch Underlayer 2 (Neon Green - Moves Forward Fast) */}
         <motion.h1 
           className="absolute text-[9.5vw] md:text-[10.5vw] tracking-tighter font-extrabold uppercase whitespace-nowrap px-4 text-[#00FF55] opacity-0 group-hover:opacity-100 mix-blend-screen blur-[2px] transition-opacity duration-75"
           style={{ x: glitchX2, y: glitchY2, skewX: textSkew }}
         >
           AIDEA LABS.
         </motion.h1>

         {/* Solid Top Layer (Reacts into a cut-out black mask) */}
         <motion.h1 
           className="relative text-[9.5vw] md:text-[10.5vw] tracking-tighter font-extrabold uppercase text-transparent group-hover:text-black whitespace-nowrap px-4 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] transition-all duration-[50ms]" 
           style={{ WebkitTextStroke: "2px #27272a", x: textX, y: textY, skewX: textSkew }}
         >
           AI<span className="text-zinc-800 group-hover:text-black transition-colors duration-[50ms]">DEA </span>L<span className="text-zinc-800 group-hover:text-black transition-colors duration-[50ms]">ABS.</span>
         </motion.h1>

      </div>

    </footer>
  );
}
