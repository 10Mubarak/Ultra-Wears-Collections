import React from 'react';

const StudioPage = () => {
  const techPoints = [
    { title: 'MATERIAL TECH', desc: 'Sourcing 3-layer waterproof membranes for urban endurance.' },
    { title: 'ERGONOMICS', desc: 'Articulated design based on human movement studies.' },
    { title: 'LAB TESTING', desc: 'Stress testing fabrics beyond industry standards.' },
  ];

  return (
    <div className="bg-[#F4F4F4] text-black min-h-screen">
      
      {/* 1. STUDIO HERO - High-Contrast Industrial */}
      <div className="bg-black text-white py-32 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase block mb-4">Studio_Registry // 004</span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-none mb-10">
              FORM <br /> FOLLOWS <br /> <span className="text-blue-500">FUNCTION.</span>
            </h1>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Inside the Ultra-Wears Laboratory. We bridge the gap between high-fashion aesthetics and industrial-grade performance.
            </p>
          </div>
          {/* Hero Image - High Focus Detail */}
          <div className="aspect-square bg-[#0A0A0A] border border-white/10 flex items-center justify-center p-10">
              <img 
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000" 
                alt="Studio Tech" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-1000"
              />
          </div>
        </div>
      </div>

      {/* 2. THE BLUEPRINT SECTION */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24">
        <div className="grid md:grid-cols-3 gap-12">
            {techPoints.map((point, index) => (
                <div key={index} className="border-t border-black/10 pt-8 group">
                    <span className="text-4xl font-black text-black/10 group-hover:text-blue-600 transition-colors">0{index + 1}</span>
                    <h3 className="text-xl font-black uppercase tracking-tight mt-4 mb-3">{point.title}</h3>
                    <p className="text-sm text-black/60 leading-relaxed">{point.desc}</p>
                </div>
            ))}
        </div>
      </div>

      {/* 3. TECHNICAL GALLERY - Industrial Montage */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 p-8 lg:p-16 bg-black">
        {[
          'https://images.unsplash.com/photo-1708151729075-89f1fc21e19e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGlqYWIlMjBmYXNoaW9ufGVufDB8fDB8fHww', // Close up vest
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800', // Cargo detail
          'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800', // Shell fabric
          'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800'  // Shoe sole
        ].map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden group">
            <img src={img} alt="Studio Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-700" />
          </div>
        ))}
      </div>

      {/* 4. FINAL CTA - Archive Connection */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-24 text-center">
        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-8">
            See the result.
        </h2>
        <button className="px-12 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-colors">
           Explore Master Archive
        </button>
          </div>
          

          <section className="bg-black text-white py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 grid lg:grid-cols-2 gap-20">
        
        {/* Left Side: Editorial Voice */}
        <div className="space-y-8">
            <span className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase block">
                Communication_Link // Support
            </span>
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none">
                Get in <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Touch.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                For technical support, shipping inquiries, or wholesale requests, utilize the form provided. Response time is typically within 24-48 business hours.
            </p>
            
            {/* Direct Information (Subtle) */}
            <div className="pt-10 border-t border-white/10 space-y-3 font-mono text-xs">
                <p><span className="text-white/40">LOCATION:</span> TOKYO, JP</p>
                <p><span className="text-white/40">STATUS:</span> OPERATIONAL</p>
            </div>
        </div>

        {/* Right Side: Clinical Form */}
        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="NAME" className="bg-[#1A1A1A] border border-white/10 p-4 text-xs font-mono focus:ring-1 focus:ring-white outline-none" />
                <input type="email" placeholder="EMAIL" className="bg-[#1A1A1A] border border-white/10 p-4 text-xs font-mono focus:ring-1 focus:ring-white outline-none" />
            </div>
            <select className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-xs font-mono text-gray-500 focus:ring-1 focus:ring-white outline-none">
                <option>SELECT INQUIRY TYPE</option>
                <option>Technical Support</option>
                <option>Shipping & Returns</option>
                <option>Wholesale</option>
            </select>
            <textarea placeholder="MESSAGE" rows="5" className="w-full bg-[#1A1A1A] border border-white/10 p-4 text-xs font-mono focus:ring-1 focus:ring-white outline-none"></textarea>
            
            <button type="submit" className="w-full bg-white text-black p-4 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-colors">
                Submit_Request
            </button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default StudioPage;