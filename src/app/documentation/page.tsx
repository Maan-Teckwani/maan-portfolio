import type { Metadata } from "next";
import { FileText, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Documentation — Your Name",
  description: "Documentation and write-ups for my projects.",
  openGraph: {
    title: "Documentation — Your Name",
    description: "Documentation and write-ups for my projects.",
  },
};

const docs = [
  {
    title: "Project One — Architecture & Setup",
    description: "How the system is structured, key decisions, and how to run it locally.",
    link: "#",
    date: "2025",
  },
  {
    title: "Project Two — API Reference",
    description: "Endpoints, request/response examples, and authentication notes.",
    link: "#",
    date: "2025",
  },
  {
    title: "Project Three — Deployment Guide",
    description: "Step-by-step deployment instructions and environment configuration.",
    link: "#",
    date: "2024",
  },
];

export default function Documentation() {
  return (
    <PageShell
      eyebrow="Project docs"
      title="Documentation"
      description="Technical write-ups and documentation for the projects I've built."
    >
      <div className="space-y-3">
        {docs.map((d) => (
          <a
            key={d.title}
            href={d.link}
            className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-all"
          >
            <div className="size-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <FileText className="size-5 text-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-1.5">
                {d.title}
                <ArrowUpRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{d.description}</p>
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">{d.date}</div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
