'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
  className?: string;
}

export function TestimonialCard({ testimonial, compact = false, className = '' }: TestimonialCardProps) {
  if (compact) {
    return (
      <div className={`flex items-start gap-4 ${className}`}>
        <Quote className="w-6 h-6 text-edone-primary/30 flex-shrink-0" />
        <div>
          <p className="text-gray-700 italic mb-2">&ldquo;{testimonial.quote}&rdquo;</p>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">{testimonial.authorName}</span>
            {testimonial.authorTitle && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 text-sm">{testimonial.authorTitle}</span>
              </>
            )}
            {testimonial.company && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 text-sm">{testimonial.company}</span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}
    >
      {/* Quote Icon */}
      <div className="mb-4">
        <Quote className="w-10 h-10 text-edone-primary/20" />
      </div>

      {/* Rating */}
      {testimonial.rating && (
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      )}

      {/* Quote */}
      <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        {testimonial.avatarUrl ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={testimonial.avatarUrl}
              alt={testimonial.authorName}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-edone-primary to-edone-secondary flex items-center justify-center text-white font-bold text-lg">
            {testimonial.authorName.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900">{testimonial.authorName}</p>
          <p className="text-sm text-gray-600">
            {testimonial.authorTitle && `${testimonial.authorTitle}, `}
            {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialGrid({ testimonials, className = '' }: TestimonialGridProps) {
  return (
    <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={testimonial.id || index} testimonial={testimonial} />
      ))}
    </div>
  );
}
