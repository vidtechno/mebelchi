import React from 'react';
import { PROCESS_STEPS } from '../data/mockData';
import { MessageSquare, Ruler, Palette, Truck, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenContact: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenContact }) => {
  const stepIcons = [MessageSquare, Ruler, Palette, Truck];

  return (
    <section id="process" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze-dark block mb-3">
            Oddiy va shaffof bosqichlar
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
            G‘oyadan to o‘rnatishgacha <span className="text-bronze">4 ta qadam</span>
          </h2>
          <p className="mt-4 text-base text-charcoal/70 font-normal leading-relaxed">
            Biz bilan ishlash oson va ishonchli. Har bir bosqich sizning roziligingiz va 
            aniq hisob-kitoblar asosida amalga oshiriladi.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx];
            return (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-8 border border-sand hover:border-bronze shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number and Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="font-heading text-4xl font-black text-bronze/40 group-hover:text-bronze transition-colors">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-cream-100 group-hover:bg-charcoal flex items-center justify-center text-bronze group-hover:text-bronze-light transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cream-200 text-bronze-rich mb-3">
                    {step.highlight}
                  </span>

                  {/* Title & Desc */}
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3 group-hover:text-bronze-dark transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress bar line indication */}
                <div className="mt-6 pt-4 border-t border-sand/40 flex items-center justify-between text-xs text-charcoal/60 font-semibold">
                  <span>Bosqich {idx + 1}/4</span>
                  <ArrowRight className="w-4 h-4 text-bronze opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA underneath process */}
        <div className="mt-12 text-center">
          <p className="text-sm text-charcoal/70 mb-4 font-normal">
            O‘lcham olish va maslahat berish mutlaqo <strong className="text-charcoal font-bold">bepul</strong>.
          </p>
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-charcoal text-white text-xs font-bold uppercase tracking-wider hover:bg-bronze transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Bepul o‘lcham olishga yozilish</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
