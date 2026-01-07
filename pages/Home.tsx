
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col pb-20">
      <header className="p-4 flex items-center justify-between">
        <button className="material-symbols-outlined">menu</button>
        <h1 className="text-xl font-bold tracking-tight">Hostify</h1>
        <button onClick={() => navigate('/account')} className="material-symbols-outlined">account_circle</button>
      </header>

      <main className="flex-1 space-y-8">
        {/* Hero Section */}
        <div className="px-4">
          <div className="relative h-[300px] rounded-3xl overflow-hidden flex items-center justify-center p-8 text-center">
            <img 
              src="https://picsum.photos/seed/hosting-hero/600/400" 
              className="absolute inset-0 w-full h-full object-cover opacity-40" 
              alt="Hero"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent"></div>
            <div className="relative z-10 space-y-4">
              <h2 className="text-3xl font-black leading-tight tracking-tighter">Claim your corner of the internet.</h2>
              <p className="text-slate-400 text-sm">Find your perfect domain name today.</p>
              <div className="relative mt-4 group">
                <input 
                  type="text" 
                  placeholder="example.com"
                  onFocus={() => navigate('/search')}
                  className="w-full h-14 bg-surface-dark border border-slate-700 rounded-2xl pl-12 pr-24 focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-white"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                <button className="absolute right-2 top-2 bottom-2 bg-primary text-white font-bold px-4 rounded-xl text-sm shadow-lg shadow-blue-500/30">Search</button>
              </div>
            </div>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="px-4">
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">percent</span>
              </div>
              <div>
                <p className="text-sm font-bold">Summer Sale</p>
                <p className="text-xs text-slate-400">Get 50% off .io domains today</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-500">chevron_right</span>
          </div>
        </div>

        {/* Featured Deals Carousel */}
        <div className="space-y-4">
          <div className="px-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Featured Deals</h3>
            <button className="text-primary text-sm font-semibold">View All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-4 no-scrollbar">
            {[1, 2].map((i) => (
              <div key={i} className="min-w-[280px] h-[160px] rounded-2xl overflow-hidden relative group cursor-pointer">
                <img src={`https://picsum.photos/seed/deal-${i}/400/250`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Deal" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="flex gap-2">
                    <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">Hot</span>
                    <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">-80% Off</span>
                  </div>
                  <h4 className="font-bold text-white">Black Friday Cyber Sale</h4>
                  <p className="text-[10px] text-slate-300">Ends in 12h 45m</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 pb-4">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => navigate('/domains')} className="p-4 bg-surface-dark border border-slate-800 rounded-2xl flex flex-col items-start gap-3 hover:border-primary/50 transition-colors">
              <div className="size-10 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">public</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">My Domains</p>
                <p className="text-[10px] text-slate-500">Manage DNS</p>
              </div>
            </button>
            <button onClick={() => navigate('/billing')} className="p-4 bg-surface-dark border border-slate-800 rounded-2xl flex flex-col items-start gap-3 hover:border-primary/50 transition-colors">
              <div className="size-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined">receipt_long</span>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Billing</p>
                <p className="text-[10px] text-slate-500">Invoices & Pay</p>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
