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
import { TechAdvantage } from "@/components/ui/TechAdvantage";
import { FounderStory } from "@/components/ui/FounderStory";



export default function About() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 relative overflow-hidden">
                {/* Hero */}
                <section className="container mx-auto px-6 mb-24 relative z-10 text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#66fcf1]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                    <FadeUp className="max-w-5xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66fcf1] via-white to-[#66fcf1] bg-300% animate-gradient">Excellence.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                            <span className="text-white font-medium">Altix Codeit</span> is not just a dev shop. We are an elite software consultancy born from a passion for <span className="text-white font-medium">technology</span>. We replace guesswork with engineering rigor.
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

                {/* Tech Advantage (Modern Section) */}
                <TechAdvantage />

                {/* How We Work - Advanced Timeline */}
                <div id="how-we-work">
                    <Timeline />
                </div>



                {/* Journey */}
                <Journey />

                {/* Founder's Story */}
                <FounderStory />



                {/* CTA */}
                <AboutCTA />
            </main>
            <Footer />
        </div>
    );
}
