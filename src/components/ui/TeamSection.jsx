"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const team = [
    { name: "Rohan Mehta", role: "CTO & Co-Founder", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Priya Sharma", role: "Head of Product", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Arjun Singh", role: "Lead Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300" },
    { name: "Neha Gupta", role: "Design Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300" },
];

export const TeamSection = () => {
    return (
        <section className="container mx-auto px-6 mb-32 relative z-10">
            <FadeUp className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
                <div>
                    <h4 className="text-primary font-mono text-sm mb-4 tracking-wider uppercase">The Squad</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Architects</h2>
                    <p className="text-gray-400 text-lg">Meet the minds behind the machines.</p>
                </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <StaggerItem key={index} className="group relative">
                        <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] border border-white/5 bg-[#0A0A0A]">

                            {/* Hover Glow Background */}
                            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                            <Image
                                src={member.img}
                                alt={member.name}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-xs text-primary font-bold tracking-widest uppercase mb-0 opacity-80 group-hover:opacity-100">{member.role}</p>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
};
