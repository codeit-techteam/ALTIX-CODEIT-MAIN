"use client";


import { Star } from "lucide-react";
import Image from "next/image";

const clients = [
    {
        category: "Healthcare",
        name: "Glucee",
        testimonial: "Codeit transformed our patient monitoring system with AI-driven insights. Incredible speed and precision.",
        logoImage: "/Glucee.png", // Placeholder logic will be used
        color: "bg-emerald-500",
    },
    {
        category: "Healthcare",
        name: "Diet Pulse",
        testimonial: "The app is seamless and user engagement has skyrocketed since the redesign. Highly recommended!",
        logoImage: "/DietPulse.png",
        color: "bg-green-500",
    },
    {
        category: "E-commerce",
        name: "Biogetica",
        testimonial: "A complex e-commerce platform handled with ease. The team understood our holistic vision perfectly.",
        logoImage: "/Biogetica.png",
        color: "bg-teal-500",
    },
    {
        category: "Dating App",
        name: "JijiCupid",
        logoImage: "/JIJI.png",
        testimonial: "Scalability was our biggest issue. Codeit built a backend that handles thousands of concurrent matches effortlessly.",
        logo: "J",
        color: "bg-pink-500",
    },
    {
        category: "Real Estate",
        name: "DesiAcres",
        testimonial: "Property listings load instantly now. The map integration and search filters are top-notch.",
        logoImage: "/DesiAcres.png",
        color: "bg-orange-500",
    },
    {
        category: "Services",
        name: "Leisurebites",
        testimonial: "An elegant solution for our booking system. The UI is beautiful and the admin panel is a lifesaver.",
        logoImage: "/LeisureBites.png",
        color: "bg-red-500",
    },
    {
        category: "Travel & Tourism",
        name: "Hidden Lanes",
        testimonial: "We needed a unique travel platform and they delivered. Great communication throughout the project.",
        logoImage: "/Hidden Lane.png",
        color: "bg-indigo-500",
    },
    {
        category: "Automotive",
        name: "Parts IQ",
        testimonial: "The inventory management system is robust and intuitive. It's streamlined our entire operation.",
        logoImage: "/PartsIQ.jpeg",
        color: "bg-blue-500",
    },
];

const ClientCard = ({ client }) => {
    return (
        <div className="w-[320px] md:w-[380px] h-[360px] p-8 rounded-[2rem] bg-[#0b0c10] border border-white/5 flex flex-col justify-between group hover:border-primary/50 hover:shadow-[0_0_40px_-10px_rgba(102,252,241,0.2)] transition-all duration-500 relative overflow-hidden">
            {/* Hover Gradient Bloom */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    {client.logoImage ? (
                        <div className="w-14 h-14 relative rounded-2xl overflow-hidden bg-white/5 p-2 border border-white/5 backdrop-blur-sm">
                            <Image
                                src={client.logoImage}
                                alt={client.name}
                                fill
                                sizes="56px"
                                className="object-contain"
                            />
                        </div>
                    ) : (
                        <div className={`w-14 h-14 rounded-2xl ${client.color} bg-opacity-20 flex items-center justify-center text-white font-bold text-2xl border border-white/5 backdrop-blur-sm`}>
                            {client.name[0]}
                        </div>
                    )}

                    <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} size={14} className="fill-[#66fcf1] text-[#66fcf1]" />
                        ))}
                    </div>
                </div>

                {/* Testimonial */}
                <div className="h-[120px] overflow-hidden relative">
                    <p className="text-gray-300 leading-relaxed text-[15px] font-light opacity-90 line-clamp-5">
                        "{client.testimonial}"
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 border-t border-white/5 pt-6 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-[#66fcf1] transition-colors duration-300">{client.name}</h3>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">{client.category}</span>
                </div>

            </div>
        </div>
    );
};

export const TestimonialsSection = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                    Hear it from our <span className="text-primary">Clients</span>.
                </h2>
                <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
                    Trusted by startups and enterprises to build scalable, high-performance digital solutions.
                </p>
            </div>

            {/* Scrolling Carousel */}
            {/* Scrolling Carousel - Unified Marquee */}
            <div className="relative w-full overflow-hidden mask-linear-fade">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-marquee">
                    {/* Render cards twice for seamless loop */}
                    {[...clients, ...clients].map((client, index) => (
                        <div key={`${client.name}-${index}`} className="mr-8 flex-shrink-0">
                            <ClientCard client={client} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
