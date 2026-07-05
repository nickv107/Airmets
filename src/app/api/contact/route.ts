import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/legal";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? BUSINESS.email;

async function sendViaResend(payload: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const from = process.env.RESEND_FROM_EMAIL ?? `Airmets Contact <contact@${new URL(BUSINESS.website).hostname}>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [CONTACT_TO],
      reply_to: payload.email,
      subject: `Airmets inquiry — ${payload.service}`,
      text: [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Phone: ${payload.phone}`,
        `Service: ${payload.service}`,
        "",
        "Project details:",
        payload.message,
      ].join("\n"),
    }),
  });

  return response.ok;
}

async function sendViaFormspree(payload: ContactPayload) {
  const formId = process.env.FORMSPREE_FORM_ID;
  if (!formId) return false;

  const response = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      _subject: `Airmets inquiry — ${payload.service}`,
      _replyto: payload.email,
    }),
  });

  return response.ok;
}

async function sendViaFormSubmit(payload: ContactPayload) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_TO)}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      _subject: `Airmets inquiry — ${payload.service}`,
      _replyto: payload.email,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) return false;

  const result = await response.json().catch(() => null);
  return result?.success === true || result?.success === "true";
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.website?.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const phone = body.phone?.trim();
  const service = body.service?.trim();
  const message = body.message?.trim();

  if (!name || !email || !phone || !service || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json({ error: "Please provide a valid phone number." }, { status: 400 });
  }

  if (!body.consent) {
    return NextResponse.json({ error: "Privacy consent is required." }, { status: 400 });
  }

  const payload: ContactPayload = { name, email, phone, service, message, consent: true };

  const delivered =
    (await sendViaResend(payload)) ||
    (await sendViaFormspree(payload)) ||
    (await sendViaFormSubmit(payload));

  if (!delivered) {
    return NextResponse.json(
      {
        error: "We could not send your message. Please email or call us directly.",
        fallback: true,
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ success: true });
}
