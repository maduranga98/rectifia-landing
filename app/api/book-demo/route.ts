import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MEETING_LINK = process.env.MEETING_LINK ?? "https://meet.google.com/fbf-jenh-tiw";

type BookingPayload = {
  name: string;
  email: string;
  company: string;
  companySize: string;
  country: string;
  teamSize?: string;
  demoDate: string;
  demoTime: string;
  notes?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validatePayload(body: unknown): body is BookingPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    isNonEmptyString(b.name) &&
    isNonEmptyString(b.email) &&
    isNonEmptyString(b.company) &&
    isNonEmptyString(b.companySize) &&
    isNonEmptyString(b.country) &&
    isNonEmptyString(b.demoDate) &&
    isNonEmptyString(b.demoTime)
  );
}

function getTransporter() {
  const host = process.env.SMTP_HOST ?? "mail.spacemail.com";
  const port = Number(process.env.SMTP_PORT ?? 465);
  const secure = (process.env.SMTP_SECURE ?? "true") === "true";
  const user = process.env.SMTP_USER ?? "maduranga@rectifia.com";
  const pass = process.env.SMTP_PASSWORD;

  if (!pass) {
    throw new Error("SMTP_PASSWORD is not configured");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!validatePayload(payload)) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { name, email, company, companySize, country, teamSize, demoDate, demoTime, notes } =
    payload;

  let transporter;
  try {
    transporter = getTransporter();
  } catch {
    return NextResponse.json(
      { error: "Email is not configured on the server yet" },
      { status: 503 },
    );
  }

  const fromAddress = process.env.SMTP_USER ?? "maduranga@rectifia.com";

  try {
    await transporter.sendMail({
      from: `Rectifia <${fromAddress}>`,
      to: email,
      bcc: fromAddress,
      subject: "Thanks for booking a demo with Rectifia",
      text: [
        `Hi ${name},`,
        "",
        "Thanks for booking a demo with Rectifia! Here are your details:",
        `Date: ${demoDate}`,
        `Time: ${demoTime}`,
        `Meeting link: ${MEETING_LINK}`,
        "",
        "We look forward to speaking with you.",
        "",
        "— The Rectifia Team",
      ].join("\n"),
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for booking a demo with <strong>Rectifia</strong>! Here are your details:</p>
          <ul>
            <li><strong>Date:</strong> ${escapeHtml(demoDate)}</li>
            <li><strong>Time:</strong> ${escapeHtml(demoTime)}</li>
            <li><strong>Meeting link:</strong> <a href="${MEETING_LINK}">${MEETING_LINK}</a></li>
          </ul>
          <p>We look forward to speaking with you.</p>
          <p>— The Rectifia Team</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Failed to send booking email", err);
    return NextResponse.json({ error: "Failed to send confirmation email" }, { status: 502 });
  }

  console.log("New demo booking", {
    name,
    email,
    company,
    companySize,
    country,
    teamSize,
    demoDate,
    demoTime,
    notes,
  });

  return NextResponse.json({ ok: true });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
