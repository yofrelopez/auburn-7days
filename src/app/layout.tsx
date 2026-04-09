import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/context/ModalContext";
import GivingModal from "@/components/modals/GivingModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vision & Hope Dinner Gala | Auburn Seventh-day Adventist Church",
  description: "Join us for an evening of music, vision, and purpose at the Vision & Hope Dinner Gala as we lay the foundation for the future of Auburn, Georgia.",
  metadataBase: new URL("http://gala.auburnsda.org"),
  openGraph: {
    title: "Vision & Hope Dinner Gala | Auburn Seventh-day Adventist Church",
    description: "Join us for an evening of music, vision, and purpose at the Vision & Hope Dinner Gala as we lay the foundation for the future of Auburn, Georgia.",
    url: "http://gala.auburnsda.org",
    siteName: "Auburn Seventh-day Adventist Church",
    images: [
      {
        url: "http://gala.auburnsda.org/images/banquet/og-banquet.jpg", // High-quality image for the link preview (Full URL for WhatsApp)
        width: 1200,
        height: 630,
        alt: "Vision & Hope Dinner Gala at Château Élan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision & Hope Dinner Gala | Auburn Seventh-day Adventist Church",
    description: "Join us for an evening of music, vision, and purpose at the Vision & Hope Dinner Gala as we lay the foundation for the future of Auburn, Georgia.",
    images: ["http://gala.auburnsda.org/images/banquet/og-banquet.jpg"], // Same image for Twitter cards (Full URL)
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
        <ModalProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <GivingModal />
        </ModalProvider>
      </body>
    </html>
  );
}
