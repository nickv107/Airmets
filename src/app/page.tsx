import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { TechAbout } from "@/components/TechAbout";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio limit={6} />
        <TechAbout />
        <Testimonials />
        <section className="px-4 py-20 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Request a written quote</h2>
          <p className="mx-auto mt-4 max-w-2xl text-air-silver">
            Send the airport or the address, the date, and whether you need exterior only, interiors,
            or a drone pass. We reply with what is included, usually within one business day.
          </p>
          <Link
            href="/contact"
            className="touch-target mt-8 inline-flex items-center justify-center rounded-full bg-air-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(255,0,0,0.35)] transition hover:bg-air-red-glow"
          >
            Request a quote
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}