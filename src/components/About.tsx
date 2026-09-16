import React from 'react';
import { Gem, Compass, ClockCheck, Hammer, CheckCircle2 } from 'lucide-react';
import { TRUST_STATS } from '../data/mockData';

export const About: React.FC = () => {
  const features = [
    {
      icon: Gem,
      title: 'Sifatli materiallar',
      subtitle: 'Premium xomashyo',
      description: 'Germaniya va Avstriyaning Egger, Blum, Hettich brendlari materiallari. Namlik va tirnalishga chidamli fasadlar.',
      perks: ['Ekologik toza E1 sertifikati', 'Silliq va shovqinsiz yopilish'],
    },
    {
      icon: Compass,
      title: 'Individual dizayn',
      subtitle: 'Noyob loyiha',
      description: 'Har bir buyurtma uchun eksklyuziv 3D model yaratamiz. Xonadon arxitekturasi va didingizga 100% moslashadi.',
      perks: ['Bepul 3D vizualizatsiya', 'Rang va tekstura namunalari'],
    },
    {
      icon: Hammer,
      title: 'Aniqlik va professionallik',
      subtitle: '1 mm aniqlik',
      description: '10 yildan ortiq tajribaga ega mohir ustalarimiz zamonaviy lazer uskunalari bilan xona geometriyasiga moslab o‘rnatadi.',
      perks: ['Lazerli aniq o‘lchov', 'Chang va tirnalishsiz o‘rnatish'],
    },
    {
      icon: ClockCheck,
      title: 'Tez va mas’uliyatli xizmat',
      subtitle: 'Shartnomaviy intizom',
      description: 'Muddatlarni qat’iy bajaramiz. Ishlab chiqarishdan to tayyor holatgacha shaxsiy muhandis nazorat qiladi.',
      perks: ['15-25 kun ichida topshirish', '3 yillik rasmiy kafolat hujjati'],
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-cream-100/70 border-y border-sand/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze-dark block mb-3">
            Nega aynan biz?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
            Har bir detalda mukammallik va <span className="text-bronze">ishonch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal/70 font-normal leading-relaxed">
            Biz shunchaki mebel yasab bermaymiz — uyingizda qulaylik, zamonaviy estetika va 
            yillar davomida xizmat qiluvchi sifatni barpo etamiz.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-3xl p-7 lg:p-8 border border-sand hover:border-bronze transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-cream-200 group-hover:bg-charcoal flex items-center justify-center text-bronze-dark group-hover:text-bronze-light transition-all duration-300 mb-6 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-bold text-bronze-dark block mb-1">
                    {feature.subtitle}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-3 group-hover:text-bronze-dark transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand/50 space-y-2">
                  {feature.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center space-x-2 text-xs font-medium text-charcoal/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-bronze shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Counter Stripe */}
        <div className="mt-16 lg:mt-20 bg-charcoal text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-bronze/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className={`space-y-2 ${idx > 1 ? 'pt-6 md:pt-0' : ''}`}>
                <div className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-bronze-light">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-white tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-white/60 font-normal">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
