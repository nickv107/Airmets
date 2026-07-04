"use client";

import { useConsent } from "@/components/ConsentProvider";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.5!2d-117.2!3d33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcb1d5b8b8b8b9%3A0x0!2sInland%20Empire%2C%20CA!5e0!3m2!1sen!2sus!4v1";

export function ServiceAreaMap() {
  const { allowOptionalContent, acceptAll, openPreferences } = useConsent();

  return (
    <div className="overflow-hidden rounded-2xl border border-air-border">
      {allowOptionalContent ? (
        <iframe
          title="Southern California service area"
          src={MAP_EMBED_URL}
          className="h-64 w-full border-0 grayscale invert"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="flex h-64 flex-col items-center justify-center bg-air-black px-6 text-center">
          <p className="font-display text-lg font-semibold text-white">Map preview disabled</p>
          <p className="mt-2 max-w-sm text-sm text-air-muted">
            Google Maps loads optional cookies and may collect usage data. Accept all cookies to view the interactive
            map, or review our service area list above.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={acceptAll}
              className="touch-target rounded-full bg-air-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-air-red-glow"
            >
              Accept All &amp; Show Map
            </button>
            <button
              type="button"
              onClick={openPreferences}
              className="touch-target rounded-full border border-air-border px-5 py-2.5 text-sm font-semibold text-air-silver transition hover:border-air-red/50 hover:text-white"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      )}
      <p className="border-t border-air-border bg-air-card px-4 py-3 text-xs text-air-muted">
        {allowOptionalContent ? (
          <>
            Map provided by Google. Google may collect usage data per its{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-air-red hover:underline"
            >
              Privacy Policy
            </a>
            .
          </>
        ) : (
          <>Interactive map hidden until optional cookies are accepted.</>
        )}
      </p>
    </div>
  );
}