import React from 'react';
import type { FurnitureItem } from '../types/catalog';
import { formatPrice, formatPriceUnit } from '../data/furnitureData';
import { X, Send, Phone, CheckCircle2, Clock, Shield, Ruler, Sparkles, Layers } from 'lucide-react';

interface FurnitureModalProps {
  item: FurnitureItem | null;
  onClose: () => void;
  onSelectForOrder: (itemTitle: string, priceText: string) => void;
}

export const FurnitureModal: React.FC<FurnitureModalProps> = ({ item, onClose, onSelectForOrder }) => {
  if (!item) return null;

  const priceText = `${formatPrice(item.price)} ${formatPriceUnit(item.priceUnit)}`;
  const telegramMessage = encodeURIComponent(
    `Assalomu alaykum! Men katalogdagi "${item.title}" mebelingiz bo‘yicha qiziqayotgan edim.\n` +
    `Narxi: ${priceText}\n` +
    `Iltimos, ushbu model bo‘yicha o‘lchamlar va buyurtma berish tafsilotlarini aytsangiz.`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/75 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-sand max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-charcoal/80 hover:bg-charcoal text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          {/* Main Photo Banner */}
          <div className="relative aspect-[16/10] w-full bg-cream-200">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="bg-charcoal/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                {item.category}
              </span>
              {item.badge && (
                <span className="bg-bronze text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center space-x-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{item.badge}</span>
                </span>
              )}
            </div>

            {/* Bottom Title & Highlight */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Price & Installment Highlight Banner */}
            <div className="bg-cream-100/90 border-2 border-bronze/30 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60 block">
                  Belgilangan rasmiy narxi:
                </span>
                <div className="flex items-baseline space-x-3 mt-0.5">
                  <span className="font-heading text-2xl sm:text-3xl font-black text-charcoal">
                    {formatPrice(item.price)}
                  </span>
                  <span className="text-sm font-bold text-bronze-dark">
                    {formatPriceUnit(item.priceUnit)}
                  </span>
                  {item.oldPrice && (
                    <span className="text-sm text-charcoal/40 line-through font-semibold">
                      {formatPrice(item.oldPrice)}
                    </span>
                  )}
                </div>
              </div>

              {item.installmentPrice && (
                <div className="bg-white px-4 py-2.5 rounded-xl border border-sand text-left sm:text-right shrink-0">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                    0% Bo‘lib to‘lash:
                  </span>
                  <span className="text-base font-extrabold text-emerald-800">
                    oyiga {formatPrice(item.installmentPrice)}
                  </span>
                </div>
              )}
            </div>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pb-4 border-b border-sand/60">
              <div className="flex items-center space-x-2.5 text-xs text-charcoal/90 font-medium">
                <Clock className="w-4 h-4 text-bronze shrink-0" />
                <span>Muddati: <strong>{item.productionTime}</strong></span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-charcoal/90 font-medium">
                <Shield className="w-4 h-4 text-bronze shrink-0" />
                <span>Kafolat: <strong>{item.warranty}</strong></span>
              </div>
              {item.dimensions && (
                <div className="flex items-center space-x-2.5 text-xs text-charcoal/90 font-medium col-span-2 sm:col-span-1">
                  <Ruler className="w-4 h-4 text-bronze shrink-0" />
                  <span>O‘lchov: <strong>{item.dimensions}</strong></span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-2">
                Mebel haqida ma’lumot
              </h4>
              <p className="text-sm sm:text-base text-charcoal/80 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Materials Used */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-2.5 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-bronze" />
                <span>Ishlatiladigan premium xomashyolar:</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cream-200 text-charcoal"
                  >
                    <CheckCircle2 className="w-3 h-3 text-bronze-dark" />
                    <span>{mat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Included in Order */}
            <div className="bg-sand/20 p-4 rounded-2xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/70 mb-2">
                Buyurtma ichiga nimalar bepul kiradi?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/85">
                {item.features.map((f, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-sand/60 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSelectForOrder(item.title, priceText);
                }}
                className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full bg-charcoal text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-bronze transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:-translate-y-0.5"
              >
                <span>Shu mebelga buyurtma berish</span>
              </button>

              <a
                href={`https://t.me/telegram?text=${telegramMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-sky-200"
              >
                <Send className="w-4 h-4" />
                <span>Telegramdan so‘rash</span>
              </a>

              <a
                href="tel:+998901234567"
                className="w-full sm:w-auto py-3.5 px-5 rounded-full bg-cream-200 hover:bg-cream-300 text-charcoal font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Qo‘ng‘iroq</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
