"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip } from "lucide-react";

export function WhatsAppCTA() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        // Default message if empty, or specific prompt
        const textToSend = message.trim() || "Hi, I'm interested in building a project with Codeit.";
        const phoneNumber = "918368085750";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(textToSend)}`;
        window.open(url, "_blank");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background Gradients for Aesthetic feel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight font-serif"
                >
                    Just tell <span className="text-white">Codeit</span> what you need
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-400">
                        On WhatsApp
                    </span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-12 w-full max-w-2xl mx-auto flex items-center gap-4"
                >
                    <div className="relative flex-1 group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                        <div className="relative bg-[#OAOAOA] bg-black rounded-full p-1 pl-6 pr-2 flex items-center border border-white/10">
                            <span className="text-gray-400 mr-3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smile"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
                            </span>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Tell Codeit what you are looking for..."
                                className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg py-3"
                            />
                            <button
                                className="text-gray-400 hover:text-white transition-colors p-2"
                                aria-label="Attach file"
                            >
                                <Paperclip className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSend}
                        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all duration-300 group"
                    >
                        <Send className="w-6 h-6 text-white ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
