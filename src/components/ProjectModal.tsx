import React from 'react';
import type { Project } from '../types';
import { X, MapPin, Calendar, Clock, Send, Check } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenInquiry }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-sand max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal/80 hover:bg-charcoal text-white flex items-center justify-center transition-colors shadow-lg"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto">
          {/* Main Hero Image */}
          <div className="relative aspect-[16/10] w-full bg-cream-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-6 right-6 text-white">
              <span className="inline-block text-[11px] uppercase tracking-widest text-bronze-light font-bold mb-1">
                {project.category}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Modal Details Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pb-6 border-b border-sand/60">
              <div className="flex items-center space-x-2.5 text-xs text-charcoal/90 font-medium">
                <MapPin className="w-4 h-4 text-bronze shrink-0" />
                <span>{project.location}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-charcoal/90 font-medium">
                <Calendar className="w-4 h-4 text-bronze shrink-0" />
                <span>Topshirilgan: {project.year}</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs text-charcoal/90 font-medium">
                <Clock className="w-4 h-4 text-bronze shrink-0" />
                <span>Tayyorlash muddati: {project.duration}</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-2">
                Loyiha haqida batafsil
              </h4>
              <p className="text-sm sm:text-base text-charcoal/80 font-normal leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Materials Used */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60 mb-3">
                Ishlatilgan material va furnituralar
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cream-200 text-charcoal"
                  >
                    <Check className="w-3.5 h-3.5 text-bronze-dark" />
                    <span>{mat}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons inside modal */}
            <div className="pt-6 border-t border-sand/60 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenInquiry(project.title);
                }}
                className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-full bg-charcoal text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-bronze transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Shunga o‘xshash loyihani hisoblatish</span>
              </button>

              <a
                href={`https://t.me/telegram?text=${encodeURIComponent(`Salom! Men "${project.title}" loyihasi bo‘yicha narxini bilmoqchiman.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-sky-50 text-sky-700 hover:bg-sky-100 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center space-x-2 border border-sky-200"
              >
                <Send className="w-4 h-4" />
                <span>Telegramdan so‘rash</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
