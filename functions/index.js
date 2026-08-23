const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const nodemailer = require("nodemailer");

const smtpPassword = defineSecret("SMTP_PASSWORD");

const SMTP_HOST = "mail.spacemail.com";
const SMTP_PORT = 465;
const SMTP_USER = "maduranga@rectifia.com";
const MEETING_LINK = "https://meet.google.com/fbf-jenh-tiw";

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validatePayload(body) {
  return (
    body &&
    typeof body === "object" &&
    isNonEmptyString(body.name) &&
    isNonEmptyString(body.email) &&
    isNonEmptyString(body.company) &&
    isNonEmptyString(body.companySize) &&
    isNonEmptyString(body.country) &&
    isNonEmptyString(body.demoDate) &&
    isNonEmptyString(body.demoTime)
  );
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

exports.bookDemo = onRequest(
  { cors: true, secrets: [smtpPassword], region: "us-central1" },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }

    if (!validatePayload(req.body)) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const { name, email, company, companySize, country, teamSize, demoDate, demoTime, notes } =
      req.body;

    const pass = smtpPassword.value();
    if (!pass) {
      res.status(503).json({ error: "Email is not configured on the server yet" });
      return;
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: true,
      auth: { user: SMTP_USER, pass },
    });

    try {
      await transporter.sendMail({
        from: `Rectifia <${SMTP_USER}>`,
        to: email,
        bcc: SMTP_USER,
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
      res.status(502).json({ error: "Failed to send confirmation email" });
      return;
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

    res.status(200).json({ ok: true });
  },
);
