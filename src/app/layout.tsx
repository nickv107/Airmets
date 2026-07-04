import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ConsentProvider } from "@/components/ConsentProvider";
import { CookieConsent } from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Airmets | Precision Aerial Drone Media — Southern California",
  description:
    "Cinematic drone photography and videography for luxury real estate, commercial brands, and events across the Inland Empire, Corona, LA, Palm Springs, and Joshua Tree.",
  keywords: [
    "drone photography",
    "aerial videography",
    "real estate drone",
    "Southern California",
    "Inland Empire",
    "Corona",
    "Palm Springs",
    "FAA Part 107 remote pilot",
  ],
  openGraph: {
    title: "Airmets — Elevating Perspectives",
    description: "Precision aerial media for real estate, business & beyond.",
    type: "website",
    url: "https://airmets.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/logo-icon.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        <ConsentProvider>
          {children}
          <CookieConsent />
        </ConsentProvider>
      </body>
    </html>
  );
}