import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function Hero() {
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

  const physics = { damping: 15, stiffness: 50, mass: 2 };
  const springX = useSpring(mouseX, physics);
  const springY = useSpring(mouseY, physics);

  // Magnetic shifts
  const textX = useTransform(springX, (v) => v * 0.1);
  const textY = useTransform(springY, (v) => v * 0.15);
  const shadowX = useTransform(springX, (v) => v * -0.2);
  const shadowY = useTransform(springY, (v) => v * -0.25);

  const marqueeText = Array(12).fill("AIDEA LABS IS WATCHING ✦ KEEP SCROLLING").join(" ✦ ");

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-[100dvh] w-full bg-[#0A0A0A] overflow-hidden font-sans border-b border-white/5"
    >
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/sokhf44d/video/upload/v1790491651/magnific_reference-map-img11-img8-_mExtycChJQ.mp4"
        />
      </div>

      {/* Reticle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#00FF55]/20 rounded-full pointer-events-none z-0 flex items-center justify-center">
         <div className="w-1 h-1 bg-[#00FF55] rounded-full" />
      </div>

      {/* STABLE, HIGH-END TYPOGRAPHY MIX (BRUTALIST + ITALIC) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-20">
        
        {/* Shadow Glitch Layer */}
        <motion.div 
          style={{ x: shadowX, y: shadowY }}
          className="absolute flex flex-col justify-center items-center opacity-70 blur-[1px]"
        >
          <div className="flex flex-col items-center leading-none pointer-events-none text-center">
            <h1 
              className="text-[16vw] md:text-[160px] font-bold uppercase text-transparent tracking-wider leading-[1.1]"
              style={{ WebkitTextStroke: "4px #00FF55", fontFamily: "'Silkscreen', cursive" }}
            >
              AIDEA
              <br />
              LABS
            </h1>
          </div>
        </motion.div>

        {/* Solid Top Layer */}
        <motion.div 
          style={{ x: textX, y: textY }}
          className="relative flex flex-col justify-center items-center mix-blend-difference"
        >
          <div className="flex flex-col items-center leading-none pointer-events-none text-center">
            <h1 
              className="text-[16vw] md:text-[160px] font-bold uppercase text-white tracking-wider leading-[1.1] drop-shadow-[5px_5px_0px_rgba(0,255,85,0.6)]"
              style={{ fontFamily: "'Silkscreen', cursive" }}
            >
              AIDEA
              <br />
              LABS
            </h1>
          </div>
          
          <div className="mt-12 text-[#00FF55] font-sans font-bold text-[10px] md:text-sm tracking-[0.3em] uppercase py-3 px-6 shadow-[4px_4px_0px_transparent] border border-white/20 bg-black backdrop-blur-sm pointer-events-none">
            Creative Digital Studio
          </div>
        </motion.div>

      </div>

      {/* SAFELY CONSTRAINED DUAL MARQUEES */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex flex-col z-30 pointer-events-none border-t border-[#00FF55]/20">
        
        {/* Layer 2: Fast Solid Neon Marquee (Moves Left Slowly) - Now stacked on top */}
        <div className="w-full bg-[#00FF55] py-2 md:py-3 z-20">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 300, repeat: Infinity }}
                className="flex min-w-max"
              >
                <span className="text-black text-lg md:text-3xl font-black uppercase tracking-widest px-8" style={{ fontFamily: "sans-serif" }}>
                  {marqueeText} {marqueeText}
                </span>
              </motion.div>
        </div>

        {/* Layer 1: Massive Glitch-Outlined Marquee (Moves Right Slowly) - Now stacked at bottom */}
        <div className="w-full bg-black py-4 md:py-6 shadow-[0_0_50px_rgba(0,255,85,0.4)] border-t-2 border-[#00FF55]/40 z-10">
              <motion.div
                animate={{ x: ["-50%", "0%"] }}
                transition={{ ease: "linear", duration: 250, repeat: Infinity }}
                className="flex min-w-max"
              >
                <span className="text-transparent text-2xl md:text-6xl font-black uppercase tracking-widest px-8" style={{ WebkitTextStroke: "2px #00FF55", fontFamily: "sans-serif" }}>
                  {marqueeText} {marqueeText}
                </span>
              </motion.div>
        </div>

      </div>

    </section>
  );
}
