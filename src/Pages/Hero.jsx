import React from 'react';

const UltraHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden">
      
      {/* --- LEFT CONTENT: TYPOGRAPHY --- */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:pr-0 z-10 pt-24 lg:pt-0">
        <div className="relative">
          {/* Pro-Level Responsive Typography */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-black leading-[0.85] tracking-tighter uppercase italic text-black">
            REIMAGINED<br />
            <span 
              className="text-transparent border-t-2 border-black" 
              style={{ WebkitTextStroke: '1.5px black' }}
            >
              COMFORT
            </span>
          </h1>
        </div>

        <div className="mt-10 md:mt-14 max-w-sm">
          <div className="flex items-center gap-4 mb-5">
             <div className="h-[2px] w-12 bg-black"></div>
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black">
               Collection_2026 / Series_01
             </p>
          </div>
          
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 font-medium">
            Cushioned insoles experience plush support with cushioned 
            insoles that cradle your feet in comfort. Supportive arch 
            designs for optimal comfort.
          </p>
          
          {/* Pro Technical Element: Barcode */}
          <div className="flex flex-col gap-2">
            <div className="h-10 w-36 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/84/Ean-13-5901234123457.png')] bg-no-repeat bg-contain opacity-80"></div>
            <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-black">
              (01)01234567890123
            </span>
          </div>
        </div>
      </div>

      {/* --- RIGHT CONTENT: THE SHOE CARD --- */}
      <div className="flex-1 relative flex items-center justify-center p-8 lg:p-0">
        
        {/* SHOE CARD SIZE LOGIC: 
            Maintains the 'max-w-md' (448px) width on laptop screens 
            as requested, but scales down for mobile.
        */}
        <div className="relative w-full max-w-sm lg:max-w-md aspect-[4/5] bg-[#EDEDED] rounded-[3.5rem] md:rounded-[5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group transition-all duration-700 hover:shadow-2xl">
          
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" 
            alt="Red Premium Runner" 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          
          {/* Floating Aesthetic Labels */}
          <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm">
              Comfort
          </div>

          <div className="absolute top-1/2 -right-6 bg-white px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] rotate-90 origin-left shadow-lg">
              Performance
          </div>

          {/* Add to Cart Trigger */}
          <div className="absolute bottom-10 left-10">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-2xl hover:bg-black hover:text-white transition-all duration-500 active:scale-90">
              <span className="text-3xl font-light">+</span>
            </button>
          </div>
        </div>

        {/* Decorative Watermark: Sits behind the shoe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black text-gray-200/40 pointer-events-none z-[-1] tracking-tighter uppercase italic select-none">
            ULTRA
        </div>
      </div>

      {/* Background Section Numbering (Aesthetic Only) */}
      <div className="absolute bottom-12 right-12 hidden lg:block">
          <span className="text-[10px] font-mono font-black text-black">PAGE // 01</span>
      </div>
    </section>
  );
};

export default UltraHero;