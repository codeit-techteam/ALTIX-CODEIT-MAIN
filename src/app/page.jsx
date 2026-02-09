import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/ui/Hero";
import { ServicesGrid } from "@/components/ui/ServicesGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollShowcase } from "@/components/ui/ScrollShowcase";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimations";

import { ChatShowcase } from "@/components/ui/ChatShowcase";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { PromoBanner } from "@/components/ui/PromoBanner";
import { BookingCTA } from "@/components/ui/BookingCTA";
import { ExpertiseSection } from "@/components/ui/ExpertiseSection";
import { ClientsSection } from "@/components/ui/ClientsSection";
import { TestimonialsSection } from "@/components/ui/TestimonialsSection";
import { ShowcaseSection } from "@/components/ui/ShowcaseSection";

export const metadata = {
  title: "Altix Codeit – App & Web Development Company",
  description:
    "Altix Codeit is a premier App Development and Web Development Company. We build scalable software and act as a data-driven Social Media Agency to help brands scale.",
  keywords: [
    "App Development Company",
    "Web Development Agency",
    "Social Media Agency",
    "Altix Codeit",
    "Software House",
    "React Native",
    "Next.js",
  ],
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero />

        {/* Clients Section (Trust Indicators) */}
        <ClientsSection />

        {/* 3D Showcase Section (Animated Visuals) */}
        <ShowcaseSection />

        {/* Services Section */}
        <div className="py-12 bg-[#0b0c10]">
          <ServicesGrid limit={4} />
          <div className="flex justify-center mt-8">
            <Link href="/services">
              <Button variant="outline" size="lg" className="group">
                View All Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Showcase */}
        <ScrollShowcase />

        {/* Chat Showcase Section */}
        <ChatShowcase />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* WhatsApp CTA Section */}
        <WhatsAppCTA />

        {/* Promo Banner Section */}
        <PromoBanner />

        {/* CTA Section */}
        <BookingCTA />
      </main>

      <Footer />
    </div>
  );
}
