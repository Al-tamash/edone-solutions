import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--color-logo-1),0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--color-logo-1),0.08)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-edone-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-edone-accent/20 rounded-full blur-3xl" />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-edone-primary transition-colors">
              <Home className="h-4 w-4" />
            </Link>
            {breadcrumbs.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-gray-600" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-edone-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{item.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        {/* Description */}
        {description && (
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
        
        {/* Decorative Line */}
        <div className="mt-10 flex items-center gap-4">
          <div className="h-1 w-20 bg-gradient-to-r from-edone-primary via-edone-secondary to-edone-accent rounded-full" />
          <div className="h-1 w-10 bg-gray-700 rounded-full" />
          <div className="h-1 w-5 bg-gray-800 rounded-full" />
        </div>
      </div>
    </div>
  );
}
