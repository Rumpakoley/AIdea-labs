import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "about", href: "/about" },
    { name: "work", href: "/#work" },
    { name: "services", href: "/#services" },
    { name: "ai labs", href: "/#lab" },
    { name: "get in touch", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center bg-transparent mix-blend-difference pointer-events-none">
      {/* Ultra-Funky Spinning Badge Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 cursor-pointer group pointer-events-auto"
      >
        <Link to="/" className="flex items-center gap-4">
          {/* Circular Rotating SVG Badge */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            {/* Central Asterisk / Glitch Element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute text-[#00FF55] text-4xl font-black mb-1 group-hover:scale-125 transition-transform"
              style={{ fontFamily: "sans-serif" }}
            >
              *
            </motion.div>

            {/* Rotating Circular Text */}
            <motion.svg
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              viewBox="0 0 100 100"
              className="w-full h-full text-white/90 overflow-visible group-hover:text-[#00FF55] transition-colors"
            >
              <path id="circlePath" fill="none" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
              <text className="text-[12.5px] uppercase font-black tracking-widest" fill="currentColor" style={{ fontFamily: "sans-serif" }}>
                <textPath href="#circlePath" startOffset="0%">
                  AIDEA LABS ✦ THE AGENCY ✦ 
                </textPath>
              </text>
            </motion.svg>
          </div>
          
          {/* Typographic Lockup */}
          <div className="flex flex-col leading-none pt-1">
             <span className="text-xl md:text-3xl text-white tracking-tighter font-black uppercase font-sans">
                AIDEA
             </span>
             <span className="text-[10px] text-[#00FF55] tracking-[0.3em] font-bold uppercase ml-auto">
                [LABS]
             </span>
          </div>
        </Link>
      </motion.div>
      
      {/* Links */}
      <div className="hidden md:flex items-center gap-6 pointer-events-auto">
        {navItems.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            {item.href.startsWith("/#") ? (
              <a href={item.href} className="text-[13px] font-sans text-white hover:text-[#00FF55] transition-colors uppercase font-bold tracking-wider">
                {item.name}
              </a>
            ) : (
              <Link to={item.href} className="text-[13px] font-sans text-white hover:text-[#00FF55] transition-colors uppercase font-bold tracking-wider">
                {item.name}
              </Link>
            )}
          </motion.div>
        ))}
      </div>
    </nav>
  );
}
