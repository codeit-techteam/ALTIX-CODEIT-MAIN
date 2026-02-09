"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { ApplicationModal } from "@/components/ui/ApplicationModal";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Zap, Rocket, Box, Users, Globe, Code, Database, Cpu, Layers } from "lucide-react";
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimations";
import { motion } from "framer-motion";

const benefits = [
    {
        icon: Zap,
        title: "First Principles Thinking",
        description: "We don't just solve tasks; we deconstruct problems to their fundamental truths. We avoid reasoning by analogy and instead build solutions from the ground up.",
    },
    {
        icon: Rocket,
        title: "Speed & Scale",
        description: "Rapid deployment doesn't mean technical debt. We engineer for horizontal scalability from day one, ensuring your MVP can handle enterprise loads.",
    },
    {
        icon: Box,
        title: "Product Mindset",
        description: "We are founders ourselves. We don't just deliver features; we focus on cohesive outcomes, user retention, and market fit. We build businesses.",
    },
];

const techStack = [
    {
        name: "Next.js 14",
        color: "group-hover:text-white",
        bg: "group-hover:bg-white/10",
        border: "group-hover:border-white/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
        icon: (props) => (
            <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <mask id="mask0_next" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                    <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0_next)">
                    <circle cx="90" cy="90" r="90" fill="black" stroke="white" strokeWidth="4" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
                    <rect x="115" y="54" width="12" height="72" fill="white" />
                </g>
            </svg>
        )
    },
    {
        name: "React Native",
        color: "group-hover:text-[#61DAFB]",
        bg: "group-hover:bg-[#61DAFB]/10",
        border: "group-hover:border-[#61DAFB]/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(97,218,251,0.3)]",
        icon: (props) => (
            <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        name: "Node.js",
        color: "group-hover:text-[#339933]",
        bg: "group-hover:bg-[#339933]/10",
        border: "group-hover:border-[#339933]/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(51,153,51,0.3)]",
        icon: (props) => (
            <Image
                src="/images/nodejsLight.png"
                alt="Node.js"
                width={80}
                height={80}
                className={props.className}
                style={{ objectFit: "contain" }}
            />
        )
    },
    {
        name: "Python / AI",
        color: "group-hover:text-[#FFD43B]",
        bg: "group-hover:bg-[#306998]/10",
        border: "group-hover:border-[#FFD43B]/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(255,212,59,0.3)]",
        icon: (props) => (
            <Image
                src="/images/python-logo-only.png"
                alt="Python"
                width={80}
                height={80}
                className={props.className}
                style={{ objectFit: "contain" }}
            />
        )
    },
    {
        name: "MongoDB",
        color: "group-hover:text-[#47A248]",
        bg: "group-hover:bg-[#47A248]/10",
        border: "group-hover:border-[#47A248]/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(71,162,72,0.3)]",
        icon: (props) => (
            <Image
                src="/images/monggoo.png"
                alt="MongoDB"
                width={80}
                height={80}
                className={props.className}
                style={{ objectFit: "contain" }}
            />
        )
    },
    {
        name: "AWS",
        color: "group-hover:text-[#FF9900]",
        bg: "group-hover:bg-[#FF9900]/10",
        border: "group-hover:border-[#FF9900]/50",
        shadow: "group-hover:shadow-[0_0_30px_rgba(255,153,0,0.3)]",
        icon: (props) => (
            <Image
                src="/images/aws-color.png"
                alt="AWS"
                width={80}
                height={80}
                className={props.className}
                style={{ objectFit: "contain" }}
            />
        )
    }
];

const FALLBACK_ROLES = [
    {
        _id: "1",
        title: "Senior Full Stack Engineer",
        type: "Remote / Bengaluru",
        tags: ["Next.js", "Node.js", "System Design"],
        description: "Lead the development of scalable web applications. Requires 4+ years of experience with React and Node.js.",
        salary: "₹25L - ₹45L",
    },
    {
        _id: "2",
        title: "AI/ML Engineer",
        type: "Remote",
        tags: ["Python", "PyTorch", "LLMs"],
        description: "Build and fine-tune Large Language Models for our enterprise clients. Strong math background preferred.",
        salary: "₹20L - ₹40L",
    },
    {
        _id: "3",
        title: "Product Designer (UI/UX)",
        type: "Bengaluru",
        tags: ["Figma", "Design Systems"],
        description: "Craft intuitive and beautiful user experiences. Work directly with founders to shape product vision.",
        salary: "₹15L - ₹30L",
    }
];

export default function Careers() {
    const [selectedRole, setSelectedRole] = useState(null);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                // Determine absolute URL for server-side or relative for client
                const res = await fetch("/api/careers");
                if (res.ok) {
                    const data = await res.json();
                    if (data && data.length > 0) {
                        setRoles(data);
                    } else {
                        setRoles(FALLBACK_ROLES);
                    }
                } else {
                    setRoles(FALLBACK_ROLES);
                }
            } catch (error) {
                console.error("Failed to fetch jobs, using fallback:", error);
                setRoles(FALLBACK_ROLES);
            } finally {
                setLoading(false);
            }
        };
        fetchRoles();
    }, []);

    const filteredRoles = selectedCategory === "All"
        ? roles
        : roles.filter(role => {
            const match = (str) => (str || "").toLowerCase().includes(selectedCategory.toLowerCase());
            const hasTag = (tagPart) => (role.tags || []).some(t => t.toLowerCase().includes(tagPart.toLowerCase()));
            const titleHas = (str) => (role.title || "").toLowerCase().includes(str.toLowerCase());

            if (selectedCategory === "Engineering") return titleHas("Engineer") || titleHas("Developer");
            if (selectedCategory === "Design") return titleHas("Design") || titleHas("UI");
            if (selectedCategory === "Product") return titleHas("Product") || titleHas("Manager");

            return match(role.type) || hasTag(selectedCategory) || titleHas(selectedCategory);
        });

    // Generate JobPosting Schema
    const jobSchema = roles.map(role => ({
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": role.title,
        "description": role.description,
        "identifier": {
            "@type": "PropertyValue",
            "name": "Altix Codeit",
            "value": role._id
        },
        "datePosted": new Date().toISOString().split('T')[0], // dynamically set to today for demo
        "validThrough": "2026-12-31",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "Altix Codeit",
            "sameAs": "https://mycodeit.com"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": role.type.includes("Remote") ? "Remote" : "Bengaluru",
                "addressRegion": "KA",
                "addressCountry": "IN"
            }
        },
        "baseSalary": {
            "@type": "MonetaryAmount",
            "currency": "INR",
            "value": {
                "@type": "QuantitativeValue",
                "value": role.salary,
                "unitText": "YEAR"
            }
        }
    }));

    return (
        <div className="min-h-screen flex flex-col bg-[#0b0c10]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
            />

            <ApplicationModal
                isOpen={!!selectedRole}
                onClose={() => setSelectedRole(null)}
                roleTitle={selectedRole}
            />
            <Navbar />

            <main className="flex-grow pt-32">
                {/* Hero */}
                <section className="relative container mx-auto px-6 mb-24 pt-10 text-center min-h-[50vh] flex flex-col justify-center items-center">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#66fcf1]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none" />

                    <FadeUp>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#66fcf1]/20 bg-[#66fcf1]/5 backdrop-blur-md text-sm font-medium text-[#66fcf1] mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66fcf1] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#66fcf1]"></span>
                            </span>
                            We are actively hiring.
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Build the <span className="text-[#66fcf1]">Future</span> <br /> with Us.
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Join our team of world-class engineers building scalable, AI-driven software solutions. We value craftsmanship, collaboration, and continuous learning.
                        </p>

                        <div className="flex justify-center gap-6">
                            <Link href="#roles">
                                <Button variant="glow" size="lg" className="px-10 py-6 text-lg">
                                    View Openings
                                </Button>
                            </Link>
                        </div>
                    </FadeUp>
                </section>

                {/* Tech Stack Highlights */}
                <section className="container mx-auto px-6 mb-32">
                    <FadeIn>
                        <div className="p-10 rounded-3xl bg-[#121212] border border-white/5 text-center relative overflow-hidden">
                            {/* Gradient Bloom */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#66fcf1]/5 blur-[100px] pointer-events-none" />

                            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Our Core Tech Stack</h3>
                            <div className="flex flex-wrap justify-center gap-8 md:gap-12 relative z-10">
                                {techStack.map((tech) => (
                                    <div key={tech.name} className="flex flex-col items-center gap-4 group cursor-pointer">
                                        <div className={`w-20 h-20 md:w-24 md:h-24 p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 relative ${tech.bg} ${tech.border} ${tech.shadow} group-hover:-translate-y-2`}>
                                            <div className={`text-gray-400 transition-colors duration-300 ${tech.color}`}>
                                                <tech.icon className="w-10 h-10 md:w-12 md:h-12" />
                                            </div>
                                        </div>
                                        <span className={`text-sm md:text-base font-bold text-gray-400 transition-colors duration-300 ${tech.color}`}>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </section>

                {/* Culture / DNA */}
                <section className="container mx-auto px-6 mb-32">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold text-[#66fcf1] mb-4 tracking-widest uppercase">Our DNA</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white">Why builders choose Altix</h3>
                        </div>
                    </FadeIn>

                    <StaggerContainer className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <StaggerItem key={index} className="h-full">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="group h-full relative p-10 rounded-[2.5rem] bg-[#080808] border border-white/5 backdrop-blur-sm overflow-hidden flex flex-col hover:border-[#66fcf1]/50 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-2xl border border-white/10 bg-white/5 text-gray-400 flex items-center justify-center mb-10 transition-all duration-300 group-hover:bg-[#66fcf1]/10 group-hover:border-[#66fcf1]/30 group-hover:text-[#66fcf1]">
                                        <benefit.icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-6 group-hover:text-[#66fcf1] transition-colors">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed font-light text-[15px] group-hover:text-gray-300">
                                        {benefit.description}
                                    </p>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>

                {/* Open Roles */}
                <section id="roles" className="container mx-auto px-6 mb-32 max-w-5xl">
                    <FadeUp className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-4">Open Roles</h2>
                            <p className="text-gray-400 max-w-lg">Join the 1% of engineers building the next generation of tech.</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Engineering', 'Product', 'Design'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedCategory(filter)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${selectedCategory === filter ? 'bg-[#66fcf1] text-black' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </FadeUp>

                    {loading ? (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 border-4 border-[#66fcf1]/30 border-t-[#66fcf1] rounded-full animate-spin mx-auto mb-6" />
                            <p className="text-gray-400">Loading positions...</p>
                        </div>
                    ) : (
                        <StaggerContainer key={selectedCategory} className="space-y-4 min-h-[200px]">
                            {filteredRoles.length === 0 ? (
                                <div className="text-center py-20 rounded-2xl border border-white/5 bg-white/5">
                                    <p className="text-xl text-white font-medium mb-2">No open positions in {selectedCategory}</p>
                                    <p className="text-gray-400">Check back later.</p>
                                </div>
                            ) : (
                                filteredRoles.map((role, index) => (
                                    <StaggerItem key={role._id || index}>
                                        <motion.div
                                            whileHover={{ scale: 1.01 }}
                                            className="relative p-8 rounded-3xl border border-white/10 bg-[#121212] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#66fcf1]/50 transition-all"
                                        >
                                            <div>
                                                <h4 className="text-2xl font-bold text-white mb-2">{role.title}</h4>
                                                <div className="flex flex-wrap gap-3 items-center text-sm text-gray-400 mb-4">
                                                    <span className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/5">
                                                        <Globe size={14} className="text-[#66fcf1]" /> {role.type}
                                                    </span>
                                                    {role.salary && <span className="text-[#66fcf1] font-semibold">{role.salary}</span>}
                                                </div>
                                                <p className="text-gray-400 text-sm max-w-xl">{role.description}</p>
                                            </div>

                                            <Button
                                                variant="glow"
                                                className="shrink-0"
                                                onClick={() => setSelectedRole(role.title)}
                                            >
                                                Apply Now <ArrowRight size={16} className="ml-2" />
                                            </Button>
                                        </motion.div>
                                    </StaggerItem>
                                ))
                            )}
                        </StaggerContainer>
                    )}
                </section>
            </main>
            <Footer />
        </div >
    );
}
