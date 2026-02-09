import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Shield, Lock, Eye, FileText, Database, Server } from "lucide-react";
import { FadeUp, FadeIn } from "@/components/ui/ScrollAnimations";

export const metadata = {
    title: "Privacy Policy | Altix Codeit",
    description: "Transparency and trust are the foundation of our partnership.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24">
                <section className="container mx-auto px-6 max-w-4xl">
                    <FadeUp className="mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
                        <p className="text-xl text-gray-400">Transparency and trust are the foundation of our partnership.</p>
                        <p className="text-sm text-gray-500 mt-4">Last updated: Oct 2023</p>
                    </FadeUp>

                    <FadeIn delay={0.2} className="glass-card p-8 md:p-12 rounded-2xl border border-white/10 space-y-12">
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed">
                                At Altix Codeit, we are strictly committed to protecting your personal information and your right to privacy. As a premier technology consulting firm, we understand that data integrity is paramount. This policy outlines our comprehensive practices regarding data collection, usage, and the sophisticated security measures we employ to safeguard your digital footprint.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Database className="text-primary" size={24} />
                                <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
                            </div>

                            <div className="space-y-4">
                                <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                                    <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Personal Data</h3>
                                    <p className="text-gray-400 text-sm">Name, business email address, phone number, company affiliation, and other contact details provided voluntarily when you book a consultation or request our services.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                                    <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Usage Data</h3>
                                    <p className="text-gray-400 text-sm">Technical information including IP address, browser type, operating system versions, and page interaction timestamps to optimize our platform's performance.</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-lg border border-white/5">
                                    <h3 className="text-primary font-bold text-sm uppercase tracking-wider mb-2">Cookies</h3>
                                    <p className="text-gray-400 text-sm">We utilize essential and analytical cookies to enhance your browsing experience, remember your preferences, and analyze site traffic patterns securely.</p>
                                </div>
                            </div>
                        </div>

                        {/* How We Use Info */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="text-primary" size={24} />
                                <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
                            </div>
                            <p className="text-gray-400 mb-6">We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent. Specifically, we use data to:</p>
                            <ul className="space-y-3">
                                {[
                                    "Facilitate account creation and logon process.",
                                    "Deliver targeted technology consulting services and facilitate project management.",
                                    "Send administrative information regarding changes to our terms, conditions, and policies."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Data Security */}
                        <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 relative overflow-hidden">
                            <div className="absolute right-0 top-0 opacity-10 p-8">
                                <Shield size={120} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                            <p className="text-gray-400 mb-6 relative z-10">We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
                            <div className="inline-flex items-center gap-2 text-primary font-bold text-sm bg-primary/10 px-4 py-2 rounded-lg">
                                <Lock size={16} /> 256-bit SSL Encryption Standard
                            </div>
                        </div>

                        {/* Your Privacy Rights */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Your Privacy Rights</h2>
                            <p className="text-gray-400 mb-6">Depending on your location, you may have specific rights regarding your personal information, including the right to access, correct, or delete the data we hold about you.</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { title: "Access & Portability", desc: "Request copies of your personal data." },
                                    { title: "Rectification", desc: "Request correction of inaccurate data." },
                                    { title: "Erasure", desc: "Request deletion of your personal data." },
                                    { title: "Restriction", desc: "Request restriction of processing." },
                                ].map((right, i) => (
                                    <div key={i} className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                                        <h4 className="font-bold text-white mb-1">{right.title}</h4>
                                        <p className="text-xs text-gray-500">{right.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Us */}
                        <div className="border-t border-white/10 pt-8">
                            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
                            <p className="text-gray-400 mb-4">If you have questions or comments about this policy, you may email us at:</p>
                            <a href="mailto:privacy@mycodeit.com" className="flex items-center gap-2 text-primary hover:underline font-medium">
                                <MailIcon /> privacy@mycodeit.com
                            </a>
                        </div>
                    </FadeIn>
                </section>
            </main>
            <Footer />
        </div>
    );
}

function MailIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}
