import React, { useState } from 'react';
import { Send, Phone, MessageCircle, X } from 'lucide-react';

export const QuickContactFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Options */}
      {isOpen && (
        <div className="mb-3 space-y-2.5 animate-fade-in">
          <a
            href="https://t.me/telegram"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-sky-500 text-white shadow-xl hover:bg-sky-600 transition-transform hover:scale-105 text-xs font-semibold"
          >
            <Send className="w-4 h-4" />
            <span>Telegramda yozish</span>
          </a>

          <a
            href="tel:+998901234567"
            className="flex items-center space-x-2.5 px-4 py-2.5 rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-700 transition-transform hover:scale-105 text-xs font-semibold"
          >
            <Phone className="w-4 h-4" />
            <span>Qo‘ng‘iroq qilish</span>
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 rounded-full bg-charcoal text-white shadow-2xl flex items-center justify-center hover:bg-bronze transition-all duration-300 transform hover:scale-105"
        aria-label="Tezkor aloqa"
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-bronze/30 animate-ping pointer-events-none group-hover:opacity-0" />
        
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 text-bronze-light" />
        )}
      </button>
    </div>
  );
};
