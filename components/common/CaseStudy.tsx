'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { TrendingUp, Users, Target, Eye } from 'lucide-react';
import { CaseStudy as CaseStudyType } from '@/lib/types';
import { Viewer360 } from '@/components/common/Viewer360';
import { TestimonialCard } from '@/components/common/TestimonialCard';

interface CaseStudyProps {
  caseStudy: CaseStudyType;
  showPanorama?: boolean;
  className?: string;
}

// Metric icon mapping
const metricIcons: Record<string, React.ElementType> = {
  trafficIncrease: TrendingUp,
  leadsGenerated: Users,
  conversionRate: Target,
  impressions: Eye,
  ctr: Target,
};

export function CaseStudy({ caseStudy, showPanorama = true, className = '' }: CaseStudyProps) {
  const hasBeforeAfter = caseStudy.beforeImage && caseStudy.afterImage;
  const hasPanorama = caseStudy.panoramaUrl || caseStudy.streetViewUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.title}</h3>
        <p className="text-gray-600">{caseStudy.shortDescription}</p>
      </div>

      {/* Before/After Screenshots */}
      {hasBeforeAfter && (
        <div className="p-6 border-b border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Before & After
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                BEFORE
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={caseStudy.beforeImage!}
                  alt="Before"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                AFTER
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src={caseStudy.afterImage!}
                  alt="After"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 300px"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 360 Viewer */}
      {showPanorama && hasPanorama && (
        <div className="p-6 border-b border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            360° Virtual Tour
          </h4>
          <Viewer360
            panoramaUrl={caseStudy.panoramaUrl}
            streetViewUrl={caseStudy.streetViewUrl}
            title={caseStudy.title}
          />
        </div>
      )}

      {/* Metrics */}
      <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
          Results & Impact
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {caseStudy.metrics.trafficIncrease && (
            <MetricCard
              icon={TrendingUp}
              label="Traffic Increase"
              value={caseStudy.metrics.trafficIncrease}
            />
          )}
          {caseStudy.metrics.leadsGenerated && (
            <MetricCard
              icon={Users}
              label="Leads Generated"
              value={caseStudy.metrics.leadsGenerated}
            />
          )}
          {caseStudy.metrics.conversionRate && (
            <MetricCard
              icon={Target}
              label="Conversion"
              value={caseStudy.metrics.conversionRate}
            />
          )}
          {caseStudy.metrics.impressions && (
            <MetricCard icon={Eye} label="Impressions" value={caseStudy.metrics.impressions} />
          )}
          {caseStudy.metrics.ctr && (
            <MetricCard icon={Target} label="CTR" value={caseStudy.metrics.ctr} />
          )}
          {caseStudy.metrics.customMetrics?.map((metric, index) => (
            <MetricCard
              key={index}
              icon={TrendingUp}
              label={metric.label}
              value={metric.value}
            />
          ))}
        </div>
      </div>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <div className="p-6 border-t border-gray-100">
          <TestimonialCard testimonial={caseStudy.testimonial} compact />
        </div>
      )}
    </motion.div>
  );
}

interface MetricCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function MetricCard({ icon: Icon, label, value }: MetricCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-4 h-4 text-edone-primary" />
        <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
      </div>
      <p className="text-lg font-bold text-gray-900">{value}</p>
    </div>
  );
}
