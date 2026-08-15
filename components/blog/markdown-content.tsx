import { Fragment } from "react";

function renderInline(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\*[^*]+\*)/g).filter(Boolean);

  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={key} className="font-semibold text-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={key}
          href={linkMatch[2]}
          className="font-semibold text-navy underline decoration-gold underline-offset-4"
        >
          {linkMatch[1]}
        </a>
      );
    }

    if (part.startsWith("*") && part.endsWith("*") && !part.startsWith("**")) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        const trimmed = block.trim();

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="mt-4 font-display text-[22px] font-bold tracking-tight text-navy first:mt-0"
            >
              {renderInline(trimmed.slice(3), `h-${i}`)}
            </h2>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed
            .split("\n")
            .map((line) => line.replace(/^- /, "").trim())
            .filter(Boolean);

          return (
            <ul key={i} className="flex flex-col gap-2.5 pl-1">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 font-sans text-base leading-relaxed text-ink">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{renderInline(item, `li-${i}-${j}`)}</span>
                </li>
              ))}
            </ul>
          );
        }

        const paragraph = trimmed.replace(/\n/g, " ");
        return (
          <p key={i} className="font-sans text-base leading-relaxed text-ink">
            {renderInline(paragraph, `p-${i}`)}
          </p>
        );
      })}
    </div>
  );
}
