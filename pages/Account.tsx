
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'General',
      items: [
        { label: 'Personal Information', icon: 'person', color: 'bg-primary' },
        { label: 'Security Settings', icon: 'shield_lock', color: 'bg-emerald-500', path: '/security' },
        { label: 'Notifications', icon: 'notifications', color: 'bg-indigo-500' },
        { label: 'Language', icon: 'translate', color: 'bg-sky-500', value: 'English' },
      ]
    },
    {
      title: 'Billing & Finance',
      items: [
        { label: 'Payment Methods', icon: 'credit_card', color: 'bg-slate-700' },
        { label: 'Invoices & History', icon: 'receipt_long', color: 'bg-slate-700', path: '/billing' },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-primary">chevron_left</button>
        <h1 className="text-lg font-bold">Account</h1>
        <button onClick={() => navigate('/')} className="text-primary font-bold">Done</button>
      </header>

      <main className="flex-1 pb-20 overflow-y-auto no-scrollbar">
        {/* Profile Header */}
        <div className="flex flex-col items-center py-8">
          <div className="relative">
            <div className="size-28 rounded-full border-4 border-surface-dark shadow-xl overflow-hidden">
              <img src="https://picsum.photos/seed/user123/200" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <button className="absolute bottom-0 right-0 size-9 bg-primary rounded-full border-4 border-bg-dark flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-sm">edit</span>
            </button>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-black">John Doe</h2>
            <p className="text-slate-500 text-sm font-medium">john.doe@example.com</p>
            <div className="mt-2 inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Client ID: #839210</span>
            </div>
          </div>
        </div>

        {/* Settings Sections */}
        <div className="px-4 space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h3 className="px-2 text-[10px] font-black uppercase tracking-widest text-slate-500">{section.title}</h3>
              <div className="bg-surface-dark rounded-2xl overflow-hidden divide-y divide-slate-800 shadow-sm">
                {section.items.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => item.path && navigate(item.path)}
                    className="w-full p-4 flex items-center justify-between hover:bg-white/5 active:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`size-9 ${item.color} rounded-xl flex items-center justify-center text-white shadow-sm`}>
                        <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      </div>
                      <span className="font-bold text-[15px]">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.value && <span className="text-sm text-slate-500">{item.value}</span>}
                      <span className="material-symbols-outlined text-slate-600">chevron_right</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
          
          <button className="w-full p-4 flex items-center justify-center gap-2 bg-red-500/10 text-red-500 font-bold rounded-2xl border border-red-500/20 active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined">logout</span> Log Out
          </button>

          <div className="text-center pb-8 opacity-40">
            <p className="text-[10px] font-bold uppercase tracking-widest">Version 2.4.0 (Build 392)</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;
