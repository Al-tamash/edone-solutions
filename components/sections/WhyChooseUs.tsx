'use client';

import { motion } from 'motion/react';
import { Award, Users, Zap, Shield, Clock, TrendingUp, Lightbulb, Target, HeartHandshake } from 'lucide-react';
import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { STATS } from '@/lib/constants';

const features = [
  {
    icon: Award,
    title: 'Award-Winning Design',
    description: 'Designs that captivate, engage, and convert visitors into customers.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Blazing fast websites optimized for speed and user experience.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security protecting your data and customers.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned professionals with 8+ years of industry experience.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver projects when promised.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: HeartHandshake,
    title: 'Dedicated Support',
    description: '24/7 support and maintenance to keep your business running.',
    color: 'from-rose-500 to-red-500',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--color-logo-1),0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(var(--color-logo-2),0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--grid-line-dark)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line-dark)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
          >
            <Target className="h-4 w-4 text-edone-primary" />
            <span className="text-sm font-semibold text-edone-primary">Why Partner With Us</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6"
          >
            Built Different.{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              Built Better.
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We don't just build websites—we craft digital experiences that drive growth, inspire trust, and deliver measurable results.
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-edone-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent p-[2px] rounded-3xl">
            <div className="bg-gray-900 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {STATS.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter to={stat.value} suffix="+" />
                    </div>
                    <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
