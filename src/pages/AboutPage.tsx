import { motion } from "motion/react";
import Footer from "../components/Footer";

export default function AboutPage() {
  const processSteps = [
    { num: "1", title: "Discover", desc: "We begin by understanding the problem space—aligning on goals, users, constraints, and context to establish a clear foundation before any design decisions are made." },
    { num: "2", title: "Define", desc: "Insights are translated into direction. We define structure, flows, and creative intent—setting clear design principles that guide the project forward." },
    { num: "3", title: "Refine", desc: "Concepts are explored through design, UI/UX, motion, and interaction—refined through iteration, feedback, and attention to detail at every stage." },
    { num: "4", title: "Deliver", desc: "The final phase focuses on execution and handoff—ensuring designs are production-ready, scalable, and aligned with both creative vision and technical requirements." },
  ];

  const clients = ["Slice", "Tata", "Google", "Groww", "Cult.fit", "Thunder Dungeon", "Amazon", "Typo", "Xiaomi"];

  const awards = [
    { name: "Awwwards", year: "2025" },
    { name: "Tech Behemoths", year: "2025" },
    { name: "Awwwards", year: "2024" },
    { name: "Tech Behemoths", year: "2024" },
    { name: "Tech Behemoths", year: "2023" },
    { name: "Tech Behemoths", year: "2022" },
    { name: "Awwwards", year: "2022" },
  ];

  return (
    <motion.main
      initial={{ opacity: 0, filter: "blur(20px)", y: 100 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      exit={{ opacity: 0, filter: "blur(20px)", y: -100 }}
      transition={{ duration: 0.8, ease: "anticipate" }}
      className="bg-[#0A0A0A] min-h-screen pt-32 text-white overflow-x-hidden"
    >
      {/* 1. HERO INTRO */}
      <section className="px-6 md:px-12 py-24 md:py-32 border-b-2 border-zinc-900 group">
         <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <h1 className="text-4xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter text-white max-w-5xl mb-8 group-hover:scale-[1.02] origin-left transition-transform duration-700" style={{ fontFamily: "'Syne', sans-serif" }}>
               AIDEA LABS IS A CREATIVE DESIGN AND AI DEVELOPMENT AGENCY BASED IN ANARCHY, WORKING WITH TEAMS ACROSS THE GLOBE TO BUILD DIGITAL PRODUCTS THAT ARE CLEAR, CONSIDERED, AND PURPOSEFUL.
            </h1>
            <div className="flex items-center gap-4 text-zinc-500 font-bold tracking-widest text-xs md:text-sm uppercase mb-24" style={{ fontFamily: "'Silkscreen', cursive" }}>
               <span>(2023-2026)</span>
               <span className="w-8 h-[2px] bg-zinc-800" />
               <motion.span 
                 animate={{ opacity: [1, 0.2, 1] }} 
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="text-[#00FF55]"
               >
                 (MODERN AI STUDIO)
               </motion.span>
            </div>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t-2 border-zinc-900 pt-16">
            {[
               "Our work spans brand identity, UI/UX design, motion, and AI engineering—bringing together strategic thinking, visual craft, and technical execution.",
               "We partner closely with startups, scale-ups, and established brands, approaching each project with curiosity, attention to detail, and a strong focus on long-term value.",
               "From early concepts to final execution, our process is collaborative and thoughtful—designed to deliver high-quality outcomes that balance creativity with performance."
            ].map((text, i) => (
               <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + (i * 0.2), type: "spring", stiffness: 50 }} className="flex flex-col gap-6 group/feature hover:-translate-y-4 transition-transform duration-500">
                 <span className="text-4xl font-black text-zinc-800 group-hover/feature:text-[#00FF55] transition-colors duration-300 transform group-hover/feature:-rotate-12 origin-left" style={{ fontFamily: "'Syne', sans-serif" }}>0{i+1}</span>
                 <p className="font-medium text-sm md:text-base text-zinc-400 group-hover/feature:text-white leading-relaxed font-sans transition-colors duration-300">{text}</p>
               </motion.div>
            ))}
         </div>
      </section>

      {/* 2. PROCESS (F L O W) */}
      <section className="px-6 md:px-12 py-32 border-b-2 border-zinc-900 overflow-hidden">
        <div className="mb-16 md:mb-24 flex items-center justify-between">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "backOut" }}
            className="text-4xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter text-white" 
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
             F L O<span className="text-[#00FF55] inline-block animate-bounce"> W</span>
          </motion.h2>
        </div>
        <div className="max-w-4xl">
          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-16 font-sans">
             Our design flow is structured yet flexible—shaped around understanding context, refining ideas through collaboration, and executing with precision. Each stage is designed to bring clarity to complex problems.
          </p>
          <div className="flex flex-col border-t-2 border-zinc-900">
             {processSteps.map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="flex flex-col md:flex-row items-start md:items-center py-10 border-b-2 border-zinc-900 group/step hover:bg-[#00FF55] transition-all duration-500 cursor-none"
                >
                   <div className="w-full md:w-1/3 flex items-center gap-6 mb-4 md:mb-0 transform group-hover/step:translate-x-8 transition-transform duration-500">
                      <span className="text-xl font-bold text-[#00FF55] group-hover/step:text-black group-hover/step:scale-150 transition-all duration-300" style={{ fontFamily: "'Silkscreen', cursive" }}>({step.num})</span>
                      <h3 className="text-3xl font-extrabold uppercase tracking-tight text-white group-hover/step:text-black group-hover/step:skew-x-[-15deg] transition-all duration-300" style={{ fontFamily: "'Syne', sans-serif" }}>{step.title}</h3>
                   </div>
                   <div className="w-full md:w-2/3 transform group-hover/step:-translate-x-8 transition-transform duration-500">
                      <p className="text-zinc-500 group-hover/step:text-black font-bold leading-relaxed font-sans transition-colors duration-300 delay-100">{step.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. CLIENTS MARQUEE */}
      <section className="py-32 border-b-2 border-zinc-900 overflow-hidden relative">
        <div className="px-6 md:px-12 mb-16 relative z-10 pointer-events-none">
          <h2 className="text-4xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
             C L I E N T<span className="text-[#00FF55]"> S</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest mt-4" style={{ fontFamily: "'Silkscreen', cursive" }}>Trusted by product teams and global brands</p>
        </div>
        
        {/* Infinite Marquee */}
        <div className="relative flex whitespace-nowrap overflow-hidden py-10 bg-[#00FF55] border-y-4 border-black rotate-[-3deg] scale-110 shadow-[0_0_50px_rgba(0,255,85,0.2)]">
           <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="flex items-center gap-16 min-w-max"
           >
              {[...clients, ...clients, ...clients].map((client, i) => (
                 <div key={i} className="flex items-center gap-16 group/client">
                   <span className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black hover:text-white hover:scale-125 transition-all duration-300 cursor-none" style={{ fontFamily: "'Syne', sans-serif" }}>
                     {client}
                   </span>
                   <span className="text-black text-4xl leading-none -mt-4 animate-spin">*</span>
                 </div>
              ))}
           </motion.div>
        </div>
      </section>

      {/* 4. AWARDS */}
      <section className="px-6 md:px-12 py-32 bg-[#0A0A0A]">
        <div className="mb-16 md:mb-24 flex items-center justify-between">
          <h2 className="text-4xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
             A W A R D<span className="text-[#00FF55]"> S</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
           <div className="flex flex-col border-t-2 border-zinc-900 group/list">
             {awards.map((award, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="flex items-center justify-between py-6 border-b-2 border-zinc-900 hover:border-[#00FF55] hover:bg-zinc-900 transition-all duration-300 cursor-none px-4 -mx-4 rounded-lg group/award"
               >
                 <span className="text-2xl font-bold font-sans uppercase group-hover/award:text-[#00FF55] group-hover/award:translate-x-4 transition-transform duration-300">{award.name}</span>
                 <span className="text-sm font-bold tracking-widest text-[#00FF55] opacity-50 group-hover/award:opacity-100 group-hover/award:-translate-x-4 transition-all duration-300" style={{ fontFamily: "'Silkscreen', cursive" }}>({award.year})</span>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}

