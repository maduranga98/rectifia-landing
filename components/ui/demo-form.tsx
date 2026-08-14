"use client";

import { useState } from "react";

export function DemoForm({ variant = "inline" }: { variant?: "inline" | "modal" }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-lg border border-navy/8 bg-white px-8 py-16 text-center">
        <div className="mb-3 font-display text-xl font-semibold text-navy">
          Request received
        </div>
        <p className="max-w-sm font-sans text-sm leading-relaxed text-ink/70">
          Someone from our team will reach out within one business day to set up a time.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
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
        <Field label="Team size" name="teamSize" type="text" placeholder="e.g. 120 employees" />
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
      <button
        type="submit"
        className="mt-1 rounded-md bg-gold px-6 py-3 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark"
      >
        Book a demo
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
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-sans text-xs font-medium text-ink/70">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-md border border-navy/15 bg-white px-3 py-2.5 font-sans text-sm text-ink outline-none focus:border-gold"
      />
    </label>
  );
}
