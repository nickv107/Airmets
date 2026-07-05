import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.airmets.com"),
  title: {
    default: "Airmets | Precision Aerial Drone Media — Southern California",
    template: "%s | Airmets",
  },
  description:
    "Cinematic drone photography and videography for luxury real estate, commercial brands, and events across Los Angeles, Orange County, the Inland Empire, San Diego, Palm Springs, and Joshua Tree.",
  keywords: [
    "drone photography Southern California",
    "aerial videography Los Angeles",
    "real estate drone Inland Empire",
    "FAA Part 107 remote pilot",
    "Corona drone photographer",
    "Palm Springs aerial media",
    "Orange County UAS",
    "general photography Southern California",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Airmets — Elevating Perspectives",
    description: "Precision aerial media for real estate, business & beyond.",
    type: "website",
    url: "https://www.airmets.com",
    siteName: "Airmets",
    locale: "en_US",
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