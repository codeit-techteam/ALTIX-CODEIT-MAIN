import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Calendar, Mail, MapPin, Phone, ShieldCheck, ArrowUpRight } from "lucide-react";
import { FadeUp, FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/ui/ScrollAnimations";
import { ContactForm } from "@/components/ui/ContactForm";



export default function Contact() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <section className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Left Content */}
                        <FadeUp className="space-y-12">
                            <script
                                type="application/ld+json"
                                dangerouslySetInnerHTML={{
                                    __html: JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "ContactPage",
                                        "name": "Contact Altix Codeit",
                                        "description": "Get in touch for software development services.",
                                        "mainEntity": {
                                            "@type": "Organization",
                                            "name": "Altix Codeit",
                                            "contactPoint": {
                                                "@type": "ContactPoint",
                                                "contactType": "sales",
                                                "email": "contact@altixcodeit.com"
                                            }
                                        }
                                    })
                                }}
                            />
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                    Ready to Scale <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66fcf1] to-[#45b7af]">
                                        Your Digital Vision?
                                    </span>
                                </h1>
                                <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
                                    Connect with our engineering experts. Let's discuss how our tailored software solutions and AI integration can accelerate your business growth.
                                </p>
                            </div>

                            {/* Trust Badge */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 w-fit backdrop-blur-md">
                                <div className="w-10 h-10 rounded-full bg-[#66fcf1]/10 flex items-center justify-center text-[#66fcf1]">
                                    <ShieldCheck size={20} />
                                </div>
                                <p className="text-sm text-gray-300 max-w-xs">
                                    Trusted by leading enterprises and high-growth startups. Secure, scalable, and future-proof.
                                </p>
                            </div>

                            {/* Book Call Card */}
                            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-[#66fcf1]/30 transition-all duration-500">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#66fcf1]/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none group-hover:bg-[#66fcf1]/20 transition-all" />

                                <h3 className="text-2xl font-bold text-white mb-2">Book a Scale-Up Call</h3>
                                <p className="text-gray-400 mb-8 max-w-sm">
                                    Skip the email. Connect directly with our lead engineer for a 30-minute technical consultation.
                                </p>

                                <a
                                    href="https://calendly.com/shoaibmustaque10/appointment"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-[#66fcf1] text-black px-6 py-3 rounded-xl font-bold hover:bg-[#5cdbd1] hover:shadow-[0_0_20px_rgba(102,252,241,0.4)] transition-all duration-300 group/link"
                                >
                                    <span>Schedule Consultation</span>
                                    <ArrowUpRight size={20} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                            </div>
                        </FadeUp>

                        {/* Right Content - Form */}
                        <FadeIn delay={0.2} className="relative">
                            {/* Decoration behind form */}
                            <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#66fcf1]/5 rounded-full blur-[80px] pointer-events-none" />

                            <ContactForm />
                        </FadeIn>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
