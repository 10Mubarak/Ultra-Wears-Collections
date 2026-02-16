import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom'; // Added NavLink & Outlet
import { useCart } from '../context/CartContext'; 
// import ScrollToTop from '../Components/ScrollToTop'; // Uncomment if you have this file
// import BackToTopButton from '../Components/BackToTopButton'; // Uncomment if you have this file

const UltraProLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Access global cart state and the toggle function
  const { cart, setIsCartOpen } = useCart();

  const navPages = [
    { name: 'Home', link: '/home' },
    { name: 'Shop All', link: '/shop' },
    { name: 'Apparel', link: '/apparel' },
    { name: 'Footwear', link: '/footwear' },
    { name: 'Archive', link: '/archive' },
    { name: 'Lookbook', link: '/lookbook' },
    { name: 'Manifesto', link: '/manifesto' },
    { name: 'Studio', link: '/studio' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9]">
       {/* <ScrollToTop />  <-- Recommended: Add this here for scroll fix */}
      
      {/* --- 1. PRO TOP HEADER --- */}
      <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-md z-[150] flex items-center justify-between px-8 md:pl-32 md:pr-12 border-b border-gray-100">

        {/* Main Logo */}
        <div className="flex items-center gap-12">
          <Link to="/home">
            <h1 className="font-black text-2xl tracking-tighter italic uppercase cursor-pointer transition-transform hover:skew-x-[-10deg]">
              ULTRA-WEARS
            </h1>
          </Link>

          {/* 7-Page Navigation - Desktop Only */}
          <nav className="hidden xl:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
            {navPages.map((page) => (
              <NavLink
                key={page.name}
                to={page.link}
                className={({ isActive }) => 
                  isActive 
                    ? "text-blue-600 underline underline-offset-8 decoration-2" // ACTIVE STATE (BLUE)
                    : "hover:text-black hover:underline underline-offset-8 decoration-2 transition-all" // INACTIVE STATE
                }
              >
                {page.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Icons & Utility */}
        <div className="flex items-center gap-6">
          <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-gray-400">Search</button>
          
          {/* CART TRIGGER: Opens the CartDrawer */}
          <div 
            onClick={() => setIsCartOpen(true)}
            className="relative group cursor-pointer flex items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-widest">Cart</span>
            <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-[9px] font-bold group-hover:bg-blue-600 transition-colors duration-300">
              {cart.length}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMenuOpen(true)} className="xl:hidden p-2">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
      </header>

      {/* --- 2. FIXED ASIDE BRAND PILLAR --- */}
      <aside className="fixed left-0 top-0 h-screen w-24 lg:w-28 bg-white z-[160] hidden md:flex flex-col items-center justify-between py-12 border-r-[3px] border-black">
        <div className="flex flex-col items-center gap-2">
          <Link to="/home">
            <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-black italic text-xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
              U
            </div>
          </Link>
          <span className="text-[7px] font-mono font-bold tracking-widest text-gray-400 uppercase">
            Ver. 2.0.26
          </span>
        </div>

        <div className="rotate-180 [writing-mode:vertical-lr] flex items-center gap-8">
          <span className="text-[8px] font-mono font-medium text-gray-300 uppercase tracking-[0.5em]">
            SN: 44.3917° N, 79.8500° W
          </span>

          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase italic text-black transition-all hover:tracking-normal cursor-default">
              ULTRA
            </h2>
            <div className="h-24 w-[1px] bg-black"></div>
          </div>

          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">
            Global_Standard_Drop
          </span>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-1 items-center">
            <div className="w-10 h-[1px] bg-gray-200"></div>
            <div className="w-10 h-[1px] bg-black"></div>
            <div className="w-10 h-[1px] bg-gray-200"></div>
          </div>
          <div className="rotate-180 [writing-mode:vertical-lr]">
            <span className="text-[8px] font-mono font-bold tracking-[0.4em] text-black opacity-40">
              ©COPYRIGHT_INTL
            </span>
          </div>
          <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
        </div>
      </aside>

      {/* --- 3. MOBILE FULLSCREEN MENU --- */}
      <div className={`fixed inset-0 bg-black z-[200] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-10 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <span className="text-white font-black italic text-xl tracking-tighter uppercase">ULTRA-WEARS</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-white text-xs font-bold tracking-widest border border-white/30 px-4 py-2 rounded-full">CLOSE</button>
          </div>
          <nav className="flex flex-col gap-6">
            {navPages.map((page, idx) => (
              <NavLink
                key={page.name}
                to={page.link}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                   isActive 
                   ? "text-4xl sm:text-6xl font-black text-blue-500 italic uppercase tracking-tighter" // Active Mobile
                   : "text-4xl sm:text-6xl font-black text-white italic uppercase tracking-tighter hover:text-blue-500 transition-colors"
                }
              >
                <span className="text-xs font-mono mr-4 text-gray-600">0{idx + 1}.</span>
                {page.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* This renders the actual page content (Home, Shop, etc.) */}
      <main className="md:pl-28 pt-20"> 
          <Outlet /> 
      </main>

       {/* <BackToTopButton /> <-- Recommended: Add this here */}
    </div>
  );
};

export default UltraProLayout;