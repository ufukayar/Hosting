
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Billing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back_ios_new</button>
        <h1 className="text-lg font-bold">Billing & Invoices</h1>
        <button className="material-symbols-outlined">more_horiz</button>
      </header>

      <main className="p-4 space-y-6">
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 bg-surface-dark rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Due</span>
              <span className="material-symbols-outlined text-orange-500">warning</span>
            </div>
            <div>
              <p className="text-3xl font-black">$15.00</p>
              <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-1">Due Immediately</p>
            </div>
          </div>
          <div className="p-5 bg-surface-dark rounded-2xl border border-slate-800 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Next Invoice</span>
              <span className="material-symbols-outlined text-primary">calendar_month</span>
            </div>
            <div>
              <p className="text-lg font-bold">Nov 01, 2023</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Auto-pay ON</p>
            </div>
          </div>
        </div>

        {/* Filter Toggle */}
        <div className="p-1 bg-slate-900 rounded-xl flex">
          {['All', 'Unpaid', 'Paid'].map((tab, idx) => (
            <button key={tab} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${idx === 0 ? 'bg-primary text-white shadow-lg shadow-blue-500/30' : 'text-slate-500'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Recent Transactions</h2>
          <div className="space-y-3">
            {[
              { id: '005', title: 'Hosting Renewal - Starter', date: 'Oct 24, 2023', price: 15.00, status: 'unpaid', color: 'text-orange-500' },
              { id: '004', title: 'Domain Registration', date: 'Sep 15, 2023', price: 12.99, status: 'paid', color: 'text-emerald-500' },
              { id: '003', title: 'SSL Certificate - DV', date: 'Aug 01, 2023', price: 49.00, status: 'paid', color: 'text-emerald-500' },
              { id: '002', title: 'Business Email Pro', date: 'Jul 01, 2023', price: 5.00, status: 'paid', color: 'text-emerald-500' },
            ].map((inv) => (
              <div key={inv.id} className="p-4 bg-surface-dark rounded-2xl border border-slate-800 flex items-center gap-4 active:scale-[0.98] transition-transform">
                <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${inv.status === 'unpaid' ? 'bg-orange-500/10 text-orange-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                  <span className="material-symbols-outlined">{inv.status === 'unpaid' ? 'receipt' : 'check_circle'}</span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <p className="text-sm font-bold">{inv.title}</p>
                    <p className="font-bold">${inv.price.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[10px] text-slate-500">#INV-2023-{inv.id} • {inv.date}</p>
                    <span className={`text-[10px] font-black uppercase tracking-widest ${inv.color}`}>{inv.status}</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-700">chevron_right</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="sticky bottom-0 left-0 right-0 p-4 bg-bg-dark border-t border-slate-800 flex items-center justify-between gap-6 pb-8">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Outstanding</span>
          <span className="text-xl font-black">$15.00</span>
        </div>
        <button className="flex-1 h-12 bg-primary text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 hover:bg-blue-600 active:scale-[0.98] transition-all">
          Pay Now <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Billing;
