"use client";

import { useEffect } from "react";
import { useDemoModal } from "@/components/ui/demo-modal-context";
import { DemoForm } from "@/components/ui/demo-form";

export function DemoModal() {
  const { isOpen, close } = useDemoModal();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 px-4 py-8"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg rounded-lg bg-white p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-5 top-5 text-ink/40 transition-colors hover:text-ink"
        >
          ✕
        </button>
        <div className="mb-6">
          <div className="font-display text-xl font-semibold text-navy">Book a demo</div>
          <p className="mt-1 font-sans text-sm text-ink/60">
            See how Rectifia handles reporting and case management for your team.
          </p>
        </div>
        <DemoForm variant="modal" />
      </div>
    </div>
  );
}
