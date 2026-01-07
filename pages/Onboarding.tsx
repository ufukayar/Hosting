
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const slides = [
    {
      title: 'Find Your Perfect Domain',
      desc: 'Search thousands of extensions instantly. Claim your unique identity and start your brand today.',
      icon: 'public',
      img: 'https://picsum.photos/seed/onboard1/500/500'
    },
    {
      title: 'Powerful Hosting Plans',
      desc: 'From shared hosting to dedicated servers. Scalable, high-performance solutions for every project.',
      icon: 'dns',
      img: 'https://picsum.photos/seed/onboard2/500/500'
    },
    {
      title: 'Secure & Fast Payments',
      desc: 'Manage renewals and pay securely with one tap. Transparent billing with no hidden fees.',
      icon: 'verified_user',
      img: 'https://picsum.photos/seed/onboard3/500/500'
    }
  ];

  const next = () => {
    if (step === slides.length - 1) navigate('/');
    else setStep(step + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-dark p-6">
      <div className="flex justify-end pt-8">
        <button onClick={() => navigate('/')} className="text-slate-500 font-bold">Skip</button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-12">
        <div className="relative size-72 rounded-3xl overflow-hidden shadow-2xl group">
          <img src={slides[step].img} alt="Illustration" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-24 rounded-3xl bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 shadow-2xl">
              <span className="material-symbols-outlined text-5xl text-primary">{slides[step].icon}</span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4 max-w-xs">
          <h2 className="text-3xl font-black tracking-tighter">{slides[step].title}</h2>
          <p className="text-slate-400 leading-relaxed">{slides[step].desc}</p>
        </div>
      </div>

      <div className="pb-12 space-y-8">
        <div className="flex justify-center gap-3">
          {slides.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${step === i ? 'w-8 bg-primary' : 'w-1.5 bg-slate-800'}`}></div>
          ))}
        </div>
        <button onClick={next} className="w-full py-4 bg-primary text-white font-black rounded-2xl shadow-2xl shadow-blue-500/30 flex items-center justify-center gap-2">
          {step === slides.length - 1 ? 'Get Started' : 'Next'} <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
