import React, { useState } from 'react';
import { Phone, Send, MapPin, Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'Oshxona mebellari',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', category: 'Oshxona mebellari', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-bronze-dark block mb-3">
            Biz bilan bog‘laning
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal font-extrabold tracking-tight">
            Orzuingizdagi mebel loyihasini <span className="text-bronze">birga boshlaylik</span>
          </h2>
          <p className="mt-4 text-base text-charcoal/70 font-normal">
            Mutaxassislarimiz savollaringizga javob berishga va bepul maslahat hamda hisob-kitob 
            taqdim etishga hamisha tayyor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-3xl border border-sand shadow-xs flex items-start space-x-4 hover:border-bronze transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cream-200 text-bronze-dark flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                  Telefon raqamlarimiz
                </h4>
                <a
                  href="tel:+998901234567"
                  className="text-base sm:text-lg font-bold text-charcoal hover:text-bronze transition-colors block mt-1"
                >
                  +998 (90) 123-45-67
                </a>
                <a
                  href="tel:+998712000000"
                  className="text-sm font-semibold text-charcoal/70 hover:text-bronze transition-colors block"
                >
                  +998 (71) 200-00-00
                </a>
              </div>
            </div>

            {/* Telegram & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://t.me/telegram"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-5 rounded-3xl border border-sand shadow-xs flex items-center space-x-3 hover:border-sky-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50">
                    Telegram
                  </div>
                  <div className="text-sm font-bold text-charcoal group-hover:text-sky-600 transition-colors">
                    @elegantmebel_uz
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white p-5 rounded-3xl border border-sand shadow-xs flex items-center space-x-3 hover:border-pink-500 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-500 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                  <InstagramIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50">
                    Instagram
                  </div>
                  <div className="text-sm font-bold text-charcoal group-hover:text-pink-600 transition-colors">
                    @elegantmebel.uz
                  </div>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-3xl border border-sand shadow-xs flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-cream-200 text-bronze-dark flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                  Shourum va ishlab chiqarish
                </h4>
                <p className="text-sm font-semibold text-charcoal mt-1">
                  Toshkent shahri, Yashnobod tumani, Parkent ko‘chasi, 180-uy
                </p>
                <p className="text-xs text-charcoal/60 mt-1 font-normal">
                  Mo‘ljal: "Korzinka" Aviator ro‘parasi
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white p-6 rounded-3xl border border-sand shadow-xs flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-cream-200 text-bronze-dark flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                  Ish vaqti
                </h4>
                <p className="text-sm font-semibold text-charcoal mt-1">
                  Dushanba – Shanba: 09:00 – 19:00
                </p>
                <p className="text-xs text-charcoal/60 mt-0.5 font-normal">
                  Yakshanba: 10:00 – 17:00 (navbatchi mutaxassis)
                </p>
              </div>
            </div>

          </div>

          {/* Right: Modern Form UI */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-sand shadow-xl relative">
              
              <div className="mb-8">
                <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-bronze mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Onlayn ariza qoldirish</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-charcoal">
                  Mebel narxini hisoblash
                </h3>
                <p className="text-sm text-charcoal/70 mt-2 font-normal">
                  Ma’lumotlaringizni qoldiring, muhandisimiz 15 daqiqa ichida sizga qo‘ng‘iroq qiladi.
                </p>
              </div>

              {submitted ? (
                <div className="bg-cream-100 border-2 border-bronze/40 rounded-2xl p-8 text-center animate-fade-in space-y-4">
                  <div className="w-16 h-16 bg-bronze/20 text-bronze-dark rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading text-2xl font-bold text-charcoal">
                    Rahmat! Arizangiz qabul qilindi.
                  </h4>
                  <p className="text-sm text-charcoal/80 max-w-md mx-auto font-normal leading-relaxed">
                    Mutaxassisimiz tez orada ko‘rsatilgan telefon raqamingiz orqali bog‘lanadi 
                    va sizga eng maqbul yechim hamda narxlarni taqdim etadi.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-full bg-charcoal text-white hover:bg-bronze transition-colors"
                  >
                    Yana ariza qoldirish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Masalan: Sardor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-sand focus:border-bronze focus:bg-white focus:outline-none transition-colors text-sm text-charcoal font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">
                        Telefon raqamingiz *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-sand focus:border-bronze focus:bg-white focus:outline-none transition-colors text-sm text-charcoal font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">
                      Qiziqtirayotgan mebel yo‘nalishi
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-sand focus:border-bronze focus:bg-white focus:outline-none transition-colors text-sm text-charcoal font-semibold"
                    >
                      <option value="Oshxona mebellari">Oshxona mebellari</option>
                      <option value="Shkaf va garderoblar">Shkaf va garderoblar</option>
                      <option value="Yumshoq mebellar">Yumshoq mebellar</option>
                      <option value="Yotoqxona mebellari">Yotoqxona mebellari</option>
                      <option value="Ofis mebellari">Ofis mebellari</option>
                      <option value="Individual loyiha">Boshqa / Individual loyiha</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal/80 mb-2">
                      Xabar yoki xohishingiz (ixtiyoriy)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Xonangiz taxminiy o‘lchamlari yoki xohishingiz haqida yozing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-cream-50 border border-sand focus:border-bronze focus:bg-white focus:outline-none transition-colors text-sm text-charcoal resize-none font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full bg-charcoal text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-bronze transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Yuborilmoqda...</span>
                    ) : (
                      <>
                        <span>Arizani Yuborish</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-charcoal/60 font-medium">
                    Ma’lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
