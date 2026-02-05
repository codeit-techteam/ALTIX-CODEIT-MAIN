"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CheckCircle2, MoreHorizontal, Send } from "lucide-react";

const SCENARIOS = [
    [
        { sender: "client", text: "Hi, we need a high-performance e-commerce PWA." },
        { sender: "codeit", text: "We specialize in modern PWAs. What stack are you considering?" },
        { sender: "client", text: "Thinking Next.js with Shopify headless." },
        { sender: "codeit", text: "Excellent choice. We can deliver an MVP in 4 weeks." }
    ],
    [
        { sender: "client", text: "Can you build a custom dashboard for our AI analytics?" },
        { sender: "codeit", text: "Absolutely. We build data-heavy UIs with D3 and Tremor." },
        { sender: "client", text: "Great! We have huge datasets." },
        { sender: "codeit", text: "We'll optimize rendering for smooth performance." }
    ],
    [
        { sender: "client", text: "We need a mobile app for iOS and Android." },
        { sender: "codeit", text: "React Native would be perfect for cross-platform speed." },
        { sender: "client", text: "Can you handle the backend too?" },
        { sender: "codeit", text: "Yes, we build scalable Node.js/Go backends." }
    ]
];

export function ChatShowcase() {
    const [scenarioIndex, setScenarioIndex] = useState(0);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let timeoutIds = [];
        const currentScenario = SCENARIOS[scenarioIndex];

        // Reset messages when scenario changes
        setMessages([]);
        setIsTyping(true);

        let cumulativeTime = 0;

        currentScenario.forEach((msg, index) => {
            // Simulate reading/typing time
            const typingTime = 1000 + msg.text.length * 30; // vary by length
            const delayBeforeStart = index === 0 ? 500 : 1000;

            cumulativeTime += delayBeforeStart;

            // Start typing (if it's the partner, show typing indicator logic could be refined but simple is good)
            timeoutIds.push(setTimeout(() => {
                setIsTyping(true);
            }, cumulativeTime));

            cumulativeTime += typingTime;

            // Send message
            timeoutIds.push(setTimeout(() => {
                setIsTyping(false);
                setMessages((prev) => [...prev, msg]);
            }, cumulativeTime));
        });

        // Wait after conversation finishes, then switch scenario
        timeoutIds.push(setTimeout(() => {
            // Fade out or just switch? switching clears state immediately.
            setScenarioIndex((prev) => (prev + 1) % SCENARIOS.length);
        }, cumulativeTime + 3000));

        return () => timeoutIds.forEach(clearTimeout);
    }, [scenarioIndex]);

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

                    {/* Left: Content */}
                    <div className="lg:w-1/2 space-y-8 z-10">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-bold text-white leading-tight"
                        >
                            <span className="text-primary">1000's</span> of Founders and Clients have trusted <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">Codeit</span>.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 max-w-lg"
                        >
                            From ambitious startups to enterprise giants, we deliver pixel-perfect engineering that scales.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link href="/contact">
                                <Button variant="glow" size="lg" className="rounded-full px-8">
                                    Start Your Project
                                </Button>
                            </Link>
                            {/* <Link href="/careers">
                                <Button variant="outline" size="lg" className="rounded-full px-8 border-gray-700 hover:bg-white/5">
                                    Are You Hiring?
                                </Button>
                            </Link> */}
                        </motion.div>
                    </div>

                    {/* Right: Phone Mockup */}
                    <div className="lg:w-1/2 flex justify-center w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-sm"
                        >
                            {/* Phone Frame */}
                            <div className="relative bg-black rounded-[2.5rem] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden aspect-[9/18]">

                                {/* Dynamic Island / Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                                    <div className="w-16 h-4 bg-black rounded-full" />
                                </div>

                                {/* Chat Header */}
                                <div className="absolute top-0 left-0 right-0 bg-[#0A0A0A]/90 backdrop-blur-md p-4 pt-10 border-b border-white/5 z-10 flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 p-1 bg-black">
                                            <Image src="/codeitLogo.png" alt="Codeit" width={40} height={40} className="object-contain w-full h-full" />
                                        </div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-1">
                                            <span className="font-semibold text-white">Codeit</span>
                                            <CheckCircle2 className="w-3 h-3 text-blue-500 fill-blue-500 text-white" />
                                        </div>
                                        <p className="text-xs text-green-400">Typically replies in minutes</p>
                                    </div>
                                    <MoreHorizontal className="text-gray-400 w-5 h-5" />
                                </div>

                                {/* Chat Area */}
                                <div className="absolute inset-0 pt-24 pb-20 px-4 overflow-y-auto flex flex-col gap-4 no-scrollbar bg-[#050505]">
                                    {/* Intro Timestamp */}
                                    <div className="text-center text-xs text-gray-600 my-4">Today 9:41 AM</div>

                                    <AnimatePresence mode="popLayout">
                                        {messages.map((msg, i) => (
                                            <motion.div
                                                key={`${scenarioIndex}-${i}`}
                                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                className={`flex w-full ${msg.sender === "codeit" ? "justify-end" : "justify-start"}`}
                                            >
                                                <div
                                                    className={`max-w-[85%] p-3 px-4 rounded-2xl text-sm leading-relaxed ${msg.sender === "codeit"
                                                        ? "bg-primary text-black rounded-br-none font-medium"
                                                        : "bg-[#1E1E1E] text-gray-200 rounded-bl-none border border-white/5"
                                                        }`}
                                                >
                                                    {msg.text}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>

                                    {/* Typing Indicator */}
                                    {isTyping && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex justify-start w-full"
                                        >
                                            <div className="bg-[#1E1E1E] p-3 rounded-2xl rounded-bl-none border border-white/5 flex gap-1.5 items-center">
                                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-100" />
                                                <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-200" />
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Spacer to push content up */}
                                    <div className="flex-1" />
                                </div>

                                {/* Input Area (Visual Only) */}
                                <div className="absolute bottom-0 left-0 right-0 bg-[#0A0A0A] p-4 border-t border-white/5 z-20">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#1E1E1E] flex items-center justify-center border border-white/5">
                                            <span className="text-xl text-gray-400">+</span>
                                        </div>
                                        <div className="flex-1 bg-[#1E1E1E] h-10 rounded-full px-4 flex items-center text-sm text-gray-500 border border-white/5">
                                            iMessage
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                                            <Send className="w-4 h-4 text-white ml-0.5" />
                                        </div>
                                    </div>
                                    {/* Home Indicator */}
                                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full" />
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
