import { motion } from "motion/react";
import { Link } from "react-router-dom";
import aboutAgencyImg from "../about-agency.png";

export default function About() {
  return (
    <section className="bg-black text-white py-32 md:py-48 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center border-t border-zinc-900 border-b border-zinc-900">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00FF55]/20 to-transparent opacity-30 shadow-[0_0_30px_5px_rgba(0,255,85,0.3)]"></div>

      {/* Giant Rotating Asterisk Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.02] text-white pointer-events-none flex items-center justify-center font-black select-none text-[600px] leading-none animate-[spin_120s_linear_infinite]">
        *
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
         
         {/* Left Column: Premium Portrait Image */}
         <div className="md:col-span-5 relative group overflow-hidden rounded-[32px] border border-white/10 aspect-[3/4] shadow-2xl">
           <motion.img 
             initial={{ scale: 1.1, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
             src={aboutAgencyImg}
             alt="AIdea Labs Studio"
             className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
           <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-widest text-[#00FF55] uppercase" style={{ fontFamily: "'Silkscreen', cursive" }}>
             [ AIDEA LABS // EST. 2026 ]
           </div>
         </div>

         {/* Right Column: Editorial Text Blocks */}
         <div className="md:col-span-7 flex flex-col items-start justify-center">
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-[44px] font-extrabold tracking-tight leading-tight text-white" 
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              AIdea Labs is a creative design and development agency crafting immersive, high-performance brutalist experiences.
            </motion.h3>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-zinc-500 font-medium text-sm md:text-base leading-relaxed max-w-xl mt-6"
               style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
               Specializing in brand identity, cinematic motion, physics-based interactions, and custom generative AI integrations. We bring a bold, raw digital signature to every project. Driven by the belief that speed and soul can coexist, we build high-performance web applications that bridge creative imagination with modern tech.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="mt-8"
            >
               <Link 
                 to="/about" 
                 className="inline-flex items-center gap-4 px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-all duration-300 font-black text-xs md:text-sm uppercase tracking-widest text-white"
                 style={{ fontFamily: "'Silkscreen', cursive" }}
               >
                 ABOUT US
                 <span className="text-lg leading-none">+</span>
               </Link>
            </motion.div>

         </div>

      </div>
    </section>
  );
}
