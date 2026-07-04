"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { BUSINESS } from "@/lib/legal";
import { SERVICE_DETAILS } from "@/lib/services";

type FormStatus = "idle" | "submitting" | "success" | "error" | "mailto";

export function Contact() {
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service");
  const defaultService =
    SERVICE_DETAILS.find((service) => service.title === requestedService)?.title ??
    SERVICE_DETAILS[0].title;

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");
  const [selectedService, setSelectedService] = useState(defaultService);

  const buildMailtoLink = (payload: {
    name: string;
    email: string;
    service: string;
    message: string;
  }) => {
    const subject = encodeURIComponent(`Airmets inquiry — ${payload.service}`);
    const body = encodeURIComponent(
      `Name: ${payload.name}\nEmail: ${payload.email}\nService: ${payload.service}\n\nProject details:\n${payload.message}`,
    );
    return `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (!consent) {
      setStatus("error");
      setErrorMessage("Please agree to the Privacy Policy before submitting.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
      consent: true,
    };

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        form.reset();
        setConsent(false);
        return;
      }

      if (response.status === 503 && result.fallback) {
        setMailtoHref(buildMailtoLink(payload));
        setStatus("mailto");
        return;
      }

      setStatus("error");
      setErrorMessage(result.error ?? "Something went wrong. Please email us directly.");
    } catch {
      setMailtoHref(buildMailtoLink(payload));
      setStatus("mailto");
    }
  };

  return (
    <section id="contact" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-air-red">Contact</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Launch Your Next Mission</h2>
          <p className="mx-auto mt-4 max-w-xl text-air-muted">
            Ready for a quote or booking? Tell us about your project and we&apos;ll respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glow-border space-y-5 rounded-2xl border border-air-border bg-air-card p-8"
            noValidate
          >
            {status === "mailto" ? (
              <div className="py-12 text-center">
                <p className="font-display text-2xl font-bold text-air-red">Send via Email</p>
                <p className="mt-2 text-air-silver">
                  Online delivery isn&apos;t configured yet. Use the button below to send your inquiry from your
                  email app.
                </p>
                <a
                  href={mailtoHref}
                  className="mt-6 inline-block rounded-full bg-air-red px-8 py-3 text-sm font-bold uppercase tracking-wider text-white"
                >
                  Open Email App
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setMailtoHref("");
                  }}
                  className="mt-4 block w-full text-sm text-air-muted underline transition hover:text-white"
                >
                  Back to form
                </button>
              </div>
            ) : status === "success" ? (
              <div className="py-12 text-center">
                <p className="font-display text-2xl font-bold text-air-red">Inquiry Sent</p>
                <p className="mt-2 text-air-silver">
                  Thank you. We&apos;ll respond at the email address you provided, usually within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm text-air-muted underline transition hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm text-air-muted">Name</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      disabled={status === "submitting"}
                      className="w-full rounded-lg border border-air-border bg-air-black px-4 py-3 text-white outline-none focus:border-air-red disabled:opacity-60"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm text-air-muted">Email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      disabled={status === "submitting"}
                      className="w-full rounded-lg border border-air-border bg-air-black px-4 py-3 text-white outline-none focus:border-air-red disabled:opacity-60"
                      placeholder="you@email.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-2 block text-sm text-air-muted">Service</span>
                  <select
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    disabled={status === "submitting"}
                    className="w-full rounded-lg border border-air-border bg-air-black px-4 py-3 text-white outline-none focus:border-air-red disabled:opacity-60"
                  >
                    {SERVICE_DETAILS.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-air-muted">Project Details</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    disabled={status === "submitting"}
                    className="w-full resize-none rounded-lg border border-air-border bg-air-black px-4 py-3 text-white outline-none focus:border-air-red disabled:opacity-60"
                    placeholder="Property address, date, deliverables..."
                  />
                </label>

                <label className="flex items-start gap-3 text-sm leading-relaxed text-air-muted">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    disabled={status === "submitting"}
                    className="mt-1 h-4 w-4 shrink-0 accent-air-red"
                    required
                  />
                  <span>
                    I understand that {BUSINESS.name} will collect the information I provide to respond to this
                    inquiry and deliver requested services, as described in the{" "}
                    <Link href="/privacy" className="text-air-red hover:underline">
                      Privacy Policy
                    </Link>
                    . I confirm I am at least 13 years old.
                  </span>
                </label>

                {status === "error" && errorMessage && (
                  <p className="text-sm text-air-red" role="alert">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full rounded-full bg-air-red py-4 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_24px_rgba(255,0,0,0.35)] transition hover:bg-air-red-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending..." : "Get Quote"}
                </button>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <p className="text-center text-xs text-air-muted">
                  Prefer to reach us directly?{" "}
                  <a href={`tel:${BUSINESS.phoneTel}`} className="text-air-red hover:underline">
                    {BUSINESS.phone}
                  </a>
                  {" · "}
                  <a href={`mailto:${BUSINESS.email}`} className="text-air-red hover:underline">
                    {BUSINESS.email}
                  </a>
                </p>
              </>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-air-border bg-air-card p-6">
              <h3 className="font-display mb-4 text-xl font-bold">Get in Touch</h3>
              <p className="mb-4 text-air-silver">
                Call or email for quotes, bookings, and flight planning. We typically respond within one business day.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${BUSINESS.phoneTel}`}
                  className="inline-block rounded-full border border-air-red/50 px-6 py-3 text-center text-sm font-semibold text-air-red transition hover:bg-air-red/10"
                >
                  {BUSINESS.phone}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}?subject=${encodeURIComponent("Airmets Booking Request")}`}
                  className="inline-block rounded-full border border-air-red/50 px-6 py-3 text-center text-sm font-semibold text-air-red transition hover:bg-air-red/10"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-air-border bg-air-card p-6">
              <h3 className="font-display mb-4 text-xl font-bold">Service Area</h3>
              <p className="text-air-silver">
                Inland Empire · Corona · Los Angeles · Palm Springs · Joshua Tree · Temecula
              </p>
              <p className="mt-3 text-xs text-air-muted">
                Flight availability depends on FAA airspace rules, local ordinances, permits, weather, and property
                access for each location.
              </p>
            </div>

            <ServiceAreaMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}