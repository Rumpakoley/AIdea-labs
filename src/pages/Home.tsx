import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import TheLab from "../components/TheLab";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <FeaturedWork />
        <Services />
        <TheLab />
        
        {/* The Shift Section (Directory Redesign) */}
        <section id="shift" className="py-32 bg-[#0A0A0A] border-t-2 border-zinc-900 border-b-2 border-zinc-900">
          <div className="max-w-[100vw] overflow-hidden">
            <div className="mb-16 px-6 md:px-12 flex items-center justify-between">
              <h2 className="text-4xl md:text-7xl font-extrabold uppercase leading-none tracking-tighter text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
                THE <span className="text-[#00FF55]">SHIFT</span>
              </h2>
              <div className="hidden md:flex items-center gap-4">
                 <span className="w-8 h-[2px] bg-[#00FF55]" />
                 <span className="font-bold text-[10px] text-zinc-500 tracking-[0.3em] uppercase" style={{ fontFamily: "'Silkscreen', cursive" }}>Data Directory // 03</span>
              </div>
            </div>

            {/* Brutalist Directory List Wrapper */}
            <div className="flex flex-col group/list w-full border-t-2 border-zinc-900">
              {[
                "Why AI won't replace your creative director, but will replace your grunt work.",
                "The evolution of D2C branding in the age of predictive data.",
                "How to scale your storytelling without losing your brand's soul."
              ].map((title, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group/row flex flex-col md:flex-row justify-between items-start md:items-center p-6 md:px-12 md:py-16 border-b-2 border-zinc-900 hover:border-[#00FF55] hover:bg-[#00FF55]/5 transition-all duration-300 cursor-pointer hover:!opacity-100 group-hover/list:opacity-30"
                >
                  <div className="flex flex-col gap-4 md:gap-8 max-w-[85%]">
                    {/* Index Number */}
                    <span className="text-[#00FF55] text-xl font-black group-hover/row:scale-150 group-hover/row:translate-x-6 origin-left transition-transform duration-300" style={{ fontFamily: "'Silkscreen', cursive" }}>
                      [0{i + 1}]
                    </span>
                    
                    {/* Skewing Typography */}
                    <h3 className="text-3xl md:text-[60px] font-extrabold uppercase tracking-tighter text-zinc-500 group-hover/row:text-white group-hover/row:skew-x-[-12deg] group-hover/row:translate-x-4 origin-left transition-all duration-300 leading-[0.9]" style={{ fontFamily: "'Syne', sans-serif" }}>
                      {title}
                    </h3>
                  </div>

                  {/* Terminal Action Block */}
                  <div className="mt-8 md:mt-0 shrink-0">
                    <div className="font-black text-[10px] text-zinc-600 group-hover/row:text-[#00FF55] tracking-widest uppercase py-3 px-6 border-2 border-zinc-800 group-hover/row:border-[#00FF55] bg-black transition-colors duration-300 shadow-[4px_4px_0px_#00FF55] group-hover/row:shadow-[0px_0px_0px_#00FF55] group-hover/row:translate-y-1 group-hover/row:translate-x-1" style={{ fontFamily: "'Silkscreen', cursive" }}>
                      ACCESS // 5 MIN
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <Footer />
      </motion.div>
    </>
  );
}
