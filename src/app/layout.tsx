import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Analytics } from "@/components/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SessionProvider from "@/components/providers/SessionProvider";
import { GoogleOneTap } from "@/components/GoogleOneTap";
import { GoogleOneTapTrigger } from "@/components/GoogleOneTapTrigger";
import { StructuredData } from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Out Sea Hub - AI Image Generation Platform | Professional AI Art Creator",
    template: "%s | Out Sea Hub"
  },
  description: "Professional AI image generation platform powered by Out Sea Hub. Create stunning images from text descriptions with advanced AI technology. Free AI art generator.",
  keywords: [
    "flux kontext",
    "ai image generator",
    "text to image ai",
    "ai art generator",
    "flux ai",
    "image generation ai",
    "ai art creator",
    "flux kontext ai",
    "professional ai images",
    "ai image creation",
    "flux kontext pro",
    "flux kontext max"
  ],
  authors: [{ name: "Out Sea Hub Team" }],
  creator: "Out Sea Hub",
  publisher: "Out Sea Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.outseahub.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'google-adsense-account': 'ca-pub-8104790897576752',
    'msvalidate.01': 'FF2825FC2F6E7107029FFBEB0BC093EA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SessionProvider>
          <ClientBody>
            {children}
          </ClientBody>
          <GoogleOneTap />
          <GoogleOneTapTrigger />
          <Analytics />
          <VercelAnalytics />
          <SpeedInsights />
        </SessionProvider>
      </body>
    </html>
  );
}

