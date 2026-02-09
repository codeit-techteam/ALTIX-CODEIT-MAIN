"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/codeit-techteam", label: "Github" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/codeit-codeit-4b4582383/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/codeit.world/", label: "Instagram" },
];

const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "About", href: "/about" },
            { name: "Careers", href: "/careers" },
            { name: "Contact", href: "/contact" },
            { name: "Blogs", href: "/blogs" },
        ],
    },
    {
        title: "Services",
        links: [
            { name: "Web Development", href: "/services#web" },
            { name: "App Development", href: "/services#app" },
            { name: "Social Media", href: "/social-media" },
            { name: "GTM Strategy", href: "/services#gtm" },
            { name: "Consulting", href: "/services#consulting" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms & Conditions", href: "/terms" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="border-t border-white/5 bg-background pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div>
                        <Link href="/" className="block mb-6">
                            <Image
                                src="/codeitLogo.png"
                                alt="Altix Codeit"
                                width={150}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Premium Web & App Development services backed by IITian expertise.
                            Transforming ideas into digital reality.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-semibold text-white mb-6">{column.title}</h3>
                            <ul className="space-y-4">
                                {column.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Altix Codeit. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Designed & Developed by</span>
                        <span className="text-primary font-medium">Codeit Tech Team</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
