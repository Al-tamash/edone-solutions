'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export function HomeCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-edone-primary/40 to-edone-secondary/30 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-l from-edone-accent/40 to-edone-primary/20 blur-3xl"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-light)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-light)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8"
            >
              <Sparkles className="h-4 w-4 text-edone-primary" />
              <span className="text-sm font-semibold text-white">Ready to Start?</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-tight"
            >
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                Amazing Together
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
            >
              Get a free consultation and discover how we can transform your digital presence. No obligations, just genuine advice.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                asChild
                size="lg"
                className="group bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent text-white shadow-xl shadow-edone-primary/25 hover:shadow-2xl hover:shadow-edone-primary/30 hover:scale-105 transition-all duration-300 text-lg px-10 py-7 rounded-2xl"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Get Your Free Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="group bg-white text-gray-900 hover:bg-gray-100 border-2 border-white shadow-lg text-lg px-10 py-7 rounded-2xl transition-all duration-300"
              >
                <Link href="/portfolio" className="flex items-center">
                  View Portfolio
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* Phone */}
            <a
              href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
              className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Call Us</div>
                <div className="text-lg font-semibold text-white">{COMPANY.phone}</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY.email}`}
              className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-edone-accent to-edone-primary flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Email Us</div>
                <div className="text-lg font-semibold text-white">{COMPANY.email}</div>
              </div>
            </a>

            {/* Location */}
            <a
              href={COMPANY.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm hover:bg-white/15 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-edone-secondary to-edone-accent flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Visit Us</div>
                <div className="text-lg font-semibold text-white">Hyderabad, India</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
