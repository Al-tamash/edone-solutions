'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, CheckCircle2, Star, MousePointer2 } from 'lucide-react';
import { STATS } from '@/lib/constants';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
          alt="Modern office workspace"
          fill
          priority
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-edone-primary-50/80 via-white/90 to-edone-accent-50/80" />
      
      {/* Animated mesh grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

      {/* Floating orbs - animated background elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
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
          className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-edone-primary/30 to-edone-secondary/20 blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-edone-accent/30 to-edone-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-edone-secondary/20 to-transparent blur-2xl"
        />
      </motion.div>

      {/* Main content */}
      <motion.div style={{ opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            {/* Announcement badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg shadow-edone-primary/10 border border-edone-primary/20 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-edone-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-edone-primary" />
              </span>
              <span className="text-sm font-semibold text-gray-800">
                Trusted by <span className="text-edone-primary">180+</span> businesses in Hyderabad
              </span>
              <Sparkles className="h-4 w-4 text-edone-secondary" />
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight"
            >
              We Build{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
                  Digital Excellence
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-edone-primary/20 via-edone-secondary/20 to-edone-accent/20 -rotate-1 origin-left rounded"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed font-light"
            >
              Transform your business with{' '}
              <span className="font-medium text-gray-800">stunning websites</span>,{' '}
              <span className="font-medium text-gray-800">custom applications</span>, and{' '}
              <span className="font-medium text-gray-800">immersive 360° virtual tours</span>{' '}
              that captivate your audience and drive results.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
            >
              <Button
                asChild
                size="lg"
                className="group relative bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent text-white shadow-xl shadow-edone-primary/25 hover:shadow-2xl hover:shadow-edone-primary/30 transition-all duration-300 text-lg px-8 py-6 rounded-xl"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group border-2 border-gray-300 hover:border-edone-primary bg-white/50 backdrop-blur-sm text-lg px-8 py-6 rounded-xl hover:bg-white transition-all duration-300"
              >
                <Link href="/portfolio" className="flex items-center">
                  <Play className="mr-2 h-5 w-5 text-edone-primary group-hover:scale-110 transition-transform" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-gray-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Quick Turnaround</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1">5.0 Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-edone-primary/20">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                  alt="Professional team working on digital projects"
                  width={600}
                  height={500}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-lg">180+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Happy Clients</p>
                    <p className="text-xs text-gray-500">Across India</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating services card */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-edone-accent to-edone-primary flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Premium Design</p>
                    <p className="text-xs text-gray-500">5+ Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats section with glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mt-16 lg:mt-20"
        >
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-200/50 border border-white/80 p-8 md:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-br from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedCounter to={stat.value} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-gray-400"
        >
          <MousePointer2 className="h-5 w-5 mb-1" />
          <span className="text-xs">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
