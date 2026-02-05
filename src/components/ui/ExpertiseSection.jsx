"use client";

import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone, Bot, Megaphone } from "lucide-react";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimations";

export function ExpertiseSection() {
    const services = [
        {
            title: "Web Engineering",
            description: "Scalable React & Next.js applications built for performance.",
            icon: Monitor,
            href: "/services",
            gradient: "from-cyan-400 to-blue-500"
        },
        {
            title: "Mobile Development",
            description: "Native-feel cross-platform apps using Flutter and React Native.",
            icon: Smartphone,
            href: "/services",
            gradient: "from-purple-400 to-pink-500"
        },
        {
            title: "Social Media Growth",
            description: "End-to-end content execution, strategy, and audience growth.",
            icon: Megaphone,
            href: "/services",
            gradient: "from-green-400 to-emerald-500"
        },
    ];

    return (
        <section className="py-32 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <FadeUp className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Our Expertise
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We don't just write code; we architect solutions. From early-stage MVPs to enterprise-grade systems.
                    </p>
                </FadeUp>

                <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <StaggerItem key={index} className="h-full">
                                <Link href={service.href} className="block h-full cursor-pointer group relative">
                                    {/* Hover Gradient Border */}
                                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 rounded-[32px]`} />

                                    <div className="relative h-full p-10 rounded-[32px] bg-[#0A0A0A] border border-white/10 flex flex-col items-center text-center gap-6 transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">

                                        {/* Background Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                        {/* Icon Container */}
                                        <div className={`w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10 relative z-10`}>
                                            <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10">
                                            <h3 className="text-2xl font-bold text-white mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-lg text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
