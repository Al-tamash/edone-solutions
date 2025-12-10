"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { FilterButtons } from "@/components/portfolio/FilterButtons";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { HomeCTA } from "@/components/sections/HomeCTA";
import { portfolioProjects, getProjectsByCategory } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "motion/react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  const breadcrumbs = [{ label: "Portfolio" }];

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        description="Explore our latest projects and see how we've helped businesses transform their digital presence"
        breadcrumbs={breadcrumbs}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Filter Buttons */}
        <FilterButtons
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>

      <HomeCTA />
    </>
  );
}
