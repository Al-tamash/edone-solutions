'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { RotateCcw, Expand, ExternalLink } from 'lucide-react';

interface Viewer360Props {
  panoramaUrl?: string;
  streetViewUrl?: string;
  title?: string;
  className?: string;
  fallbackImage?: string;
}

export function Viewer360({
  panoramaUrl,
  streetViewUrl,
  title = '360° Virtual Tour',
  className = '',
  fallbackImage = '/images/360-placeholder.jpg',
}: Viewer360Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const embedUrl = streetViewUrl || panoramaUrl;

  // If no URL provided, show placeholder
  if (!embedUrl) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 ${className}`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="w-16 h-16 mb-4 rounded-full bg-edone-primary/20 flex items-center justify-center">
            <RotateCcw className="w-8 h-8 text-edone-primary animate-spin-slow" />
          </div>
          <p className="text-lg font-medium">{title}</p>
          <p className="text-sm text-gray-400 mt-2">360° View Coming Soon</p>
        </div>
        {/* Placeholder background */}
        {fallbackImage && (
          <Image
            src={fallbackImage}
            alt={title}
            fill
            className="object-cover opacity-30"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`relative aspect-video rounded-xl overflow-hidden bg-gray-900 ${className}`}
    >
      {/* Loading State */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 z-10">
          <div className="text-center text-white">
            <RotateCcw className="w-8 h-8 mx-auto mb-2 animate-spin" />
            <p className="text-sm">Loading 360° View...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-white">
          <p className="text-lg mb-4">Unable to load 360° view</p>
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-edone-primary rounded-lg hover:bg-edone-primary-dark transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Open in new tab
          </a>
        </div>
      )}

      {/* Iframe Embed */}
      {!hasError && (
        <iframe
          src={embedUrl}
          title={title}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className="absolute inset-0"
        />
      )}

      {/* Controls Overlay */}
      {!isLoading && !hasError && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <a
            href={embedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors backdrop-blur-sm"
            title="Open in fullscreen"
          >
            <Expand className="w-4 h-4" />
          </a>
        </div>
      )}
    </motion.div>
  );
}
