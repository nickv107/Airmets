import type { Metadata } from "next";
import { Portfolio } from "@/components/Portfolio";
import { SiteFrame } from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Southern California aerial and listing photographs by Airmets. Aircraft and facility sets are published only with client permission.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <SiteFrame>
      <Portfolio />
    </SiteFrame>
  );
}
