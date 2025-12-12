'use client';

import { MessageCircle } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export function FloatingWhatsApp() {
  const phoneNumber = COMPANY.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent("Hi! I'm interested in 360° Virtual Tour services for my business.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden group-hover:inline-block font-medium whitespace-nowrap">
        Chat Now
      </span>
    </a>
  );
}
