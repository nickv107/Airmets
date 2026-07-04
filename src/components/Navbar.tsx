"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 safe-top transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-air-border/80 bg-air-black/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a href="#home" className="group inline-flex items-center" onClick={closeMenu}>
          <Image
            src="/logo-full.png"
            alt="Airmets"
            width={240}
            height={67}
            className="h-10 w-auto transition-transform group-hover:scale-105 sm:h-12 lg:h-14"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-air-silver transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-full border border-air-red/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-air-red hover:bg-air-red/10"
          >
            Get Quote
          </a>
          <a
            href="#contact"
            className="rounded-full bg-air-red px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,0,0,0.35)] transition hover:bg-air-red-glow"
          >
            Launch a Mission
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="touch-target flex items-center justify-center rounded-lg border border-air-border lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-air-border bg-air-black/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-2 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="touch-target flex items-center rounded-lg px-2 text-lg font-medium text-air-silver transition hover:text-white"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="touch-target mt-2 flex items-center justify-center rounded-full border border-air-red/40 px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={closeMenu}
              >
                Get Quote
              </a>
              <a
                href="#contact"
                className="touch-target flex items-center justify-center rounded-full bg-air-red px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={closeMenu}
              >
                Launch a Mission
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}