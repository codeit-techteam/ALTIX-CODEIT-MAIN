import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Altix Codeit | Premium Web & App Development",
    template: "%s | Altix Codeit",
  },
  description:
    "IITian-backed startup providing premium Web & App Development, AI Solutions, and GTM strategy advisory. Transform your vision into digital reality.",
  keywords: [
    "Web Development",
    "App Development",
    "AI Solutions",
    "Startup Growth",
    "Software Engineering",
    "Next.js",
    "React",
    "Digital Transformation",
  ],
  authors: [{ name: "Altix Codeit" }],
  creator: "Altix Codeit",
  publisher: "Altix Codeit",
  metadataBase: new URL("https://www.altixcodeit.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.altixcodeit.com",
    title: "Altix Codeit | Premium Web & App Development",
    description:
      "IITian-backed startup providing premium Web & App Development, AI Solutions, and GTM strategy advisory.",
    siteName: "Altix Codeit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Altix Codeit Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altix Codeit | Premium Web & App Development",
    description:
      "IITian-backed startup providing premium Web & App Development, AI Solutions, and GTM strategy advisory.",
    creator: "@altixcodeit",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.altixcodeit.com",
    languages: {
      'en-US': 'https://www.altixcodeit.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Altix Codeit",
  url: "https://www.altixcodeit.com",
  logo: "https://www.altixcodeit.com/logo.png",
  sameAs: [
    "https://twitter.com/altixcodeit",
    "https://linkedin.com/company/altixcodeit",
    "https://instagram.com/altixcodeit",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-0000000000",
    contactType: "customer service",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
