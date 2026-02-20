"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, FileText, Briefcase, IndianRupee, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        scope: "",
        budget: "",
        message: "",
    });

    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setStatus("error");
                setErrorMessage(data.message || "Failed to send message. Please try again.");
                return;
            }

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                scope: "",
                budget: "",
                message: "",
            });

        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
            setErrorMessage("Network error. Please check your connection and try again.");
        }
    };

    return (
        <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#66fcf1]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center py-20 text-center relative z-10"
                    >
                        <div className="w-20 h-20 bg-[#66fcf1]/20 text-[#66fcf1] rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(102,252,241,0.3)]">
                            <CheckCircle size={40} />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400 mb-8 max-w-xs mx-auto">We'll analyze your request and get back to you within 24 hours.</p>
                        <Button
                            className="bg-[#66fcf1] text-black hover:bg-[#5cdbd1] px-8 py-3 rounded-xl font-bold transition-all"
                            onClick={() => setStatus("idle")}
                        >
                            Send Another Message
                        </Button>
                    </motion.div>
                ) : (
                    <motion.form
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="space-y-6 relative z-10"
                    >
                        {/* Name */}
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-[#66fcf1] uppercase tracking-wider ml-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#66fcf1] transition-colors" size={20} />
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#66fcf1]/50 focus:shadow-[0_0_20px_rgba(102,252,241,0.1)] transition-all"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-[#66fcf1] uppercase tracking-wider ml-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#66fcf1] transition-colors" size={20} />
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#66fcf1]/50 focus:shadow-[0_0_20px_rgba(102,252,241,0.1)] transition-all"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-[#66fcf1] uppercase tracking-wider ml-1">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#66fcf1] transition-colors" size={20} />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#66fcf1]/50 focus:shadow-[0_0_20px_rgba(102,252,241,0.1)] transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Company */}
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-[#66fcf1] uppercase tracking-wider ml-1">Company</label>
                                <div className="relative">
                                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#66fcf1] transition-colors" size={20} />
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Company Name"
                                        className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#66fcf1]/50 focus:shadow-[0_0_20px_rgba(102,252,241,0.1)] transition-all"
                                    />
                                </div>
                            </div>

                            {/* Project Scope */}
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-[#66fcf1] uppercase tracking-wider ml-1">Project Scope</label>
                                <div className="relative">
                                    <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#66fcf1] transition-colors" size={20} />
                                    <select
                                        name="scope"
                                        value={formData.scope}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#66fcf1]/50 focus:shadow-[0_0_20px_rgba(102,252,241,0.1)] transition-all appearance-none"
                                    >
                                        <option value="" disabled>Select Scope</option>
                                        <option>Web Development</option>
                                        <option>Mobile App</option>
                                        <option>SaaS Platform</option>
                                        <option>AI/ML Integration</option>
                                        <option>Cloud Infrastructure</option>
                                        <option>Social Media Growth</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-[#66fcf1] uppercase tracking-wider ml-1">Estimated Budget</label>
                            <div className="relative">
                                <IndianRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#66fcf1] transition-colors" size={20} />
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#66fcf1]/50 focus:shadow-[0_0_20px_rgba(102,252,241,0.1)] transition-all appearance-none"
                                >
                                    <option value="" disabled>Select Budget Range</option>
                                    <option>₹50k - ₹2L</option>
                                    <option>₹2L - ₹5L</option>
                                    <option>₹5L - ₹10L</option>
                                    <option>₹10L+</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-[#66fcf1] uppercase tracking-wider ml-1">Project Scope & Message</label>
                            <div className="relative">
                                <FileText className="absolute left-4 top-6 text-gray-400 group-focus-within:text-[#66fcf1] transition-colors" size={20} />
                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project vision..."
                                    rows={4}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#66fcf1]/50 focus:shadow-[0_0_20px_rgba(102,252,241,0.1)] transition-all resize-none"
                                />
                            </div>
                        </div>

                        {status === "error" && (
                            <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                                <AlertCircle size={16} />
                                {errorMessage}
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={status === "loading"}
                            className="w-full bg-gradient-to-r from-[#66fcf1] to-[#45b7af] text-black font-bold text-lg py-4 rounded-xl shadow-[0_0_30px_rgba(102,252,241,0.4)] hover:shadow-[0_0_50px_rgba(102,252,241,0.6)] transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                        >
                            {status === "loading" ? "Sending..." : "Start the Conversation"}
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};
