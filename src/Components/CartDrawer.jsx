import React from 'react';
import { useCart } from '../context/CartContext'; 

const CartDrawer = () => {
  // We remove the (props) and pull the state directly from the useCart hook
  const { cart, removeFromCart, cartTotal, isCartOpen, setIsCartOpen } = useCart();

  return (
    <>
      {/* Dark Overlay - Connected to isCartOpen from Context */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] transition-opacity duration-500 ${
          isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsCartOpen(false)} 
      />

      {/* Cart Panel - Connected to isCartOpen from Context */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white text-black z-[201] shadow-2xl transform transition-transform duration-700 ease-in-out ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        
        {/* Header */}
        <div className="p-8 border-b border-black/10 flex justify-between items-center">
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">Current_Loadout</h2>
          <button 
            onClick={() => setIsCartOpen(false)} 
            className="text-[10px] font-bold uppercase tracking-widest border-b border-black"
          >
            Close [X]
          </button>
        </div>

        {/* Items List - Scrollable */}
        <div className="p-8 h-[calc(100vh-250px)] overflow-y-auto space-y-8">
          {cart.length > 0 ? (
            cart.map((item, i) => (
              <div key={i} className="flex gap-6 border-b border-black/5 pb-6">
                <div className="w-24 h-24 bg-[#F4F4F4] flex-shrink-0">
                  <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-black uppercase text-sm leading-tight">{item.name}</h4>
                    <span className="text-[9px] font-mono text-gray-500 uppercase">{item.cat}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="font-bold font-mono">{item.price}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-[9px] font-bold text-red-600 uppercase hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-gray-400 font-mono text-xs uppercase tracking-widest">
                Loadout is empty.
            </div>
          )}
        </div>

        {/* Footer / Checkout */}
        <div className="absolute bottom-0 left-0 w-full p-8 bg-white border-t border-black/10">
          <div className="flex justify-between items-end mb-6">
            <span className="text-[10px] font-mono uppercase text-gray-400">Total_Estimate</span>
            <span className="text-3xl font-black italic">${cartTotal.toFixed(2)}</span>
          </div>
          <button className="w-full py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-blue-600 transition-colors">
            Initiate Transaction
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;