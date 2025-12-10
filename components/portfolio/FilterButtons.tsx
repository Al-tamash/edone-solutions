"use client";

import { useState } from "react";
import { motion } from "motion/react";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web-design", label: "Web Design" },
  { id: "web-development", label: "Web Development" },
  { id: "virtual-tours", label: "Virtual Tours" },
];

interface FilterButtonsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterButtons({ activeCategory, onCategoryChange }: FilterButtonsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-6 py-2.5 rounded-full font-medium transition-colors ${
            activeCategory === category.id
              ? "text-white"
              : "text-gray-700 hover:text-brand-primary"
          }`}
        >
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeCategory"
              className="absolute inset-0 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
              transition={{ type: "spring", duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{category.label}</span>
        </button>
      ))}
    </div>
  );
}
