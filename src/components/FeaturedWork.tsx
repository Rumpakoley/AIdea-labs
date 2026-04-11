import { motion } from "motion/react";
import { useState } from "react";

// Generate 12 dummy projects
const rawProjects = [
  "GROWW", "CULT FIT", "BOLT", "CARING", "RECMI", "AETHER", 
  "NOMAD", "LUMEN", "PRISM", "SOLARA", "VEX", "FABLE"
];

// Alternate aspect ratios cleanly without messy empty gaps
const aspects = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/5]"];

const projects = rawProjects.map((title, i) => ({
  id: i + 1,
  title: title,
  category: i % 2 === 0 ? "Digital Identity" : "Motion Story",
  image: `https://picsum.photos/seed/masonryW${i}/800/1000`,
  aspect: aspects[i % aspects.length],
}));

export default function FeaturedWork() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 md:py-40 bg-[#0A0A0A] font-sans relative overflow-hidden">
      
      <div className="max-w-[1600px] mx-auto w-full px-6 flex flex-col relative z-10">
        
        {/* Wild Header */}
        <div className="relative mb-24 w-full flex justify-between items-start">
           <div className="font-mono text-[10px] md:text-xs text-[#00FF55] tracking-[0.3em] uppercase">
             (12 Selected Cases)
           </div>
           
           <motion.div
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="text-right"
           >
              <h2 className="text-5xl md:text-[140px] font-black tracking-tighter leading-[0.75] uppercase text-[#EFEFEF] mix-blend-exclusion">
                WORK<br />
                <span className="text-[#00FF55] stroke-text mix-blend-normal" style={{ WebkitTextStroke: "2px #00FF55", WebkitTextFillColor: "transparent" }}>
                  ARCHIVE
                </span>
              </h2>
           </motion.div>
        </div>

        {/* Tightly Aligned Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 w-full">
          {projects.map((project, i) => (
            <div 
              key={project.id}
              className={`group relative break-inside-avoid w-full ${project.aspect} cursor-crosshair`}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >

              {/* Background Index Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                <span className="text-[120px] font-black italic text-transparent stroke-text" style={{ WebkitTextStroke: "1px #00FF55" }}>
                   {String(project.id).padStart(2, '0')}
                </span>
              </div>

              {/* The Image Container */}
              <div className="relative w-full h-full z-10">
                
                {/* Flashing Neon Glitch Box */}
                <div 
                  className={`absolute inset-0 border-[2px] border-[#00FF55] transition-all duration-300 pointer-events-none ${hoveredIdx === i ? 'rotate-2 scale-[1.02] translate-x-3 translate-y-3 shadow-[0_0_20px_rgba(0,255,85,0.2)]' : 'rotate-0 scale-100 translate-x-0 translate-y-0 opacity-0 bg-[#0A0A0A]'}`} 
                />

                {/* Main Image */}
                <div className="absolute inset-0 overflow-hidden bg-[#151515]">
                  <motion.img 
                    src={project.image}
                    animate={{ 
                      scale: hoveredIdx === i ? 1.05 : 1,
                      filter: hoveredIdx === i ? 'grayscale(0%) contrast(110%)' : 'grayscale(100%) contrast(120%)'
                    }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover mix-blend-normal"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
                </div>
                
                {/* Typography overlapping the image */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 pointer-events-none z-20">
                    <h3 className="text-3xl md:text-[50px] font-black uppercase text-white tracking-widest leading-none mix-blend-difference break-words">
                      {project.title}
                    </h3>
                    <div className={`mt-2 h-[2px] bg-[#00FF55] transition-all duration-300 ${hoveredIdx === i ? 'w-full' : 'w-0'}`} />
                </div>
              </div>

              {/* Floating Metadata Card */}
              <motion.div 
                animate={{
                   y: hoveredIdx === i ? -10 : 0,
                   opacity: hoveredIdx === i ? 1 : 0
                }}
                className="absolute -bottom-4 right-0 md:-right-4 z-30 bg-[#111111] border border-[#00FF55]/30 p-3 shadow-2xl backdrop-blur-md w-max pointer-events-none"
              >
                 <span className="font-mono text-[9px] text-[#00FF55] tracking-widest uppercase block mb-1">
                   Category
                 </span>
                 <p className="font-sans text-xs text-white tracking-wide uppercase font-bold">
                   {project.category}
                 </p>
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
