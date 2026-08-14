import { DemoForm } from "@/components/ui/demo-form";

export function DemoCta() {
  return (
    <section id="demo" className="bg-surface px-8 py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <h2 className="text-center font-display text-[32px] font-bold tracking-tight text-navy">
          Ready to see it work for your team?
        </h2>
        <DemoForm variant="inline" />
      </div>
    </section>
  );
}
