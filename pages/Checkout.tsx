
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface Props {
  cart: CartItem[];
}

const Checkout: React.FC<Props> = ({ cart }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back</button>
        <h1 className="text-lg font-bold">Checkout</h1>
        <div className="size-10"></div>
      </header>

      <main className="p-4 space-y-8 pb-40">
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Order Summary</h3>
            <button className="text-primary text-xs font-bold uppercase">Edit</button>
          </div>
          <div className="bg-surface-dark rounded-2xl border border-slate-800 divide-y divide-slate-800">
            {cart.map(item => (
              <div key={item.id} className="p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">{item.type === 'domain' ? 'language' : 'dns'}</span>
                  <div>
                    <p className="font-bold text-sm">{item.title}</p>
                    <p className="text-[10px] text-slate-500">{item.subtitle}</p>
                  </div>
                </div>
                <span className="font-bold text-sm">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 px-1">Payment Method</h3>
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            <button className="px-6 py-3 bg-primary text-white rounded-xl font-bold flex items-center gap-2 shrink-0 border-2 border-primary">
              <span className="material-symbols-outlined text-xl">credit_card</span> Credit Card
            </button>
            <button className="px-6 py-3 bg-surface-dark text-slate-400 rounded-xl font-bold flex items-center gap-2 shrink-0 border border-slate-800">
              <span className="material-symbols-outlined text-xl">account_balance_wallet</span> PayPal
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Card Number</label>
            <div className="relative">
              <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-12 bg-surface-dark rounded-xl pl-12 pr-4 border-none focus:ring-2 focus:ring-primary" />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-600">credit_card</span>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500 text-sm">lock</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Expiry Date</label>
              <input type="text" placeholder="MM / YY" className="w-full h-12 bg-surface-dark rounded-xl px-4 border-none focus:ring-2 focus:ring-primary" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">CVC / CVV</label>
              <input type="password" placeholder="123" className="w-full h-12 bg-surface-dark rounded-xl px-4 border-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Cardholder Name</label>
            <input type="text" placeholder="Name as shown on card" className="w-full h-12 bg-surface-dark rounded-xl px-4 border-none focus:ring-2 focus:ring-primary" />
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-bg-dark border-t border-slate-800 pb-8 z-40">
        <div className="max-w-md mx-auto space-y-4">
          <div className="flex justify-between items-end px-1">
            <div>
              <p className="text-[10px] uppercase font-black text-slate-500">Total to pay</p>
              <p className="text-3xl font-black">${total.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-500 font-bold uppercase">
              <span className="material-symbols-outlined text-sm">verified_user</span> Secure Checkout
            </div>
          </div>
          <button onClick={() => navigate('/confirmation')} className="w-full h-14 bg-primary text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-[0.98]">
            Pay Now <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
