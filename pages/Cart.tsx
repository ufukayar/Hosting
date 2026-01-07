
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface Props {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Cart: React.FC<Props> = ({ cart, setCart }) => {
  const navigate = useNavigate();

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back_ios_new</button>
        <h1 className="text-lg font-bold">My Cart ({cart.length})</h1>
        <button onClick={() => setCart([])} className="text-slate-500 text-sm font-bold">Clear All</button>
      </header>

      <main className="flex-1 p-4 space-y-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
            <span className="material-symbols-outlined text-6xl text-slate-800">shopping_cart_off</span>
            <p className="text-slate-400 font-medium">Your cart is empty</p>
            <button onClick={() => navigate('/search')} className="bg-primary px-6 py-2 rounded-full font-bold">Go Shopping</button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="p-4 bg-surface-dark rounded-2xl border border-slate-800 flex gap-4">
                  <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${item.type === 'domain' ? 'bg-blue-500/10 text-blue-500' : 'bg-purple-500/10 text-purple-500'}`}>
                    <span className="material-symbols-outlined">{item.type === 'domain' ? 'language' : 'dns'}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold">{item.title}</p>
                        <p className="text-xs text-slate-500">{item.subtitle}</p>
                      </div>
                      <p className="font-bold">${item.price}</p>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <button onClick={() => removeItem(item.id)} className="material-symbols-outlined text-slate-600 hover:text-red-500 transition-colors">delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Summary</h3>
              <div className="p-4 bg-surface-dark rounded-2xl border border-slate-800 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Taxes (10%)</span>
                  <span className="font-bold">${tax.toFixed(2)}</span>
                </div>
                <div className="h-px bg-slate-800 my-2"></div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-base font-bold">Total</span>
                  <span className="text-xl font-black text-primary">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
              <span className="material-symbols-outlined text-[16px]">lock</span> Secure 256-bit SSL Encrypted Payment
            </div>
          </>
        )}
      </main>

      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-bg-dark/80 backdrop-blur-xl border-t border-slate-800 pb-8 z-40">
          <div className="max-w-md mx-auto flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-bold text-slate-500">Total to pay</span>
              <span className="text-2xl font-black">${total.toFixed(2)}</span>
            </div>
            <button onClick={() => navigate('/checkout')} className="flex-1 h-14 bg-primary text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-[0.98]">
              Checkout <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
