'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Camera, 
  Palette, 
  Code, 
  TrendingUp, 
  Search, 
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';
import { SERVICES_NAV } from '@/lib/services-data';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  '360 Virtual Tours': Camera,
  'Website Design': Palette,
  'Website Development': Code,
  'Google Ads': TrendingUp,
  'SEO Services': Search,
};

// Use brand gradient for all services
const brandGradient = 'from-edone-primary to-edone-secondary';

// Short descriptions for each service
const serviceDescriptions: Record<string, string> = {
  '360 Virtual Tours': 'Immersive virtual tours for hotels, hospitals & more',
  'Website Design': 'Modern, responsive website designs that convert',
  'Website Development': 'Fast, secure & scalable web development',
  'Google Ads': 'High-ROI paid advertising campaigns',
  'SEO Services': 'Rank higher on Google organically',
};

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [activeService, setActiveService] = useState<string>('360 Virtual Tours');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on escape
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setFocusedIndex(-1);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleEscape as unknown as EventListener);
    return () => document.removeEventListener('keydown', handleEscape as unknown as EventListener);
  }, [isOpen]);

  // Focus management
  useEffect(() => {
    if (focusedIndex >= 0 && menuItemsRef.current[focusedIndex]) {
      menuItemsRef.current[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const totalItems = SERVICES_NAV.length;

    switch (event.key) {
      case 'Enter':
      case ' ':
        if (!isOpen) {
          event.preventDefault();
          setIsOpen(true);
          setFocusedIndex(0);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => (prev + 1) % totalItems);
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev - 1 + totalItems) % totalItems);
        }
        break;
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
    }
  };

  // Get active service data
  const activeServiceData = SERVICES_NAV.find(s => s.label === activeService);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="services-menu"
        className={`flex items-center gap-1 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-edone-primary focus-visible:ring-offset-2 rounded-sm py-1 ${
          isOpen ? 'text-edone-primary' : 'text-gray-700 hover:text-edone-primary'
        }`}
      >
        Services
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="services-menu"
            role="menu"
            aria-orientation="vertical"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            {/* Triangle pointer */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
            
            <div className="flex">
              {/* Left Panel - Service List */}
              <div className="w-[280px] bg-gradient-to-b from-gray-50 to-gray-100/50 p-4 border-r border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-3">
                  Our Services
                </p>
                <div className="space-y-1">
                  {SERVICES_NAV.map((service, index) => {
                    const Icon = iconMap[service.label] || Camera;
                    const isActive = activeService === service.label;

                    return (
                      <button
                        key={service.href}
                        onMouseEnter={() => setActiveService(service.label)}
                        onClick={() => {
                          if (!service.children) {
                            setIsOpen(false);
                            window.location.href = service.href;
                          }
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all duration-200 ${
                          isActive 
                            ? 'bg-white shadow-md' 
                            : 'hover:bg-white/60'
                        }`}
                      >
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${brandGradient} text-white shadow-sm ${isActive ? 'scale-110' : ''} transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`block text-sm font-semibold truncate ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                            {service.label}
                          </span>
                        </div>
                        {service.children && (
                          <ArrowRight className={`w-4 h-4 transition-all ${isActive ? 'text-edone-primary opacity-100 translate-x-0' : 'text-gray-300 opacity-0 -translate-x-2'}`} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Panel - Details */}
              <div className="flex-1 p-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                  >
                    {activeServiceData?.children ? (
                      <>
                        {/* Header for service with children */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1">
                              {activeServiceData.label}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {serviceDescriptions[activeServiceData.label]}
                            </p>
                          </div>
                          <Link
                            href={activeServiceData.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-semibold text-edone-primary hover:text-edone-secondary flex items-center gap-1 whitespace-nowrap"
                          >
                            View All <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        {/* Sub-pages grid */}
                        <div className="grid grid-cols-2 gap-2">
                          {activeServiceData.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="group flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-edone-primary/5 hover:to-edone-secondary/5 border border-transparent hover:border-edone-primary/10 transition-all"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-edone-primary group-hover:to-edone-secondary flex items-center justify-center transition-all">
                                <Star className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                              </div>
                              <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                {child.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Header for service without children */}
                        <div className="text-center py-6">
                          <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${brandGradient} text-white flex items-center justify-center shadow-lg`}>
                            {(() => {
                              const Icon = iconMap[activeService] || Code;
                              return <Icon className="w-8 h-8" />;
                            })()}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {activeServiceData?.label}
                          </h3>
                          <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
                            {serviceDescriptions[activeService]}
                          </p>
                          <Link
                            href={activeServiceData?.href || '/services'}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-edone-primary to-edone-secondary text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all"
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-edone-primary" />
                <span className="text-xs text-gray-500">Need help choosing? Talk to our experts</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold text-white bg-gradient-to-r from-edone-primary to-edone-secondary px-4 py-1.5 rounded-full hover:shadow-md transition-shadow"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
