'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

interface StickyCTAProps {
  serviceName?: string;
}

export function StickyCTA({ serviceName = "this service" }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 400px
      if (window.scrollY > 400 && !isDismissed) {
        setIsVisible(true);
      } else if (window.scrollY <= 400) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in ${serviceName}. Can you please share more details?`
  );

  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-white/10 backdrop-blur-lg shadow-2xl"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Message */}
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg">
                Ready to get started?
              </p>
              <p className="text-gray-400 text-sm">
                Get a free consultation today — no obligation!
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-edone-primary to-edone-secondary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Get Quote</span>
              </Link>
              
              {/* Dismiss button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
