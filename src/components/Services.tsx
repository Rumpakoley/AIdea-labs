import { motion } from "motion/react";
import { useState } from "react";

const servicesList = [
  {
    id: "01",
    title: "BRANDING",
    subtitle: "Strategic identity & packaging.",
    image: "https://picsum.photos/seed/funky1/800/1000",
    tilt: "rotate-3",
  },
  {
    id: "02",
    title: "MOTION",
    subtitle: "Cinematic 3D animation.",
    image: "https://picsum.photos/seed/funky2/800/1000",
    tilt: "-rotate-6",
  },
  {
    id: "03",
    title: "DIGITAL",
    subtitle: "Immersive web & UI/UX.",
    image: "https://picsum.photos/seed/funky3/800/1000",
    tilt: "rotate-6",
  },
  {
    id: "04",
    title: "CONTENT",
    subtitle: "Campaigns & visual storytelling.",
    image: "https://picsum.photos/seed/funky4/800/1000",
    tilt: "-rotate-3",
  }
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Marquee string repeating purely for aesthetic scale
  const marqueeText = Array(6).fill("STUDIO SERVICES ✦ EXPERTISE").join(" ✦ ");

  return (
    <section id="services" className="bg-[#0A0A0A] font-sans relative overflow-hidden py-32 border-t border-white/5">
      
      {/* 1. AGGRESSIVE INFINITE MARQUEE */}
      <div className="w-full overflow-hidden flex whitespace-nowrap mb-24 md:mb-40 -rotate-2 scale-105 border-y border-[#00FF55]/20 bg-[#0A0A0A] py-4 relative z-20 shadow-2xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex min-w-max"
        >
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00FF55] to-green-300 stroke-text">
            <span style={{ WebkitTextStroke: "2px #00FF55", WebkitTextFillColor: "transparent" }}>
              {marqueeText}
            </span>
          </h2>
        </motion.div>
      </div>

      {/* 2. FLUID UNBOXED LIST */}
      <div className="w-full flex flex-col relative z-10">
        <div className="w-full h-px bg-white/10" />

        {servicesList.map((service, i) => (
          <div
            key={service.id}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative w-full border-b border-white/10 py-12 md:py-20 cursor-crosshair overflow-hidden"
          >
            {/* 3. NEON FLASH BACKGROUND EFFECT */}
            <div 
              className={`absolute inset-0 bg-[#00FF55] transition-transform duration-500 ease-out origin-left ${hoveredIdx === i ? 'scale-x-100' : 'scale-x-0'}`} 
            />

            {/* List Row Content */}
            <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-start justify-between pointer-events-none">
              
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-sm md:text-2xl transition-colors duration-300 font-bold ${hoveredIdx === i ? 'text-black/50' : 'text-[#00FF55]'}`}>
                    {service.id}
                  </span>
                  {/* Massive Typography */}
                  <h3 className={`text-6xl md:text-[140px] font-black tracking-tighter uppercase transition-all duration-300 leading-none ${hoveredIdx === i ? 'text-black tracking-widest' : 'text-white'}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Subtitle that shifts in vertically below the title on hover */}
                <div className="overflow-hidden pl-10 md:pl-16">
                  <p className={`font-mono text-xs md:text-lg font-bold uppercase transition-all duration-500 transform ${hoveredIdx === i ? 'translate-y-0 opacity-100 text-black' : '-translate-y-4 opacity-0'}`}>
                    // {service.subtitle}
                  </p>
                </div>
              </div>

            </div>

            {/* 4. TILTED IMAGE BURST */}
            {/* Image blasts into the center-right of the screen and tilts aggressively when row is hovered (placed at z-20, on top of text) */}
            <div className="absolute top-1/2 left-[50%] md:left-[58%] -translate-y-1/2 -translate-x-1/2 w-56 md:w-[350px] aspect-[3/4] pointer-events-none z-20">
               <motion.img 
                  src={service.image}
                  animate={{
                    opacity: hoveredIdx === i ? 1 : 0,
                    scale: hoveredIdx === i ? 1 : 0.5,
                    rotate: hoveredIdx === i ? service.tilt.replace('rotate-', '').replace('-', '-') : 0 // parse roughly
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-full h-full object-cover shadow-2xl filter contrast-125 ${service.tilt}`}
               />
            </div>

            {/* Scrolling Badge inside the row */}
            <div className={`absolute right-6 md:right-12 top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full border border-black flex items-center justify-center transition-all duration-700 z-30 ${hoveredIdx === i ? 'opacity-100 rotate-180 scale-100' : 'opacity-0 scale-50 -rotate-90'}`}>
               <span className="font-mono text-[10px] text-black text-center font-bold tracking-widest uppercase">
                 View <br/> Case <br/> Study
               </span>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
