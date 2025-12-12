'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Check, Star, X } from 'lucide-react';
import { PricingPackage } from '@/lib/types';
import { Button } from '@/components/ui/button';

// Comparison feature type
interface ComparisonFeature {
  name: string;
  value: boolean | string;
}

interface PricingCardProps {
  package: PricingPackage;
  className?: string;
  delay?: number;
  comparisonFeatures?: ComparisonFeature[];
}

export function PricingCard({ package: pkg, className = '', delay = 0, comparisonFeatures }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl overflow-hidden ${
        pkg.isPopular
          ? 'bg-gradient-to-br from-edone-primary to-edone-secondary shadow-xl scale-105 z-10'
          : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg'
      } ${className}`}
    >
      {/* Popular Badge */}
      {pkg.isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-edone-accent text-white text-xs font-bold px-4 py-1 rounded-bl-lg flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            POPULAR
          </div>
        </div>
      )}

      <div className={`p-6 ${pkg.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
        {/* Package Name */}
        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
        {pkg.description && (
          <p className={`text-sm ${pkg.isPopular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'} mb-4`}>
            {pkg.description}
          </p>
        )}

        {/* Price */}
        <div className="mb-6">
          <span className="text-4xl font-extrabold">{pkg.price}</span>
          {pkg.priceNote && (
            <span className={`text-sm ${pkg.isPopular ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'} ml-2`}>
              {pkg.priceNote}
            </span>
          )}
        </div>

        {/* Comparison Features (if provided) */}
        {comparisonFeatures ? (
          <ul className="space-y-2 mb-6">
            {comparisonFeatures.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm">
                {feature.value === true ? (
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    pkg.isPopular ? 'bg-white/20' : 'bg-green-100 dark:bg-green-900/30'
                  }`}>
                    <Check className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-green-600 dark:text-green-400'}`} />
                  </div>
                ) : feature.value === false || feature.value === 'no' ? (
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    pkg.isPopular ? 'bg-white/10' : 'bg-gray-100 dark:bg-gray-800'
                  }`}>
                    <X className={`w-3 h-3 ${pkg.isPopular ? 'text-white/50' : 'text-gray-400'}`} />
                  </div>
                ) : (
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    pkg.isPopular ? 'bg-white/20' : 'bg-edone-primary/10'
                  }`}>
                    <Check className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-edone-primary'}`} />
                  </div>
                )}
                <span className={`flex-1 ${pkg.isPopular ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}`}>
                  {feature.name}
                </span>
                {typeof feature.value === 'string' && feature.value !== 'no' && (
                  <span className={`font-medium ${pkg.isPopular ? 'text-white' : 'text-edone-primary'}`}>
                    {feature.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          /* Original Features List */
          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    pkg.isPopular ? 'bg-white/20' : 'bg-edone-primary/10'
                  }`}
                >
                  <Check
                    className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-edone-primary'}`}
                  />
                </div>
                <span className={`text-sm ${pkg.isPopular ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'}`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <Button
          asChild
          className={`w-full ${
            pkg.isPopular
              ? 'bg-white text-edone-primary hover:bg-gray-100'
              : 'bg-gradient-to-r from-edone-primary to-edone-secondary text-white hover:opacity-90'
          }`}
          size="lg"
        >
          <Link href={pkg.ctaLink || '/contact'}>{pkg.ctaText || 'Get Started'}</Link>
        </Button>
      </div>
    </motion.div>
  );
}

// Enhanced comparison feature type for grid
interface ComparisonData {
  features: Array<{
    name: string;
    basic: boolean | string;
    premium: boolean | string;
    platinum: boolean | string;
    custom: boolean | string;
  }>;
}

interface PricingGridProps {
  packages: PricingPackage[];
  className?: string;
  comparisonData?: ComparisonData;
}

export function PricingGrid({ packages, className = '', comparisonData }: PricingGridProps) {
  // Map packages to their comparison features if data exists
  const getComparisonFeatures = (pkgName: string): ComparisonFeature[] | undefined => {
    if (!comparisonData) return undefined;
    
    const tierKey = pkgName.toLowerCase() as 'basic' | 'premium' | 'platinum' | 'custom';
    
    return comparisonData.features.map((f) => ({
      name: f.name,
      value: f[tierKey],
    }));
  };

  return (
    <div
      className={`grid gap-6 ${
        packages.length === 2
          ? 'md:grid-cols-2 max-w-3xl mx-auto'
          : packages.length === 3
          ? 'md:grid-cols-3'
          : 'md:grid-cols-2 lg:grid-cols-4'
      } ${className}`}
    >
      {packages.map((pkg, index) => (
        <PricingCard 
          key={pkg.id} 
          package={pkg} 
          delay={index * 0.1} 
          comparisonFeatures={getComparisonFeatures(pkg.name)}
        />
      ))}
    </div>
  );
}

