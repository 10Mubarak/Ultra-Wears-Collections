import React from 'react';
import { useNavigate } from 'react-router-dom'; // Added for navigation
import { useCart } from '../context/CartContext';

const FootwearPage = () => {
  const { addToCart, addToArchive } = useCart();
  const navigate = useNavigate(); // Initialize navigation

  const handleAddToCart = (item) => {
    const cartItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      cat: item.tech || 'Footwear // Tech-Series'
    };
    addToCart(cartItem);
  };

  const handleAddToArchive = (item) => {
    const archiveItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      cat: item.tech || 'Footwear // Tech-Series'
    };
    addToArchive(archiveItem);
    // Redirects user to the archive page instantly after saving
    navigate('/archive'); 
  };

  // --- 1. Top Featured Shoes ---
  const shoes = [
    { id: 'SH-01-RED', name: 'AERO-RUNNER GEN.1', price: '$360', tech: 'Nitrogen-Injected Foam', img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60' },
    { id: 'SH-02-BLK', name: 'STREET-SHIELD BOOT', price: '$240', tech: 'Vibram® Outsole System', img: 'https://images.unsplash.com/photo-1661098856696-a5f4e6020551?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxsdXh1cmlvdXMlMjBhZGlkYXMlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 'SH-03-GRY', name: 'PHANTOM LOW-TOP', price: '$480', tech: 'Recycled TPU Framework', img: 'https://images.unsplash.com/photo-1550399865-ec7d23b18e8e?w=600&auto=format&fit=crop&q=60' }
  ];

  // --- 2. Extended Catalog (The 9 New Shoes) ---
  const extendedCatalog = [
    { id: 'SH-04-WHT', name: 'NEON-GHOST V2', price: '$195', tech: 'Luminescent Mesh', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=60' },
    { id: 'SH-05-CYN', name: 'ORBITAL-STEP', price: '$275', tech: 'Gravity-Defy Midsole', img: 'https://images.unsplash.com/photo-1679284392391-b4abfe0cc625?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGx1eHVyaW91cyUyMG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 'SH-06-PNK', name: 'PULSE-WAVE', price: '$160', tech: 'Haptic Feedback Sole', img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60' },
    { id: 'SH-07-YEL', name: 'ZENITH EXPLORER', price: '$310', tech: 'Gore-Tex Shield', img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60' },
    { id: 'SH-08-ORG', name: 'MAGMA-TECH', price: '$225', tech: 'Heat-Reactive Upper', img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60' },
    { id: 'SH-09-PRP', name: 'VOID-WALKER', price: '$290', tech: 'Carbon-Fiber Plate', img: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=600&auto=format&fit=crop&q=60' },
    { id: 'SH-10-GRN', name: 'TERRA-FORM 1', price: '$145', tech: 'Organic Bio-Foam', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000' },
    { id: 'SH-11-BLU', name: 'NIKE-SHOCK', price: '$485', tech: 'Hydro-Drain System', img: 'https://images.unsplash.com/photo-1580902215223-647d515e04fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGx1eHVyaW91cyUyMG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D' },
    { id: 'SH-12-RED', name: 'STRIKER HIGH-TOP', price: '$350', tech: 'Ankle-Lock Support', img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600&auto=format&fit=crop&q=60' }
    
  ];

  const featuredShoe = { id: 'SH-X1-GRIP', name: 'X-1 GRIP', price: '$442', tech: 'Dyneema® Reinforced', img: 'https://media.istockphoto.com/id/2207381113/photo/white-brown-sneacker-closeup-fashion-shoe-leather-womens-sneakers-isolated-on-gray-background.jpg?s=612x612&w=0&k=20&c=P2eh97Hs92Pnid1aT42VJycTF5or3DsVe9PJ8995ZJQ=' };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen selection:bg-blue-600">
      
      {/* 1. TECH-HEADER */}
      <div className="px-8 lg:px-16 pt-20 pb-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="max-w-xl">
          <span className="text-[10px] font-mono font-bold text-blue-500 tracking-[0.5em] uppercase block mb-4">
            Category_02 // Footwear
          </span>
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
            ENGINEERED <br /> MOTION.
          </h1>
        </div>
        <div className="flex flex-col items-end text-right font-mono text-[10px] text-gray-500">
            <div className="flex gap-2 mb-2">
                <div className="w-8 h-[1px] bg-white"></div>
                <div className="w-2 h-[1px] bg-white"></div>
            </div>
            <p className="uppercase tracking-widest">
                Units_Detected // {shoes.length + extendedCatalog.length + 1} Items
            </p>
        </div>
      </div>

      {/* 2. THE MAIN GRID (Top 3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {shoes.map((shoe) => (
          <ShoeCard 
            key={shoe.id} 
            shoe={shoe} 
            onAdd={handleAddToCart} 
            onArchive={handleAddToArchive} 
          />
        ))}
      </div>

      {/* 3. SCROLLING DECORATION */}
      <div className="py-12 border-b border-white/10 opacity-20 whitespace-nowrap overflow-hidden">
        <p className="text-[8px] font-mono tracking-[1em] uppercase">
          Traction_Control / Impact_Response / Lateral_Stability / Energy_Return_System / Ultra_Wears_Studio
        </p>
      </div>

      {/* 4. THE ANATOMY SECTION */}
      <section className="py-24 bg-[#0A0A0A] border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[10px] font-mono text-blue-500 tracking-[0.4em] uppercase">Detailed_Anatomy // 001</span>
              <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mt-4 mb-10">
                Beyond the <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Surface.</span>
              </h2>
              <div className="space-y-12">
                <div className="flex gap-6 group">
                  <span className="text-xl font-mono text-white/20 group-hover:text-blue-500 transition-colors">01</span>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Kinetic Grip System</h4>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-xs">Multi-directional lug pattern designed for high-traction on urban surfaces.</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <span className="text-xl font-mono text-white/20 group-hover:text-blue-500 transition-colors">02</span>
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">Nitrogen Midsole</h4>
                    <p className="text-gray-500 text-xs leading-relaxed max-w-xs">Injected nitrogen foam provides 20% more energy return than standard EVA.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 aspect-square rounded-full border border-white/5 flex items-center justify-center p-8">
                <img 
                  src="https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&auto=format&fit=crop&q=60" 
                  className="w-full h-auto object-contain brightness-110 contrast-125 hover:scale-105 transition-transform duration-1000"
                  alt="Sole Detail"
                />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-500/50 shadow-[0_0_15px_blue] animate-scan"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE SYSTEMATIC INVENTORY (The 9 New Shoes) */}
      <section className="bg-black border-t border-white/10">
        <div className="px-8 lg:px-16 py-12 border-b border-white/10 flex justify-between items-center">
            <h2 className="text-2xl font-black italic uppercase tracking-widest">Systematic_Inventory</h2>
            <span className="font-mono text-blue-500 text-[10px]">[ DATA_STREAM_OPEN ]</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {extendedCatalog.map((shoe) => (
            <ShoeCard 
              key={shoe.id} 
              shoe={shoe} 
              onAdd={handleAddToCart} 
              onArchive={handleAddToArchive} 
            />
          ))}
        </div>
      </section>

      {/* 6. THE X-1 GRIP FEATURED SECTION */}
      <section className="bg-black py-24 px-8 lg:px-16 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-3 order-2 lg:order-1 space-y-12">
            <div className="space-y-6">
              <h3 className="font-black text-xl uppercase italic border-l-[6px] border-blue-600 pl-4 tracking-tight">Specs_Sheet</h3>
              <div className="space-y-5">
                {['DYNEEMA® REINFORCED', 'V-FRAME STABILIZER', 'MEGA-GRIP VIBRAM', 'RAPID-LOCK SYSTEM'].map((spec, i) => (
                  <div key={i} className="border-b border-white/5 pb-3 font-black text-sm uppercase tracking-wide">
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-600/5 blur-[80px] rounded-full" />
            <img src={featuredShoe.img} alt="Technical Boot" className="relative w-full h-auto drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>

          <div className="lg:col-span-3 order-3 space-y-10">
            <div className="grid grid-cols-3 gap-2">
              {['40', '41', '42', '43', '44', '45'].map((size) => (
                <button key={size} className="py-4 text-[11px] font-black border border-white/10 hover:border-blue-600 hover:text-blue-500 transition-all uppercase">
                  {size}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => handleAddToCart(featuredShoe)}
                className="w-full bg-white text-black py-7 font-black uppercase text-xl tracking-tighter hover:bg-blue-600 hover:text-white transition-all flex justify-between px-10 items-center group"
              >
                <span>Deploy_Purchase</span>
                <span className="group-hover:translate-x-4 transition-transform">—&gt;</span>
              </button>
              <button 
                onClick={() => handleAddToArchive(featuredShoe)}
                className="w-full py-4 border border-white/10 text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em] hover:text-blue-500 hover:border-blue-500/50 transition-all"
              >
                [ + Save_To_Data_Bank ]
              </button>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scan { 0% { top: 0%; opacity: 0; } 50% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
        .animate-scan { animation: scan 4s linear infinite; }
      `}} />
    </div>
  );
};

/**
 * PRO-LEVEL SHOECARD COMPONENT
 */
const ShoeCard = ({ shoe, onAdd, onArchive }) => (
    <div className="group relative border-r border-b border-white/10 overflow-hidden cursor-crosshair bg-black">
      <div className="absolute top-8 left-8 z-10">
        <span className="text-[40px] font-black italic text-white/5 group-hover:text-blue-500/10 transition-colors">
          {shoe.id.split('-')[1]}
        </span>
      </div>

      <div className="aspect-square p-12 md:p-20 flex items-center justify-center">
        <img 
          src={shoe.img} 
          alt={shoe.name} 
          className="w-full h-auto object-contain transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 ease-out drop-shadow-2xl grayscale group-hover:grayscale-0" 
        />
      </div>

      <div className="p-8 border-t border-white/10 bg-black/50 backdrop-blur-sm relative z-20">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-black italic uppercase tracking-tight">{shoe.name}</h3>
            <p className="text-[9px] font-mono text-blue-400 uppercase tracking-widest mt-1">
              {shoe.tech}
            </p>
          </div>
          <span className="text-lg font-bold font-mono">{shoe.price}</span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onAdd(shoe)}
            className="flex-[2] py-4 border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
          >
            Add to Loadout +
          </button>
          <button 
            onClick={() => onArchive(shoe)}
            className="flex-1 py-4 border border-white/10 text-[10px] font-mono text-gray-500 uppercase hover:text-blue-500 hover:border-blue-500/50 transition-all bg-white/5"
          >
            Archive
          </button>
        </div>
      </div>
    </div>
);

export default FootwearPage;