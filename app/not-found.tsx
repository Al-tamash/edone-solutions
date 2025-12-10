import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. The page might have been removed, 
          renamed, or didn't exist in the first place.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500 mb-4">Or explore these pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services" className="text-brand-primary hover:underline">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/portfolio" className="text-brand-primary hover:underline">
              Portfolio
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/about" className="text-brand-primary hover:underline">
              About Us
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/blog" className="text-brand-primary hover:underline">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
