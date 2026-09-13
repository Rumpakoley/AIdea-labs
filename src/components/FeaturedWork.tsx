import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

// Generate 12 dummy projects
const rawProjects: { title: string; video?: string }[] = [
  { title: "GROWW", video: "https://res.cloudinary.com/sokhf44d/video/upload/v1789287972/AnavrinMSH_1.mov" },
  { title: "CULT FIT" },
  { title: "BOLT" },
  { title: "CARING" },
  { title: "RECMI" },
  { title: "AETHER" },
  { title: "NOMAD" },
  { title: "LUMEN" },
  { title: "PRISM" },
  { title: "SOLARA" },
  { title: "VEX" },
  { title: "FABLE" }
];

// Alternate aspect ratios cleanly without messy empty gaps
const aspects = ["aspect-[3/4]", "aspect-[4/3]", "aspect-square", "aspect-[4/5]"];

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  video?: string;
  aspect: string;
}

const projects: ProjectItem[] = rawProjects.map((proj, i) => ({
  id: i + 1,
  title: proj.title,
  category: i % 2 === 0 ? "Digital Identity" : "Motion Story",
  image: `https://picsum.photos/seed/masonryW${i}/800/1000`,
  video: proj.video,
  aspect: aspects[i % aspects.length],
}));

export default function FeaturedWork() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

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
              onClick={() => setSelectedProject(project)}
              className={`group relative break-inside-avoid w-full ${project.aspect} cursor-pointer md:cursor-crosshair`}
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

                {/* Main Media (Video or Image) */}
                <div className="absolute inset-0 overflow-hidden bg-[#151515]">
                  {project.video ? (
                    <motion.video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      animate={{ 
                        scale: hoveredIdx === i ? 1.05 : 1,
                        filter: hoveredIdx === i ? 'grayscale(0%) contrast(110%)' : 'grayscale(100%) contrast(120%)'
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover mix-blend-normal"
                    />
                  ) : (
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
                  )}
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

      {/* Pop-up Modal Window for Video / Media */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 cursor-pointer"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#0A0A0A] border-2 border-[#00FF55] shadow-[0_0_50px_rgba(0,255,85,0.25)] flex flex-col overflow-hidden cursor-default"
            >
              {/* Modal Top Header */}
              <div className="w-full bg-[#121212] border-b-2 border-[#00FF55]/30 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00FF55] animate-ping" />
                  <span className="font-mono text-xs md:text-sm text-[#00FF55] font-bold tracking-widest uppercase">
                    // {selectedProject.title} [{String(selectedProject.id).padStart(2, '0')}]
                  </span>
                  <span className="hidden sm:inline-block font-sans text-xs text-zinc-500 uppercase font-semibold">
                    ✦ {selectedProject.category}
                  </span>
                </div>

                {/* Close Button to return back to website */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="group flex items-center gap-2 px-4 py-2 bg-black border border-[#00FF55] text-[#00FF55] hover:bg-[#00FF55] hover:text-black transition-colors duration-200 font-mono text-xs font-bold uppercase tracking-widest cursor-pointer shadow-[2px_2px_0px_#00FF55] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  aria-label="Close popup window"
                >
                  <span>CLOSE</span>
                  <span className="text-sm leading-none font-black">✕</span>
                </button>
              </div>

              {/* Media Viewing Area */}
              <div className="relative w-full aspect-video md:aspect-[16/10] max-h-[72vh] bg-black flex items-center justify-center overflow-hidden">
                {selectedProject.video ? (
                  <video
                    src={selectedProject.video}
                    autoPlay
                    controls
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Modal Bottom Bar */}
              <div className="w-full bg-[#0A0A0A] border-t border-white/10 px-6 py-3 flex items-center justify-between text-[10px] md:text-xs text-zinc-500 font-mono uppercase tracking-widest">
                <span>AIDEA LABS ✦ MEDIA POPUP</span>
                <span className="text-[#00FF55]">PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
