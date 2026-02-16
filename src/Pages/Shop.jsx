import React, { useState } from 'react';
import { useCart } from '../context/CartContext'; // 1. Hook import

const ShopAll = () => {
  // 2. STATE & CONTEXT HOOKS
  const [activeFilter, setActiveFilter] = useState('All');
  const { addToCart } = useCart(); // Accessing the global 'brain'

  const archive = [
    { id: 'UW-01', name: 'Gore-Tech Shell', price: '$550', cat: 'Outerwear', img: 'https://images.unsplash.com/photo-1745824786421-46c6c3af5a2a?w=600&auto=format&fit=crop&q=60', feat: true },
    { id: 'UW-02', name: 'Aero-Runner Gen.1', price: '$210', cat: 'Footwear', img: 'https://media.istockphoto.com/id/875820218/photo/colourful-coats-in-the-charity-shop.jpg?s=612x612&w=0&k=20&c=P-nSlBIAJB5ldZ5-XZRVgkm79jOVxJkM6vh-lJktg_Y=', feat: false },
    { id: 'UW-03', name: 'Studio Tee', price: '$95', cat: 'Apparel', img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=60', feat: false },
    { id: 'UW-04', name: 'Tactical Cargo', price: '$280', cat: 'Apparel', img: 'https://images.unsplash.com/photo-1748840176502-b3903418fd0e?w=600&auto=format&fit=crop&q=60', feat: false },
    { id: 'UW-05', name: 'Utility Vest', price: '$320', cat: 'Apparel', img: 'https://images.unsplash.com/photo-1770191954591-952ab5c63e68?w=600&auto=format&fit=crop&q=60', feat: true },
    { id: 'UW-06', name: 'Phantom Low-Top', price: '$180', cat: 'Footwear', img: 'https://media.istockphoto.com/id/2206793805/photo/blue-male-t-shirt-isolated-on-white-nobody-empty-logo-space-casual-regular-tshirt-front-side.webp?a=1&b=1&s=612x612&w=0&k=20&c=a6nXCyT09ddy4V7ftMmz1mYK-uFExjxgC57lfSufUJY=', feat: false },
  ];

  // 3. FILTER LOGIC
  const filteredProducts = activeFilter === 'All' 
    ? archive 
    : archive.filter(item => item.cat === activeFilter);

  // Bundle Helper
  const handleBundleDeploy = () => {
    const shell = archive.find(i => i.id === 'UW-01');
    const cargo = archive.find(i => i.id === 'UW-04');
    addToCart(shell);
    addToCart(cargo);
    alert("SYSTEM BUNDLE DEPLOYED TO CART");
  };

  return (
    <div className="bg-[#F4F4F4] min-h-screen text-black">
      
      {/* ARCHIVE CONTROLS */}
      <div className="px-8 lg:px-16 pt-12 pb-6 flex flex-col md:flex-row justify-between items-end border-b border-black/10 sticky top-0 bg-[#F4F4F4]/80 backdrop-blur-md z-40">
        <div>
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">Master Archive</h1>
          <div className="flex gap-4 mt-2 font-mono text-[9px] font-bold text-black/60 uppercase tracking-widest">
            <span>Viewing: {filteredProducts.length} Units</span>
            <span>Season: 2026_V1</span>
          </div>
        </div>
        
        {/* Filter Bar Logic */}
        <div className="flex gap-8 mt-6 md:mt-0 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['All', 'Outerwear', 'Apparel', 'Footwear'].map((filter) => (
            <button 
              key={filter} 
              onClick={() => setActiveFilter(filter)}
              className={`text-[10px] font-black uppercase tracking-widest transition-colors whitespace-nowrap ${activeFilter === filter ? 'text-blue-600' : 'text-black/40 hover:text-black'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* DYNAMIC ARCHIVE GRID */}
      <div className="p-8 lg:p-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((item) => (
            <div key={item.id} className={`group flex flex-col ${item.feat ? 'lg:col-span-2' : 'lg:col-span-1'}`}>
              <div className="relative aspect-[4/5] bg-white overflow-hidden border border-black/5">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                
                <div className="absolute top-4 left-4">
                  <span className="text-[8px] font-mono bg-black text-white px-2 py-1 tracking-tighter uppercase font-bold">{item.id}</span>
                </div>

                {/* UPDATED BUTTON: ADD TO CART */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                   <button 
                     onClick={() => addToCart(item)}
                     className="w-full py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                   >
                      Add to Loadout +
                   </button>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-start border-t border-black/10 pt-4">
                <div>
                  <span className="text-[8px] font-mono text-black/40 uppercase block mb-1">{item.cat}</span>
                  <h3 className="text-sm font-black uppercase tracking-tight">{item.name}</h3>
                </div>
                <span className="text-sm font-bold font-mono">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BUNDLE SECTION FUNCTIONALITY */}
      <div className="mx-8 lg:mx-16 my-24 border border-black p-12 flex flex-col lg:flex-row items-center justify-between gap-12 bg-white shadow-xl">
        <div className="max-w-md">
          <h4 className="text-3xl font-black italic uppercase tracking-tighter mb-4">Complete System // 01</h4>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 font-mono uppercase text-[10px]">Synchronized aesthetics, optimized performance.</p>
          <span className="text-4xl font-black italic text-blue-600">$750 <span className="text-sm text-gray-400 line-through ml-2">$830</span></span>
        </div>
        <div className="flex -space-x-20">
           <img src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=400" className="w-56 md:w-64 h-80 object-cover border-4 border-white shadow-2xl rotate-[-5deg]" />
           <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400" className="w-56 md:w-64 h-80 object-cover border-4 border-white shadow-2xl rotate-[5deg]" />
        </div>
        <button 
          onClick={handleBundleDeploy}
          className="bg-black text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 transition-all"
        >
          Deploy Bundle
        </button>
      </div>

      {/* FLOATING QUICK FILTER BAR */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/90 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full flex gap-8 items-center shadow-2xl">
          {['Outerwear', 'Apparel', 'Footwear'].map(cat => (
            <button 
              key={cat} 
              onClick={() => setActiveFilter(cat)}
              className={`text-white text-[9px] font-black tracking-widest hover:text-blue-500 transition-colors uppercase ${activeFilter === cat ? 'text-blue-500' : ''}`}
            >
              {cat}
            </button>
          ))}
          <div className="w-[1px] h-4 bg-white/20"></div>
          <button 
            onClick={() => setActiveFilter('All')}
            className="text-blue-500 text-[9px] font-black tracking-widest uppercase"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopAll;