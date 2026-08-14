"use client";

import { useDemoModal } from "@/components/ui/demo-modal-context";

export function DemoTriggerButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const { open } = useDemoModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
