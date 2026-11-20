import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-air-black text-white">
      <Navbar />
      <main className="pt-16 sm:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
