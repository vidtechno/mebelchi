import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Send, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Bosh sahifa', href: '#home' },
    { label: 'Afzalliklar', href: '#about' },
    { label: 'Xizmatlar', href: '#categories' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Jarayon', href: '#process' },
    { label: 'Fikrlar', href: '#testimonials' },
    { label: 'Aloqa', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-sand/60 py-3.5'
            : 'bg-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Modern Architectural Logo */}
            <a href="#home" className="group flex flex-col">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-xl bg-charcoal text-white flex items-center justify-center font-heading font-black text-sm group-hover:bg-bronze transition-colors">
                  E
                </div>
                <span className="font-heading text-2xl font-extrabold tracking-tight text-charcoal transition-colors">
                  ELEGANT <span className="font-light text-bronze">MEBEL</span>
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal/60 font-semibold pl-10 -mt-1">
                Atelier & Fabrika
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-sand/80 shadow-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal/80 hover:text-charcoal hover:bg-cream-200/80 rounded-full transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:+998901234567"
                className="flex items-center space-x-2.5 text-xs font-bold text-charcoal/90 hover:text-bronze transition-colors px-2 py-1"
              >
                <div className="w-8 h-8 rounded-full bg-cream-200 flex items-center justify-center text-bronze-dark">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+998 (90) 123-45-67</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                }}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold tracking-wider uppercase bg-charcoal text-white rounded-full hover:bg-bronze transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Bog‘lanish</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href="https://t.me/telegram"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-cream-200 text-charcoal hover:bg-bronze hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-charcoal hover:bg-cream-200 transition-colors"
                aria-label="Menyu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-[#FAF9F6] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-sand">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-charcoal text-white flex items-center justify-center font-heading font-black text-xs">
                  E
                </div>
                <span className="font-heading text-lg font-black tracking-tight text-charcoal">
                  ELEGANT <span className="text-bronze font-light">MEBEL</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-charcoal/70 hover:text-charcoal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-semibold uppercase tracking-wider text-charcoal hover:text-bronze hover:bg-cream-100 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-sand space-y-3">
            <a
              href="tel:+998901234567"
              className="flex items-center space-x-3 text-sm font-semibold text-charcoal/90 p-2"
            >
              <Phone className="w-4 h-4 text-bronze" />
              <span>+998 (90) 123-45-67</span>
            </a>
            <a
              href="#contact"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-bold uppercase tracking-wider bg-charcoal text-white rounded-full hover:bg-bronze transition-colors shadow-md"
            >
              Bog‘lanish
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
