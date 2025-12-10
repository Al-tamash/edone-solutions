"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { ServicesDropdown } from "./ServicesDropdown";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="Edone Solutions"
                width={140}
                height={45}
                className="h-10 sm:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  pathname === "/" ? "text-brand-primary" : "text-gray-700"
                }`}
              >
                Home
              </Link>
              <ServicesDropdown />
              <Link
                href="/portfolio"
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  pathname === "/portfolio" ? "text-brand-primary" : "text-gray-700"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  pathname === "/about" ? "text-brand-primary" : "text-gray-700"
                }`}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  pathname === "/blog" ? "text-brand-primary" : "text-gray-700"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  pathname === "/contact" ? "text-brand-primary" : "text-gray-700"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button
                asChild
                className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white hover:opacity-90"
              >
                <Link href="/contact">Get Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-brand-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 sm:h-20" />
    </>
  );
}
