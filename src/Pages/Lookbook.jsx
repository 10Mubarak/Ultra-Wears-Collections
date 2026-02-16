import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const LookbookPage = () => {
  const { addToCart, addToArchive } = useCart();
  const navigate = useNavigate();

  const scenes = [
    {
      id: 'LOOK-01',
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200',
      title: 'Urban Exploration',
      subtitle: 'Series 01 // Shibuya District',
      pos: 'left',
      // UPDATED: Now describes the Yellow Tech-Set in the photo
      product: { 
        id: 'SET-01-YLW', 
        name: 'S-01 OVERSIZED TECH-SET', 
        price: '$520', 
        cat: 'Apparel // Editorial', 
        img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200' 
      }
    },
    {
      id: 'LOOK-02',
      img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200',
      title: 'Technical Layering',
      subtitle: 'Series 01 // Concrete Environment',
      pos: 'right',
      // UPDATED: Now describes the Layered Tactical look
      product: { 
        id: 'LYR-02-BLK', 
        name: 'MODULAR TACTICAL VEST', 
        price: '$410', 
        cat: 'Apparel // Editorial', 
        img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200' 
      }
    },
    {
      id: 'LOOK-03',
      img: 'https://images.unsplash.com/photo-1726608869073-d150725d2fc3?w=600&auto=format&fit=crop&q=60',
      title: 'Night Shift Movement',
      subtitle: 'Series 01 // Industrial Zone',
      pos: 'left',
      // UPDATED: Now describes the Industrial fit
      product: { 
        id: 'NIGHT-03-IND', 
        name: 'INDUSTRIAL SHELL JKT', 
        price: '$680', 
        cat: 'Apparel // Editorial', 
        img: 'https://images.unsplash.com/photo-1726608869073-d150725d2fc3?w=600&auto=format&fit=crop&q=60' 
      }
    },
  ];

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="border-b border-white/10 pt-32 pb-16 px-8 lg:px-16">
        <span className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase block mb-4">Editorial_Archive // Vol.01</span>
        <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8]">THE <br /> UNSEEN.</h1>
      </div>

      <div className="py-20 space-y-48">
        {scenes.map((scene) => (
          <div key={scene.id} className={`max-w-7xl mx-auto px-8 lg:px-16 flex flex-col ${scene.pos === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
            
            <div className="w-full lg:w-2/3 aspect-[4/5] overflow-hidden relative group border border-white/5">
              {/* Full Color - No Filters */}
              <img src={scene.img} alt={scene.title} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              <div className="absolute bottom-10 right-10 bg-white text-black px-4 py-2 font-mono text-xs font-black">{scene.product.price}</div>
            </div>

            <div className="w-full lg:w-1/3 space-y-8">
              <div>
                <span className="text-[10px] font-mono text-blue-500 tracking-[0.3em] uppercase block mb-2">{scene.subtitle}</span>
                <h3 className="text-6xl font-black italic uppercase tracking-tighter leading-none mb-4">{scene.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Featured: <span className="text-white font-bold">{scene.product.name}</span></p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => addToCart(scene.product)} 
                  className="w-full py-5 bg-white text-black text-[11px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all flex justify-between px-8"
                >
                  <span>Deploy_Look</span><span>+</span>
                </button>
                <button 
                  onClick={() => { addToArchive(scene.product); navigate('/archive'); }}
                  className="w-full py-4 border border-white/10 text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em] hover:text-blue-500 bg-white/5"
                >
                  [ Archive_Style_Profile ]
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LookbookPage;