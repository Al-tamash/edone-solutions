'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  GraduationCap, 
  Stethoscope, 
  UtensilsCrossed, 
  ShoppingBag, 
  Home,
  Briefcase,
  Plane,
  Dumbbell,
  Car,
  Sparkles,
  ArrowRight
} from 'lucide-react';

const industries = [
  {
    id: 1,
    name: 'Hotels & Hospitality',
    icon: Building2,
    projects: 25,
    description: 'Virtual tours, websites, booking systems',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 2,
    name: 'Real Estate',
    icon: Home,
    projects: 32,
    description: 'Property tours, listing websites',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    name: 'Education',
    icon: GraduationCap,
    projects: 18,
    description: 'Campus tours, e-learning platforms',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Healthcare',
    icon: Stethoscope,
    projects: 15,
    description: 'Hospital tours, clinic websites',
    gradient: 'from-red-500 to-pink-500',
  },
  {
    id: 5,
    name: 'Restaurants & Cafes',
    icon: UtensilsCrossed,
    projects: 28,
    description: 'Ambiance tours, online ordering',
    gradient: 'from-yellow-500 to-amber-500',
  },
  {
    id: 6,
    name: 'Retail & Showrooms',
    icon: ShoppingBag,
    projects: 22,
    description: 'Store tours, e-commerce',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    id: 7,
    name: 'Corporate Offices',
    icon: Briefcase,
    projects: 12,
    description: 'Office tours, company websites',
    gradient: 'from-slate-600 to-gray-700',
  },
  {
    id: 8,
    name: 'Travel & Tourism',
    icon: Plane,
    projects: 10,
    description: 'Destination tours, booking portals',
    gradient: 'from-sky-500 to-blue-500',
  },
  {
    id: 9,
    name: 'Gyms & Fitness',
    icon: Dumbbell,
    projects: 8,
    description: 'Facility tours, membership sites',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    id: 10,
    name: 'Automotive',
    icon: Car,
    projects: 6,
    description: 'Showroom tours, dealer websites',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export function IndustriesServed() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(var(--color-logo-1),0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(var(--color-logo-2),0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-edone-primary/10 px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="h-4 w-4 text-edone-primary" />
            <span className="text-sm font-semibold text-edone-primary">Industry Expertise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Industries{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              We Serve
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Specialized digital solutions tailored for diverse business verticals
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative bg-white rounded-2xl p-5 border border-gray-100 hover:border-edone-primary/30 hover:shadow-xl transition-all duration-300 h-full cursor-pointer">
                {/* Icon Container */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Name */}
                <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-edone-primary transition-colors">
                  {industry.name}
                </h3>
                
                {/* Project Count */}
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span className="font-medium text-edone-primary">{industry.projects}+</span>
                  <span>projects</span>
                </div>

                {/* Hover Description */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-8 pb-4 px-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl">
                  <p className="text-xs text-gray-600">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-2xl p-8 mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '12+', label: 'Industries' },
              { value: '15+', label: 'Cities' },
              { value: '180+', label: 'Clients' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">Don't see your industry? We work with businesses of all types!</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent text-white shadow-xl shadow-edone-primary/25 text-lg px-8 py-6 rounded-xl"
          >
            <Link href="/contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
