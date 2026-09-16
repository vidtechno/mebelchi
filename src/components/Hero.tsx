import React from 'react';
import { Send, ArrowDownRight, Sparkles, ShieldCheck, Ruler, Award, Calendar, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Subtle Background Glow Elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-sand/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Bold Modern Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 animate-fade-up">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cream-200/90 border border-sand/90 shadow-xs">
              <Sparkles className="w-4 h-4 text-bronze-dark" />
              <span className="text-xs font-bold tracking-wider uppercase text-charcoal/90">
                Premium mebel ishlab chiqarish • O‘zbekiston
              </span>
            </div>

            {/* Main Modern Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.12] text-charcoal tracking-tight">
              Uyingiz va biznesingiz uchun{' '}
              <span className="text-bronze">
                zamonaviy mebel
              </span>{' '}
              yechimlari
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-charcoal/75 max-w-2xl leading-relaxed font-normal">
              Oshxona, shkaf va garderob, yumshoq hamda ofis mebellarini individual o‘lchamda 
              ishlab chiqaramiz. Germaniya va Avstriya materiallari, bepul 3D vizualizatsiya hamda 3 yillik rasmiy kafolat.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="https://t.me/telegram"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full bg-charcoal text-white font-bold text-sm tracking-wide shadow-xl hover:bg-bronze hover:shadow-bronze/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-bronze-light" />
                <span>Telegram orqali yozish</span>
              </a>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-white hover:bg-cream-100 text-charcoal font-bold text-sm border-2 border-sand hover:border-bronze transition-all duration-300 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-bronze" />
                <span>Bepul o‘lchovga yozilish</span>
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center space-x-1.5 px-5 py-4 rounded-full bg-cream-200/80 hover:bg-cream-300 text-charcoal font-bold text-sm transition-colors"
              >
                <span>Portfolio</span>
                <ArrowDownRight className="w-4 h-4 text-bronze" />
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-6 border-t border-sand/80 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center text-bronze-dark shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-base font-extrabold text-charcoal">450+</div>
                  <div className="text-xs text-charcoal/70 font-medium">Bajarilgan loyihalar</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center text-bronze-dark shrink-0">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-base font-extrabold text-charcoal">1 mm</div>
                  <div className="text-xs text-charcoal/70 font-medium">Lazerli aniq montaj</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center text-bronze-dark shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-heading text-base font-extrabold text-charcoal">3 Yil</div>
                  <div className="text-xs text-charcoal/70 font-medium">Rasmiy kafolat</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Real Furniture Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Real Furniture Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group bg-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85"
                  alt="Haqiqiy zamonaviy oshxona mebeli"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />

                {/* Bottom Card Overlay Details */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-bronze text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    <CheckCircle className="w-3 h-3" />
                    <span>Real loyiha • 2025</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold leading-tight">
                    Marmar orolli zamonaviy oshxona
                  </h3>
                  <p className="text-xs text-white/80 mt-1 font-medium">
                    Tashkent City • Egger MDF & Blum furnituralari
                  </p>
                </div>
              </div>

              {/* Floating Quality Badge (Top Right) */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-charcoal text-white p-4 rounded-2xl shadow-xl border border-white/10 hidden sm:flex items-center space-x-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-bronze/20 border border-bronze/40 flex items-center justify-center text-bronze-light">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-white/70 uppercase tracking-wider font-semibold">Blum & Egger</div>
                  <div className="text-sm font-bold text-white">Avstriya va Germaniya</div>
                </div>
              </div>

              {/* Floating Review Card (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-sand max-w-[270px]">
                <div className="flex items-center space-x-1.5 text-amber-500 mb-1.5">
                  {'★'.repeat(5)}
                  <span className="text-xs font-bold text-charcoal ml-1">5.0 / 5.0</span>
                </div>
                <p className="text-xs text-charcoal/80 font-medium leading-relaxed">
                  “Dizayni juda bejirim chiqdi, har bir tokcha va chiroqlar a’lo darajada ishlayapti.”
                </p>
                <div className="mt-2 text-[11px] text-charcoal/60 font-bold">
                  — Mirobod tumani, Toshkent
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
