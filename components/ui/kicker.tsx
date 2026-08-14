export function Kicker({
  children,
  tone = "gold",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "gold" | "white";
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-xs font-medium tracking-[0.08em] ${
        tone === "gold" ? "text-gold" : "text-white"
      } ${className}`}
    >
      {children}
    </div>
  );
}
