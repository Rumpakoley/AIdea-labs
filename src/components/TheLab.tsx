import { motion } from "motion/react";

export default function TheLab() {
  const labFeatures = [
    {
      id: "01",
      title: "THE PROMPT",
      description: "PREDICTIVE DATA INITIALIZATION",
      image: "https://picsum.photos/seed/prompt-lab/800/600",
    },
    {
      id: "02",
      title: "THE POLISH",
      description: "HUMAN CREATIVE OVERSIGHT",
      image: "https://picsum.photos/seed/polish-lab/800/600",
    },
  ];

  return (
    <section id="lab" className="py-32 px-6 md:px-12 bg-[#0A0A0A] relative border-b-2 border-zinc-900 border-t-2">
      {/* Gritty hacker background overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-[0.15] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 font-sans">
        
        {/* Massive Aesthetic Header */}
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-b-2 border-white/10 pb-12">
          <div className="flex flex-col leading-none tracking-tighter uppercase font-extrabold" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="text-3xl md:text-5xl text-[#00FF55]">INSIDE</span>
            <span className="text-6xl md:text-9xl text-white">THE LAB</span>
          </div>
          
          <div className="max-w-[400px]">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
               <h4 className="text-[#00FF55] text-[10px] tracking-widest uppercase font-black" style={{ fontFamily: "'Silkscreen', cursive" }}>System Online</h4>
            </div>
            <p className="font-sans text-xs text-zinc-400 uppercase tracking-widest leading-loose font-bold">
              Democratizing premium storytelling for exact scale. We let the machine handle the physical grunt work, while our creative directors engineer the soul. 
            </p>
          </div>
        </div>

        {/* The Brutalist Wireframe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {labFeatures.map((feature, i) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative aspect-[4/3] w-full overflow-hidden border-2 border-zinc-800 bg-black hover:border-[#00FF55] transition-colors duration-[0ms] cursor-pointer"
            >
              {/* Internal Grayscale Image that glitches on hover */}
              <img 
                src={feature.image} 
                alt={feature.title} 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:scale-110 group-hover:contrast-150 group-hover:saturate-200 transition-all duration-300 mix-blend-luminosity group-hover:mix-blend-normal"
                referrerPolicy="no-referrer"
              />
              
              {/* Extreme Hacker Glitch Overlay */}
              <div className="absolute inset-0 bg-[#00FF55] opacity-0 group-hover:opacity-20 mix-blend-exclusion pointer-events-none transition-opacity duration-75" />

              <div className="absolute top-0 left-0 p-6 w-full flex justify-between items-start">
                 <span className="text-[#00FF55] text-xl font-black" style={{ fontFamily: "'Silkscreen', cursive" }}>
                   [{feature.id}]
                 </span>
                 <span className="text-white text-[8px] tracking-[0.3em] font-mono border border-white/20 px-2 py-1 bg-black/50 backdrop-blur-sm">
                   PROCESSING...
                 </span>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-white mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[#00FF55] text-[10px] uppercase tracking-widest font-black" style={{ fontFamily: "'Silkscreen', cursive" }}>
                  // {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Brutalist Action Block */}
        <div className="mt-24 w-full border-2 border-[#00FF55] bg-[#00FF55] hover:bg-black group transition-colors duration-300 cursor-pointer overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          
          <div className="max-w-xl relative flex flex-col pointer-events-none">
            <h4 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter text-black group-hover:text-white transition-colors duration-300 mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              ENTER THE MACHINE
            </h4>
            <p className="text-black text-xs font-black uppercase tracking-widest group-hover:text-[#00FF55] transition-colors duration-300" style={{ fontFamily: "'Silkscreen', cursive" }}>
              Discover how our generative frameworks increase ad CTR by over 20%. No smoke, no mirrors.
            </p>
          </div>

          <div className="shrink-0 flex items-center justify-center p-6 border-4 border-black group-hover:border-[#00FF55] w-32 h-32 rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-in-out">
            <span className="text-black group-hover:text-white font-extrabold text-5xl -rotate-45 group-hover:-rotate-90 transition-transform duration-500" style={{ fontFamily: "'Syne', sans-serif" }}>
              →
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
