'use client';

import { motion } from 'motion/react';
import { Building2, ShoppingBag, Stethoscope, GraduationCap, UtensilsCrossed, Camera } from 'lucide-react';

const clients = [
  { name: 'TechVista Solutions', industry: 'Technology' },
  { name: 'Urban Spaces Realty', industry: 'Real Estate' },
  { name: 'Gourmet Delights', industry: 'Restaurant' },
  { name: 'Wellness Care Clinic', industry: 'Healthcare' },
  { name: 'Bright Future Academy', industry: 'Education' },
  { name: 'Luxe Jewels', industry: 'Jewellery' },
];

const industries = [
  { icon: Building2, name: 'Real Estate', count: '25+ Clients' },
  { icon: Stethoscope, name: 'Healthcare', count: '30+ Clients' },
  { icon: ShoppingBag, name: 'Retail', count: '40+ Clients' },
  { icon: UtensilsCrossed, name: 'Restaurants', count: '35+ Clients' },
  { icon: GraduationCap, name: 'Education', count: '20+ Clients' },
  { icon: Camera, name: 'Photography', count: '15+ Clients' },
];

export function FeaturedClients() {
  return (
    <section className="py-20 bg-white relative overflow-hidden border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Powering <span className="text-edone-primary">180+</span> Businesses Across India
          </h2>
        </motion.div>

        {/* Industries we serve */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="group flex flex-col items-center p-6 bg-gray-50 hover:bg-gradient-to-br hover:from-edone-primary/5 hover:to-edone-accent/5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <Icon className="h-7 w-7 text-edone-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 text-center mb-1">{industry.name}</h3>
                <p className="text-xs text-gray-500">{industry.count}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scrolling logos (optional placeholder) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-gray-100"
        >
          <p className="text-center text-sm text-gray-400 mb-8">Featured Clients</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-6 py-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-edone-primary/30 hover:bg-white transition-all duration-300"
              >
                <span className="text-gray-600 font-medium">{client.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
