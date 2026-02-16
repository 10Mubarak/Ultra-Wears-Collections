import React from 'react';
import { useCart } from '../context/CartContext';

const ArchivePage = () => {
  const { archive, removeFromArchive, addToCart } = useCart();

  // --- 1. Hard-coded Legacy Data (The Vault) ---
  const pastDrops = [
    { id: 'DROP-25-A', name: 'Original Shell // V.1', date: 'Fall 2025', img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800' },
    { id: 'DROP-25-B', name: 'Tactical Trainer', date: 'Summer 2025', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800' },
    { id: 'DROP-24-C', name: 'Heavyweight Hoodie', date: 'Winter 2024', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
    { id: 'DROP-24-D', name: 'Utility Vest // Black', date: 'Spring 2024', img: 'https://images.unsplash.com/photo-1614676466644-f2830bbdec9a?q=80&w=800' },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen selection:bg-blue-600">
      
      {/* SECTION 1: HEADER & USER DATA-BANK STATUS */}
      <div className="border-b border-white/10 pt-32 pb-16 px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div>
            <span className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase block mb-4">
              Terminal_Vault // ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
            </span>
            <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8]">
              THE <br /> <span className="text-white/20">ARCHIVE.</span>
            </h1>
          </div>
          <div className="font-mono text-[10px] text-gray-500 text-right space-y-1">
            <p>ACTIVE_USER_SAVES: {archive.length}</p>
            <p>LEGACY_DATABASE: ENCRYPTED</p>
            <p>LOCATION: 35.6895° N, 139.6917° E</p>
          </div>
        </div>
      </div>

      {/* SECTION 2: USER'S LIVE DATA-BANK (DYNAMIC) */}
      <section className="px-8 lg:px-16 py-12">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-sm font-black uppercase tracking-[0.3em]">User_Data_Bank</h2>
          <div className="h-[1px] flex-1 bg-blue-600/30"></div>
          <span className="text-[10px] font-mono text-blue-500">[ SYNC_OK ]</span>
        </div>

        {archive.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {archive.map((item) => (
              <div key={item.id} className="border border-white/10 bg-black/40 group relative">
                <div className="aspect-square p-8">
                  {/* REMOVED brightness-75 - Image is now full color */}
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain transition-all" />
                </div>
                <div className="p-6 border-t border-white/10">
                  <h3 className="text-md font-black uppercase italic tracking-tight">{item.name}</h3>
                  <p className="text-[9px] font-mono text-gray-500 mt-1 mb-4">{item.cat}</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => addToCart(item)}
                      className="flex-1 py-2 bg-white text-black text-[9px] font-black uppercase hover:bg-blue-600 hover:text-white transition-all"
                    >
                      Restore to Cart
                    </button>
                    <button 
                      onClick={() => removeFromArchive(item.id)}
                      className="px-4 py-2 border border-white/10 text-[9px] text-gray-500 hover:text-red-500 hover:border-red-500/50 transition-all"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 border border-dashed border-white/10 text-center">
            <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">No local data found in user_saves.db</p>
          </div>
        )}
      </section>

      {/* SECTION 3: LEGACY VAULT (HISTORICAL) */}
      <section className="px-8 lg:px-16 py-12 border-t border-white/10">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-sm font-black uppercase tracking-[0.3em]">Historical_Records</h2>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {pastDrops.map((drop) => (
            <div key={drop.id} className="group relative aspect-[3/4] overflow-hidden bg-black border border-white/5 cursor-not-allowed">
              {/* REMOVED grayscale and opacity-40 - Historical images now full color */}
              <img 
                src={drop.img} 
                alt={drop.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6">
                <span className="text-[9px] font-mono text-white tracking-tighter uppercase w-fit border border-white/20 px-2 py-1 bg-black/50">
                  {drop.id}
                </span>
                <div>
                  <h3 className="text-xl font-black italic uppercase tracking-tighter leading-none">{drop.name}</h3>
                  <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest">{drop.date}</span>
                </div>
              </div>

              {/* Access Denied Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-red-600/20 backdrop-blur-[2px]">
                 <div className="text-center">
                    <div className="text-white font-black text-xs uppercase tracking-[0.4em] border border-white px-4 py-2 mb-2 bg-black/40">
                      Access Denied
                    </div>
                    <p className="text-[8px] font-mono text-white font-bold bg-black/60 px-2 py-1">ITEM_OUT_OF_STOCK // LOCKED</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <div className="border-t border-white/10 py-32 text-center bg-[#0d0d0d]">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-8">
            WANT THE NEXT <br /> <span className="text-blue-600">DROP?</span>
        </h2>
        <button className="px-16 py-5 bg-blue-600 text-white text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            Join_White_List
        </button>
      </div>
    </div>
  );
};

export default ArchivePage;