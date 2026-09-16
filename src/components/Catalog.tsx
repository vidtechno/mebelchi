import React, { useState, useMemo } from 'react';
import { FURNITURE_ITEMS, formatPrice, formatPriceUnit } from '../data/furnitureData';
import type { FurnitureItem, FurnitureCategoryId } from '../types/catalog';
import {
  Search,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Send,
  Layers,
  Star,
  CheckCircle,
} from 'lucide-react';

interface CatalogProps {
  onSelectItem: (item: FurnitureItem) => void;
  onQuickOrder: (itemTitle: string, priceText: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onSelectItem, onQuickOrder }) => {
  const [activeCategory, setActiveCategory] = useState<FurnitureCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc' | 'sale' | 'rating'>('default');

  const categories = [
    { id: 'all', label: 'Barchasi' },
    { id: 'kitchen', label: 'Oshxona mebellari' },
    { id: 'wardrobe', label: 'Shkaf & Garderob' },
    { id: 'living', label: 'Yumshoq mebel & Divanlar' },
    { id: 'bedroom', label: 'Yotoqxona to‘plamlari' },
    { id: 'office', label: 'Ofis & Kabinet' },
    { id: 'dining', label: 'TV-zona & Stol-stullar' },
  ];

  // Filtering & Sorting
  const filteredItems = useMemo(() => {
    let list = [...FURNITURE_ITEMS];

    // Category filter
    if (activeCategory !== 'all') {
      list = list.filter((item) => item.categoryId === activeCategory);
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.materials.some((m) => m.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'sale') {
      list = list.filter((a) => Boolean(a.oldPrice));
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <section id="catalog" className="py-20 lg:py-28 relative bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cream-200 border border-sand mb-4 shadow-xs">
            <Sparkles className="w-4 h-4 text-bronze-dark" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze-dark">
              Rasmiy Katalog va Narxlar
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
            Mebellar to‘plami va <span className="text-bronze">shaffof narxlar</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-normal leading-relaxed">
            Har bir mebel individual o‘lchamda, professional texnologiyalar asosida tayyorlanadi. 
            Ko‘rsatilgan narxlarga bepul lazerli o‘lchov, 3D loyiha va 3 yillik rasmiy kafolat kiradi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2 sm:gap-2.5 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as FurnitureCategoryId)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-charcoal text-white shadow-lg -translate-y-0.5'
                  : 'bg-white text-charcoal/80 hover:text-charcoal hover:bg-cream-200 border border-sand'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort Tool Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-sand shadow-xs mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-charcoal/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Mebel nomi yoki materiali bo‘yicha qidirish (masalan: akril, bouclé, emal)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-cream-50 text-xs sm:text-sm text-charcoal placeholder-charcoal/40 border border-sand focus:outline-none focus:border-bronze focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-charcoal/50 hover:text-charcoal"
              >
                Tozalash
              </button>
            )}
          </div>

          {/* Sort & Count Controls */}
          <div className="flex items-center justify-between sm:justify-end space-x-3 shrink-0">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-charcoal/60" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2.5 px-3 rounded-xl bg-cream-50 text-xs font-bold text-charcoal border border-sand focus:outline-none focus:border-bronze cursor-pointer"
              >
                <option value="default">Saralash: Hammasi</option>
                <option value="price-asc">Narxi: Avval arzonlari</option>
                <option value="price-desc">Narxi: Avval qimmatlari</option>
                <option value="sale">Faqat chegirmadagilar</option>
                <option value="rating">Reyting bo‘yicha (5.0)</option>
              </select>
            </div>

            <span className="text-xs font-semibold text-charcoal/60 bg-cream-100 px-3 py-2 rounded-xl">
              <strong>{filteredItems.length}</strong> ta model
            </span>
          </div>

        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-sand max-w-md mx-auto">
            <p className="text-base font-bold text-charcoal mb-2">
              Hech qanday mebel topilmadi
            </p>
            <p className="text-xs text-charcoal/60 mb-5">
              Qidiruv so‘zini o‘zgartirib ko‘ring yoki barcha toifalarni oching.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSortBy('default');
              }}
              className="px-5 py-2.5 rounded-full bg-charcoal text-white text-xs font-bold uppercase tracking-wider hover:bg-bronze transition-colors"
            >
              Barcha mebellarni ko‘rsatish
            </button>
          </div>
        )}

        {/* Furniture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const priceText = `${formatPrice(item.price)} ${formatPriceUnit(item.priceUnit)}`;
            const telegramDirectLink = `https://t.me/telegram?text=${encodeURIComponent(
              `Assalomu alaykum! Katalogdagi "${item.title}" mebelingiz bo‘yicha ma’lumot olmoqchi edim. Narxi: ${priceText}`
            )}`;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-3xl overflow-hidden border-2 border-sand/80 hover:border-bronze shadow-xs hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                {/* Photo with Overlay Badges */}
                <div
                  className="relative aspect-[16/11] overflow-hidden bg-cream-200 cursor-pointer"
                  onClick={() => onSelectItem(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Gradient bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Left: Category Badge */}
                  <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    {item.category}
                  </div>

                  {/* Top Right: Status / Sale Badge */}
                  {item.badge && (
                    <div className="absolute top-4 right-4 bg-bronze text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md flex items-center space-x-1">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.badge}</span>
                    </div>
                  )}

                  {/* Hover Quick Action */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-charcoal group-hover:bg-bronze group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Rating & Fast Reassurance */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center space-x-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{item.rating}</span>
                        <span className="text-charcoal/50 font-normal">({item.reviewsCount} ta izoh)</span>
                      </div>
                      <span className="text-emerald-700 font-bold text-[11px] flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>O‘rnatilgan</span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="font-heading text-xl font-bold text-charcoal group-hover:text-bronze transition-colors mb-2 leading-snug cursor-pointer line-clamp-2"
                    >
                      {item.title}
                    </h3>

                    {/* Materials Snippet */}
                    <div className="flex items-center space-x-1.5 text-xs text-charcoal/70 mb-4 truncate">
                      <Layers className="w-3.5 h-3.5 text-bronze shrink-0" />
                      <span className="truncate">{item.materials.slice(0, 2).join(' • ')}</span>
                    </div>
                  </div>

                  {/* Price Box */}
                  <div className="pt-4 border-t border-sand/60">
                    <div className="flex items-baseline justify-between gap-2">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-charcoal/50">
                          Narxi:
                        </div>
                        <div className="flex items-baseline space-x-2">
                          <span className="font-heading text-2xl font-black text-charcoal">
                            {formatPrice(item.price)}
                          </span>
                          <span className="text-xs font-bold text-bronze-dark">
                            {formatPriceUnit(item.priceUnit)}
                          </span>
                        </div>
                      </div>

                      {item.oldPrice && (
                        <div className="text-right">
                          <span className="text-xs text-charcoal/40 line-through font-semibold block">
                            {formatPrice(item.oldPrice)}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 uppercase">
                            Tejov
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Installment Line */}
                    {item.installmentPrice && (
                      <div className="mt-2 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block">
                        0% Muddatli: oyiga {formatPrice(item.installmentPrice)} dan
                      </div>
                    )}

                    {/* Delivery & Warranty */}
                    <div className="mt-3 flex items-center space-x-1.5 text-[11px] text-charcoal/60 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-bronze shrink-0" />
                      <span>Bepul yetkazish, o‘rnatish va 3 yil kafolat</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 pt-3 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onQuickOrder(item.title, priceText)}
                        className="flex-1 py-3 px-3.5 rounded-xl bg-charcoal text-white text-xs font-bold uppercase tracking-wider hover:bg-bronze transition-all duration-200 text-center shadow-xs"
                      >
                        Buyurtma berish
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectItem(item)}
                        className="py-3 px-3.5 rounded-xl bg-cream-100 hover:bg-cream-200 text-charcoal text-xs font-bold uppercase tracking-wider transition-colors"
                        title="Batafsil ma’lumot"
                      >
                        Batafsil
                      </button>

                      <a
                        href={telegramDirectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 rounded-xl bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white transition-colors shrink-0"
                        title="Telegram orqali so‘rash"
                      >
                        <Send className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassurance Banner at Catalog Bottom */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border-2 border-sand flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center lg:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-charcoal">
              Katalogda o‘zingiz qidirgan modelni topmadingizmi?
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 mt-1 max-w-2xl">
              Biz mebellarni istalgan interyer dizayni yoki internetdagi fotosurat asosida noldan yasab beramiz. 
              Rasmni yuboring — narxini 15 daqiqada hisoblab beramiz.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="https://t.me/telegram"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-charcoal text-white font-bold text-xs uppercase tracking-wider hover:bg-bronze transition-colors shadow-md"
            >
              <Send className="w-4 h-4 text-bronze-light" />
              <span>O‘z rasmingizni yuborish</span>
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-cream-200 hover:bg-cream-300 text-charcoal font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Kalkulyatorda hisoblash</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
