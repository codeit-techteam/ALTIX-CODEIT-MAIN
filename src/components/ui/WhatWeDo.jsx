"use client";

import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "App & Website",
        description: "Performance-obsessed engineering. Native mobile apps and high-conversion web platforms.",
        color: "bg-[#111]"
    },
    {
        id: "02",
        title: "AI & Automation",
        description: "Integrating intelligent agents and automated workflows to operationalize efficiency.",
        color: "bg-[#1A1A1A]"
    },
    {
        id: "03",
        title: "Go-To-Market Strategy",
        description: "Technical roadmaps aligned with business goals. We validate, iterate, and launch fast.",
        color: "bg-[#111]"
    },
    {
        id: "04",
        title: "UI/UX Design",
        description: "Human-centric interfaces. We design for clarity, conversion, and emotional impact.",
        color: "bg-[#1A1A1A]"
    },
    {
        id: "05",
        title: "Scaling & Growth",
        description: "Architecting systems that handle millions of requests. We build for the day after tomorrow.",
        color: "bg-[#111]"
    },
    {
        id: "06",
        title: "Product Maintenance",
        description: "Long-term reliability. We keep your tech stack healthy, secure, and up-to-date.",
        color: "bg-[#1A1A1A]"
    }
];

export const WhatWeDo = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }} />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-0">

                    {/* Sticky Header Content */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mb-12 lg:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-8 bg-primary"></span>
                                <span className="text-sm font-bold tracking-widest uppercase text-gray-500">Our Services</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-[0.9] tracking-tight">
                                What <br /> We Do
                            </h2>
                            <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
                            <p className="text-xl text-gray-600 leading-relaxed max-w-sm">
                                At Codeit, we turn your ideas into powerful digital products built and scaled by top IIT minds. We build tech ecosystems that help startups grow smarter and faster.
                            </p>
                        </motion.div>
                    </div>

                    {/* Diagonal Timeline Steps */}
                    <div className="lg:col-span-8 relative">
                        {/* Connecting Line (Optional subtle guide) */}
                        <div className="absolute top-0 left-0 w-px h-full bg-gray-100 -z-10 hidden lg:block" style={{ left: '20%' }} />

                        <div className="flex flex-col gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-15%" }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                                    className="w-full md:w-[400px] lg:w-[450px]"
                                    style={{
                                        // Diagonal effect on desktop using dynamic left margin
                                        marginLeft: index % 2 === 0 ? '0' : 'auto',
                                        // On very large screens, we can do a true diagonal step
                                        // For simplicity and responsiveness, adapting "staircase" logic:
                                        // index 0: ml-0
                                        // index 1: ml-[15%]
                                        // index 2: ml-[30%] ... capped to avoid going off screen
                                        marginTop: index === 0 ? 0 : '-40px' // Slight overlap
                                    }}
                                >
                                    <div className={`relative p-8 md:p-10 ${index % 2 === 0 ? 'bg-black text-white' : 'bg-white text-black border border-gray-100 shadow-xl'} shadow-2xl rounded-sm group hover:-translate-y-2 transition-transform duration-300`}>

                                        {/* Large Number */}
                                        <div className="absolute -top-10 right-6">
                                            <span className={`text-8xl font-bold opacity-10 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
                                                {service.id}
                                            </span>
                                        </div>

                                        <span className="text-6xl font-bold text-primary mb-6 block opacity-80 group-hover:opacity-100 transition-opacity">
                                            {service.id}
                                        </span>

                                        <h3 className={`text-2xl font-bold mb-4 ${index % 2 === 0 ? 'text-white' : 'text-black'}`}>
                                            {service.title}
                                        </h3>

                                        <p className={`text-lg leading-relaxed ${index % 2 === 0 ? 'text-gray-400' : 'text-gray-600'}`}>
                                            {service.description}
                                        </p>

                                        {/* Decorative Corner */}
                                        <div className={`absolute bottom-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-b-[20px] ${index % 2 === 0 ? 'border-b-primary/20' : 'border-b-primary'} transition-all`} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Custom Stagger Layout for Desktop specifically matching the prompt's staircase */}
                        <div className="hidden lg:block absolute top-0 w-full h-full pointer-events-none -z-10">
                            {/* We are handling positioning in the loop via style, but this div could be used for background connecting lines if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
