
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Domains from './pages/Domains';
import Hosting from './pages/Hosting';
import Account from './pages/Account';
import Billing from './pages/Billing';
import Security from './pages/Security';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Cart from './pages/Cart';
import DomainSearch from './pages/DomainSearch';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import { CartItem } from './types';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: 'Home', icon: 'home', path: '/' },
    { label: 'Dashboard', icon: 'monitoring', path: '/dashboard' },
    { label: 'Domains', icon: 'language', path: '/domains' },
    { label: 'Hosting', icon: 'dns', path: '/hosting' },
    { label: 'Account', icon: 'person', path: '/account' },
  ];

  // Hide nav on checkout or onboarding
  const hideNav = ['/checkout', '/confirmation', '/onboarding'].includes(location.pathname);
  if (hideNav) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-xl border-t border-slate-800 pb-safe">
      <div className="max-w-md mx-auto flex justify-around py-3 px-2">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 ${isActive(item.path) ? 'text-primary scale-110' : 'text-slate-500 hover:text-slate-300'}`}
          >
            <span className={`material-symbols-outlined text-[22px] ${isActive(item.path) ? 'filled-icon' : ''}`}>
              {item.icon}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-bg-dark text-slate-100 max-w-md mx-auto shadow-2xl relative overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/account" element={<Account />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/search" element={<DomainSearch setCart={setCart} />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}
