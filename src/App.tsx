import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { PriceCalculator } from './components/PriceCalculator';
import { TrustPerks } from './components/TrustPerks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FurnitureModal } from './components/FurnitureModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import type { FurnitureItem } from './types/catalog';

export function App() {
  const [selectedFurniture, setSelectedFurniture] = useState<FurnitureItem | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenOrder = (itemName: string, priceInfo?: string) => {
    scrollToContact();
    setTimeout(() => {
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.value = `Assalomu alaykum! Men "${itemName}" ${
          priceInfo ? `(${priceInfo})` : ''
        } bo‘yicha buyurtma bermoqchiman va bepul o‘lchovga yozilmoqchiman.`;
        textarea.focus();
      }
    }, 450);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal selection:bg-bronze selection:text-white font-sans antialiased">
      {/* Sticky Header */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenContact={scrollToContact} />

        {/* 2. Core Centerpiece: Furniture Catalog & Prices */}
        <Catalog
          onSelectItem={(item) => setSelectedFurniture(item)}
          onQuickOrder={(title, price) => handleOpenOrder(title, price)}
        />

        {/* 3. Interactive Price Calculator */}
        <PriceCalculator onOpenOrder={(details) => handleOpenOrder(details)} />

        {/* 4. Compact Trust & European Brand Guarantees */}
        <TrustPerks />

        {/* 5. Contact & Fast Consultation */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fast Floating Buttons */}
      <QuickContactFloating />

      {/* Detailed Furniture Pricing & Specs Modal */}
      <FurnitureModal
        item={selectedFurniture}
        onClose={() => setSelectedFurniture(null)}
        onSelectForOrder={(title, price) => handleOpenOrder(title, price)}
      />
    </div>
  );
}

export default App;
