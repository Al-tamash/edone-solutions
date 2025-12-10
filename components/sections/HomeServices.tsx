'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Palette, Code, Camera, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SERVICES } from '@/lib/constants';

const iconMap = {
  Palette: Palette,
  Code: Code,
  Camera: Camera,
};

const gradientMap = [
  'from-edone-primary via-edone-secondary to-edone-accent',
  'from-edone-accent via-edone-primary to-edone-secondary',
  'from-edone-secondary via-edone-accent to-edone-primary',
];

const serviceImages = [
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop',
];

export function HomeServices() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,150,30,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(9,164,230,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-edone-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-edone-primary" />
            <span className="text-sm font-semibold text-edone-primary">What We Do Best</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Services That{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              Drive Results
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            From concept to launch, we deliver digital solutions that transform your business and delight your customers.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const gradient = gradientMap[index % gradientMap.length];
            const image = serviceImages[index % serviceImages.length];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link
                  href={`/services#${service.id}`}
                  className="group block h-full"
                >
                  <div className="relative h-full bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-edone-primary/10 hover:border-edone-primary/30 transition-all duration-500 overflow-hidden">
                    {/* Service image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="h-10 w-10 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-edone-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Features preview */}
                      <div className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`} />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                        <span className="font-semibold text-edone-primary group-hover:text-edone-secondary transition-colors">
                          Learn More
                        </span>
                        <div className="w-10 h-10 rounded-full bg-edone-primary/10 flex items-center justify-center group-hover:bg-edone-primary group-hover:scale-110 transition-all duration-300">
                          <ArrowRight className="h-5 w-5 text-edone-primary group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            className="group bg-gray-900 hover:bg-gray-800 text-white text-lg px-8 py-6 rounded-xl shadow-xl"
          >
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
