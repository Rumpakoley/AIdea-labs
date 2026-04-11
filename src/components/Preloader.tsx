import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [percent, setPercent] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Aggressive, irregular timer progression to simulate actual data loading
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 20) + 2; // Jump erratically
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        // Pause heavily on 100 before ripping the screen away
        setTimeout(() => {
          setIsHidden(true);
        }, 600); 
      }
      setPercent(current);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isHidden) {
      // Trigger completion callback exactly as the screen wipe starts
      onComplete();
    }
  }, [isHidden, onComplete]);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
           key="preloader"
           exit={{ y: "-100dvh", opacity: 0 }}
           transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1] }}
           className="fixed inset-0 z-[999] bg-[#0A0A0A] flex flex-col justify-end p-6 md:p-12 overflow-hidden"
        >
          
          {/* Static HTML layout mimicking hacker screen */}
          <div className="absolute top-12 right-12 flex flex-col gap-2 items-end opacity-50 pointer-events-none">
             {Array.from({ length: 4 }).map((_, i) => (
               <div key={i} className="flex gap-2">
                 <span className="w-8 h-[2px] bg-[#00FF55]" />
                 <span className="w-2 h-[2px] bg-[#00FF55]" />
               </div>
             ))}
          </div>

          <div className="relative z-10 flex flex-col">
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-4 animate-pulse" style={{ fontFamily: "'Silkscreen', cursive" }}>
              INITIALIZING BOOT SEQUENCE // {percent === 100 ? "READY" : "WAITING"}
            </span>

            <div className="flex items-end justify-between border-b-4 border-zinc-900 pb-4">
              <h1 className="text-6xl md:text-[200px] text-[#00FF55] font-black leading-[0.8] tracking-tighter" style={{ fontFamily: "'Syne', sans-serif" }}>
                {percent}%
              </h1>
              
              <div className="hidden md:flex flex-col items-end gap-2 text-[#00FF55]/40" style={{ fontFamily: "'Silkscreen', cursive" }}>
                <span className="text-[10px] tracking-widest">AIDEA LABS</span>
                <span className="text-[10px] tracking-widest">SYS_REQ_001</span>
                <span className="text-[10px] tracking-widest">LOADING [ ████████░░ ]</span>
              </div>
            </div>
            
            <div className="w-full h-2 bg-zinc-900 mt-4 relative overflow-hidden">
               <div 
                 className="absolute top-0 left-0 h-full bg-[#00FF55] transition-all duration-[80ms] ease-linear"
                 style={{ width: `${percent}%` }}
               />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
