'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically, a professional website takes 2-4 weeks depending on complexity. Simple landing pages can be ready in 1 week, while e-commerce or custom web applications may take 4-8 weeks. We always provide a detailed timeline before starting."
  },
  {
    question: "What is a 360° Virtual Tour and how does it help my business?",
    answer: "A 360° Virtual Tour is an immersive, interactive experience that allows potential customers to explore your business space online. It's proven to increase engagement by 40%, boost Google ranking, and help customers make informed decisions. Ideal for hotels, restaurants, real estate, and showrooms."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Absolutely! We provide comprehensive post-launch support including maintenance, updates, security patches, and performance monitoring. Our clients receive priority support to ensure their digital presence stays optimal."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is customized based on your specific requirements. We offer competitive rates with flexible packages for businesses of all sizes. Contact us for a free consultation and detailed quote tailored to your needs."
  },
  {
    question: "Can you help with SEO and Google Ads?",
    answer: "Yes! We offer complete digital marketing services including SEO optimization, Google Ads management, and social media marketing. Our data-driven approach ensures maximum ROI for your marketing budget."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including Hotels & Hospitality, Real Estate, Education, Healthcare, Restaurants & Cafes, Retail Showrooms, Corporate Offices, and more. Our experience spans 180+ successful projects across multiple sectors."
  }
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(var(--color-logo-1),0.05),transparent_50%)]" />
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
            <HelpCircle className="h-4 w-4 text-edone-primary" />
            <span className="text-sm font-semibold text-edone-primary">Have Questions?</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Find answers to common questions about our services and process
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-white shadow-xl shadow-edone-primary/10 border-2 border-edone-primary/20'
                    : 'bg-white/70 shadow-md hover:shadow-lg border-2 border-transparent hover:border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-br from-edone-primary to-edone-secondary'
                        : 'bg-gray-100'
                    }`}>
                      <span className={`font-bold text-sm ${
                        openIndex === index ? 'text-white' : 'text-gray-500'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className={`text-lg font-semibold transition-colors ${
                      openIndex === index ? 'text-edone-primary' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index
                        ? 'bg-edone-primary text-white'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 ml-14 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-edone-primary/10 via-edone-secondary/10 to-edone-accent/10 px-6 py-4 rounded-2xl">
            <Sparkles className="w-5 h-5 text-edone-primary" />
            <p className="text-gray-700">
              Still have questions?{' '}
              <a href="/contact" className="font-semibold text-edone-primary hover:text-edone-secondary transition-colors">
                Contact us
              </a>
              {' '}for a free consultation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
