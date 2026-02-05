"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Box } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const dnaData = [
    {
        icon: Zap,
        title: "First Principles Thinking",
        description: "We don't just solve tasks; we deconstruct problems to their fundamental truths. We avoid reasoning by analogy and instead build solutions from the ground up to reinvent norms.",
    },
    {
        icon: Rocket,
        title: "Speed & Scale",
        description: "Rapid deployment doesn't mean technical debt. We engineer for horizontal scalability from day one, ensuring your MVP can handle enterprise-grade loads when you grow.",
    },
    {
        icon: Box,
        title: "Product Mindset",
        description: "We are founders ourselves. We don't just deliver features; we focus on cohesive outcomes, user retention, and market fit. We build businesses, not just repositories.",
    },
];

export const OurDNA = () => {
    return (
        <section className="container mx-auto px-6 mb-32 relative z-10">
            <FadeUp>
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our DNA</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 mx-auto rounded-full" />
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed">
                        The core principles that drive our engineering decisions and set us apart from traditional agencies.
                    </p>
                </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
                {dnaData.map((item, index) => (
                    <StaggerItem key={index} className="h-full">
                        <DNACard item={item} index={index} />
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
};

const DNACard = ({ item, index }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group h-full relative"
        >
            {/* Hover Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-blue-600 opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500 rounded-[2rem]" />

            <div className="relative h-full bg-[#0b0c10] rounded-[2rem] p-10 border border-white/10 group-hover:border-primary/50 transition-colors duration-300 overflow-hidden flex flex-col items-start shadow-xl">

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center text-gray-300 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 mb-8 shadow-inner">
                    <item.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};
