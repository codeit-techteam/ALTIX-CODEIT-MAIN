import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FadeUp, FadeIn, ScaleIn } from "@/components/ui/ScrollAnimations";
import { ServicesGrid } from "@/components/ui/ServicesGrid";
import { WhatWeDo } from "@/components/ui/WhatWeDo";
import { ContactCTA } from "@/components/ui/ContactCTA";
import { CodeShowcase } from "@/components/ui/CodeShowcase";
import { SocialMediaFlow } from "@/components/ui/SocialMediaFlow";
import { ServiceList } from "@/components/ui/ServiceList";

export const metadata = {
    title: "Expert Web & App Development Services | Altix Codeit",
    description: "Full-stack development, AI integration, and GTM strategy. We build scalable solutions for startups and enterprises.",
    alternates: {
        canonical: "/services",
    },
    openGraph: {
        title: "Expert Web & App Development Services | Altix Codeit",
        description: "Full-stack development, AI integration, and GTM strategy.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Expert Web & App Development Services | Altix Codeit",
        description: "Full-stack development, AI integration, and GTM strategy.",
    },
};

export default function Services() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Hero */}
                <section className="container mx-auto px-6 mb-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeUp>
                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-6 border border-primary/20">
                                IITIAN LED ENGINEERING
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Engineering the <br />
                                Future <span className="text-primary">of Scale</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
                                Elite software craftsmanship for high-growth startups. We transform complex GTM strategies into robust, scalable digital reality.
                            </p>
                            <div className="flex gap-4">
                                <Link href="#future-ready">
                                    <Button variant="glow">Explore Services</Button>
                                </Link>
                                <Link href="#what-we-do">
                                    <Button variant="outline">What we do</Button>
                                </Link>
                            </div>

                            <div className="mt-12 flex gap-12 border-t border-white/10 pt-8">
                                <div>
                                    <p className="text-3xl font-bold text-white">50+</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Projects Shipped</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">$200M+</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Client Valuation</p>
                                </div>
                            </div>
                        </FadeUp>

                        {/* 3D / Visual Placeholder similar to Image 0 */}
                        <ScaleIn delay={0.2}>
                            <div className="relative h-[400px] md:h-[500px] w-full bg-black/50 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Abstract shapes representing 3D elements */}
                                    <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                                    <div className="w-64 h-64 border border-primary/30 rounded-full animate-spin-slow absolute" />
                                    <div className="w-48 h-48 border border-white/10 rounded-full animate-reverse-spin absolute" />
                                </div>

                                {/* Floating UI cards */}
                                <div className="absolute top-10 right-10 p-4 glass-card rounded-lg flex items-center gap-2 animate-float">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    <span className="text-xs font-medium text-white">SYSTEM OPTIMAL</span>
                                </div>
                                <div className="absolute bottom-10 left-10 p-4 glass-card rounded-lg flex items-center gap-2 animate-float-delayed">
                                    <Rocket size={16} className="text-primary" />
                                    <span className="text-xs font-medium text-white">DEPLOYMENT <br /> SUCCESSFUL</span>
                                </div>
                            </div>
                        </ScaleIn>
                    </div>
                </section>

                {/* Services Grid (New Section) */}
                <div id="future-ready" className="scroll-mt-24">
                    <ServicesGrid />
                </div>

                {/* What We Do - Diagonal Services Timeline */}
                <div id="what-we-do" className="scroll-mt-24">
                    <WhatWeDo />
                </div>



                {/* Code Showcase with Netlify-like design */}
                <CodeShowcase />

                {/* Interactive Services List */}
                <ServiceList />

                {/* Social Media Visual Flow */}
                <SocialMediaFlow />

                {/* CTA */}
                <ContactCTA />
            </main>
            <Footer />
        </div>
    );
}
