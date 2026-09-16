import React from 'react';
import { Ruler, ShieldCheck, Clock, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';
import { PARTNER_BRANDS } from '../data/mockData';

export const TrustPerks: React.FC = () => {
  const perks = [
    {
      icon: Ruler,
      title: 'Lazerli bepul o‘lchov',
      subtitle: '1 mm aniqlik',
      desc: 'Muhandisimiz xonadoningizga kelib bepul o‘lchaydi va 3D vizual loyiha tayyorlaydi.',
    },
    {
      icon: ShieldCheck,
      title: '3 yillik rasmiy kafolat',
      subtitle: 'Shartnoma asosida',
      desc: 'Barcha furnitura, mexanizmlar va fasadlar uchun yuridik kafolat hujjati beriladi.',
    },
    {
      icon: Clock,
      title: '15-20 kunda tayyorlash',
      subtitle: 'Kafolatlangan muddat',
      desc: 'O‘z fabrikamizda tezkor ishlab chiqarish va uyingizda chang-to‘zonsiz toza montaj.',
    },
    {
      icon: CreditCard,
      title: '0% Muddatli to‘lov',
      subtitle: '12 oygacha bo‘lib to‘lash',
      desc: 'Ortiqcha foizlarsiz, qulay oylik to‘lovlar bilan yangi mebelga ega bo‘ling.',
    },
  ];

  return (
    <section id="perks" className="py-16 lg:py-20 bg-white border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cream-200 text-bronze-dark text-xs font-bold uppercase tracking-widest mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kafolatlangan Sifat</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-charcoal font-extrabold tracking-tight">
            Nega aynan bizning mebellarni tanlashadi?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bg-cream-50 p-6 rounded-3xl border border-sand hover:border-bronze hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cream-200 text-bronze-dark flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-bronze-dark">
                    {p.subtitle}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-charcoal mt-1 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-normal">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-sand/60 flex items-center space-x-1.5 text-xs text-emerald-800 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% kafolatlangan</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Official European Brands Banner Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-cream-100/70 border border-sand flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-heading font-bold text-sm sm:text-base text-charcoal">
              Faqat rasmiy Yevropa xomashyolari bilan ishlaymiz:
            </div>
            <div className="text-xs text-charcoal/60 mt-0.5">
              Egger (Germaniya), Blum (Avstriya), AGT (Turkiya), Hettich (Germaniya), Hafele.
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {PARTNER_BRANDS.slice(0, 5).map((b, bIdx) => (
              <span
                key={bIdx}
                className="px-3 py-1.5 rounded-xl bg-white border border-sand text-xs font-bold text-charcoal shadow-2xs"
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
