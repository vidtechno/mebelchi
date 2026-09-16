import React from 'react';
import { PARTNER_BRANDS } from '../data/mockData';
import { CheckCircle, Shield, Award, Sparkles } from 'lucide-react';

export const MaterialsShowcase: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Strip Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 text-bronze-dark text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Xalqaro Sifat Standartlari</span>
          </div>
          <h3 className="font-heading text-2xl sm:text-3xl text-charcoal font-extrabold tracking-tight">
            Faqat rasmiy Yevropa brendlari bilan ishlaymiz
          </h3>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {PARTNER_BRANDS.map((b, idx) => (
            <div
              key={idx}
              className="bg-cream-50 p-5 rounded-2xl border border-sand text-center hover:border-bronze hover:shadow-md transition-all duration-300 group"
            >
              <div className="font-heading text-xl font-black tracking-tight text-charcoal group-hover:text-bronze transition-colors">
                {b.name}
              </div>
              <div className="text-[11px] text-charcoal/60 mt-1 font-medium">
                {b.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Quality Badges */}
        <div className="mt-10 pt-8 border-t border-sand/60 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center space-x-3 text-charcoal/90 text-xs sm:text-sm font-semibold">
            <Shield className="w-5 h-5 text-bronze shrink-0" />
            <span>Formaldegidsiz E1 ekologik xavfsiz MDF</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-charcoal/90 text-xs sm:text-sm font-semibold">
            <Award className="w-5 h-5 text-bronze shrink-0" />
            <span>200,000 marta ochilishga kafolat</span>
          </div>
          <div className="flex items-center justify-center space-x-3 text-charcoal/90 text-xs sm:text-sm font-semibold">
            <CheckCircle className="w-5 h-5 text-bronze shrink-0" />
            <span>Namlik va issiqlikka bardoshli termo-qoplama</span>
          </div>
        </div>

      </div>
    </section>
  );
};
