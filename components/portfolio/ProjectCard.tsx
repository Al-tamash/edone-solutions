import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PortfolioProject } from "@/lib/portfolio-data";

interface ProjectCardProps {
  project: PortfolioProject;
}

const categoryColors = {
  "web-design": "bg-purple-100 text-purple-700",
  "web-development": "bg-blue-100 text-blue-700",
  "virtual-tours": "bg-green-100 text-green-700",
};

const categoryLabels = {
  "web-design": "Web Design",
  "web-development": "Web Development",
  "virtual-tours": "Virtual Tours",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 bg-gray-200 overflow-hidden">
        {/* Actual Project Image */}
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* View button on hover */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        >
          <div className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span>View Project</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <span
          className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-3 ${
            categoryColors[project.category]
          }`}
        >
          {categoryLabels[project.category]}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
          <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
        </h3>

        {/* Client & Industry */}
        <p className="text-sm text-gray-500 mb-3">
          {project.client} • {project.industry}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-500">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Link */}
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center text-brand-primary hover:text-brand-secondary font-medium text-sm group/link"
        >
          View Details
          <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </Card>
  );
}
