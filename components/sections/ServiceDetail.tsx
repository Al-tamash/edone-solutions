"use client";

import { Palette, Code, Camera, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/common/SectionReveal";

interface ServiceFeature {
  text: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServiceDetailProps {
  id: string;
  icon: "Palette" | "Code" | "Camera";
  title: string;
  description: string;
  features: ServiceFeature[];
  process: ProcessStep[];
}

const iconMap = {
  Palette: Palette,
  Code: Code,
  Camera: Camera,
};

export function ServiceDetail({
  id,
  icon,
  title,
  description,
  features,
  process,
}: ServiceDetailProps) {
  const Icon = iconMap[icon];

  return (
    <section id={id} className="py-16 scroll-mt-20">
      <SectionReveal>
        <Card className="p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {/* Icon & Title */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                  <Icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                asChild
                className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white"
              >
                <a href="/contact">Get Started</a>
              </Button>
            </div>

            {/* Right Column - Process */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h4>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-grow">
                      <h5 className="font-semibold text-gray-900 mb-1">{step.title}</h5>
                      <p className="text-gray-600 text-sm">{step.description}</p>

                      {/* Connector Line (except for last item) */}
                      {index < process.length - 1 && (
                        <div className="w-0.5 h-6 bg-gradient-to-b from-brand-primary/30 to-transparent ml-5 mt-2" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </SectionReveal>
    </section>
  );
}
