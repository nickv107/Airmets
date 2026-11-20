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
    default: "Airmets | Aircraft, Listing, and Aerial Photography",
    template: "%s | Airmets",
  },
  description:
    "Aircraft listing photography, real estate listing media, FBO and hangar photography, and FAA Part 107 drone work across Southern California.",
  keywords: [
    "drone photography Southern California",
    "aerial videography Los Angeles",
    "real estate drone Inland Empire",
    "FAA Part 107 remote pilot",
    "Corona drone photographer",
    "Palm Springs aerial media",
    "Orange County UAS",
    "aircraft for sale photography Southern California",
    "real estate photographer Inland Empire",
    "FBO photography Southern California",
    "FBO photography Southern California",
    "flight school photography",
    "hangar photography Inland Empire",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Airmets | Aircraft, listing, and aerial photography",
    description:
      "Aircraft listing photography, real estate listing media, aviation facilities, and FAA Part 107 drone work across Southern California.",
    type: "website",
    url: "https://www.airmets.com",
    siteName: "Airmets",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Airmets aircraft, listing, and aerial photography in Southern California",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airmets | Aircraft, listing, and aerial photography",
    description:
      "Aircraft listing photography, real estate listing media, aviation facilities, and FAA Part 107 drone work across Southern California.",
    images: ["/og.jpg"],
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