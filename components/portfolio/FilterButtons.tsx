"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { portfolioProjects } from "@/lib/portfolio-data";

// Main categories
const mainCategories = [
  { id: "all", label: "All Projects" },
  { id: "web-design", label: "Web Design" },
  { id: "web-development", label: "Web Development" },
  { id: "virtual-tours", label: "360° Virtual Tours" },
];

// Industry categories based on project industry field
const industryCategories = [
  { id: "all-industries", label: "All Industries" },
  { id: "Technology", label: "Technology" },
  { id: "Real Estate", label: "Real Estate" },
  { id: "Food & Beverage", label: "Food & Beverage" },
  { id: "Health & Wellness", label: "Health & Wellness" },
  { id: "Education", label: "Education" },
  { id: "Fashion & Retail", label: "Fashion & Retail" },
  { id: "Hospitality", label: "Hotels & Hospitality" },
];

// Get project count for a category
function getProjectCount(categoryId: string, isIndustry = false): number {
  if (categoryId === "all" || categoryId === "all-industries") {
    return portfolioProjects.length;
  }
  if (isIndustry) {
    return portfolioProjects.filter(p => p.industry === categoryId).length;
  }
  return portfolioProjects.filter(p => p.category === categoryId).length;
}

interface FilterButtonsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function FilterButtons({ activeCategory, onCategoryChange }: FilterButtonsProps) {
  const [filterMode, setFilterMode] = useState<'service' | 'industry'>('service');

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === "all-industries") {
      onCategoryChange("all");
    } else {
      onCategoryChange(categoryId);
    }
  };

  return (
    <div className="mb-12">
      {/* Filter mode toggle */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-gray-100 rounded-full p-1">
          <button
            onClick={() => { setFilterMode('service'); onCategoryChange('all'); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filterMode === 'service'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            By Service
          </button>
          <button
            onClick={() => { setFilterMode('industry'); onCategoryChange('all'); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filterMode === 'industry'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            By Industry
          </button>
        </div>
      </div>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-3">
        {(filterMode === 'service' ? mainCategories : industryCategories).map((category) => {
          const count = getProjectCount(
            category.id, 
            filterMode === 'industry' && category.id !== 'all-industries'
          );
          const isActive = activeCategory === category.id || 
            (category.id === 'all' && activeCategory === 'all') ||
            (category.id === 'all-industries' && activeCategory === 'all');

          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`relative px-5 py-2.5 rounded-full font-medium transition-all ${
                isActive
                  ? "text-white"
                  : "text-gray-700 hover:text-edone-primary bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent rounded-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {category.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
