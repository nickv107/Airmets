"use client";

import { useConsent } from "@/components/ConsentProvider";

type CookiePreferencesButtonProps = {
  className?: string;
};

export function CookiePreferencesButton({
  className = "text-sm text-air-silver transition hover:text-white",
}: CookiePreferencesButtonProps) {
  const { openPreferences } = useConsent();

  return (
    <button type="button" onClick={openPreferences} className={className}>
      Cookie Preferences
    </button>
  );
}