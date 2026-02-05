"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Crown, Code2, LayoutTemplate, TrendingUp } from "lucide-react";
import { useState } from "react";
import { FadeUp } from "./ScrollAnimations";

const serviceCategories = [
    {
        id: "01",
        title: "Branding",
        icon: Crown,
        tags: [
            { label: "Identity Design", color: "bg-purple-500", x: 20, y: -20 },
            { label: "Brand Strategy", color: "bg-pink-500", x: 150, y: 30 },
            { label: "Visual Language", color: "bg-indigo-500", x: -40, y: 10 },
        ]
    },
    {
        id: "02",
        title: "Web Design",
        icon: LayoutTemplate,
        tags: [
            { label: "UI/UX", color: "bg-blue-500", x: 40, y: -30 },
            { label: "Design Systems", color: "bg-cyan-500", x: 180, y: 10 },
            { label: "Prototyping", color: "bg-teal-500", x: -20, y: 40 },
        ]
    },
    {
        id: "03",
        title: "Development",
        icon: Code2,
        tags: [
            { label: "React & Next.js", color: "bg-emerald-500", x: 60, y: -25 },
            { label: "Scalable APIs", color: "bg-green-600", x: 200, y: 20 },
            { label: "Cloud Infra", color: "bg-lime-500", x: 0, y: 5 },
        ]
    },
    {
        id: "04",
        title: "Growth",
        icon: TrendingUp,
        tags: [
            { label: "SEO Boost", color: "bg-yellow-500", x: 80, y: -20 },
            { label: "Lead Gen", color: "bg-orange-500", x: 160, y: 40 },
            { label: "Social Reach", color: "bg-red-500", x: -50, y: -10 },
            { label: "Conversion Rate", color: "bg-rose-500", x: 100, y: 80 },
        ]
    },
];

export const ServiceList = () => {
    return (
        <section className="container mx-auto px-6 mb-32 relative z-10">
            <FadeUp className="mb-16">
                {/* Header */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Core Capabilities</h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
            </FadeUp>

            <div className="flex flex-col">
                {serviceCategories.map((category) => (
                    <ServiceListItem key={category.id} category={category} />
                ))}
            </div>
        </section>
    );
};

const ServiceListItem = ({ category }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative border-t border-white/10 last:border-b py-8 md:py-12 cursor-pointer overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="flex items-center justify-between relative z-10 px-4 md:px-8">
                <div className="flex items-baseline gap-8 md:gap-16">
                    <span className="text-xs md:text-sm font-mono text-gray-500 group-hover:text-primary transition-colors duration-300">
                        {category.id}.
                    </span>

                    <div className="relative">
                        <h3 className="text-3xl md:text-5xl font-bold text-white transition-all duration-300 group-hover:translate-x-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
                            {category.title}
                        </h3>

                        {/* Floating Tags */}
                        {category.tags.map((tag, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                                animate={isHovered ? { opacity: 1, scale: 1, x: tag.x, y: tag.y } : { opacity: 0, scale: 0.5, x: 0, y: 0 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.05 }}
                                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-lg pointer-events-none ${tag.color} z-20`}
                                style={{
                                    // Randomize slight rotation for organic feel
                                    rotate: i % 2 === 0 ? 3 : -3
                                }}
                            >
                                {tag.label}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Icon */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                    <motion.div
                        animate={{ rotate: isHovered ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" />
                    </motion.div>
                </div>
            </div>

            {/* Icon Overlay Effect (Large Faded Icon) */}
            <div className="absolute right-32 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500 scale-50 group-hover:scale-100 transition-transform duration-700">
                <category.icon className="w-64 h-64 text-primary" strokeWidth={1} />
            </div>
        </div>
    );
};
