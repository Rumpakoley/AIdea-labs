import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="bg-black text-white py-32 md:py-48 px-6 md:px-12 relative overflow-hidden flex flex-col justify-center border-t border-zinc-900 border-b border-zinc-900">
      
      {/* Top glowing lens flare effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30 shadow-[0_0_30px_5px_rgba(255,255,255,0.5)]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
         
         {/* Split Left Column */}
         <div className="md:col-span-5 md:col-start-2">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter leading-[1.1] text-zinc-100" 
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              We're a creative design and development agency crafting immersive brutalist experiences.
            </motion.h3>
         </div>

         {/* Split Right Column */}
         <div className="md:col-span-5 md:col-start-8 flex flex-col items-start gap-12">
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed max-w-sm"
               style={{ fontFamily: "'Silkscreen', cursive" }}
            >
               Our work spans design, extreme typography, physics-based interactions, and high-performance engineering to bring the noise.
            </motion.p>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
            >
               <Link 
                 to="/about" 
                 className="inline-flex items-center gap-4 px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 font-black text-xs md:text-sm uppercase tracking-widest text-white mt-8"
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
