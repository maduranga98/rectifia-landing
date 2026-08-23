"use client";

import { useState } from "react";
import { COMPANY_SIZES, COUNTRIES } from "@/lib/countries";

type SubmitState = "idle" | "submitting" | "success" | "error";

function minDate() {
  return new Date().toISOString().slice(0, 10);
}

export function DemoForm({ variant = "inline" }: { variant?: "inline" | "modal" }) {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-lg border border-navy/8 bg-white px-8 py-16 text-center">
        <div className="mb-3 font-display text-xl font-semibold text-navy">
          Request received
        </div>
        <p className="max-w-sm font-sans text-sm leading-relaxed text-ink/70">
          Thanks for booking a demo! Check your inbox — we&apos;ve sent you a confirmation
          email with the meeting link and details.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("submitting");
        setErrorMessage(null);

        const form = e.currentTarget;
        const data = new FormData(form);
        const payload = {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          company: String(data.get("company") ?? ""),
          companySize: String(data.get("companySize") ?? ""),
          country: String(data.get("country") ?? ""),
          teamSize: String(data.get("teamSize") ?? ""),
          demoDate: String(data.get("demoDate") ?? ""),
          demoTime: String(data.get("demoTime") ?? ""),
          notes: String(data.get("notes") ?? ""),
        };

        try {
          const res = await fetch("/api/book-demo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });

          if (!res.ok) {
            throw new Error("Request failed");
          }

          setStatus("success");
        } catch {
          setStatus("error");
          setErrorMessage(
            "Something went wrong sending your request. Please try again in a moment.",
          );
        }
      }}
      className={
        variant === "modal"
          ? "flex flex-col gap-4"
          : "mx-auto flex w-full max-w-xl flex-col gap-4 rounded-lg border border-navy/8 bg-white p-8"
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" type="text" required />
        <Field label="Work email" name="email" type="email" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Company" name="company" type="text" required />
        <SelectField
          label="Company size"
          name="companySize"
          required
          placeholder="Select company size"
          options={COMPANY_SIZES}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Country"
          name="country"
          required
          placeholder="Select country"
          options={COUNTRIES}
        />
        <Field
          label="Team size (optional)"
          name="teamSize"
          type="text"
          placeholder="e.g. 120 employees"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Preferred date" name="demoDate" type="date" required min={minDate()} />
        <Field label="Preferred time" name="demoTime" type="time" required />
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="font-sans text-xs font-medium text-ink/70">
          What are you hoping to solve? (optional)
        </span>
        <textarea
          name="notes"
          rows={3}
          className="resize-none rounded-md border border-navy/15 bg-white px-3 py-2.5 font-sans text-sm text-ink outline-none focus:border-gold"
        />
      </label>
      {status === "error" && errorMessage ? (
        <p className="font-sans text-xs text-red-600">{errorMessage}</p>
      ) : null}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 rounded-md bg-gold px-6 py-3 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Booking..." : "Book a demo"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  min?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-xs font-medium text-ink/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="rounded-md border border-navy/15 bg-white px-3 py-2.5 font-sans text-sm text-ink outline-none focus:border-gold"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  required,
  placeholder,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-xs font-medium text-ink/70">{label}</span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="rounded-md border border-navy/15 bg-white px-3 py-2.5 font-sans text-sm text-ink outline-none focus:border-gold"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
