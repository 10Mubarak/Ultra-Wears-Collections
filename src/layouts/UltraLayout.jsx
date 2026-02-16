import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const UltraLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const { cart, setIsCartOpen } = useCart();

    // 1. SCROLL TO TOP ON ROUTE CHANGE
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // 2. SMOOTH SCROLL FOR BUTTON
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navPages = [
        { name: 'Shop All', link: '/shop' },
        { name: 'Apparel', link: '/apparel' },
        { name: 'Footwear', link: '/footwear' },
        { name: 'Archive', link: '/archive' },
        { name: 'Lookbook', link: '/lookbook' },
        { name: 'Manifesto', link: '/manifesto' },
        { name: 'Studio', link: '/studio' },
    ];

    const getNavClass = ({ isActive }) =>
        isActive
            ? "text-blue-600 underline underline-offset-8 decoration-2 transition-all"
            : "hover:text-black hover:underline underline-offset-8 decoration-2 transition-all";

    return (
        <div className="min-h-screen bg-[#F9F9F9]">
            {/* --- HEADER --- */}
            <header className="fixed top-0 left-0 w-full h-20 bg-white/95 backdrop-blur-md z-[150] flex items-center justify-between px-8 md:pl-32 md:pr-12 border-b border-gray-100">
                <div className="flex items-center gap-12">
                    <Link to="/home">
                        <h1 className="font-black text-2xl tracking-tighter italic uppercase cursor-pointer transition-transform hover:skew-x-[-10deg]">
                            ULTRA-WEARS
                        </h1>
                    </Link>
                    <nav className="hidden xl:flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
                        {navPages.map((page) => (
                            <NavLink key={page.name} to={page.link} className={getNavClass}>
                                {page.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-6">
                    <button className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-gray-400">Search</button>
                    <div onClick={() => setIsCartOpen(true)} className="relative group cursor-pointer flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest">Cart</span>
                        <div className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center text-[9px] font-bold group-hover:bg-blue-600 transition-colors duration-300">
                            {cart.length}
                        </div>
                    </div>
                    <button onClick={() => setIsMenuOpen(true)} className="xl:hidden p-2">
                        <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-black"></div>
                    </button>
                </div>
            </header>

            {/* --- ASIDE PILLAR --- */}
            <aside className="fixed left-0 top-0 h-screen w-24 lg:w-28 bg-white z-[160] hidden md:flex flex-col items-center justify-between py-12 border-r-[3px] border-black">
                <div className="flex flex-col items-center gap-2">
                    <Link to="/home">
                        <div className="w-12 h-12 border-2 border-black flex items-center justify-center font-black italic text-xl hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">U</div>
                    </Link>
                    <span className="text-[7px] font-mono font-bold tracking-widest text-gray-400 uppercase">Ver. 2.0.26</span>
                </div>
                <div className="rotate-180 [writing-mode:vertical-lr] flex items-center gap-8">
                    <span className="text-[8px] font-mono font-medium text-gray-300 uppercase tracking-[0.5em]">SN: 44.3917° N, 79.8500° W</span>
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-2xl lg:text-3xl font-black tracking-tighter uppercase italic text-black transition-all hover:tracking-normal cursor-default">ULTRA</h2>
                        <div className="h-24 w-[1px] bg-black"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black">Global_Standard_Drop</span>
                </div>
                <div className="flex flex-col items-center gap-6">
                    <div className="rotate-180 [writing-mode:vertical-lr]">
                        <span className="text-[8px] font-mono font-bold tracking-[0.4em] text-black opacity-40">©COPYRIGHT_INTL</span>
                    </div>
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                </div>
            </aside>

            {/* --- MOBILE MENU --- */}
            <div className={`fixed inset-0 bg-black z-[200] transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-10 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                        <span className="text-white font-black italic text-xl tracking-tighter uppercase">ULTRA-WEARS</span>
                        <button onClick={() => setIsMenuOpen(false)} className="text-white text-xs font-bold tracking-widest border border-white/30 px-4 py-2 rounded-full">CLOSE</button>
                    </div>
                    <nav className="flex flex-col gap-6">
                        {navPages.map((page, idx) => (
                            <NavLink key={page.name} to={page.link} onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `text-4xl sm:text-6xl font-black italic uppercase tracking-tighter transition-colors ${isActive ? 'text-blue-500' : 'text-white hover:text-blue-500'}`}>
                                <span className="text-xs font-mono mr-4 text-gray-600">0{idx + 1}.</span>{page.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>

            {/* --- MAIN CONTENT --- */}
            <main className="pt-20 md:pl-24 lg:pl-28">
                <Outlet />
            </main>

            {/* --- FULL RESTORED FOOTER --- */}
            <footer className="bg-white border-t border-gray-100 pt-20 pb-10 md:pl-24 lg:pl-28">
                <div className="max-w-7xl mx-auto px-8 lg:px-16">

                    {/* TOP ROW: BRAND & SUBSCRIBE */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-100">
                        <div className="lg:col-span-5">
                            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-6">ULTRA-WEARS</h2>
                            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">Technical design studio focused on the evolution of human movement and high-fashion ergonomics.</p>
                        </div>
                        <div className="lg:col-span-7">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-400 mb-4 block">Join the Studio // Updates</span>
                            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" placeholder="EMAIL@ADDRESS.COM" className="flex-1 bg-gray-50 border-none px-6 py-4 text-xs font-mono focus:ring-2 focus:ring-black outline-none" />
                                <button className="bg-black text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">Subscribe</button>
                            </form>
                        </div>
                    </div>

                    {/* MIDDLE ROW: ALL 4 NAV COLUMNS RESTORED */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest">Discovery</span>
                            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                                <Link to="/shop" className="hover:text-black transition-colors">Shop All</Link>
                                <Link to="/lookbook" className="hover:text-black transition-colors">Lookbook</Link>
                                <Link to="/archive" className="hover:text-black transition-colors">Archive</Link>
                            </nav>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest">Categories</span>
                            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                                <Link to="/apparel" className="hover:text-black transition-colors">Apparel</Link>
                                <Link to="/footwear" className="hover:text-black transition-colors">Footwear</Link>
                                <Link to="/shop" className="hover:text-black transition-colors">Accessories</Link>
                            </nav>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest">Studio</span>
                            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                                <Link to="/manifesto" className="hover:text-black transition-colors">Manifesto</Link>
                                <Link to="/studio" className="hover:text-black transition-colors">Tech & Sizing</Link>
                                <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
                            </nav>
                        </div>

                        <div className="flex flex-col gap-4">
                            <span className="text-[10px] font-black uppercase tracking-widest">Connect</span>
                            <nav className="flex flex-col gap-2 text-sm text-gray-500 font-medium">
                                <a href="#" className="hover:text-black transition-colors italic">Instagram</a>
                                <a href="#" className="hover:text-black transition-colors italic">TikTok</a>
                                <a href="#" className="hover:text-black transition-colors italic">Twitter [X]</a>
                            </nav>
                        </div>
                    </div>

                    {/* BOTTOM ROW: LEGAL & DATA */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-gray-50">
                        <div className="flex items-center gap-6">
                            <span className="text-[9px] font-mono text-gray-400">©2026 ULTRA-WEARS INTERNATIONAL</span>
                            <span className="text-[9px] font-mono text-gray-400 hidden sm:block">44.3917° N, 79.8500° W</span>
                        </div>
                        <div className="flex gap-8">
                            <a href="#" className="text-[9px] font-mono text-gray-400 hover:text-black">Privacy Policy</a>
                            <a href="#" className="text-[9px] font-mono text-gray-400 hover:text-black">Terms of Service</a>
                        </div>
                        <div className="h-6 w-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/84/Ean-13-5901234123457.png')] bg-no-repeat bg-contain opacity-30 grayscale"></div>
                    </div>
                </div>
            </footer>
            {/* --- FIXED CIRCULAR BACK-TO-TOP BUTTON --- */}
            <div className="fixed bottom-10 right-10 z-[200] hidden md:block">
                <button
                    onClick={scrollToTop}
                    className="bg-black text-white w-14 h-14 rounded-full flex items-center justify-center group hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                    {/* Animated Arrow */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300 ease-in-out"
                    >
                        <path strokeLinecap="square" strokeLinejoin="miter" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default UltraLayout;