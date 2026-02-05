
import SocialMediaContent from "./content";

export const metadata = {
    title: "Social Media Agency & Influencer Marketing India | Altix Codeit",
    description: "Altix Codeit is a leading Social Media Agency in India specializing in Influencer Collaboration, Content Strategy, Reels, Ads, and Growth Analytics.",
    keywords: [
        "Social Media Agency",
        "Influencer Marketing India",
        "Social Media Growth",
        "Content Strategy",
        "Instagram Reels Strategy",
        "Performance Ads",
        "Digital Marketing Agency"
    ],
    openGraph: {
        title: "Social Media Agency & Influencer Marketing India | Altix Codeit",
        description: "Scale your brand with data-driven Influencer Marketing and Content Strategy.",
        url: "https://altixcodeit.com/social-media",
        siteName: "Altix Codeit",
        images: [
            {
                url: "/social-media-og.jpg",
                width: 1200,
                height: 630,
                alt: "Altix Codeit Social Media Growth Dashboard",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Social Media Agency India | Altix Codeit",
        description: "Expert Influencer Marketing and Growth Strategies.",
    },
};

export default function SocialMediaPage() {
    return <SocialMediaContent />;
}
