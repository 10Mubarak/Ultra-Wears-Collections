import React from 'react';
import { Link } from 'react-router-dom'; // Added for functionality
import { motion } from 'framer-motion'; // Highly recommended for this style

const ManifestoPage = () => {
  // Animation variants for a "Technical Reveal"
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-black text-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* 1. MANIFESTO HEADER */}
      <div className="pt-40 pb-24 px-8 lg:px-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase block mb-6">
            Studio_Registry // The_Principles
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[150px] font-black italic uppercase tracking-tighter leading-[0.85]">
            ULTRA<br />WEARS
          </motion.h1>
        </div>
      </div>

      {/* 2. CORE PRINCIPLES */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-32 grid md:grid-cols-2 gap-20">
        <div className="sticky top-32 h-fit">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
            ENGINEERING<br />THE<br />FUTURE.
          </h2>
        </div>

        <div className="space-y-24 text-gray-400 text-sm leading-relaxed font-medium">
          {[
            { id: "001", title: "FUNCTION", content: "We do not create for aesthetics alone. Every garment is an engineered tool, designed to enhance human movement and protect against environmental variables." },
            { id: "002", title: "DURABILITY", content: "Disposable fashion is a failure of design. We utilize industrial-grade materials to ensure longevity, reducing waste through superior construction." },
            { id: "003", title: "CLINICAL DESIGN", content: "Our aesthetic is derived from technical necessity. We strip away the unnecessary to arrive at a raw, industrial form that speaks to utility." }
          ].map((item) => (
            <motion.div 
              {...fadeInUp}
              key={item.id} className="space-y-4">
              <h4 className="text-white font-black uppercase tracking-widest text-lg">// {item.id}. {item.title}</h4>
              <p>{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. TECHNICAL STATEMENT */}
      <div className="relative py-40 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <h3 className="text-[300px] font-black italic uppercase tracking-tighter whitespace-nowrap select-none">
                ULTRA-WEARS
            </h3>
        </div>
        <div className="relative max-w-2xl mx-auto px-8 text-center space-y-8">
            <h4 className="text-4xl font-black italic uppercase tracking-tighter">
                THE STUDIO IS A LAB.
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
                We bridge the gap between high-fashion aesthetics and industrial-grade performance. 
                Our research is exhaustive, our testing rigorous, and our commitment to function absolute.
            </p>
        </div>
      </div>

      {/* MANIFESTO_CORE_PHILOSOPHY_SECTION */}
      <section className="bg-[#000000] text-[#FFFFFF] py-24 px-6 md:px-12 font-sans overflow-hidden border-t border-[#F4F4F4]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
            <div className="lg:col-span-1 relative">
              <h2 className="font-mono text-[10px] text-blue-600 uppercase tracking-[0.5em] lg:rotate-90 lg:absolute lg:left-0 lg:top-24 origin-left whitespace-nowrap italic">
                // VERSION_1.0_PROTOTYPE
              </h2>
            </div>
            <div className="lg:col-span-11">
              <motion.h3 
                {...fadeInUp}
                className="text-5xl md:text-9xl font-black uppercase tracking-[calc(-0.05em)] leading-[0.85] mb-8">
                EQUIPMENT <br />
                FOR <span className="text-blue-600">NON-LINEAR</span> <br />
                ENVIRONMENTS.
              </motion.h3>
              <div className="h-1 w-24 bg-blue-600 mb-12"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-5 space-y-12">
              <div className="group border-l border-zinc-800 pl-8 transition-colors duration-700 hover:border-blue-600">
                <p className="font-mono text-xs text-zinc-500 uppercase mb-4 tracking-widest">[ 01_PURPOSE ]</p>
                <p className="text-xl md:text-2xl font-black uppercase leading-tight tracking-tight italic">
                  "WE REJECT THE DECORATIVE. WE EMBRACE THE FUNCTIONAL. EVERY SEAM IS A DECISION. EVERY TEXTURE IS A DEFENSE."
                </p>
              </div>
              <div className="bg-[#F4F4F4]/5 p-8 border border-zinc-900 relative">
                <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-zinc-700">REF: MAN_CORE_04</div>
                <p className="text-sm text-zinc-400 leading-relaxed font-medium uppercase tracking-tight">
                  Our design language is rooted in the intersection of <span className="text-white">urban utility</span> and <span className="text-white">extreme adaptability</span>. 
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "KINETIC_CONSTRUCTION", desc: "Patented articulation points allowing for 360-degree range of motion." },
                { title: "ATMOSPHERIC_SHIELD", desc: "Multi-layered membrane systems engineered to mitigate thermal loss." },
                { title: "MODULAR_ADAPTATION", desc: "Integrated attachment points for secondary and tertiary hardware." },
                { title: "CHRONO_DURABILITY", desc: "Materials tested for a 10-year lifecycle under high-intensity usage." }
              ].map((item, index) => (
                <motion.div 
                  whileHover={{ backgroundColor: "rgba(39, 39, 42, 0.5)" }}
                  key={index} className="p-6 border border-zinc-900 flex flex-col justify-between transition-all duration-500 group cursor-crosshair">
                  <div className="mb-8">
                    <span className="font-mono text-[10px] text-blue-500 block mb-2">0{index + 1} //</span>
                    <h4 className="font-black text-lg uppercase group-hover:text-blue-500 transition-colors">{item.title}</h4>
                  </div>
                  <p className="font-mono text-[9px] text-zinc-500 uppercase leading-relaxed tracking-wider">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA - Shop All (Functional Link) */}
      <div className="border-t border-white/10 py-32 text-center bg-zinc-950">
        <Link to="/shop">
          <button className="px-12 py-6 bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95">
             Explore Master Archive
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManifestoPage;