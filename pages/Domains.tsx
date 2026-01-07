
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Domains = () => {
  const navigate = useNavigate();

  const myDomains = [
    { name: 'myshop.com', expiry: 'in 2 days', status: 'expiring', price: 12.99 },
    { name: 'portfolio.io', expiry: 'Nov 2024', status: 'active', price: 35.00 },
    { name: 'startup.app', expiry: 'Jan 2025', status: 'active', price: 9.99 },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back_ios_new</button>
        <h1 className="text-lg font-bold">My Domains</h1>
        <button onClick={() => navigate('/search')} className="material-symbols-outlined text-primary">add</button>
      </header>

      <main className="p-4 space-y-6 flex-1">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search domains..."
            className="w-full h-11 bg-surface-dark rounded-xl pl-11 pr-4 border-none focus:ring-2 focus:ring-primary"
          />
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">search</span>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['All', 'Active', 'Expiring', 'Expired'].map((tag, idx) => (
            <button key={tag} className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${idx === 0 ? 'bg-primary text-white' : 'bg-surface-dark text-slate-400'}`}>
              {tag}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">3 Active Domains</h2>
            <button className="text-slate-500 material-symbols-outlined">tune</button>
          </div>

          {myDomains.map((domain) => (
            <div key={domain.name} className={`p-4 bg-surface-dark rounded-2xl border-l-4 shadow-sm ${domain.status === 'expiring' ? 'border-red-500' : 'border-transparent'}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">language</span>
                  </div>
                  <div>
                    <p className="font-bold">{domain.name}</p>
                    <p className={`text-[10px] font-semibold uppercase tracking-widest ${domain.status === 'expiring' ? 'text-red-500' : 'text-emerald-500'}`}>
                      {domain.status === 'expiring' ? `Expiring ${domain.expiry}` : `Active • Expires ${domain.expiry}`}
                    </p>
                  </div>
                </div>
                <button className="material-symbols-outlined text-slate-500">more_horiz</button>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Auto-renew</span>
                  <div className={`w-9 h-5 rounded-full relative flex items-center p-1 cursor-pointer transition-colors ${domain.status === 'active' ? 'bg-primary' : 'bg-slate-700'}`}>
                    <div className={`size-3 rounded-full bg-white transition-transform ${domain.status === 'active' ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </div>
                </div>
                {domain.status === 'expiring' ? (
                  <button className="bg-red-500/10 text-red-500 text-xs font-black px-4 py-1.5 rounded-lg uppercase tracking-tight hover:bg-red-500/20 transition-colors">Renew Now</button>
                ) : (
                  <button className="text-primary text-xs font-bold">DNS Settings</button>
                )}
              </div>
            </div>
          ))}

          <div onClick={() => navigate('/search')} className="p-8 border-2 border-dashed border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-surface-dark/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">add_link</span>
            <p className="text-sm font-bold">Register a new domain</p>
            <p className="text-xs text-slate-500">Starting at $9.99/yr</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Domains;
