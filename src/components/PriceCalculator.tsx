import React, { useState } from 'react';
import { Calculator, Send, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { formatPrice } from '../data/furnitureData';

interface PriceCalculatorProps {
  onOpenOrder: (details: string) => void;
}

export const PriceCalculator: React.FC<PriceCalculatorProps> = ({ onOpenOrder }) => {
  const [category, setCategory] = useState<'kitchen' | 'wardrobe' | 'living' | 'tv_zone'>('kitchen');
  const [meters, setMeters] = useState<number>(3.5);
  const [tier, setTier] = useState<'standard' | 'premium' | 'luxury'>('premium');

  // Rates per pogon metr or unit in UZS
  const rates: Record<string, Record<'standard' | 'premium' | 'luxury', number>> = {
    kitchen: {
      standard: 2900000,
      premium: 3800000,
      luxury: 4800000,
    },
    wardrobe: {
      standard: 2400000,
      premium: 3200000,
      luxury: 4100000,
    },
    living: {
      standard: 2200000,
      premium: 3100000,
      luxury: 4200000,
    },
    tv_zone: {
      standard: 1800000,
      premium: 2600000,
      luxury: 3600000,
    },
  };

  const categoryNames: Record<string, string> = {
    kitchen: 'Oshxona mebeli',
    wardrobe: 'Shkaf va Garderob',
    living: 'Modulli divan / Yumshoq mebel',
    tv_zone: 'Devoriy TV-zona konsoli',
  };

  const tierNames: Record<'standard' | 'premium' | 'luxury', { name: string; desc: string }> = {
    standard: {
      name: 'Standart',
      desc: 'AGT & Egger DSP, sifatli turk petlyalari',
    },
    premium: {
      name: 'Premium (Tavsiya)',
      desc: 'Egger Matt MDF, Blum Legrabox, Kvarsit tosh',
    },
    luxury: {
      name: 'Eksklyuziv Lyuks',
      desc: 'Italiya emali, shpon, sensorli LED va Blum Tip-on',
    },
  };

  const baseRate = rates[category][tier];
  const totalPrice = Math.round(baseRate * meters);
  const monthlyPayment = Math.round(totalPrice / 12);

  const telegramMessage = encodeURIComponent(
    `Assalomu alaykum! Men mebel narxini kalkulyatorda hisobladim:\n\n` +
    `• Turi: ${categoryNames[category]}\n` +
    `• O‘lchami: ${meters} metr\n` +
    `• Material: ${tierNames[tier].name}\n` +
    `• Taxminiy qiymati: ${formatPrice(totalPrice)}\n` +
    `• 12 oylik to‘lov: oyiga ${formatPrice(monthlyPayment)}\n\n` +
    `Iltimos, ushbu hisob bo‘yicha aniq loyiha va bepul o‘lchov masalasida maslahat bering.`
  );

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-cream-100/70 border-y border-sand relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-sand mb-3">
            <Calculator className="w-3.5 h-3.5 text-bronze-dark" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-bronze-dark">
              Onlayn Narx Hisoblagich
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
            Mebelingiz narxini <span className="text-bronze">1 daqiqada</span> hisoblang
          </h2>
          <p className="mt-3 text-base text-charcoal/70">
            Xonangiz o‘lchami va istalgan material sinfini tanlang, tizim taxminiy smetani va 
            12 oylik muddatli to‘lov qiymatini darhol ko‘rsatadi.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="bg-white rounded-3xl border-2 border-sand shadow-xl p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Selectors */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Category selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 mb-3">
                  1. Mebel turini tanlang:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {(['kitchen', 'wardrobe', 'living', 'tv_zone'] as const).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCategory(key)}
                      className={`p-3 rounded-2xl text-xs font-bold text-center transition-all duration-200 border ${
                        category === key
                          ? 'bg-charcoal text-white border-charcoal shadow-md scale-102'
                          : 'bg-cream-50 text-charcoal hover:bg-cream-100 border-sand'
                      }`}
                    >
                      {categoryNames[key]}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Meters Slider */}
              <div className="bg-cream-50 p-5 rounded-2xl border border-sand">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal/70">
                    2. O‘lchami (uzunligi):
                  </label>
                  <span className="font-heading text-xl font-black text-bronze-dark">
                    {meters.toFixed(1)} metr
                  </span>
                </div>
                <input
                  type="range"
                  min="1.5"
                  max="8.0"
                  step="0.5"
                  value={meters}
                  onChange={(e) => setMeters(parseFloat(e.target.value))}
                  className="w-full h-2.5 bg-cream-200 rounded-lg appearance-none cursor-pointer accent-bronze"
                />
                <div className="flex justify-between text-[11px] text-charcoal/50 font-semibold mt-2">
                  <span>1.5 m (Kichik)</span>
                  <span>3.5 m (O‘rtacha)</span>
                  <span>5.0 m (Katta)</span>
                  <span>8.0 m (Villar/Kottej)</span>
                </div>
              </div>

              {/* 3. Material Tier */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/70 mb-3">
                  3. Material va komplektatsiya sinfi:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['standard', 'premium', 'luxury'] as const).map((t) => (
                    <div
                      key={t}
                      onClick={() => setTier(t)}
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all duration-200 ${
                        tier === t
                          ? 'border-bronze bg-bronze/5 shadow-md'
                          : 'border-sand bg-cream-50 hover:bg-white'
                      }`}
                    >
                      <div className="font-bold text-xs text-charcoal flex items-center justify-between">
                        <span>{tierNames[t].name}</span>
                        {tier === t && <CheckCircle2 className="w-3.5 h-3.5 text-bronze" />}
                      </div>
                      <div className="text-[11px] text-charcoal/60 mt-1 leading-snug">
                        {tierNames[t].desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Price Result Display */}
            <div className="lg:col-span-5 bg-charcoal text-white p-7 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-bronze/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/15">
                  <span className="text-xs uppercase tracking-widest text-white/70 font-semibold">
                    Taxminiy hisob-kitob
                  </span>
                  <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                    <Sparkles className="w-3 h-3" />
                    <span>Aksiya narxi</span>
                  </span>
                </div>

                {/* Main Price */}
                <div className="mt-5">
                  <div className="text-xs text-white/60 uppercase tracking-wider font-medium">
                    Jami smeta qiymati:
                  </div>
                  <div className="font-heading text-3xl sm:text-4xl font-extrabold text-white mt-1 tracking-tight">
                    {formatPrice(totalPrice)}
                  </div>
                  <div className="text-xs text-bronze-light font-medium mt-1">
                    1 metr uchun: {formatPrice(baseRate)} dan
                  </div>
                </div>

                {/* Installment plan */}
                <div className="mt-5 p-4 rounded-2xl bg-white/10 border border-white/15">
                  <div className="text-[11px] uppercase tracking-wider text-white/70 font-semibold">
                    0% Boshlang‘ich to‘lov bilan (12 oy):
                  </div>
                  <div className="text-xl font-bold text-emerald-300 mt-0.5">
                    oyiga {formatPrice(monthlyPayment)} dan
                  </div>
                </div>

                {/* Perks list */}
                <div className="mt-5 space-y-2 text-xs text-white/80">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-bronze-light shrink-0" />
                    <span>Bepul lazerli o‘lchov va 3D dizayn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-bronze-light shrink-0" />
                    <span>3 yillik rasmiy kafolat shartnomasi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-bronze-light shrink-0" />
                    <span>Toshkent bo‘ylab yetkazish va o‘rnatish bepul</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-7 pt-5 border-t border-white/15 space-y-2.5 relative">
                <a
                  href={`https://t.me/telegram?text=${telegramMessage}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-full bg-bronze hover:bg-bronze-dark text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Smetani Telegramga yuborish</span>
                </a>

                <button
                  type="button"
                  onClick={() =>
                    onOpenOrder(
                      `${categoryNames[category]} (${meters} metr, ${tierNames[tier].name}) - taxminiy narxi: ${formatPrice(totalPrice)}`
                    )
                  }
                  className="w-full py-3 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Bepul o‘lchovga buyurtma berish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
