import React from 'react';
import type { Category } from '../types';
import { X, Check, ArrowRight } from 'lucide-react';

interface CategoryModalProps {
  category: Category | null;
  onClose: () => void;
  onSelectForOrder: (categoryTitle: string) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({ category, onClose, onSelectForOrder }) => {
  if (!category) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border-2 border-sand max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal/80 hover:bg-charcoal text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="relative aspect-[16/10] w-full bg-cream-200">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <span className="text-xs uppercase tracking-widest text-bronze-light font-bold block mb-1">
                {category.subtitle}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                {category.title}
              </h3>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-charcoal/80 font-normal leading-relaxed">
              {category.description}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-3">
                Ushbu toifaning asosiy afzalliklari va texnologiyalari:
              </h4>
              <div className="space-y-2.5">
                {category.features.map((f, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-charcoal/90 font-medium">
                    <div className="w-5 h-5 rounded-full bg-cream-200 text-bronze-dark flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-sand/60 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectForOrder(category.title);
                }}
                className="flex-1 py-3.5 px-6 rounded-full bg-charcoal text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-bronze transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Ushbu yo‘nalish bo‘yicha hisoblatish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
