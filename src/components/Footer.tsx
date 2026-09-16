import React from 'react';
import { Phone, Send, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-bronze text-white flex items-center justify-center font-heading font-black text-sm">
                  E
                </div>
                <span className="font-heading text-2xl font-black tracking-tight text-white">
                  ELEGANT <span className="font-light text-bronze-light">MEBEL</span>
                </span>
              </div>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-white/50 font-bold mt-1">
                Atelier & Fabrika
              </span>
            </a>

            <p className="text-sm text-white/70 font-normal leading-relaxed max-w-sm">
              Buyurtma asosida zamonaviy va yuqori sifatli mebellar. Xonadoningiz va biznesingiz 
              uchun eksklyuziv dizayn, 1 mm aniq o‘lcham va 3 yillik rasmiy kafolat.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://t.me/telegram"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-bronze hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-bronze hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="tel:+998901234567"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/90 hover:bg-bronze hover:text-white transition-colors"
                aria-label="Telefon"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-bronze-light">
              Bo‘limlar
            </h4>
            <ul className="space-y-2 text-sm text-white/70 font-medium">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Bosh sahifa</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Afzalliklarimiz</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Xizmatlar</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">Ish jarayoni</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Mijozlar fikri</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-bronze-light">
              Mebel Yo‘nalishlari
            </h4>
            <ul className="space-y-2 text-sm text-white/70 font-medium">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Oshxona mebellari</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Shkaf va garderoblar</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Yumshoq mebel to‘plamlari</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Yotoqxona mebellari</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Ofis va kabinet mebellari</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Individual loyihalar</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-bronze-light">
              Bog‘lanish
            </h4>
            <div className="space-y-3 text-sm text-white/70 font-normal">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-bronze-light shrink-0 mt-0.5" />
                <span>Toshkent sh., Parkent ko‘chasi, 180-uy</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-bronze-light shrink-0" />
                <a href="tel:+998901234567" className="hover:text-white transition-colors font-semibold">
                  +998 (90) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-bronze-light shrink-0" />
                <span>Har kuni: 09:00 – 19:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4 font-medium">
          <p>© {new Date().getFullYear()} Elegant Mebel. Barcha huquqlar himoyalangan.</p>
          
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1">
              <span>Sifat bilan yaratilgan mebellar</span>
              <Heart className="w-3.5 h-3.5 text-bronze-light fill-bronze-light" />
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1 hover:text-white transition-colors p-1"
            >
              <span>Yuqoriga</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
