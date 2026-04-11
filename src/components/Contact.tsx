import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    role: "FOUNDER",
    goal: "SCALE",
    service: "CAMPAIGNS",
    email: "",
  });

  const roles = ["FOUNDER", "MARKETING HEAD", "ENTREPRENEUR"];
  const goals = ["SCALE", "LAUNCH", "EVOLVE"];
  const services = ["CAMPAIGNS", "BRANDING", "WEB DESIGN"];

  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A] border-t-[16px] border-[#00FF55] relative overflow-hidden">
      
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-20 flex flex-col items-end">
        <h2 className="text-[150px] leading-none font-bold tracking-tighter text-[#00FF55]" style={{ fontFamily: "'Syne', sans-serif" }}>
          SYS.
        </h2>
        <h2 className="text-[150px] leading-none font-bold tracking-tighter text-[#00FF55] -mt-12" style={{ fontFamily: "'Syne', sans-serif" }}>
          CNTC
        </h2>
      </div>

      <div className="max-w-[90vw] mx-auto w-full relative z-10">
        
        {/* Massive Mad Libs Block */}
        <div className="relative">
          <div className="text-4xl md:text-[6vw] font-extrabold uppercase leading-[1.1] tracking-tighter text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
            I AM A{" "}
            
            <div className="inline-block relative overflow-hidden bg-[#00FF55] border-4 border-black box-border mx-2 md:mx-6 group align-middle -translate-y-2 md:-translate-y-4 shadow-[8px_8px_0_rgba(0,255,85,0.3)]">
              <select 
                value={formData.role} 
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="bg-transparent text-black cursor-pointer appearance-none px-4 md:px-6 py-2 md:py-4 outline-none w-full relative z-10 hover:bg-black hover:text-[#00FF55] transition-colors"
                style={{ fontFamily: "'Silkscreen', cursive" }}
              >
                {roles.map(r => <option key={r} value={r} className="bg-[#0A0A0A] text-[#00FF55]">{r}</option>)}
              </select>
              {/* Custom Dropdown Arrow */}
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black font-black text-sm group-hover:text-[#00FF55]">
                ▼
              </div>
            </div>
            
            {" "}LOOKING TO{" "}
            
            <div className="inline-block relative overflow-hidden bg-black border-4 border-[#00FF55] box-border mx-2 md:mx-6 group align-middle -translate-y-2 md:-translate-y-4 shadow-[8px_8px_0_rgba(255,255,255,0.1)]">
              <select 
                value={formData.goal} 
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="bg-transparent text-[#00FF55] cursor-pointer appearance-none px-4 md:px-6 py-2 md:py-4 outline-none w-full relative z-10 hover:bg-[#00FF55] hover:text-black transition-colors"
                style={{ fontFamily: "'Silkscreen', cursive" }}
              >
                {goals.map(g => <option key={g} value={g} className="bg-[#0A0A0A] text-[#00FF55]">{g}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#00FF55] font-black text-sm group-hover:text-black">
                ▼
              </div>
            </div>
            
            {" "}MY BRAND. LET'S TALK ABOUT{" "}
            
            <div className="inline-block relative overflow-hidden bg-[#00FF55] border-4 border-black box-border mx-2 md:mx-6 group align-middle -translate-y-2 md:-translate-y-4 shadow-[8px_8px_0_rgba(0,255,85,0.3)] mt-4 md:mt-0">
              <select 
                value={formData.service} 
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="bg-transparent text-black cursor-pointer appearance-none px-4 md:px-6 py-2 md:py-4 outline-none w-full relative z-10 hover:bg-black hover:text-[#00FF55] transition-colors"
                style={{ fontFamily: "'Silkscreen', cursive" }}
              >
                {services.map(s => <option key={s} value={s} className="bg-[#0A0A0A] text-[#00FF55]">{s}</option>)}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black font-black text-sm group-hover:text-[#00FF55]">
                ▼
              </div>
            </div>
            .
          </div>

          <div className="mt-16 md:mt-32 w-full p-8 md:p-12 border-4 border-zinc-900 bg-black flex flex-col md:flex-row items-end gap-12 relative group/form">
            <div className="flex-1 w-full relative">
              <label className="text-[#00FF55] text-[10px] tracking-[0.3em] uppercase mb-4 block font-black" style={{ fontFamily: "'Silkscreen', cursive" }}>
                // INITIALIZE CONNECTION
              </label>
              <input 
                type="email" 
                placeholder="ADDRESS@SYSTEM.COM"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b-4 border-zinc-800 py-6 text-2xl md:text-5xl text-white placeholder:text-zinc-700 outline-none focus:border-[#00FF55] transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              />
            </div>
            <motion.button 
              whileTap={{ y: 5 }}
              className="w-full md:w-auto px-16 py-8 bg-[#0A0A0A] border-2 border-[#00FF55] text-[#00FF55] hover:bg-[#00FF55] hover:text-black font-black text-xl uppercase tracking-widest transition-colors shadow-[8px_8px_0_#00FF55] hover:shadow-[0_0_0_#00FF55] hover:translate-y-2 hover:translate-x-2"
              style={{ fontFamily: "'Silkscreen', cursive" }}
            >
              [ UPLOAD ]
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
