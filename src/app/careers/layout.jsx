export const metadata = {
    title: "Careers at Altix Codeit | Join Our Engineering Team",
    description: "Join a team of elite IITian engineers. We are hiring for Full Stack, AI/ML, and Product roles. Experience rapid growth and a culture of excellence.",
    keywords: ["Careers", "Software Jobs", "Engineering Jobs India", "Remote Tech Jobs", "Next.js Developers", "AI Engineers"],
    openGraph: {
        title: "Careers at Altix Codeit | Join Our Engineering Team",
        description: "Join the 1% of engineers building the next generation of tech.",
        url: "https://mycodeit.com/careers",
        siteName: "Altix Codeit",
        images: [
            {
                url: "/careers-og.jpg",
                width: 1200,
                height: 630,
                alt: "Altix Codeit Team",
            },
        ],
        locale: "en_US",
        type: "website",
    }
};

export default function CareersLayout({ children }) {
    return children;
}
