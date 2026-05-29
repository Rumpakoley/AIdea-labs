import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Link } from "react-router-dom";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftActive, setLeftActive] = useState(0);
  const [rightActive, setRightActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const leftText = "We're a creative design and development agency crafting immersive brutalist experiences.";
  const rightText = "Our work spans design, extreme typography, physics-based interactions, and high-performance engineering to bring the noise.";

  const leftWords = leftText.split(" ");
  const rightWords = rightText.split(" ");

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map left words: active from 15% to 50% of viewport scroll
    const leftProgress = Math.max(0, Math.min(1, (latest - 0.15) / 0.35));
    setLeftActive(Math.floor(leftProgress * leftWords.length));

    // Map right words: active from 35% to 70% of viewport scroll
    const rightProgress = Math.max(0, Math.min(1, (latest - 0.35) / 0.35));
    setRightActive(Math.floor(rightProgress * rightWords.length));
  });

  return (
    <div ref={containerRef} className="relative bg-black text-white py-32 md:py-48 px-6 md:px-12 border-t border-zinc-900 border-b border-zinc-900 overflow-hidden">
      
      {/* Top glowing lens flare effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#00FF55]/20 to-transparent opacity-30 shadow-[0_0_30px_5px_rgba(0,255,85,0.3)]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
         
         {/* Split Left Column */}
         <div className="md:col-span-5 md:col-start-2">
            <h3 
              className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter leading-[1.1] text-zinc-100 flex flex-wrap" 
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {leftWords.map((word, i) => (
                <motion.span
                  key={i}
                  animate={{
                    opacity: i < leftActive ? 1 : 0.08,
                    y: i < leftActive ? 0 : 8
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mr-[0.25em] mt-[0.1em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h3>
         </div>

         {/* Split Right Column */}
         <div className="md:col-span-5 md:col-start-8 flex flex-col items-start gap-12">
            <p
               className="text-zinc-400 font-medium text-sm md:text-base leading-relaxed max-w-sm flex flex-wrap"
               style={{ fontFamily: "'Silkscreen', cursive" }}
            >
              {rightWords.map((word, i) => (
                <motion.span
                  key={i}
                  animate={{
                    opacity: i < rightActive ? 1 : 0.08,
                    y: i < rightActive ? 0 : 6
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mr-[0.3em] mt-[0.1em] inline-block uppercase"
                >
                  {word}
                </motion.span>
              ))}
            </p>
            
            <motion.div
               animate={{ 
                 opacity: rightActive >= rightWords.length - 2 ? 1 : 0.1,
                 y: rightActive >= rightWords.length - 2 ? 0 : 10
               }}
               transition={{ duration: 0.5 }}
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
    </div>
  );
}
