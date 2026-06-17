import type { ReactNode } from "react";

interface PageShellProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function PageShell({ eyebrow, title, description, children }: PageShellProps) {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16 animate-fade-in">
      <header className="mb-10">
        {eyebrow && (
          <div className="mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </div>
        )}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-base text-muted-foreground max-w-xl">{description}</p>
        )}
      </header>
      <div className="space-y-8">{children}</div>
    </div>
  );
}
