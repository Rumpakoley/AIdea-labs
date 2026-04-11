import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for the outer trailing circle
  const smoothX = useSpring(mouseX, { damping: 12, stiffness: 200, mass: 0.8 });
  const smoothY = useSpring(mouseY, { damping: 12, stiffness: 200, mass: 0.8 });
  const hyperSmoothX = useSpring(mouseX, { damping: 30, stiffness: 100, mass: 1.5 });
  const hyperSmoothY = useSpring(mouseY, { damping: 30, stiffness: 100, mass: 1.5 });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half size of dot to center it on the actual mouse pointer
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* The Anarchic Outer Lagging Shape */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 border-[1px] border-white pointer-events-none z-[98] mix-blend-difference"
        animate={{ 
          rotate: 360, 
          borderRadius: ["50%", "0%", "30%", "50%"] 
        }}
        transition={{ 
          rotate: { duration: 6, repeat: Infinity, ease: "linear" }, 
          borderRadius: { duration: 3, repeat: Infinity, ease: "easeInOut" } 
        }}
        style={{
          x: hyperSmoothX,
          y: hyperSmoothY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />

      {/* The Fast Spinning Geometric Target */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-[#00FF55] pointer-events-none z-[99] mix-blend-exclusion"
        animate={{ 
          rotate: -360, 
          scale: [1, 1.4, 1] 
        }}
        transition={{ 
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.8, repeat: Infinity, ease: "anticipate" }
        }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      
      {/* The Exact Target Crosshair */}
      <motion.div
        className="fixed top-0 left-0 w-[12px] h-[12px] text-[#00FF55] pointer-events-none z-[100] mix-blend-difference flex items-center justify-center font-black text-sm"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      >
        +
      </motion.div>
    </>
  );
}
