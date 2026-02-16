import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* --- TOP ROW: BRANDING & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6">
              ULTRA-WEARS
            </h2>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              A technical design studio focused on the evolution of human movement and high-fashion ergonomics. 
            </p>
          </div>
          
          <div className="lg:col-span-7">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">
              Join the Studio // Updates
            </span>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="EMAIL@ADDRESS.COM" 
                className="flex-1 bg-gray-50 border-none px-6 py-4 text-xs font-mono focus:ring-2 focus:ring-black outline-none"
              />
              <button className="bg-black text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* --- MIDDLE ROW: THE 7-PAGE NAVIGATION --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Col 1: Discovery */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest">Discovery</span>
            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
              <a href="#shop" className="hover:text-black transition-colors">Shop All</a>
              <a href="#lookbook" className="hover:text-black transition-colors">Lookbook</a>
              <a href="#archive" className="hover:text-black transition-colors">Archive</a>
            </nav>
          </div>

          {/* Col 2: Categories */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest">Categories</span>
            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
              <a href="#clothes" className="hover:text-black transition-colors">Apparel</a>
              <a href="#shoes" className="hover:text-black transition-colors">Footwear</a>
              <a href="#accessories" className="hover:text-black transition-colors">Accessories</a>
            </nav>
          </div>

          {/* Col 3: Studio */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest">Studio</span>
            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
              <a href="#manifesto" className="hover:text-black transition-colors">Manifesto</a>
              <a href="#studio" className="hover:text-black transition-colors">Tech & Sizing</a>
              <a href="#contact" className="hover:text-black transition-colors">Contact</a>
            </nav>
          </div>

          {/* Col 4: Socials */}
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
              <a href="#" className="hover:text-black transition-colors italic">Instagram</a>
              <a href="#" className="hover:text-black transition-colors italic">TikTok</a>
              <a href="#" className="hover:text-black transition-colors italic">Twitter [X]</a>
            </nav>
          </div>
        </div>

        {/* --- BOTTOM ROW: LEGAL & DATA --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-gray-50">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-mono text-gray-400">©2026 ULTRA-WEARS INTERNATIONAL</span>
            <span className="text-[9px] font-mono text-gray-400 hidden sm:block">44.3917° N, 79.8500° W</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[9px] font-mono text-gray-400 hover:text-black">Privacy Policy</a>
            <a href="#" className="text-[9px] font-mono text-gray-400 hover:text-black">Terms of Service</a>
          </div>

          {/* Pro Touch: The Mini Barcode */}
          <div className="h-6 w-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/84/Ean-13-5901234123457.png')] bg-no-repeat bg-contain opacity-30"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;