import React from 'react'
import { Link } from 'react-router-dom';
import { allProducts } from '../data/product';

const Home = () => {
  const products = allProducts;
  return (
    <div>
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
          <div className="hidden xl:flex absolute right-10 bottom-20 flex-col gap-6">
            <div className="w-20 h-20 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 rotate-6 hover:rotate-0 transition-all cursor-pointer">
              <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-contain" alt="side profile" />
            </div>
          </div>

          {/* Decorative Watermark: Sits behind the shoe */}
          <div className="absolute top-1/2 left-1/1 -translate-x-1/2 -translate-y-1/2 text-[30vw] md:text-[22vw] font-black text-gray-200/40 pointer-events-none z-0 tracking-tighter uppercase select-none italic">
            ULTRA
          </div>
        </div>

        {/* Background Section Numbering (Aesthetic Only) */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <span className="text-[10px] font-mono font-black text-black">PAGE // 01</span>
        </div>
      </section>



      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          {/* Section Header */}
          <div className="flex flex-col mb-20">
            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-blue-600 mb-2 uppercase">01 // Engineering</span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">The Architecture <br /> of Motion</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Detailed Image with Callouts */}
            <div className="relative group">
              <img
                src="https://media.istockphoto.com/id/1276624783/photo/stylish-and-cool-boot.jpg?s=612x612&w=0&k=20&c=8ThAlZhGUSxEAu4XNuFp93dEQiHbolngazxwsr__bMs="
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 rounded-2xl"
                alt="Technical Detail"
              />

              {/* Pro Callout 1 */}
              <div className="absolute top-1/4 -right-4 flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black"></div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest">Knit-Mesh</span>
                  <span className="text-[8px] font-mono text-gray-400">0.4mm Precision</span>
                </div>
              </div>

              {/* Pro Callout 2 */}
              <div className="absolute bottom-1/3 -left-8 flex flex-row-reverse items-center gap-4">
                <div className="w-12 h-[1px] bg-black"></div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest">Aero-Sole</span>
                  <span className="text-[8px] font-mono text-gray-400">Energy Return System</span>
                </div>
              </div>
            </div>

            {/* Technical Specs Text */}
            <div className="space-y-8">
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Every curve is calculated. Every stitch is essential. Ultra-Wears 2026
                introduces the "Aero-Sole" framework, reducing weight by 12% without
                sacrificing impact protection.
              </p>

              {/* Mini Data Grid */}
              <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                  <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-1">Impact Rating</span>
                  <span className="text-2xl font-black italic uppercase">9.82 g-force</span>
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-1">Material ID</span>
                  <span className="text-2xl font-black italic uppercase">UW-TX-400</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="h-screen w-full flex flex-col md:flex-row bg-black overflow-hidden">

        {/* Left Side: Apparel */}
        <div className="relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-all duration-700"></div>
          <img
            src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&q=80&w=1000"
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            alt="Apparel Category"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center">
            <span className="text-white text-[10px] font-mono tracking-[0.5em] mb-4">01. SERIES</span>
            <h3 className="text-white text-6xl lg:text-8xl font-black italic uppercase tracking-tighter transition-all group-hover:skew-x-[-10deg]">
              Apparel
            </h3>
            <button className="mt-8 px-8 py-3 border border-white text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              View Collection
            </button>
          </div>
        </div>

        {/* Right Side: Footwear */}
        <div className="relative flex-1 group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 z-10 transition-all duration-700"></div>
          <img
            src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=1000"
            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
            alt="Footwear Category"
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center">
            <span className="text-white text-[10px] font-mono tracking-[0.5em] mb-4">02. SERIES</span>
            <h3 className="text-white text-6xl lg:text-8xl font-black italic uppercase tracking-tighter transition-all group-hover:skew-x-[-10deg]">
              Footwear
            </h3>
            <button className="mt-8 px-8 py-3 border border-white text-white text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
              View Collection
            </button>
          </div>
        </div>

      </section>


      <section className="bg-white py-20 overflow-hidden">

        {/* 1. THE INFINITE MARQUEE 
          A staple for high-end streetwear sites. It creates motion and urgency. */}
        <div className="border-y-2 border-black py-6 flex overflow-hidden select-none">
          <div className="flex animate-marquee whitespace-nowrap gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-10">
                <span className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter">
                  New Standard Drops
                </span>
                <span className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-transparent" style={{ WebkitTextStroke: '1px black' }}>
                  Ultra-Wears 2026
                </span>
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rotate-45"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. THE MANIFESTO GRID 
          Combining Page 7 (Manifesto) highlights into the Home Page */}
        <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left: Huge Abstract Visual */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] bg-gray-100 rounded-3xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800"
                alt="Brand Culture"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Pro Detail: The Technical Overlay */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black text-white p-4 flex flex-col justify-between rounded-xl">
              <span className="text-[8px] font-mono leading-tight">SYSTEM_CHECK: STABLE</span>
              <span className="text-2xl font-black italic">100%</span>
            </div>
          </div>

          {/* Right: The Brand Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Mission</span>
                <div className="h-[1px] flex-1 bg-gray-100"></div>
              </div>

              <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.9]">
                Bridging the gap <br />
                between <span className="text-gray-300">Street</span> <br />
                & <span className="underline decoration-black">Elegance</span>.
              </h3>

              <p className="max-w-md text-gray-500 text-sm md:text-base leading-relaxed pt-4">
                Ultra-Wears is a technical design studio focusing on ergonomic footwear and
                oversized silhouettes. We don't just follow trends; we engineer them for
                the 2026 global landscape.
              </p>

              <div className="pt-8 flex flex-col gap-4">
                {/* Pro Element: The 'Archive' Link */}
                <a href="#manifesto" className="group flex items-center gap-4 w-fit">
                  <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <svg className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Read the Full Manifesto</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Add the CSS for the marquee animation to your global styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />
      </section>



      <section className="py-24 bg-[#F9F9F9] relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">

          {/* Section Header */}
          <div className="flex justify-between items-end mb-12 border-b-2 border-black pb-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-[0.4em]">Section_03</span>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter">Selected Drops</h2>
            </div>
            <Link to="/shop" className="text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-all">
              View All Series
            </Link>
          </div>

          {/* Bento Grid Logic with Product Links */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[auto] md:h-[800px]">

            {/* Featured Item (Large) */}
            <Link
              to={`/product/${products[0].id}`}
              className="md:col-span-7 relative group overflow-hidden bg-white rounded-3xl cursor-pointer block"
            >
              <img src={products[0].img} alt="Featured" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-white/60 text-[10px] font-mono mb-2">{products[0].cat}</span>
                <h4 className="text-white text-4xl font-black italic uppercase tracking-tighter">{products[0].name}</h4>
                <p className="text-white font-mono mt-2">{products[0].price}</p>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12">
                <span className="text-black font-bold">→</span>
              </div>
            </Link>

            {/* Right Column Stack */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {products.slice(1).map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="flex-1 relative group overflow-hidden bg-white rounded-3xl cursor-pointer block"
                >
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-black text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                      {item.price}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <h4 className="text-black bg-white px-6 py-3 font-black italic uppercase tracking-tighter shadow-xl">Explore_Specs</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Technical Detail */}
          <div className="mt-8 flex items-center justify-between opacity-30">
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1 h-4 bg-black"></div>)}
            </div>
            <span className="text-[8px] font-mono font-bold tracking-[0.5em]">SYSTEM_UID: 992-UX-01</span>
          </div>
        </div>

      </section>



      <section className="py-32 bg-black text-white relative overflow-hidden">

        {/* Background Aesthetic Numbering */}
        <div className="absolute top-10 left-10 opacity-20 font-mono text-xs tracking-[1em]">
          REF_STUDIO_2026
        </div>

        <div className="max-w-7xl mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-center gap-16">

          {/* Left Side: Editorial Image */}
          <div className="flex-1 relative group cursor-crosshair">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-2"
                alt="Editorial Look"
              />
            </div>
            {/* Pro Technical Callout Overlay */}
            <div className="absolute -bottom-4 -left-4 bg-blue-600 p-4 font-black italic uppercase text-sm tracking-tighter">
              Look_04 // Night Shift
            </div>
          </div>

          {/* Right Side: The Hook */}
          <div className="flex-1 space-y-8">
            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-gray-500 uppercase">
              Series_01 Lookbook
            </span>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              Capture the <br /> <span className="text-blue-600">Unseen</span>.
            </h2>
            <p className="text-gray-400 max-w-sm leading-relaxed text-sm md:text-base">
              Our 2026 Lookbook explores the intersection of industrial architecture
              and human movement. Shot on location in Tokyo's Shibuya District.
            </p>

            <div className="pt-6">
              <button className="group flex items-center gap-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border border-white/30 group-hover:border-white transition-all"></div>
                  <div className="absolute inset-0 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                    →
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore Lookbook</span>
              </button>
            </div>
          </div>

        </div>

        {/* Large Decorative Text Bleed */}
        <div className="absolute -bottom-10 right-0 opacity-10 text-[15vw] font-black italic uppercase tracking-tighter select-none pointer-events-none">
          ARCHIVE
        </div>
      </section>


      {/* SECTION_03: TECHNICAL_BREAKDOWN_GRID */}
      <section className="bg-[#000000] text-[#FFFFFF] py-24 px-6 md:px-12 border-y border-zinc-900 relative overflow-hidden">

        {/* BACKGROUND WATERMARK */}
        <div className="absolute top-0 right-0 font-black text-[20vw] leading-none text-zinc-900/20 select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
          CORE
        </div>

        <div className="max-w-[1800px] mx-auto relative z-10">

          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div className="space-y-2">
              <span className="font-mono text-blue-600 text-xs tracking-[0.4em] uppercase italic underline decoration-2 underline-offset-8">
          // Technical_Specifications
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                SYSTEM <span className="italic">INTEGRITY</span>
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="font-mono text-[10px] text-zinc-500 uppercase leading-relaxed">
                The 03-Series utilizes a modular framework designed for rapid response to environmental shifts.
                Precision engineered for the 0.1%.
              </p>
            </div>
          </div>

          {/* CORE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">

            {/* FEATURE 01: MACRO DETAIL */}
            <div className="bg-black p-10 space-y-12 group hover:bg-zinc-950 transition-colors duration-700">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-blue-500">PRO_001</span>
                <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center font-black text-xl group-hover:border-blue-600 transition-colors">
                  +
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black uppercase tracking-tight italic">Thermal_Regulation</h4>
                <p className="font-mono text-[11px] text-zinc-400 uppercase leading-snug">
                  Passive heat dissipation through laser-cut venting arrays. Optimized for high-exertion output.
                </p>
              </div>
              <div className="h-64 bg-zinc-900/50 relative overflow-hidden">
                {/* ISTOCK: MACRO CARBON/SYNTHETIC TEXTURE */}
                <img
                  src="https://media.istockphoto.com/id/459268151/photo/portrait-hispanic-teen-student.jpg?s=612x612&w=0&k=20&c=SX_gfPVTdb3_FJ0JCWS7p9qKhuVIsvuJozFKOtgtspM="
                  className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000 scale-125 group-hover:scale-100"
                  alt="Technical Membrane Macro"
                />
              </div>
            </div>

            {/* FEATURE 02: THE MAIN VISUAL BREAKDOWN */}
            <div className="bg-black p-10 flex flex-col justify-center items-center relative min-h-[500px] group overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              </div>

              <div className="relative z-20 w-full flex justify-center">
                {/* ISTOCK: TECHNICAL GEAR SILHOUETTE */}
                <img
                  src="https://media.istockphoto.com/id/519364394/photo/man-wearing-winter-coat.jpg?s=612x612&w=0&k=20&c=r5b6zl99txMOglUAbrDqwMQGJNma4XbUuWN_My8tVTE="
                  className="w-4/5 h-auto drop-shadow-[0_0_50px_rgba(37,99,235,0.2)] transition-all duration-1000 group-hover:scale-110 grayscale"
                />

                {/* UI CALLOUTS (BLUEPRINT STYLE) */}
                <div className="absolute top-1/4 -right-2 hidden md:block">
                  <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-700">
                    <div className="h-[1px] w-24 bg-blue-600"></div>
                    <span className="font-mono text-[9px] text-blue-600 uppercase tracking-tighter bg-black px-1">Articulated_Joint_V2</span>
                  </div>
                </div>
                <div className="absolute bottom-1/3 -left-2 hidden md:block">
                  <div className="flex items-center gap-4 group-hover:-translate-x-2 transition-transform duration-700">
                    <span className="font-mono text-[9px] text-blue-600 uppercase tracking-tighter bg-black px-1">Reinforced_Node</span>
                    <div className="h-[1px] w-24 bg-blue-600"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* FEATURE 03: DATA ANALYSIS */}
            <div className="bg-black p-10 flex flex-col justify-between group hover:bg-zinc-950 transition-colors duration-700">
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs text-blue-500">PRO_003</span>
                  <span className="font-mono text-[10px] text-zinc-700">LOG_v4.02</span>
                </div>
                <h4 className="text-2xl font-black uppercase tracking-tight italic">Structural_Flex</h4>
                <p className="font-mono text-[11px] text-zinc-400 uppercase leading-snug">
                  High-tenacity composite allows for extreme tensile strength while maintaining a 1:12 ratio.
                </p>
              </div>

              {/* DATA VIZ ELEMENTS */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[9px] text-zinc-500 uppercase">
                    <span>DURABILITY_INDEX</span>
                    <span className="text-white">75%</span>
                  </div>
                  <div className="w-full h-[2px] bg-zinc-900 overflow-hidden">
                    <div className="w-3/4 h-full bg-blue-600 transition-all duration-1000 group-hover:translate-x-1"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono text-[9px] text-zinc-500 uppercase">
                    <span>FLUID_RESISTANCE</span>
                    <span className="text-white">100%</span>
                  </div>
                  <div className="w-full h-[2px] bg-zinc-900 overflow-hidden">
                    <div className="w-full h-full bg-white transition-all duration-1000 group-hover:translate-x-1"></div>
                  </div>
                </div>
              </div>

              <button className="mt-8 border border-white/20 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out flex items-center justify-center gap-3 group">
                Get_Full_Specs
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* PRE_FOOTER_FINAL_PROTOCOL_SECTION */}
      <section className="bg-[#000000] text-[#FFFFFF] pt-32 pb-16 px-6 md:px-12 border-t border-[#F4F4F4]/5 overflow-hidden">
        <div className="max-w-[1800px] mx-auto">

          {/* PHASE 01: AGGRESSIVE HEADLINE */}
          <div className="relative mb-24">
            <div className="absolute -top-12 left-0 font-mono text-[10px] text-blue-600 tracking-[0.4em] uppercase italic">
              [ FINAL_COMMAND // PHASE_04 ]
            </div>

            <h2 className="text-[12vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.75] select-none">
              BEYOND <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #F4F4F4' }}>STASIS.</span>
            </h2>

            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="h-[2px] w-24 bg-blue-600"></div>
              <p className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest max-w-sm">
                Join the tactical network for early access to experimental drops and system updates.
              </p>
            </div>
          </div>

          {/* PHASE 02: TERMINAL INPUT & IMAGE PREVIEW */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-zinc-900 group">

            {/* LEFT: VISUAL ANCHOR */}
            <div className="lg:col-span-4 h-64 lg:h-auto overflow-hidden bg-zinc-900 relative">
              <div className="absolute inset-0 bg-blue-600/10 z-10 mix-blend-overlay"></div>
              <img
                src="https://media.istockphoto.com/id/2203374109/vector/anonymous-black-silhouette-of-a-person-on-white-background-image.jpg?s=612x612&w=0&k=20&c=8C1kyqJ-uEEqs0vNIQ1fZ2XgjRwxYVbzx_N_S9tHLLs="
                alt="Technical Silhouette"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white/40 tracking-[1em] uppercase -rotate-90">UNITS_001-099</span>
              </div>
            </div>

            {/* RIGHT: INTERACTIVE ACCESS PORTAL */}
            <div className="lg:col-span-8 p-8 md:p-16 flex flex-col justify-center space-y-10 bg-black relative">
              <div className="space-y-2">
                <label className="font-mono text-[10px] text-zinc-500 uppercase">Input_Identity_Email</label>
                <div className="relative border-b-2 border-zinc-800 focus-within:border-blue-600 transition-colors duration-500">
                  <input
                    type="email"
                    placeholder="USER@NETWORK.COM"
                    className="bg-transparent w-full py-4 font-black uppercase text-2xl md:text-4xl outline-none placeholder:text-zinc-900"
                  />
                  <button className="absolute right-0 bottom-4 font-mono text-sm text-blue-600 hover:text-white transition-colors duration-300 uppercase tracking-tighter font-black">
                    Request_Access —&gt;
                  </button>
                </div>
              </div>

              {/* SYSTEM STATS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-zinc-900">
                {[
                  { label: "Network_Status", value: "ENCRYPTED" },
                  { label: "Global_Ship", value: "ENABLED" },
                  { label: "Tech_Support", value: "24/7/365" },
                  { label: "Current_V", value: "V.04.2" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-[8px] text-zinc-600 uppercase mb-1">{stat.label}</p>
                    <p className="font-black text-[10px] uppercase tracking-wider">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DATA DECORATION */}
          <div className="mt-16 flex justify-between items-center opacity-30">
            <div className="font-mono text-[9px] text-zinc-500 uppercase flex gap-8">
              <span>[00] GRID_LOCKED</span>
              <span>[01] SYSTEM_ONLINE</span>
              <span>[02] ASSETS_LOADED</span>
            </div>
            <div className="hidden md:block h-[1px] flex-grow mx-12 bg-zinc-900"></div>
            <div className="font-mono text-[9px] text-zinc-500 uppercase italic">
              Authorized_Access_Only
            </div>
          </div>

        </div>
      </section>
    </div>




  )
}

export default Home
