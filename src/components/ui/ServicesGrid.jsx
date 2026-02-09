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
        description: "Scalable, high-performance web applications built with Next.js and React.",
        gradient: "from-[#66fcf1] to-blue-500",
        iconColor: "text-[#66fcf1]",
        borderColor: "hover:border-[#66fcf1]/50",
        shadowColor: "rgba(102,252,241,0.3)"
    },
    {
        icon: Smartphone,
        title: "Mobile Solutions",
        description: "Native and cross-platform mobile apps for iOS and Android using Flutter & Swift.",
        gradient: "from-pink-500 to-rose-500",
        iconColor: "group-hover:text-pink-500",
        borderColor: "hover:border-pink-500/50",
        shadowColor: "rgba(236,72,153,0.3)"
    },
    {
        icon: Bot,
        title: "AI & ML Integration",
        description: "Custom AI agents, LLM integration, and predictive analytics for smart business.",
        gradient: "from-emerald-400 to-cyan-500",
        iconColor: "group-hover:text-emerald-400",
        borderColor: "hover:border-emerald-400/50",
        shadowColor: "rgba(52,211,153,0.3)"
    },
    {
        icon: Megaphone,
        title: "Social Media Growth",
        description: "Data-driven social media strategies to build authority and convert followers into customers.",
        gradient: "from-orange-400 to-red-500",
        iconColor: "group-hover:text-orange-400",
        borderColor: "hover:border-orange-400/50",
        shadowColor: "rgba(251,146,60,0.3)"
    },
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "User-centric design systems, prototyping, and high-fidelity interfaces.",
        gradient: "from-purple-500 to-indigo-500",
        iconColor: "group-hover:text-purple-500",
        borderColor: "hover:border-purple-500/50",
        shadowColor: "rgba(168,85,247,0.3)"
    },
    {
        icon: Database,
        title: "Backend Engineering",
        description: "Robust APIs, microservices, and database optimization.",
        gradient: "from-blue-500 to-cyan-500",
        iconColor: "group-hover:text-blue-500",
        borderColor: "hover:border-blue-500/50",
        shadowColor: "rgba(59,130,246,0.3)"
    }
];

export const ServicesGrid = ({ limit }) => {
    const displayedServices = limit ? services.slice(0, limit) : services;

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
                {displayedServices.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
                    >
                        {/* Hover Glow Effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-b ${service.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl`} />

                        <div
                            className={`h-full bg-[#0A0A0A] border border-white/10 ${service.borderColor} p-8 rounded-2xl transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center`}
                            style={{
                                boxShadow: "0 0 0 0 transparent",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 0 30px -10px ${service.shadowColor}`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 0 0 0 transparent";
                            }}
                        >

                            {/* Icon */}
                            <div className="mb-6 relative">
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                <service.icon size={48} strokeWidth={1} className={`text-gray-300 ${service.iconColor} transition-colors duration-300`} />
                            </div>

                            {/* Content */}
                            <h3 className={`text-xl font-bold text-white mb-3 ${service.iconColor.replace("group-hover:", "group-hover:")} transition-colors`}>
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
