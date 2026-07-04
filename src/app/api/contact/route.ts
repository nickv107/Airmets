import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const service = body.service?.trim();
  const message = body.message?.trim();

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (!body.consent) {
    return NextResponse.json({ error: "Privacy consent is required." }, { status: 400 });
  }

  const formId = process.env.FORMSPREE_FORM_ID;

  if (!formId) {
    return NextResponse.json(
      {
        error: "Form delivery is not configured. Please use the email link to contact us directly.",
        fallback: true,
      },
      { status: 503 },
    );
  }

  const formspreeResponse = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      service,
      message,
      _subject: `Airmets inquiry — ${service}`,
      _replyto: email,
    }),
  });

  if (!formspreeResponse.ok) {
    return NextResponse.json(
      { error: "We could not send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}