'use client';

import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Camera, Palette, Code, TrendingUp } from 'lucide-react';
import { SERVICES_NAV } from '@/lib/services-data';

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  '360 Virtual Tours': Camera,
  'Website Design': Palette,
  'Website Development': Code,
  'Google Ads': TrendingUp,
};

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
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
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-edone-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-edone-primary focus-visible:ring-offset-2 rounded-sm py-1"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="grid grid-cols-2 gap-0">
              {SERVICES_NAV.map((service, index) => {
                const Icon = iconMap[service.label] || Camera;
                return (
                  <div
                    key={service.href}
                    className={`p-4 ${index % 2 === 0 ? 'border-r border-gray-100' : ''} ${
                      index < 2 ? 'border-b border-gray-100' : ''
                    } hover:bg-edone-primary-50 transition-colors`}
                  >
                    {/* Service Category Link */}
                    <Link
                      href={service.href}
                      ref={(el) => { menuItemsRef.current[index] = el; }}
                      role="menuitem"
                      tabIndex={isOpen ? 0 : -1}
                      onKeyDown={handleKeyDown}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 mb-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-edone-primary rounded-md"
                    >
                      <div className="p-2 bg-gradient-to-br from-edone-primary to-edone-secondary rounded-lg text-white group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-gray-900 group-hover:text-edone-primary transition-colors">
                        {service.label}
                      </span>
                    </Link>

                    {/* Category Links */}
                    {service.children && (
                      <ul className="space-y-1 ml-11">
                        {service.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              role="menuitem"
                              tabIndex={isOpen ? 0 : -1}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-gray-600 hover:text-edone-primary transition-colors py-0.5 focus:outline-none focus-visible:text-edone-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-sm text-edone-accent hover:text-edone-accent-dark font-medium transition-colors inline-flex items-center gap-1"
              >
                View all services →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
