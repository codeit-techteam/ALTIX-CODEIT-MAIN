"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import Image from "next/image";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/ScrollAnimations";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/Timeline";
import { Journey } from "@/components/ui/Journey";
import { AboutCTA } from "@/components/ui/AboutCTA";
import { OurDNA } from "@/components/ui/OurDNA";
import { IITAdvantage } from "@/components/ui/IITAdvantage";
import { TeamSection } from "@/components/ui/TeamSection";

const journey = [
    {
        year: "2021",
        title: "Inception",
        description: "Founded in a dorm room at IIT Bombay. The vision was simple: stop writing spaghetti code and start engineering robust systems.",
    },
    {
        year: "2022",
        title: "First Enterprise Win",
        description: "Secured our first Fortune 500 contract. Delivered a microservices architecture that reduced their server costs by 40%.",
    },
    {
        year: "2023",
        title: "Global Expansion",
        description: "Expanded operations to the US and UK. Launched the 'Codeit Accelerator' for early-stage VC startups.",
    },
];

const team = [
    { name: "Rohan Mehta", role: "CTO & Co-Founder", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Priya Sharma", role: "Head of Product", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Arjun Singh", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Neha Gupta", role: "Design Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" },
];

export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 relative overflow-hidden">
                {/* Hero */}
                <section className="container mx-auto px-6 mb-24 relative z-10 text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#66fcf1]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                    <FadeUp className="max-w-5xl mx-auto">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#66fcf1]/5 text-[#66fcf1] text-xs font-bold tracking-wider mb-8 border border-[#66fcf1]/20 backdrop-blur-sm">
                            IIT-BOMBAY ALUMNI VENTURE
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66fcf1] via-white to-[#66fcf1] bg-300% animate-gradient">Excellence.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                            <span className="text-white font-medium">Altix Codeit</span> is not just a dev shop. We are an elite software consultancy born from the halls of <span className="text-white font-medium">IIT</span>. We replace guesswork with engineering rigor.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button
                                variant="glow"
                                size="lg"
                                className="px-10 py-6 text-lg"
                                onClick={() => document.getElementById("our-dna")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Our Philosophy
                            </Button>
                        </div>
                    </FadeUp>
                </section>

                {/* DNA */}
                <div id="our-dna">
                    <OurDNA />
                </div>

                {/* IIT Advantage (New Modern Section) */}
                <IITAdvantage />

                {/* How We Work - Advanced Timeline */}
                <div id="how-we-work">
                    <Timeline />
                </div>

                {/* Journey */}
                <Journey />

                {/* Team */}
                <TeamSection />

                {/* CTA */}
                <AboutCTA />
            </main>
            <Footer />
        </div>
    );
}
