
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Security = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back_ios_new</button>
        <h1 className="text-lg font-bold">Security Settings</h1>
        <div className="size-10"></div>
      </header>

      <main className="p-4 space-y-6">
        {/* Security Summary Card */}
        <div className="relative overflow-hidden bg-surface-dark rounded-3xl p-6 shadow-xl border border-slate-800 group">
          <div className="absolute top-0 right-0 size-32 bg-primary/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
          <div className="relative z-10 flex items-center gap-4">
            <div className="relative">
              <div className="size-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <div className="absolute -bottom-1 -right-1 size-5 bg-emerald-500 rounded-full border-2 border-surface-dark flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-white">check</span>
              </div>
            </div>
            <div>
              <h2 className="text-lg font-black">Security Status: Good</h2>
              <p className="text-xs text-slate-400 mt-1">Your account protection is active. No issues detected.</p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-2">
          <h3 className="px-2 text-[10px] font-black uppercase tracking-widest text-slate-500">Two-Factor Authentication</h3>
          <div className="bg-surface-dark rounded-2xl overflow-hidden divide-y divide-slate-800 shadow-sm border border-slate-800">
            <div className="p-4 flex items-center justify-between bg-primary/5">
              <div className="flex items-center gap-4">
                <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                  <span className="material-symbols-outlined">phonelink_lock</span>
                </div>
                <div>
                  <p className="font-bold text-primary">Authenticator App</p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Recommended</p>
                </div>
              </div>
              <div className="w-12 h-7 bg-primary rounded-full relative p-1 flex items-center justify-end">
                <div className="size-5 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined">sms</span>
                </div>
                <div>
                  <p className="font-bold text-slate-300">SMS Verification</p>
                  <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-0.5">Backup Option</p>
                </div>
              </div>
              <div className="w-12 h-7 bg-slate-700 rounded-full relative p-1 flex items-center justify-start">
                <div className="size-5 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Sessions with Map */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500">Active Sessions</h3>
            <button className="text-primary text-[10px] font-black uppercase tracking-widest">See All</button>
          </div>
          <div className="bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-slate-800">
            <div className="h-32 bg-slate-900 relative">
              <img src="https://picsum.photos/seed/map/600/200" className="w-full h-full object-cover opacity-50 grayscale" alt="Map" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="size-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></span>
                <span className="text-[10px] font-black uppercase tracking-widest">Active now in Tokyo, JP</span>
              </div>
            </div>
            <div className="divide-y divide-slate-800">
              <div className="p-4 flex items-center justify-between bg-primary/5">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">smartphone</span>
                  <div>
                    <p className="text-sm font-bold">iPhone 14 Pro</p>
                    <p className="text-xs text-slate-500">iOS 17 • Tokyo, JP</p>
                  </div>
                </div>
                <span className="bg-emerald-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">Current</span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-4 opacity-70">
                  <span className="material-symbols-outlined text-slate-400">laptop_mac</span>
                  <div>
                    <p className="text-sm font-bold">MacBook Pro</p>
                    <p className="text-xs text-slate-500">Chrome • Osaka, JP</p>
                  </div>
                </div>
                <button className="text-red-500 text-[10px] font-black uppercase">Revoke</button>
              </div>
            </div>
            <button className="w-full py-4 text-red-500 text-xs font-black uppercase border-t border-slate-800 hover:bg-red-500/5 transition-colors">
              Log out all other devices
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Security;
