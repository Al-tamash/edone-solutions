"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { SERVICES_NAV } from "@/lib/services-data";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Camera, 
  Palette, 
  Code, 
  TrendingUp, 
  Search,
  ArrowRight
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

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

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (label: string) => {
    setExpandedService(expandedService === label ? null : label);
  };

  // Filter NAV_ITEMS to exclude Services (we'll handle it separately)
  const filteredNavItems = NAV_ITEMS.filter(item => item.label !== "Services");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-16 sm:top-20 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {/* Home Link */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
              >
                <Link
                  href="/"
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    pathname === "/"
                      ? "bg-gradient-to-r from-edone-primary/10 to-edone-secondary/10 text-edone-primary"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Home
                </Link>
              </motion.div>

              {/* Services Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="px-2">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 py-2 mt-2">
                    Services
                  </div>
                  
                  {SERVICES_NAV.map((service, index) => {
                    const Icon = iconMap[service.label] || Camera;
                    const hasChildren = service.children && service.children.length > 0;
                    const isExpanded = expandedService === service.label;

                    return (
                      <div key={service.href} className="mb-1">
                        {hasChildren ? (
                          <>
                            {/* Service with children - expandable */}
                            <button
                              onClick={() => toggleService(service.label)}
                              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                                isExpanded 
                                  ? 'bg-gradient-to-r from-edone-primary/5 to-edone-secondary/5' 
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-br ${brandGradient} text-white shadow-sm`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="flex-1 text-sm font-semibold text-gray-800">
                                {service.label}
                              </span>
                              <ChevronDown 
                                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                                  isExpanded ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>

                            {/* Children links */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="overflow-hidden"
                                >
                                  <div className="pl-12 py-2 space-y-1">
                                    {/* View All link */}
                                    <Link
                                      href={service.href}
                                      onClick={onClose}
                                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-edone-primary hover:bg-edone-primary/5 rounded-lg"
                                    >
                                      <ArrowRight className="w-3 h-3" />
                                      View All {service.label}
                                    </Link>
                                    {service.children?.map((child) => (
                                      <Link
                                        key={child.href}
                                        href={child.href}
                                        onClick={onClose}
                                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                                      >
                                        {child.label}
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          /* Service without children - direct link */
                          <Link
                            href={service.href}
                            onClick={onClose}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-all"
                          >
                            <div className={`p-2 rounded-lg bg-gradient-to-br ${brandGradient} text-white shadow-sm`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="flex-1 text-sm font-semibold text-gray-800">
                              {service.label}
                            </span>
                            <ArrowRight className="w-4 h-4 text-gray-300" />
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Divider */}
              <div className="h-px bg-gray-100 mx-4 my-2" />

              {/* Other Navigation Items */}
              {filteredNavItems.slice(1).map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index + 3) * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-edone-primary/10 to-edone-secondary/10 text-edone-primary"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 px-2"
              >
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent text-white py-6 text-base font-semibold rounded-xl shadow-lg"
                >
                  <Link href="/contact" onClick={onClose}>
                    Get Free Quote
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
