"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
    TrendingUp,
    Users,
    Target,
    Zap,
    Search,
    Video,
    Rocket,
    LineChart,
    PieChart,
    Activity,
    Globe,
    Shield,
    Settings,
    Bot,
    ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { useRef } from "react";

// --- Components ---

const MarqueeText = ({ text, direction = 1, speed = 15 }) => {
    return (
        <div className="relative flex overflow-hidden py-4 select-none bg-[#0b0c10]">
            <motion.div
                initial={{ x: direction === 1 ? 0 : "-50%" }}
                animate={{ x: direction === 1 ? "-50%" : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                className="flex whitespace-nowrap gap-8 md:gap-16 items-center"
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[4rem] md:text-[8rem] font-black uppercase leading-none tracking-tighter text-transparent-stroke opacity-100 whitespace-nowrap">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const ServiceCard = ({ service, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="group relative p-8 rounded-3xl bg-[#121212]/80 backdrop-blur-xl border border-white/5 hover:border-[#66fcf1]/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full"
    >
        {/* Hover Highlight */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#66fcf1]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all" />

        <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 flex justify-between items-start">
                <div className="w-14 h-14 bg-[#1f2833] rounded-2xl flex items-center justify-center text-[#66fcf1] border border-white/5 group-hover:bg-[#66fcf1] group-hover:text-black transition-colors duration-300 shadow-lg">
                    <service.icon size={28} />
                </div>
                <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:border-[#66fcf1]/30 group-hover:text-[#66fcf1] transition-colors">
                    {service.tag}
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#66fcf1] transition-colors">
                {service.title}
            </h3>

            <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow">
                {service.desc}
            </p>

            <div className="flex items-center text-sm font-bold text-white/50 group-hover:text-[#66fcf1] transition-colors mt-auto">
                <span className="mr-2">Explore Service</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    </motion.div>
);

const ProcessStep = ({ step, index }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col md:flex-row items-center gap-12 mb-24 relative ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
        {/* Content Box */}
        <div className={`w-full md:w-1/2 relative group ${index % 2 === 0 ? "text-left md:text-left" : "text-left md:text-right"}`}>
            <div className="absolute inset-0 bg-[#66fcf1]/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-8 rounded-3xl border border-white/10 bg-[#0b0c10] hover:border-[#66fcf1]/50 transition-colors">
                <span className="text-[#66fcf1] text-6xl font-black opacity-10 absolute -top-8 left-4 select-none">0{index + 1}</span>
                <h3 className="text-2xl font-bold text-white mb-3 mt-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
        </div>

        {/* Center Node */}
        <div className="relative z-10 hidden md:flex w-16 h-16 rounded-full bg-[#0b0c10] border border-[#66fcf1]/30 items-center justify-center shadow-[0_0_30px_rgba(102,252,241,0.2)]">
            <div className="w-3 h-3 bg-[#66fcf1] rounded-full animate-pulse" />
        </div>

        {/* Empty Half */}
        <div className="w-full md:w-1/2 hidden md:block" />
    </motion.div>
);


const ScrollRevealSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [300, -300]);

    return (
        <section ref={containerRef} className="py-40 bg-[#0b0c10] relative overflow-hidden">
            {/* Decorational light */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#66fcf1]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                {/* Text Content */}
                <div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ staggerChildren: 0.15 }}
                    >
                        {[
                            "We help brands",
                            "grow.",
                            "Turn followers",
                            "into customers.",
                            "Build authority with",
                            "AI-powered",
                            "social media."
                        ].map((line, i) => {
                            const isHighlight = ["grow.", "customers.", "AI-powered", "social media."].includes(line);
                            return (
                                <motion.div
                                    key={i}
                                    className="overflow-hidden"
                                >
                                    <motion.h2
                                        variants={{
                                            hidden: { y: 100, opacity: 0 },
                                            visible: {
                                                y: 0,
                                                opacity: 1,
                                                transition: {
                                                    ease: [0.22, 1, 0.36, 1],
                                                    duration: 1.2
                                                }
                                            }
                                        }}
                                        className={`text-5xl md:text-7xl font-black leading-[1.1] ${isHighlight ? "text-[#66fcf1]" : "text-white"}`}
                                    >
                                        {line}
                                    </motion.h2>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl text-gray-400 mt-12 max-w-lg leading-relaxed"
                    >
                        Stop posting into the void. We build systems that capture attention and convert it into real business value.
                    </motion.p>
                </div>

                {/* Parallax Image Stack */}
                <div className="relative h-[400px] md:h-[600px] w-full block">
                    {/* Card 1 */}
                    <motion.div style={{ y: y1 }} className="absolute right-0 top-0 w-80 z-10">
                        <div className="glass-card p-4 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="aspect-[4/5] bg-gray-800 rounded-2xl overflow-hidden relative">
                                <img src="/Biogetica.png" alt="Project 1" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-white border border-white/10">
                                    +240% Engagement
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div style={{ y: y2 }} className="absolute right-40 top-40 w-80 z-20">
                        <div className="glass-card p-4 rounded-3xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-[#66fcf1]/10">
                            <div className="aspect-[4/5] bg-gray-800 rounded-2xl overflow-hidden relative">
                                <img src="/LeisureBites.png" alt="Project 2" className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 left-4 bg-[#66fcf1] px-4 py-2 rounded-full text-xs font-bold text-black">
                                    Viral Campaign
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div style={{ y: y3 }} className="absolute right-10 bottom-0 w-72 z-30">
                        <div className="glass-card p-4 rounded-3xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                            <div className="aspect-square bg-gray-800 rounded-2xl overflow-hidden relative flex items-center justify-center">
                                <div className="text-center p-6">
                                    <div className="text-5xl font-black text-white mb-2">3.5M</div>
                                    <div className="text-sm text-gray-400 uppercase tracking-widest">Views Generated</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default function SocialMediaContent() {
    const { scrollYProgress } = useScroll();
    const xMove = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const xMoveReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div className="min-h-screen flex flex-col bg-[#0b0c10] text-[#c5c6c7] selection:bg-[#66fcf1] selection:text-black">
            <Navbar />

            <main className="flex-grow overflow-hidden">

                {/* 1️⃣ HERO SECTION - MEGA TYPOGRAPHY */}
                <section className="relative pt-40 pb-32 min-h-screen flex items-center overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-[10%] right-[10%] w-[800px] h-[800px] bg-[#66fcf1]/5 rounded-full blur-[150px]" />
                        <div className="absolute bottom-[0%] left-[0%] w-[600px] h-[600px] bg-[#45a29e]/10 rounded-full blur-[120px]" />

                    </div>

                    <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#66fcf1] shadow-[0_0_10px_#66fcf1]" />
                            <span className="text-xs font-bold tracking-[0.2em] text-white">REDEFINE DIGITAL PRESENCE</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-8 max-w-5xl mx-auto">
                            DOMINATE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66fcf1] via-white to-[#66fcf1] bg-300% animate-gradient">
                                YOUR NICHE
                            </span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
                        >
                            We build <span className="text-white font-semibold">social-first brands</span>. Leveraging AI and human creativity to turn followers into revenue and engagement into authority.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <Link href="/contact">
                                <Button
                                    className="bg-[#66fcf1] text-black hover:bg-white hover:text-black rounded-full px-12 py-8 text-xl font-bold transition-all duration-300 shadow-[0_0_40px_rgba(102,252,241,0.3)] hover:shadow-[0_0_60px_rgba(102,252,241,0.6)]"
                                >
                                    Start Growing Now
                                </Button>
                            </Link>
                            <Link href="#strategy">
                                <Button
                                    variant="outline"
                                    className="border-white/20 text-white rounded-full px-12 py-8 text-xl font-bold hover:bg-white/10"
                                >
                                    View Our Work
                                </Button>
                            </Link>
                        </motion.div>
                    </div>



                </section>

                {/* 2️⃣ STRATEGY MARQUEE SECTION */}
                <section id="strategy" className="py-20 overflow-hidden bg-[#0b0c10]">
                    <div className="rotate-[-2deg] scale-110">
                        <MarqueeText text="STRATEGY • CONTENT • GROWTH • " direction={1} speed={30} />
                        <MarqueeText text="ROI • VISIBILITY • AUTHORITY • " direction={-1} speed={30} />
                    </div>
                </section>

                {/* 3️⃣ SCROLL REVEAL SECTION (Replaces Brand Philosophy) */}
                <ScrollRevealSection />

                {/* 4️⃣ SERVICES GRID - BOLD STYLE */}
                <section className="py-32 bg-[#080808]">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col items-center text-center mb-20 gap-6">
                            <h2 className="text-5xl md:text-7xl font-black text-white uppercase leading-none">
                                OUR <span className="text-transparent-stroke-primary">SERVICES</span>
                            </h2>
                            <span><p className="max-w-xl text-gray-400 text-lg">
                                Comprehensive solutions for the modern digital landscape.
                            </p></span>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Channel Setup",
                                    desc: "Complete social media channel setup including profile optimization, bio SEO, branding visuals, and tracking integrations.",
                                    tag: "Foundation",
                                    icon: Settings
                                },
                                {
                                    title: "Strategy & Planning",
                                    desc: "AI-backed social media strategy including content calendar, tone of voice, and KPI framework aligned with business goals.",
                                    tag: "Blueprints",
                                    icon: LineChart
                                },
                                {
                                    title: "Niche Dominance",
                                    desc: "Research and competitor analysis to identify high-performing content gaps and viral opportunities.",
                                    tag: "Research",
                                    icon: Search
                                },
                                {
                                    title: "Content Production",
                                    desc: "High-quality AI-assisted posts, reels, captions, hooks, and creatives optimized for maximum retention.",
                                    tag: "Creation",
                                    icon: Video
                                },
                                {
                                    title: "Audience Growth",
                                    desc: "Organic and paid growth strategies to increase real, targeted followers using AI audience targeting.",
                                    tag: "Scale",
                                    icon: Users
                                },
                                {
                                    title: "Brand Authority",
                                    desc: "Consistent storytelling, community engagement, and trust signals to position you as the market leader.",
                                    tag: "Authority",
                                    icon: Shield
                                }
                            ].map((service, i) => (
                                <ServiceCard key={i} service={service} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5️⃣ PROCESS TIMELINE */}
                <section className="py-32 relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">THE GROWTH ENGINE</h2>
                            <div className="w-24 h-2 bg-[#66fcf1] mx-auto" />
                        </div>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Vertical Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                            {[
                                { title: "Audit & Research", desc: "We deconstruct your current presence vs competitors.", icon: Search },
                                { title: "Strategy Blueprint", desc: "A bespoke roadmap for your brand's domination.", icon: LineChart },
                                { title: "AI Content Studio", desc: "Scale production without sacrificing quality.", icon: Zap },
                                { title: "Launch & Velocity", desc: "Aggressive distribution and engagement scaling.", icon: Rocket },
                                { title: "Optimization Loop", desc: "Data-led iterations for compounding growth.", icon: Activity }
                            ].map((step, i) => (
                                <ProcessStep key={i} step={step} index={i} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6️⃣ FINAL BOLD CTA */}
                <section className="py-20 relative overflow-hidden bg-[#66fcf1] text-black">
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h2 className="text-5xl md:text-[8rem] font-black leading-none tracking-tighter mb-8">
                            READY TO <br /> EXPLODE?
                        </h2>
                        <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-12 opacity-80">
                            Stop playing small. Join the agency that's redefining social growth for the AI era.
                        </p>

                        <Link href="/contact">
                            <button className="bg-black text-white px-16 py-8 rounded-full text-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
                                BOOK MY CONSULTATION
                            </button>
                        </Link>
                    </div>


                </section>

            </main>
            <Footer />
        </div>
    );
}
