import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { PageHeader } from '@/components/common/PageHeader';
import { HomeCTA } from '@/components/sections/HomeCTA';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, portfolioProjects } from '@/lib/portfolio-data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';

interface PageProps {
  params: Promise<{ slug: string }>;
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

// Generate static params for all projects
export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  
  if (!project) {
    return generateSEOMetadata({ title: 'Project Not Found' });
  }

  return generateSEOMetadata({
    title: `${project.title} | Portfolio | Edone Solutions`,
    description: project.shortDescription,
    keywords: project.technologies,
  });
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: project.title, url: `/portfolio/${project.slug}` },
  ]);

  // Get related projects (same category, excluding current)
  const relatedProjects = portfolioProjects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 2);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHeader
        title={project.title}
        description={project.shortDescription}
        breadcrumbs={[
          { label: 'Portfolio', href: '/portfolio' },
          { label: project.title },
        ]}
      />

      <article className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm text-gray-600 hover:text-edone-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Featured Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="object-cover w-full h-[400px] lg:h-[500px]"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 text-sm font-semibold rounded-full ${categoryColors[project.category]}`}>
                    {categoryLabels[project.category]}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900 block">Client</span>
                  {project.client}
                </div>
                <div>
                  <span className="font-semibold text-gray-900 block">Industry</span>
                  {project.industry}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {new Date(project.completedDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                    })}
                  </span>
                </div>
              </div>

              {/* Full Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About the Project</h2>
                <p className="text-gray-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              {/* The Challenge */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Our Solution */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>

              {/* Results */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <h2 className="text-xl font-bold mb-6">Results Achieved</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-edone-primary flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Link */}
              {project.projectUrl && (
                <div className="bg-gradient-to-br from-edone-primary to-edone-secondary rounded-2xl p-6 text-white">
                  <h3 className="font-bold mb-4">View Live Project</h3>
                  <p className="text-white/80 text-sm mb-4">
                    See this project in action by visiting the live site.
                  </p>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-edone-primary px-4 py-2 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {/* CTA */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Want Similar Results?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Let&apos;s discuss how we can help transform your business with a similar solution.
                </p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-edone-primary to-edone-secondary text-white hover:opacity-90"
                  size="lg"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          {relatedProjects.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedProjects.map((related) => (
                  <Link
                    key={related.id}
                    href={`/portfolio/${related.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={related.imageUrl}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[related.category]}`}>
                          {categoryLabels[related.category]}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 group-hover:text-edone-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">{related.shortDescription}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <HomeCTA />
    </>
  );
}
