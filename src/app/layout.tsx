import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SDEC Academy | Master the Future of Web Development",
    template: "%s | SDEC Academy"
  },
  description: "Experience premier offline tech training and career development at SDEC Academy. Master MERN stack, Web Design, and Project Management with industry experts.",
  keywords: ["Tech Academy", "Web Development", "MERN Stack", "Coding Bootcamp", "Offline Training", "Shahi Rahman", "Software Engineering"],
  authors: [{ name: "Shahi Rahman" }],
  creator: "SDEC Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sdec-academy.vercel.app",
    siteName: "SDEC Academy",
    title: "SDEC Academy | Master the Future of Web Development",
    description: "Expert-led offline tech training for aspiring developers. Join SDEC Academy today.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "SDEC Academy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SDEC Academy | Tech Training",
    description: "Master Full Stack Web Development with SDEC Academy.",
    images: ["/images/og-image.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-[#0A192F] text-white selection:bg-electric-blue/30`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
