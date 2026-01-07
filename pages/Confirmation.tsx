
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-bg-dark">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate('/')} className="material-symbols-outlined">close</button>
        <h1 className="text-lg font-bold">Confirmation</h1>
        <button className="text-primary font-bold">Help</button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8">
        <div className="relative">
          <div className="size-24 rounded-full bg-primary/20 animate-ping absolute inset-0"></div>
          <div className="size-24 rounded-full bg-primary flex items-center justify-center relative z-10 shadow-2xl shadow-blue-500/50">
            <span className="material-symbols-outlined text-5xl text-white filled-icon">check_circle</span>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-black tracking-tight">Order Confirmed!</h2>
          <p className="text-slate-400 max-w-[240px] mx-auto leading-relaxed">Thank you for your purchase. We've sent a receipt to your@email.com.</p>
        </div>

        <div className="px-6 py-2 bg-surface-dark border border-slate-800 rounded-full flex items-center gap-3">
          <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Order ID:</span>
          <span className="text-sm font-black">#ORD-29382</span>
          <button className="material-symbols-outlined text-sm text-primary">content_copy</button>
        </div>

        <div className="w-full max-w-xs space-y-6 pt-8 text-left">
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 px-1">What Happens Next?</h3>
          <div className="space-y-6 relative ml-4 pl-8 border-l-2 border-slate-800">
            {[
              { title: 'Email Sent', desc: 'Check your inbox for receipt', icon: 'mail', active: true },
              { title: 'DNS Propagating', desc: 'Usually takes 5-10 minutes', icon: 'sync', active: false },
              { title: 'Service Active', desc: 'Ready to manage your site', icon: 'check_circle', active: false },
            ].map((step, idx) => (
              <div key={step.title} className="relative">
                <div className={`absolute -left-[45px] top-0 size-8 rounded-full flex items-center justify-center border-4 border-bg-dark ${step.active ? 'bg-primary text-white' : 'bg-surface-dark text-slate-600'}`}>
                  <span className="material-symbols-outlined text-sm">{step.icon}</span>
                </div>
                <p className={`font-bold text-sm ${step.active ? 'text-white' : 'text-slate-600'}`}>{step.title}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="p-6 space-y-4 pb-12">
        <button onClick={() => navigate('/')} className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-blue-500/30 transition-transform active:scale-[0.98]">
          Back to Home
        </button>
        <button className="w-full py-4 bg-transparent text-slate-400 font-bold rounded-2xl border border-slate-800">
          View Order Details
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
