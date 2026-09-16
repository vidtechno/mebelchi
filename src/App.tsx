import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { Portfolio } from './components/Portfolio';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { CategoryModal } from './components/CategoryModal';
import { QuickContactFloating } from './components/QuickContactFloating';
import type { Project, Category } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiry = (targetName: string) => {
    scrollToContact();
    setTimeout(() => {
      const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
      if (textarea) {
        textarea.value = `Assalomu alaykum, men "${targetName}" bo‘yicha batafsil ma’lumot va narxini bilmoqchi edim.`;
        textarea.focus();
      }
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-charcoal selection:bg-bronze selection:text-white font-sans antialiased">
      {/* Sticky Header */}
      <Navbar onOpenContact={scrollToContact} />

      {/* Main Content */}
      <main className="flex-grow">
        <Hero onOpenContact={scrollToContact} />
        <About />
        <Categories
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onOpenContact={scrollToContact}
        />
        <Portfolio
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
        <MaterialsShowcase />
        <Process onOpenContact={scrollToContact} />
        <Testimonials />
        <CtaBanner onOpenContact={scrollToContact} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Fast Action */}
      <QuickContactFloating />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
        onSelectForOrder={handleOpenInquiry}
      />
    </div>
  );
}

export default App;
