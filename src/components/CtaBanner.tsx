import React from 'react';
import { Send, PhoneCall, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden bg-charcoal text-white">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
          <Sparkles className="w-4 h-4 text-bronze-light" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/90">
            Bepul 3D dizayn va smeta hisoblash
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl mx-auto">
          Biznesingiz yoki uyingiz uchun <span className="text-bronze-light">ideal mebel</span> qidiryapsizmi?
        </h2>

        <p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Bizga hoziroq murojaat qiling. Mutaxassislarimiz loyihangizni batafsil tahlil qilib, 
          optimal materiallar va qulay narx taklifini tayyorlab berishadi.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenContact}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-bronze text-white font-bold text-sm tracking-wide shadow-xl hover:bg-bronze-dark transition-all duration-300 hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Hozir bog‘lanish</span>
          </button>

          <a
            href="https://t.me/telegram"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm tracking-wide border border-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <Send className="w-4 h-4 text-bronze-light" />
            <span>Telegramga yozish</span>
          </a>
        </div>

        <p className="mt-6 text-xs text-white/50 font-medium">
          * Maslahat olish va smetani hisoblab berish mutlaqo bepul.
        </p>

      </div>
    </section>
  );
};
