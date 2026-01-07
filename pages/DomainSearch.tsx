
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface Props {
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const DomainSearch: React.FC<Props> = ({ setCart }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('myidea.com');

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
    navigate('/cart');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back</button>
        <h1 className="text-lg font-bold">Results</h1>
        <button onClick={() => navigate('/cart')} className="material-symbols-outlined">shopping_cart</button>
      </header>

      <main className="flex-1 p-4 space-y-6">
        <div className="relative">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-14 bg-surface-dark rounded-2xl pl-12 pr-4 border-none focus:ring-2 focus:ring-primary text-lg"
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="h-10 bg-surface-dark border border-slate-800 rounded-xl flex items-center justify-center gap-2 text-sm font-bold">
            <span className="material-symbols-outlined text-[18px]">tune</span> Filters
          </button>
          <button className="h-10 bg-surface-dark border border-slate-800 rounded-xl flex items-center justify-center gap-2 text-sm font-bold px-3">
            <span className="material-symbols-outlined text-[18px]">sort</span> Price: Low to High
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-lg font-bold">Exact Match</h2>
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase px-2 py-0.5 rounded">Available</span>
            </div>
            <div className="p-6 bg-surface-dark rounded-2xl border border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 size-24 bg-primary/20 rounded-full blur-3xl -mr-8 -mt-8"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 text-primary text-[10px] font-black uppercase mb-1">
                      <span className="material-symbols-outlined text-sm">verified</span> Premium Domain
                    </div>
                    <h3 className="text-2xl font-black">{query}</h3>
                    <p className="text-xl font-bold mt-1">$12.99<span className="text-sm font-normal text-slate-500">/yr</span></p>
                  </div>
                  <div className="size-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                    <span className="material-symbols-outlined text-2xl">language</span>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'domain-1', title: query, subtitle: '1 Year Registration', price: 12.99, type: 'domain' })}
                  className="w-full py-3.5 bg-primary text-white font-black rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span> Add to Cart
                </button>
                <p className="text-[10px] text-slate-500 text-center">Renews at $14.99/yr. Cancel anytime.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold px-1">Popular Alternatives</h2>
            <div className="space-y-3">
              {[
                { ext: '.net', price: 10.99 },
                { ext: '.io', price: 35.00 },
                { ext: '.xyz', price: 1.99, sale: true }
              ].map((alt) => (
                <div key={alt.ext} className="p-4 bg-surface-dark rounded-xl border border-slate-800 flex items-center justify-between hover:border-primary/40 transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold">myidea{alt.ext}</p>
                      {alt.sale && <span className="bg-amber-500 text-black text-[9px] font-black uppercase px-1.5 py-0.5 rounded">Sale</span>}
                    </div>
                    <p className="text-xs text-slate-500 font-bold">${alt.price}/yr</p>
                  </div>
                  <button className="size-9 bg-primary/10 text-primary rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DomainSearch;
