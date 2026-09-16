import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import type { Project } from '../types';
import { ArrowUpRight, MapPin, Layers, CheckCircle, Clock } from 'lucide-react';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'kitchen' | 'wardrobe' | 'living' | 'bedroom' | 'office'>('all');

  const filterTabs = [
    { id: 'all', label: 'Barcha ishlar' },
    { id: 'kitchen', label: 'Oshxona mebellari' },
    { id: 'wardrobe', label: 'Shkaf & Garderob' },
    { id: 'living', label: 'Yumshoq mebellar' },
    { id: 'bedroom', label: 'Yotoqxona mebellari' },
    { id: 'office', label: 'Ofis mebellari' },
  ];

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categoryId === activeTab);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-cream-100/60 border-t border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-sand mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-bronze-dark" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-bronze-dark">
              Haqiqiy topshirilgan buyurtmalar
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
            Bajarilgan loyihalar va <span className="text-bronze">haqiqiy mebellar</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-normal">
            Toshkent va O‘zbekiston bo‘ylab xonadonlar, kottejlar hamda biznes markazlariga 
            o‘rnatilgan haqiqiy fotosuratlar. Har bir mebel 100% individual o‘lchamda tayyorlangan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-charcoal text-white shadow-lg -translate-y-0.5'
                  : 'bg-white text-charcoal/80 hover:text-charcoal hover:bg-cream-200 border border-sand'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border-2 border-sand/80 hover:border-bronze shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Preview with High Visual Quality */}
              <div className="relative aspect-[16/11] overflow-hidden bg-cream-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Category Pill */}
                <div className="absolute top-4 left-4 bg-charcoal/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-md">
                  {project.category}
                </div>

                {/* Real Badge */}
                <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>O‘rnatilgan</span>
                </div>

                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-charcoal group-hover:bg-bronze group-hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Meta Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-bronze-dark mb-2">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-bronze transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-charcoal/70 line-clamp-2 leading-relaxed font-normal mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Materials & Duration */}
                <div className="pt-4 border-t border-sand/60 space-y-2">
                  <div className="flex items-center space-x-1.5 text-xs text-charcoal/80 font-medium">
                    <Layers className="w-3.5 h-3.5 text-bronze shrink-0" />
                    <span className="truncate">{project.materials.slice(0, 2).join(' • ')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-charcoal/60 pt-1">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-charcoal/50" />
                      <span>Tayyorlanish: <strong>{project.duration}</strong></span>
                    </span>
                    <span className="text-bronze-dark font-bold text-xs group-hover:underline">
                      Ko‘rish & Hisoblash →
                    </span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Portfolio Reassurance Note */}
        <div className="mt-14 p-6 rounded-2xl bg-white border border-sand flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-heading font-bold text-base text-charcoal">
              Sizda shaxsiy dizayn loyihasi yoki chizmalar bormi?
            </div>
            <div className="text-xs text-charcoal/70 mt-0.5">
              Bizga chizma yoki xonangiz rasmini yuboring, 1 soat ichida materiallar va smetasini hisoblab beramiz.
            </div>
          </div>
          <a
            href="https://t.me/telegram"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 px-6 py-3 rounded-full bg-charcoal text-white font-bold text-xs uppercase tracking-wider hover:bg-bronze transition-colors shadow-md"
          >
            Chizmani Telegramdan yuborish
          </a>
        </div>

      </div>
    </section>
  );
};
