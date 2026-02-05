"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How fast can you deliver?",
        answer: "Most projects are scoped and shipped within 4–8 weeks, depending on complexity. We prioritize rapid iteration and feedback to ensure we're building the right thing efficiently.",
    },
    {
        question: "Do you work with bootstrapped startups?",
        answer: "Yes. We understand the unique challenges and constraints of bootstrapped ventures. We adapt our execution style to your pace, budget, and growth expectations, focusing on delivering maximum value.",
    },
    {
        question: "Do you offer post-launch support?",
        answer: "We do. Our partnership doesn't end at launch. We offer various post-launch support packages, from maintenance and bug fixes to ongoing feature development and scaling assistance.",
    },
    {
        question: "Can you help us with pricing, positioning, or market entry?",
        answer: "Absolutely. With our deep startup experience, particularly from an IITian background, we regularly advise founders on crucial GTM strategies including pricing models, market positioning, and effective market entry tactics.",
    },
];

export function FAQSection() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Header Left */}
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Frequently <br />
                            Asked <br />
                            <span className="text-white">Questions</span>
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-[#66fcf1] to-transparent rounded-full" />
                    </div>

                    {/* Accordion Right */}
                    <div className="lg:w-2/3">
                        <div className="flex flex-col gap-6">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="border-b border-white/10 pb-6 cursor-pointer group"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex items-center justify-between py-2">
                <h3 className={`text-xl font-medium transition-colors duration-300 ${isOpen ? "text-[#66fcf1]" : "text-white group-hover:text-[#66fcf1]/80"}`}>
                    {faq.question}
                </h3>
                <span className={`p-2 rounded-full transition-colors duration-300 ${isOpen ? "text-[#66fcf1]" : "text-gray-400 group-hover:text-white"}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 text-lg leading-relaxed pt-2 pb-4">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
