'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { 
  Camera, 
  ArrowRight, 
  Play, 
  Eye, 
  Hotel, 
  School, 
  Building2, 
  UtensilsCrossed,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  View
} from 'lucide-react';

const virtualTours = [
  {
    id: 1,
    title: 'Luxury Hotel Suite Tour',
    category: 'Hospitality',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    description: 'Immersive 360° tour of premium hotel interiors',
    views: '15.2K',
    gradient: 'from-edone-primary to-edone-secondary',
  },
  {
    id: 2,
    title: 'Restaurant & Fine Dining',
    category: 'Food & Beverage',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    description: 'Experience the ambiance before you visit',
    views: '12.8K',
    gradient: 'from-edone-secondary to-edone-accent',
  },
  {
    id: 3,
    title: 'Modern Educational Campus',
    category: 'Education',
    icon: School,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop',
    description: 'Virtual campus walkthrough for students',
    views: '9.5K',
    gradient: 'from-edone-accent to-edone-primary',
  },
  {
    id: 4,
    title: 'Real Estate Showroom',
    category: 'Real Estate',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop',
    description: 'Property showcase with interactive hotspots',
    views: '18.3K',
    gradient: 'from-edone-primary via-edone-secondary to-edone-accent',
  },
];

const features = [
  { icon: Eye, label: 'Interactive Hotspots' },
  { icon: View, label: 'VR Ready' },
  { icon: Camera, label: 'HD Quality' },
];

export function VirtualTourShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTour = virtualTours[activeIndex];
  const ActiveIcon = activeTour.icon;

  const nextTour = () => {
    setActiveIndex((prev) => (prev + 1) % virtualTours.length);
  };

  const prevTour = () => {
    setActiveIndex((prev) => (prev - 1 + virtualTours.length) % virtualTours.length);
  };

  return (
    <section className="py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-br from-edone-primary/10 via-transparent to-edone-accent/10" />
      
      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-edone-primary/20 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-edone-accent/20 to-transparent blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20"
          >
            <Camera className="h-4 w-4 text-edone-primary" />
            <span className="text-sm font-semibold text-white">360° Virtual Tours</span>
            <Sparkles className="h-4 w-4 text-edone-secondary" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Experience Spaces{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              Virtually
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Immersive 360° virtual tours that let your customers explore your space from anywhere
          </motion.p>
        </div>

        {/* Main showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Tour Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTour.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeTour.image}
                    alt={activeTour.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeTour.gradient} opacity-40`} />
                </motion.div>
              </AnimatePresence>
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/50 group-hover:bg-white/30 transition-colors"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1" />
                </motion.button>
              </div>

              {/* 360 indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-medium text-white">360° Interactive</span>
              </div>

              {/* Views counter */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Eye className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white">{activeTour.views} views</span>
              </div>

              {/* Info card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activeTour.gradient} flex items-center justify-center`}>
                    <ActiveIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-edone-primary">{activeTour.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{activeTour.title}</h3>
                <p className="text-sm text-gray-300">{activeTour.description}</p>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevTour}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {virtualTours.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? 'bg-edone-primary w-8'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTour}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Feature badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <feature.icon className="w-4 h-4 text-edone-primary" />
                  <span className="text-sm text-white">{feature.label}</span>
                </div>
              ))}
            </div>

            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Boost Your Business with{' '}
              <span className="text-edone-primary">360° Virtual Tours</span>
            </h3>

            <div className="space-y-4 mb-8">
              {[
                { stat: '40%', text: 'Increase in customer engagement' },
                { stat: '2X', text: 'More time spent on your website' },
                { stat: '35%', text: 'Higher conversion rates' },
                { stat: 'Top', text: 'Google Maps ranking boost' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 h-10 rounded-lg bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{item.stat}</span>
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Industries served */}
            <div className="mb-8">
              <p className="text-sm text-gray-400 mb-3">Trusted by industries:</p>
              <div className="flex flex-wrap gap-2">
                {['Hotels', 'Restaurants', 'Real Estate', 'Schools', 'Showrooms', 'Gyms'].map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent text-white shadow-xl shadow-edone-primary/25 hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6 rounded-xl"
              >
                <Link href="/services/360">
                  Explore 360° Tours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl"
              >
                <Link href="/contact">
                  Get Free Demo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
