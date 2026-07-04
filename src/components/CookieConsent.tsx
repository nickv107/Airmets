"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useConsent } from "@/components/ConsentProvider";

export function CookieConsent() {
  const { hasChosen, preferencesOpen, acceptEssential, acceptAll, closePreferences } = useConsent();
  const visible = !hasChosen || preferencesOpen;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          className="safe-bottom fixed inset-x-4 z-[200] mx-auto max-w-3xl rounded-2xl border border-air-border bg-air-card/95 p-5 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:inset-x-6 sm:p-6"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p id="cookie-consent-title" className="font-display text-lg font-bold text-white">
                {preferencesOpen ? "Cookie Preferences" : "Your Privacy Choices"}
              </p>
              <p id="cookie-consent-description" className="mt-2 text-sm leading-relaxed text-air-silver">
                We use essential cookies for site security and operation. Optional cookies and embedded content (such
                as Google Maps) load only if you choose{" "}
                <strong className="text-white">Accept All</strong>. Choose{" "}
                <strong className="text-white">Accept Essential</strong> to browse with only required technologies.
                See our{" "}
                <Link href="/privacy" className="text-air-red hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:min-w-[220px]">
              <button
                type="button"
                onClick={acceptAll}
                className="touch-target rounded-full bg-air-red px-5 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(255,0,0,0.35)] transition hover:bg-air-red-glow"
              >
                Accept All
              </button>
              <button
                type="button"
                onClick={acceptEssential}
                className="touch-target rounded-full border border-air-border px-5 py-3 text-sm font-semibold text-white transition hover:border-air-red/50 hover:bg-air-red/10"
              >
                Accept Essential
              </button>
              {preferencesOpen && (
                <button
                  type="button"
                  onClick={closePreferences}
                  className="touch-target text-sm text-air-muted underline transition hover:text-white"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}