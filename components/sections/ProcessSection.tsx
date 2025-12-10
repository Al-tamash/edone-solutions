'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Rocket, Target, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and competition to craft a winning digital strategy.',
    icon: Target,
    color: 'from-edone-primary to-edone-secondary',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our designers create stunning, user-centric interfaces that align with your brand and engage your audience.',
    icon: Palette,
    color: 'from-edone-secondary to-edone-accent',
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'We build robust, scalable solutions using cutting-edge technologies with rigorous quality assurance.',
    icon: Zap,
    color: 'from-edone-accent to-edone-primary',
  },
  {
    number: '04',
    title: 'Launch & Growth',
    description: 'Go live with confidence! We provide ongoing support and optimization to fuel your continued success.',
    icon: Rocket,
    color: 'from-edone-primary to-edone-accent',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(9,164,230,0.08),transparent_40%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-edone-secondary/10 px-4 py-2 rounded-full mb-6"
          >
            <Rocket className="h-4 w-4 text-edone-secondary" />
            <span className="text-sm font-semibold text-edone-secondary">How It Works</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            From Idea to{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              Reality
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Our proven 4-step process ensures your project is delivered on time, on budget, and beyond expectations.
          </motion.p>
        </div>

        {/* Process steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:border-edone-primary/20 transition-all duration-300 h-full">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-lg">
                      <span className="text-white text-sm font-bold">{step.number}</span>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-edone-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button
              asChild
              size="lg"
              className="group bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent text-white shadow-xl shadow-edone-primary/25 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-xl"
            >
              <Link href="/contact">
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
