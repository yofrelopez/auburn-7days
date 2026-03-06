import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auburn Seventh-day Adventist Church | Vision & Hope",
  description: "Join us for an evening of music, vision, and purpose at the historic Château Élan as we lay the foundation for the future of Auburn, Georgia.",
  metadataBase: new URL("https://auburn-7days.vercel.app"),
  openGraph: {
    title: "Auburn Seventh-day Adventist Church | Vision & Hope",
    description: "Join us for an evening of music, vision, and purpose at the historic Château Élan as we lay the foundation for the future of Auburn, Georgia.",
    url: "https://auburn-7days.vercel.app",
    siteName: "Auburn Seventh-day Adventist Church",
    images: [
      {
        url: "/images/banquet/banquet.png", // High-quality image for the link preview
        width: 1200,
        height: 630,
        alt: "Auburn SDA Church Vision & Hope Fundraising Banquet at Château Élan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auburn Seventh-day Adventist Church | Vision & Hope",
    description: "Join us for an evening of music, vision, and purpose at the historic Château Élan as we lay the foundation for the future of Auburn, Georgia.",
    images: ["/images/banquet/banquet.png"], // Same image for Twitter cards
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
