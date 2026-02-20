export const metadata = {
    title: "About Altix Codeit | IITian-Led Web & App Development Company",
    description: "Altix Codeit is an elite software consultancy founded by IITians. We build scalable, high-performance web and app solutions for startups and enterprises using first-principles thinking.",
    keywords: ["Altix Codeit", "Codeit Company", "IITian Engineers", "Software Consultancy India", "Web Development Agency"],
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About Altix Codeit | IITian-Led Experts",
        description: "From IIT Bombay dorms to global enterprise solutions. Discover our story.",
        url: "https://altixcodeit.com/about",
        siteName: "Altix Codeit",
        images: [
            {
                url: "/about-og.jpg",
                width: 1200,
                height: 630,
                alt: "Altix Codeit Team",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Altix Codeit | IITian-Led Experts",
        description: "From IIT Bombay dorms to global enterprise solutions. Discover our story.",
    },
};

export default function AboutLayout({ children }) {
    return children;
}
