'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'TechVista Solutions',
    role: 'CEO & Founder',
    avatar: 'RK',
    content: 'Edone Solutions transformed our online presence completely. Their web design team created a stunning website that perfectly represents our brand. Our lead generation has increased by 150% since launch!',
    rating: 5,
    metric: { value: '150%', label: 'Lead Increase' },
  },
  {
    id: 2,
    name: 'Priya Sharma',
    company: 'Urban Spaces Realty',
    role: 'Marketing Director',
    avatar: 'PS',
    content: 'The 360 virtual tours have been a game-changer for our real estate business. Clients can now explore properties from anywhere, saving us time and helping close deals faster. Highly recommended!',
    rating: 5,
    metric: { value: '3x', label: 'Faster Deals' },
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    company: 'Gourmet Delights Restaurant',
    role: 'Owner',
    avatar: 'MA',
    content: 'Working with Edone Solutions was a pleasure from start to finish. They built us a beautiful website with an integrated ordering system. Our online orders have tripled in just two months!',
    rating: 5,
    metric: { value: '300%', label: 'Order Growth' },
  },
  {
    id: 4,
    name: 'Dr. Anjali Reddy',
    company: 'Wellness Care Clinic',
    role: 'Founder',
    avatar: 'AR',
    content: 'Our new website has completely changed how patients find and book appointments with us. The modern design and easy navigation has increased our online bookings by 200%. Outstanding work!',
    rating: 5,
    metric: { value: '200%', label: 'More Bookings' },
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-white via-edone-primary-50/30 to-edone-accent-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--color-logo-1),0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-edone-accent/10 px-4 py-2 rounded-full mb-6"
          >
            <Star className="h-4 w-4 text-edone-accent fill-edone-accent" />
            <span className="text-sm font-semibold text-edone-accent">Client Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Loved by{' '}
            <span className="bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it—hear from businesses we've helped grow and succeed.
          </motion.p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 md:p-12 lg:p-16 overflow-hidden">
            {/* Decorative quote */}
            <div className="absolute top-8 right-8 opacity-5">
              <Quote className="h-40 w-40 text-edone-primary" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-gray-700 font-medium leading-relaxed mb-10 relative z-10">
                  "{testimonials[current].content}"
                </blockquote>

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">
                        {testimonials[current].name}
                      </div>
                      <div className="text-gray-500">
                        {testimonials[current].role} at {testimonials[current].company}
                      </div>
                    </div>
                  </div>

                  {/* Metric card */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-edone-primary/10 to-edone-secondary/10 px-6 py-4 rounded-2xl">
                    <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-edone-primary to-edone-secondary bg-clip-text text-transparent">
                      {testimonials[current].metric.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {testimonials[current].metric.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current
                        ? 'bg-gradient-to-r from-edone-primary to-edone-secondary w-8'
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-edone-primary to-edone-secondary hover:scale-110 transition-all duration-300 flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small testimonial cards below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setDirection(index > current ? 1 : -1);
                setCurrent(index);
              }}
              className={`p-4 rounded-xl transition-all duration-300 text-left ${
                index === current
                  ? 'bg-gradient-to-r from-edone-primary to-edone-secondary text-white shadow-lg scale-105'
                  : 'bg-white/80 hover:bg-white text-gray-700 hover:shadow-md'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === current ? 'bg-white/20' : 'bg-edone-primary/10 text-edone-primary'
                }`}>
                  {testimonial.avatar}
                </div>
                <span className="text-sm font-semibold truncate">{testimonial.name}</span>
              </div>
              <p className={`text-xs truncate ${index === current ? 'text-white/80' : 'text-gray-500'}`}>
                {testimonial.company}
              </p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
