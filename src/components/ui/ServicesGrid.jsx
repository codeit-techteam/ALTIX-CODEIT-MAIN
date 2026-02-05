"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Smartphone,
    Bot,
    Cloud,
    Blocks,
    Palette,
    Database,
    ShieldCheck,
    Megaphone
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Enterprise Web Dev",
        description: "Scalable, high-performance web applications built with Next.js and React."
    },
    {
        icon: Smartphone,
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile apps for iOS and Android using Flutter & Swift."
    },
    {
        icon: Bot,
        title: "AI & ML Integration",
        description: "Custom AI agents, LLM integration, and predictive analytics for smart business."
    },
    {
        icon: Megaphone,
        title: "Social Media Growth",
        description: "Data-driven social media strategies to build authority and convert followers into customers."
    }
];

export const ServicesGrid = () => {
    return (
        <section className="container mx-auto px-6 mb-24 relative z-10">

            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Our Future-Ready Services
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Empowering startups and enterprises with scalable software, intelligent AI, and cutting-edge design.
                </p>
            </div>

            {/* Grid */}
            <div className="flex flex-wrap justify-center gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                    >
                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-[#66fcf1] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-md" />

                        <div className="h-full bg-[#0A0A0A] border border-white/10 hover:border-[#66fcf1]/50 p-8 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center group-hover:shadow-[0_0_30px_-10px_rgba(102,252,241,0.3)]">

                            {/* Icon */}
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-[#66fcf1] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                <service.icon size={48} strokeWidth={1} className="text-gray-300 group-hover:text-[#66fcf1] transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#66fcf1] transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
