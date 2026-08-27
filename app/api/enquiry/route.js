import { NextResponse } from "next/server";

const PROGRAMMES = new Set([
  "BCA", "MCA", "MBA", "O Level (NIELIT)", "CCC (NIELIT)", "DCA", "PGDCA",
  "Cyber Security", "Hardware & Networking", "NCA (Accountancy)", "Tally ERP",
  "ITI – Fitter", "ITI – Electrician", "Digital Marketing", "Fashion Design", "Other",
]);

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body?.name ?? "").trim();
  const mobile = String(body?.mobile ?? "").trim();
  const programme = String(body?.programme ?? "").trim();
  const message = String(body?.message ?? "").trim().slice(0, 500);
  const honeypot = String(body?.company ?? "").trim();

  const errors = {};
  if (name.length < 3 || name.length > 80) errors.name = "Invalid name.";
  if (!/^[6-9]\d{9}$/.test(mobile)) errors.mobile = "Invalid mobile number.";
  if (!PROGRAMMES.has(programme)) errors.programme = "Invalid programme.";
  if (honeypot) {
    // Bot detected: pretend success, drop silently.
    return NextResponse.json({ ok: true });
  }
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const enquiry = { name, mobile, programme, message, receivedAt: new Date().toISOString() };

  // Optional delivery hook: set ENQUIRY_WEBHOOK_URL env (e.g. Zapier/Make/your CRM/Google Sheet)
  const webhook = process.env.ENQUIRY_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiry),
      });
    } catch {
      /* webhook failure must not break the user flow */
    }
  }

  console.log("[enquiry]", JSON.stringify(enquiry));
  return NextResponse.json({ ok: true });
}
