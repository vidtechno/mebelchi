import React from 'react';
import { CATEGORIES } from '../data/mockData';
import { ArrowUpRight, Check } from 'lucide-react';
import type { Category } from '../types';

interface CategoriesProps {
  onSelectCategory: (category: Category) => void;
  onOpenContact: () => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory, onOpenContact }) => {
  return (
    <section id="categories" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze-dark block mb-3">
              Kolleksiyalar va yo‘nalishlar
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
              Har bir xona uchun <span className="text-bronze">mukammal</span> mebel
            </h2>
            <p className="mt-4 text-base text-charcoal/70 font-normal">
              Biz faqat yuqori sifatli va uzoq yillik chidamlilikka ega bo‘lgan buyurtma mebellarini 
              loyihalashtiramiz va kafolat bilan o‘rnatib beramiz.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="self-start md:self-end inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-bronze transition-colors pb-1 border-b-2 border-charcoal hover:border-bronze"
          >
            <span>Katalog bo‘yicha maslahat</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-sand hover:border-bronze shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[16/11] overflow-hidden bg-cream-200">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Subtle Overlay Badge */}
                <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wide">
                  {cat.subtitle}
                </div>

                {/* Hover Quick Action */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-charcoal group-hover:bg-bronze group-hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-charcoal mb-2.5 group-hover:text-bronze transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-5 font-normal">
                    {cat.description}
                  </p>
                </div>

                {/* Features Bullets */}
                <div className="space-y-2 pt-4 border-t border-sand/50 mb-6">
                  {cat.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-2 text-xs font-medium text-charcoal/80">
                      <div className="w-4 h-4 rounded-full bg-cream-200 flex items-center justify-center text-bronze shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer Button */}
                <button
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold tracking-wider uppercase text-charcoal bg-cream-100 hover:bg-charcoal hover:text-white transition-all duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Batafsil ma’lumot olish</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
