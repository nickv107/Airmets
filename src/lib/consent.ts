export type ConsentLevel = "essential" | "all";

export const CONSENT_STORAGE_KEY = "airmets-cookie-consent";
export const CONSENT_VERSION = 1;

export type StoredConsent = {
  level: ConsentLevel;
  version: number;
  updatedAt: string;
};

export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION || (parsed.level !== "essential" && parsed.level !== "all")) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function writeStoredConsent(level: ConsentLevel) {
  const value: StoredConsent = {
    level,
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(value));
}

export function hasGlobalPrivacyControl() {
  if (typeof navigator === "undefined") return false;
  return Boolean((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl);
}