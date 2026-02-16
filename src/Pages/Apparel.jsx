import React from 'react';
import { useCart } from '../context/CartContext'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const ApparelPage = () => {
  const { addToCart, setIsCartOpen } = useCart();

  // Helper function for professional interaction
  const handleAddToCart = (item) => {
    // Standardize the item object to match our Cart Context expectations
    const cartItem = {
      ...item,
      cat: item.color || item.desc || 'Apparel // Studio'
    };
    addToCart(cartItem);
    // setIsCartOpen(true); // Open drawer automatically for pro-feel
  };

  const products = [
    { id: 'UW-01', name: 'OVERSIZED STUDIO TEE', price: '$85', color: 'PHANTOM BLACK', img: 'https://media.istockphoto.com/id/184330267/photo/womans-coat-isolated.jpg?s=612x612&w=0&k=20&c=vxXncrZlgYvt1uoV6We5Un7nm7YOrDu1xtSHOWxqE74=' },
    { id: 'UW-02', name: 'HEAVYWEIGHT HOODIE', price: '$160', color: 'CONCRETE', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-03', name: 'TACTICAL CARGO PANT', price: '$220', color: 'OLIVE DRAB', img: 'https://media.istockphoto.com/id/516895084/photo/brown-cargo-pants-in-white-studio.jpg?s=612x612&w=0&k=20&c=IkmmV7ItTwcJhpn78gEz-E-aFFhnHHPYqRODS6QhKes=' },
    { id: 'UW-04', name: 'NYLON COACH JACKET', price: '$195', color: 'MIDNIGHT', img: 'https://media.istockphoto.com/id/2247501310/photo/young-beautiful-woman-looking-tired-after-exercising-outdoors-in-public-park-on-sunny-winter.jpg?s=612x612&w=0&k=20&c=tNc5uVfBCFGMS8cMUktISpmqjkh3UrbpEaRuWU1By_8=' },
    { id: 'UW-05', name: 'THERMAL BASE LAYER', price: '$70', color: 'SNOW', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-06', name: 'RESTRICTED UTILITY HOODIE', price: '$310', color: 'CARBON', img: 'https://media.istockphoto.com/id/519364394/photo/man-wearing-winter-coat.jpg?s=612x612&w=0&k=20&c=r5b6zl99txMOglUAbrDqwMQGJNma4XbUuWN_My8tVTE=' },
  ];

  const apparel = [
    { id: 'UW-01', name: 'OVERSIZED STUDIO TEE', price: '$85', color: 'PHANTOM BLACK', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-02', name: 'HEAVYWEIGHT HOODIE', price: '$160', color: 'CONCRETE', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-03', name: 'TACTICAL CARGO PANT', price: '$220', color: 'OLIVE DRAB', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-04', name: 'NYLON COACH JACKET', price: '$195', color: 'MIDNIGHT', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-05', name: 'THERMAL BASE LAYER', price: '$70', color: 'SNOW', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-06', name: 'RESTRICTED UTILITY HOODIE', price: '$310', color: 'CARBON', img: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-07', name: 'MODULAR TECH VEST', price: '$245', color: 'ONYX', img: 'https://media.istockphoto.com/id/459268151/photo/portrait-hispanic-teen-student.jpg?s=612x612&w=0&k=20&c=SX_gfPVTdb3_FJ0JCWS7p9qKhuVIsvuJozFKOtgtspM=' },
    { id: 'UW-08', name: 'RIPSTOP WINDBREAKER', price: '$180', color: 'SLATE', img: 'https://images.unsplash.com/photo-1601001847160-23e3e0cd58c2?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-09', name: 'GRAPHIC CYBER TEE', price: '$75', color: 'NEON_LIME', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-10', name: 'ARTICULATED PANT', price: '$210', color: 'DARK MUD', img: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-11', name: 'CORE SHELL JACKET', price: '$390', color: 'CHROME', img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-12', name: 'THERMO-LINED BEANIE', price: '$45', color: 'VOID', img: 'https://images.unsplash.com/photo-1576871337622-98d48d38537d?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-13', name: 'ELEMENTAL ANORAK', price: '$275', color: 'SAND', img: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-14', name: 'BUNGEE CARGO SHORTS', price: '$130', color: 'MOSS', img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800' },
    { id: 'UW-15', name: 'COMPRESSION GLOVES', price: '$65', color: 'BIT_MAP', img: 'https://media.istockphoto.com/id/519364394/photo/man-wearing-winter-coat.jpg?s=612x612&w=0&k=20&c=r5b6zl99txMOglUAbrDqwMQGJNma4XbUuWN_My8tVTE=' },
    { id: 'UW-16', name: 'HYBRID FIELD COAT', price: '$420', color: 'STORM', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=800' }
  ];

  const collection = [
    { id: 'UW-J01', name: 'GORE-TECH SHELL', price: '$550', status: 'LIMITED', img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800', desc: '3-Layer Waterproof Membrane' },
    { id: 'UW-T04', name: 'BOX-FIT STUDIO TEE', price: '$95', status: 'AVAILABLE', img: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800', desc: '400GSM Organic Cotton' },
    { id: 'UW-P09', name: 'CARGO-SYSTEM PANTS', price: '$280', status: 'LOW STOCK', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800', desc: 'Reinforced Articulated Knees' },
    { id: 'UW-H02', name: 'THERMO-LAYER HOODIE', price: '$185', status: 'AVAILABLE', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800', desc: 'Thermal Heat-Retention Lining' },
    { id: 'UW-V11', name: 'UTILITY JEAN-TOP', price: '$320', status: 'AVAILABLE', img: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=600&auto=format&fit=crop&q=60', desc: 'MOLLE-Compatible Framework' }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* --- PAGE HEADER --- */}
      <div className="px-8 lg:px-16 pt-12 pb-8 border-b border-gray-100 flex justify-between items-end">
        <div>
          <span className="text-[10px] font-mono font-bold text-blue-600 tracking-[0.4em] uppercase">Archive_Series</span>
          <h1 className="text-6xl font-black italic uppercase tracking-tighter mt-2">Apparel</h1>
        </div>
        <div className="hidden md:block text-right">
          <span className="text-[10px] font-mono text-gray-400 uppercase">Viewing</span>
          <p className="text-sm font-bold">{products.length} / 48 ITEMS</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* --- LEFT: FILTERS --- */}
        <aside className="w-full lg:w-64 p-8 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] border-b lg:border-b-0 lg:border-r border-gray-100">
          <div className="space-y-10">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest mb-4">Category</h3>
              <ul className="space-y-2 text-sm font-medium text-gray-400">
                <li className="text-black cursor-pointer flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-black rounded-full"></span> All Apparel
                </li>
                <li className="hover:text-black cursor-pointer transition-colors uppercase">Tops & Tees</li>
                <li className="hover:text-black cursor-pointer transition-colors uppercase">Outerwear</li>
                <li className="hover:text-black cursor-pointer transition-colors uppercase">Bottoms</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-widest mb-4">Size</h3>
              <div className="grid grid-cols-3 gap-2">
                {['S', 'M', 'L', 'XL', '2XL', 'OS'].map(size => (
                  <button key={size} className="border border-gray-200 py-2 text-[10px] font-bold hover:bg-black hover:text-white transition-all">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* --- RIGHT: MAIN PRODUCT GRID --- */}
        <section className="flex-1 p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((item) => (
  <div key={item.id} className="group">
    {/* Wrap the image in a Link to the detail page */}
    <Link to={`/product-detail/${item.id}`}>
      <div className="aspect-[3/4] bg-[#F3F3F3] overflow-hidden relative rounded-sm cursor-pointer">
        <img 
          src={item.img} 
          alt={item.name}
          className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-white text-[8px] font-mono font-bold px-2 py-1 tracking-widest uppercase">View Details</span>
        </div>
      </div>
    </Link>

    <div className="mt-6 flex justify-between items-start">
      <Link to={`/product-detail/${item.id}`} className="hover:underline">
        <h3 className="text-[11px] font-black uppercase tracking-wider leading-tight">{item.name}</h3>
      </Link>
      <span className="text-sm font-bold tracking-tighter">{item.price}</span>
    </div>

    {/* Keep your Quick Add button outside the Link so it doesn't trigger navigation */}
    <button 
      onClick={() => handleAddToCart(item)}
      className="mt-4 w-full bg-black text-white py-2 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors"
    >
      Quick Add +
    </button>
  </div>
))}
          </div>
        </section>
      </div>

      {/* --- MIDDLE SECTION: EDITORIAL FEATURE --- */}
      <section className="bg-black py-24 px-8 lg:px-16 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 relative group">
            <div className="aspect-square overflow-hidden rounded-sm relative">
              <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1000" alt="Footwear" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono text-white/60 block uppercase tracking-widest">Next Series</span>
                  <h4 className="text-white font-black italic uppercase tracking-tighter text-2xl">Vapor-Sprint // 01</h4>
                </div>
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-black font-bold">→</div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-block border border-white/30 px-4 py-1">
              <span className="text-white text-[9px] font-mono uppercase tracking-[0.4em]">Proprietary Tech</span>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
              ENGINEERED <br /> TO <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>ENDURE</span>.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">Our apparel is built to layer seamlessly with our footwear line. Experience the full Ultra-Wears ecosystem.</p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="bg-white text-black px-12 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Shop Footwear</button>
              <button className="border border-white/30 text-white px-12 py-4 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">The Archive</button>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-[#0a0a0a] text-white py-32 px-6 lg:px-12 selection:bg-white selection:text-black">
  <div className="max-w-[1800px] mx-auto">
    
    {/* EDITORIAL HEADER - Dark Mode */}
    <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-white/10 pb-8">
      <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tighter">
        Archive <span className="font-serif italic text-zinc-600">01</span>
      </h2>
      <div className="text-xs uppercase tracking-[0.2em] text-zinc-500 mt-6 md:mt-0 flex gap-6">
        <span>Ready To Wear</span>
        {/* CHANGED: products.length -> apparel.length */}
        <span>{apparel.length} Units</span>
      </div>
    </div>

    {/* BREATHABLE LUXURY GRID - Dark Mode */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
      {/* CHANGED: products.map -> apparel.map */}
      {apparel.map((item) => (
        <div key={item.id} className="group cursor-pointer flex flex-col">
          
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 mb-6">
            <img 
              src={item.img} 
              alt={item.name} 
              className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale group-hover:grayscale-0"
            />
            
            {/* Dark Fade-in Action */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-700 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100">
              {/* Added Link for navigation */}
              <Link 
                to={`/product-detail/${item.id}`}
                className="w-full bg-white text-black py-4 text-center text-xs font-semibold uppercase tracking-widest hover:bg-zinc-300 transition-all duration-300 mb-2"
              >
                View Details
              </Link>
              {/* Added Quick Add button to match your functional needs */}
              <button 
                onClick={() => handleAddToCart(item)}
                className="w-full bg-transparent border border-white text-white py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
              >
                Quick Add +
              </button>
            </div>
          </div>
          
          {/* Typography */}
          <div className="flex flex-col">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-sm font-medium uppercase tracking-wide text-white leading-snug">
                {item.name}
              </h3>
              <span className="text-sm font-light text-zinc-300 whitespace-nowrap">
                {item.price}
              </span>
            </div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">
              {item.color}
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

      {/* --- HORIZONTAL SCROLL: ESSENTIAL SILHOUETTES --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="px-8 lg:px-16 mb-16 flex justify-between items-end border-l-4 border-black ml-8 lg:ml-16">
          <div className="pl-6">
            <span className="text-[10px] font-mono font-bold text-blue-600 tracking-[0.5em] uppercase">Phase_01 // Inventory</span>
            <h2 className="text-5xl font-black italic uppercase tracking-tighter">Essential Silhouettes</h2>
          </div>
        </div>
        
        <div className="flex gap-10 overflow-x-auto px-8 lg:px-16 no-scrollbar pb-10 snap-x">
          {collection.map((item) => (
            <div key={item.id} className="min-w-[320px] md:min-w-[420px] snap-center group">
              <div className="aspect-[3/4] bg-[#F6F6F6] overflow-hidden relative border border-gray-50">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out" />
                <div className="absolute top-0 right-0 p-6">
                  <span className={`text-[8px] font-mono font-black px-3 py-1 tracking-widest uppercase ${item.status === 'LIMITED' ? 'bg-red-600 text-white' : 'bg-black text-white'}`}>
                    {item.status}
                  </span>
                </div>
                {/* HORIZONTAL GALLERY QUICK ADD */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/80 backdrop-blur-sm">
                   <p className="text-white text-[9px] font-mono uppercase tracking-[0.2em] mb-4">Spec // {item.desc}</p>
                   <button 
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-colors"
                   >
                     Quick_Add +
                   </button>
                </div>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="font-black italic uppercase text-lg leading-tight">{item.name}</h3>
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">{item.id}</span>
                </div>
                <span className="font-black text-lg tracking-tighter">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-8 lg:mx-16 mt-4 h-[2px] bg-gray-100 relative">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-black"></div>
        </div>
      </section>
      
    </div>
  );
};

export default ApparelPage;