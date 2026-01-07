
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hosting = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Shared Starter',
      price: 3.99,
      features: ['1 Website', '10GB SSD Storage', 'Free SSL Certificate'],
      color: 'border-slate-800'
    },
    {
      name: 'Business Pro',
      price: 8.99,
      features: ['Unlimited Websites', '100GB NVMe SSD', 'Daily Backups'],
      popular: true,
      color: 'border-primary'
    },
    {
      name: 'Dedicated Power',
      price: 29.99,
      features: ['Dedicated IP', 'Unlimited Bandwidth', 'Priority Support'],
      color: 'border-slate-800'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <div className="size-10"></div>
        <h1 className="text-lg font-bold">Hosting Plans</h1>
        <button className="material-symbols-outlined">filter_list</button>
      </header>

      <main className="p-4 space-y-8 pb-20">
        <div className="p-1 bg-slate-900 rounded-xl flex h-12">
          <button className="flex-1 text-xs font-bold rounded-lg text-slate-500">Monthly</button>
          <button className="flex-1 text-xs font-bold rounded-lg bg-bg-dark text-white flex items-center justify-center gap-2">
            Yearly <span className="bg-emerald-500/20 text-emerald-500 text-[9px] px-1.5 py-0.5 rounded-full">-20%</span>
          </button>
        </div>

        <div className="space-y-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-surface-dark rounded-3xl p-6 border-2 shadow-xl relative overflow-hidden transition-transform active:scale-[0.99] ${plan.color}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-2xl">
                  Most Popular
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-black text-slate-100">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-black text-white tracking-tighter">${plan.price}</span>
                    <span className="text-slate-500 text-sm font-bold">/mo</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1">Perfect for personal projects and blogs.</p>
                </div>
                <div className="h-px bg-slate-800"></div>
                <ul className="space-y-3">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                      <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-black text-sm transition-all ${plan.popular ? 'bg-primary text-white shadow-xl shadow-blue-500/20' : 'bg-transparent border border-primary text-primary'}`}>
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Hosting;
