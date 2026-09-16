import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-cream-100/70 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze-dark block mb-3">
            Mijozlarimiz fikrlari
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
            Bizga ishonch bildirgan <span className="text-bronze">insonlar so‘zi</span>
          </h2>
          <p className="mt-4 text-base text-charcoal/70 font-normal">
            Har bir buyurtma biz uchun katta mas’uliyat. Mijozlarimizning samimiy minnatdorchiligi 
            bizning asosiy faxrimizdir.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 lg:p-9 border border-sand hover:border-bronze shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-sand group-hover:text-bronze/40 transition-colors" />
                </div>

                {/* Project badge */}
                <div className="inline-block px-3 py-1 rounded-md text-[11px] font-bold bg-cream-200 text-charcoal mb-4">
                  {t.project}
                </div>

                {/* Quote Text */}
                <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  “{t.quote}”
                </p>
              </div>

              {/* Author info */}
              <div className="pt-5 border-t border-sand/50 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-base font-bold text-charcoal">
                    {t.name}
                  </h4>
                  <p className="text-xs text-charcoal/60 mt-0.5 font-medium">
                    {t.role} • {t.location}
                  </p>
                </div>

                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0" title="Tasdiqlangan buyurtmachi">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
