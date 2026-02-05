"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const SyntaxHighlighter = () => {
    return (
        <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-gray-300">
            <code>
                <span className="text-purple-400">import</span> {"{"} <span className="text-yellow-300">Agent</span>, <span className="text-yellow-300">Scale</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">"@codeit/core"</span>;{"\n"}
                <span className="text-purple-400">import</span> {"{"} <span className="text-yellow-300">NeuralEngine</span> {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">"@codeit/ai"</span>;{"\n\n"}

                <span className="text-purple-400">export const</span> <span className="text-[#66fcf1]">GrowthSystem</span> = <span className="text-purple-400">async</span> () =&gt; {"{"}{"\n"}
                {"  "}<span className="text-gray-500">// Initialize neural core for predictive scaling</span>{"\n"}
                {"  "}<span className="text-purple-400">const</span> engine = <span className="text-purple-400">new</span> <span className="text-yellow-300">NeuralEngine</span>({"{"} mode: <span className="text-green-400">"HYPER_SCALE"</span> {"}"});{"\n"}
                {"  "}<span className="text-purple-400">await</span> engine.<span className="text-yellow-300">connect</span>();{"\n\n"}

                {"  "}<span className="text-gray-500">// Deploy autonomous agents</span>{"\n"}
                {"  "}<span className="text-purple-400">const</span> agents = <span className="text-purple-400">await</span> <span className="text-yellow-300">Agent</span>.<span className="text-yellow-300">deploy</span>({"{"}{"\n"}
                {"    "}role: <span className="text-green-400">"OPTIMIZER"</span>,{"\n"}
                {"    "}efficiency: <span className="text-green-400">"99.9%"</span>,{"\n"}
                {"    "}nodes: <span className="text-orange-400">1000</span>{"\n"}
                {"  "}{"}"});{"\n\n"}

                {"  "}<span className="text-purple-400">return</span> <span className="text-yellow-300">engine</span>.<span className="text-yellow-300">optimize</span>(agents);{"\n"}
                {"}"};
            </code>
        </pre>
    );
};

export const CodeShowcase = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        AI-Powered <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#66fcf1]">
                            Web & App Development
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                        We design and build high-performance web and mobile applications enhanced with AI capabilities—from intelligent automation to real-time insights.
                    </p>

                    <div className="space-y-4 mb-10">
                        {[
                            "AI-enabled dashboards",
                            "SaaS platforms",
                            "Internal tools",
                            "Customer-facing AI features"
                        ].map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                                    <Check className="w-3 h-3 text-cyan-400" />
                                </div>
                                <span className="text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>


                </div>

                {/* Right Column: Code Editor */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl relative group"
                >
                    {/* Editor Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0F0F0F]">
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="ml-4 text-xs text-gray-500 font-medium">realtime-stream.tsx</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Copy className="w-4 h-4 text-gray-600 hover:text-white cursor-pointer transition-colors" />
                        </div>
                    </div>

                    {/* Editor Body */}
                    <div className="p-6 overflow-x-auto custom-scrollbar">
                        <SyntaxHighlighter />
                    </div>

                    {/* Glowing Accent */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-[#66fcf1] rounded-xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity pointer-events-none -z-10" />
                </motion.div>

            </div>
        </section>
    );
};
