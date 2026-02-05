"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeUp } from "@/components/ui/ScrollAnimations";
import { motion } from "framer-motion";
import { ScrollText, Shield, Scale, Gavel, FileText, AlertCircle } from "lucide-react";

const sections = [
    {
        title: "Introduction",
        icon: ScrollText,
        content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services."
    },
    {
        title: "Intellectual Property",
        icon: FileText,
        content: "All content included on this site, such as text, graphics, logos, button icons, images, audio clips, digital downloads, data compilations, and software, is the property of Altix Codeit or its content suppliers and protected by international copyright laws."
    },
    {
        title: "Limitation of Liability",
        icon: Shield,
        content: "In no event shall Altix Codeit, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
        title: "Governing Law",
        icon: Gavel,
        content: "These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions."
    }
];

export const TermsContent = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0b0c10]">
            <Navbar />

            <main className="flex-grow pt-40 pb-24 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <section className="container mx-auto px-6 max-w-5xl">
                    <FadeUp className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                            <Scale size={14} />
                            <span>Legal Information</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Terms & <span className="text-[#66fcf1]">Conditions</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Please read these terms carefully before using our services. Last updated: January 20, 2026.
                        </p>
                    </FadeUp>

                    <div className="grid gap-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
                                <div className="relative glass-card p-8 md:p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden">
                                    <div className="flex flex-col md:flex-row gap-8">
                                        <div className="shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-[#0b0c10] border border-white/10 flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <section.icon size={32} strokeWidth={1.5} />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                                {index + 1}. {section.title}
                                            </h2>
                                            <p className="text-gray-400 leading-relaxed text-lg">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-16 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-start gap-4"
                    >
                        <AlertCircle className="text-primary shrink-0 mt-1" />
                        <p className="text-sm text-gray-400">
                            <strong>Note:</strong> These terms may be updated from time to time. We encourage visitors to frequently check this page for any changes. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
                        </p>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};
