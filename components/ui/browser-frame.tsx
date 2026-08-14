export function BrowserFrame({
  children,
  url = "app.rectifia.com",
}: {
  children: React.ReactNode;
  url?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-navy/8">
      <div className="flex h-8 items-center gap-1.5 border-b border-navy/8 bg-[#F1F2F5] px-3.5">
        <span className="h-2 w-2 rounded-full bg-[#D6D9DE]" />
        <span className="h-2 w-2 rounded-full bg-[#D6D9DE]" />
        <span className="h-2 w-2 rounded-full bg-[#D6D9DE]" />
        <span className="ml-2.5 rounded bg-white px-2.5 py-0.5 font-mono text-[11px] text-navy/50">
          {url}
        </span>
      </div>
      <div className="bg-white">{children}</div>
    </div>
  );
}
