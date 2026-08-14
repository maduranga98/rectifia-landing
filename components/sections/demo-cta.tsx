import { DemoForm } from "@/components/ui/demo-form";
import { Reveal } from "@/components/ui/reveal";

export function DemoCta() {
  return (
    <section id="demo" className="bg-surface px-8 py-24">
      <Reveal className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <h2 className="text-center font-display text-[32px] font-bold tracking-tight text-navy">
          Ready to see it work for your team?
        </h2>
        <DemoForm variant="inline" />
      </Reveal>
    </section>
  );
}
