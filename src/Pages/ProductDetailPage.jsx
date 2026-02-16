import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart, setIsCartOpen } = useCart();

  // CONSOLIDATED PRODUCT DATA
  const products = {
    // --- ORIGINAL FOOTWEAR ---
    "1": { 
        id: "1", 
        name: 'Ultra-Tee // 01', 
        price: '450.00',    
        series: 'SERIES_01 // CATEGORY_APPAREL',
        description: "HIGH-DENSITY COTTON BLEND. ENGINEERED FOR MAXIMUM BREATHABILITY.",
        specs: ["300GSM COTTON", "OVERSIZED FIT"],
        sizes: ['S', 'M', 'L', 'XL'],
        img: 'https://images.unsplash.com/photo-1746730921374-ab56549262f3?w=600' 
    },
    "2": { 
        id: "2", 
        name: 'Aero-Runner', 
        price: '210.00', 
        series: 'SERIES_01 // CATEGORY_FOOTWEAR',
        description: "LIGHTWEIGHT PERFORMANCE RUNNER. DESIGNED FOR ENERGY RETURN.",
        specs: ["AERO-GRIP RUBBER", "240G WEIGHT"],
        sizes: ['40', '41', '42', '43', '44', '45'],
        img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000' 
      },
    "3": { 
        id: "3",
        name: "CORE-CARGO PANT",
        price: "185.00",
        series: "SERIES_01 // CATEGORY_APPAREL",
        description: "MULTI-POCKET ARCHITECTURAL CARGO PANTS. WATER-RESISTANT FINISH.",
        specs: ["MATERIAL: RIPSTOP NYLON", "POCKETS: 8-POINT SYSTEM", "FINISH: DWR COATED"],
        sizes: ["S", "M", "L", "XL"],
        img: "https://images.unsplash.com/photo-1719473448126-eb1159ec5242?w=600"
    },

    // --- APPAREL DATA ---
    "UW-01": { id: "UW-01", name: "OVERSIZED STUDIO TEE", price: "85.00", series: "SERIES_01 // APPAREL", description: "HEAVYWEIGHT COTTON. OVERSIZED ARCHITECTURAL FIT.", specs: ["400GSM COTTON", "REINFORCED SEAMS"], sizes: ["S", "M", "L", "XL"], img: "https://media.istockphoto.com/id/184330267/photo/womans-coat-isolated.jpg?s=612x612&w=0&k=20&c=vxXncrZlgYvt1uoV6We5Un7nm7YOrDu1xtSHOWxqE74=" },
    "UW-02": { id: "UW-02", name: "HEAVYWEIGHT HOODIE", price: "160.00", series: "SERIES_01 // APPAREL", description: "PREMIUM FLEECE CONSTRUCTED FOR COMFORT AND LONGEVITY.", specs: ["BRUSHED BACK FLEECE", "DOUBLE-LINED HOOD"], sizes: ["S", "M", "L", "XL"], img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800" },
    "UW-03": { id: "UW-03", name: "TACTICAL CARGO PANT", price: "220.00", series: "SERIES_01 // APPAREL", description: "REINFORCED PANELING WITH MULTI-POCKET UTILITY STORAGE.", specs: ["RIPSTOP FABRIC", "ARTICULATED KNEES"], sizes: ["30", "32", "34", "36"], img: "https://media.istockphoto.com/id/516895084/photo/brown-cargo-pants-in-white-studio.jpg?s=612x612&w=0&k=20&c=IkmmV7ItTwcJhpn78gEz-E-aFFhnHHPYqRODS6QhKes=" },
    "UW-04": { id: "UW-04", name: "NYLON COACH JACKET", price: "195.00", series: "SERIES_01 // APPAREL", description: "LIGHTWEIGHT WEATHER-RESISTANT OUTER LAYER.", specs: ["WATER REPELLENT", "SNAP CLOSURE"], sizes: ["S", "M", "L", "XL"], img: "https://media.istockphoto.com/id/2247501310/photo/young-beautiful-woman-looking-tired-after-exercising-outdoors-in-public-park-on-sunny-winter.jpg?s=612x612&w=0&k=20&c=tNc5uVfBCFGMS8cMUktISpmqjkh3UrbpEaRuWU1By_8=" },
    "UW-05": { id: "UW-05", name: "THERMAL BASE LAYER", price: "70.00", series: "SERIES_01 // APPAREL", description: "MOISTURE-WICKING THERMAL FABRIC FOR COLD CONDITIONS.", specs: ["4-WAY STRETCH", "FLATLOCK SEAMS"], sizes: ["S", "M", "L", "XL"], img: "https://images.unsplash.com/photo-1503332217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800" },
    "UW-06": { id: "UW-06", name: "RESTRICTED UTILITY HOODIE", price: "310.00", series: "SERIES_01 // APPAREL", description: "LIMITED EDITION UTILITY WEAR WITH MODULAR COMPONENTS.", specs: ["OVERSIZED FIT", "COATED COTTON"], sizes: ["S", "M", "L"], img: "https://media.istockphoto.com/id/519364394/photo/man-wearing-winter-coat.jpg?s=612x612&w=0&k=20&c=r5b6zl99txMOglUAbrDqwMQGJNma4XbUuWN_My8tVTE=" },

    // --- COLLECTION DATA ---
    "UW-J01": { id: "UW-J01", name: "GORE-TECH SHELL", price: "550.00", series: "ARCHIVE_SERIES", description: "3-LAYER WATERPROOF MEMBRANE FOR EXTREME CONDITIONS.", specs: ["GORE-TEX PRO", "FULLY SEAM TAPED"], sizes: ["M", "L", "XL"], img: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800" },
    "UW-T04": { id: "UW-T04", name: "BOX-FIT STUDIO TEE", price: "95.00", series: "ARCHIVE_SERIES", description: "HEAVYWEIGHT ORGANIC COTTON WITH A BOXIER CUT.", specs: ["400GSM ORGANIC COTTON", "BOX FIT"], sizes: ["S", "M", "L", "XL"], img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800" },
    "UW-P09": { id: "UW-P09", name: "CARGO-SYSTEM PANTS", price: "280.00", series: "ARCHIVE_SERIES", description: "REINFORCED ARTICULATED KNEES WITH INTEGRATED STRAPS.", specs: ["DWR COATED", "8-POCKET SYSTEM"], sizes: ["30", "32", "34"], img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800" },
    "UW-H02": { id: "UW-H02", name: "THERMO-LAYER HOODIE", price: "185.00", series: "ARCHIVE_SERIES", description: "THERMAL HEAT-RETENTION LINING FOR OPTIMAL WARMTH.", specs: ["THERMO-REGULATING", "HIDDEN ZIP POCKET"], sizes: ["S", "M", "L", "XL"], img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800" },
    "UW-V11": { id: "UW-V11", name: "UTILITY JEAN-TOP", price: "320.00", series: "ARCHIVE_SERIES", description: "MOLLE-COMPATIBLE FRAMEWORK IN A DENIM CONSTRUCTION.", specs: ["14OZ DENIM", "MOLLE WEBBING"], sizes: ["S", "M", "L"], img: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?w=600&auto=format&fit=crop&q=60" }
  };

  const product = products[id];

  useEffect(() => {
    setSelectedSize(null);
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center font-mono uppercase tracking-widest">
        Product_Not_Found // 404
      </div>
    );
  }

  const handlePurchase = () => {
    if (selectedSize) {
      addToCart({ ...product, size: selectedSize });
      setIsCartOpen(true);
    } else {
      alert('SELECT_SIZE_REQUIRED');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVIGATION CRUMB */}
      <div className="pt-32 px-8 lg:px-16">
        <Link to="/" className="text-[10px] font-mono text-gray-500 hover:text-blue-500 transition-colors uppercase tracking-[0.3em] flex items-center gap-2">
          <span>&larr;</span> Back_To_Archive
        </Link>
      </div>

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-[calc(100vh-200px)] px-8 lg:px-16 py-12">
        {/* IMAGE VIEWPORT */}
        <div className="lg:col-span-7 border border-white/10 relative group bg-zinc-950 flex items-center justify-center p-12 overflow-hidden rounded-3xl lg:rounded-tr-none lg:rounded-br-none">
          <img src={product.img} alt={product.name} className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-1000 group-hover:scale-105" />
        </div>

        {/* RIGHT: TECHNICAL SPECIFICATION & PURCHASE */}
        <div className="lg:col-span-5 lg:pl-16 flex flex-col justify-between py-8">
            <div className="space-y-8">
                <div>
                    <span className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block">{product.series}</span>
                    <h1 className="text-5xl lg:text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">{product.name}</h1>
                    <p className="text-3xl font-mono tracking-tighter text-zinc-300">${product.price}</p>
                </div>
                
                <div className="space-y-4 border-t border-white/10 pt-8">
                    <p className="text-gray-400 text-xs leading-relaxed font-medium uppercase tracking-tight">{product.description}</p>
                    <ul className="space-y-2">
                        {product.specs.map((spec, i) => (
                          <li key={i} className="text-[10px] font-mono text-blue-400 tracking-wider">&gt; {spec}</li>
                        ))}
                    </ul>
                </div>
                
                <div className="space-y-4 pt-8 border-t border-white/10">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Select_Scale // Unit</span>
                    <div className="grid grid-cols-3 gap-2">
                        {product.sizes.map((size) => (
                        <button 
                          key={size} 
                          onClick={() => setSelectedSize(size)} 
                          className={`py-4 text-xs font-black border transition-all ${selectedSize === size ? 'bg-blue-600 border-blue-600 text-white' : 'bg-transparent border-white/10 text-white hover:border-white/60'}`}
                        >
                          {size}
                        </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="pt-12">
                <button 
                  onClick={handlePurchase} 
                  className="w-full bg-white text-black py-7 font-black uppercase text-xl tracking-tighter hover:bg-blue-600 hover:text-white transition-all flex justify-between px-10 items-center group rounded-full"
                >
                    <span>Deploy_Purchase</span>
                    <span className="group-hover:translate-x-4 transition-transform">&rarr;</span>
                </button>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;

// [
//     { id: 1, name: 'Ultra-Tee // 01', price: '$85', cat: 'Apparel', img: 'https://images.unsplash.com/photo-1746730921374-ab56549262f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJpb3VzJTIwb3V0Zml0c3xlbnwwfHwwfHx8MA%3D%3D', size: 'large' },
//     { id: 2, name: 'Aero-Runner', price: '$210', cat: 'Footwear', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800', size: 'small' },
//     { id: 3, name: 'Tactical Cargo', price: '$160', cat: 'Apparel', img: 'https://images.unsplash.com/photo-1719473448126-eb1159ec5242?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJpb3VzJTIwY2FyZ28lMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D', size: 'small' },