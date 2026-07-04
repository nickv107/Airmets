"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  type ConsentLevel,
  hasGlobalPrivacyControl,
  readStoredConsent,
  writeStoredConsent,
} from "@/lib/consent";

type ConsentContextValue = {
  consent: ConsentLevel | null;
  hasChosen: boolean;
  preferencesOpen: boolean;
  allowOptionalContent: boolean;
  acceptEssential: () => void;
  acceptAll: () => void;
  openPreferences: () => void;
  closePreferences: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentLevel | null>(null);
  const [hasChosen, setHasChosen] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();

    if (stored) {
      setConsent(stored.level);
      setHasChosen(true);
      return;
    }

    if (hasGlobalPrivacyControl()) {
      writeStoredConsent("essential");
      setConsent("essential");
      setHasChosen(true);
    }
  }, []);

  const persist = useCallback((level: ConsentLevel) => {
    writeStoredConsent(level);
    setConsent(level);
    setHasChosen(true);
    setPreferencesOpen(false);
  }, []);

  const acceptEssential = useCallback(() => persist("essential"), [persist]);
  const acceptAll = useCallback(() => persist("all"), [persist]);
  const openPreferences = useCallback(() => setPreferencesOpen(true), []);
  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      hasChosen,
      preferencesOpen,
      allowOptionalContent: consent === "all",
      acceptEssential,
      acceptAll,
      openPreferences,
      closePreferences,
    }),
    [acceptAll, acceptEssential, closePreferences, consent, hasChosen, openPreferences, preferencesOpen],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return context;
}