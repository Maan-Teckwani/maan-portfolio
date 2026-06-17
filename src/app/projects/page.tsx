import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Projects — Maan Teckwani",
  description: "Selected projects and things I've built.",
  openGraph: {
    title: "Projects — Maan Teckwani",
    description: "Selected projects and things I've built.",
  },
};

const projects = [
  {
    title: "PosturePal",
    description: "PosturePal uses AI to improve posture, reduce discomfort, and promote healthier work habits.",
    tags: ["Next.js", "JavaScript", "Electron.js"],
    link: "https://posturepal.in",
    year: "2026",
  },
  {
    title: "Project Two",
    description: "Another concise description of a project you want to highlight on your portfolio.",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    link: "#",
    year: "2025",
  },
  {
    title: "Project Three",
    description: "Replace this placeholder text with a real description of your third project.",
    tags: ["Next.js", "Tailwind"],
    link: "#",
    year: "2024",
  },
];

export default function Projects() {
  return (
    <PageShell
      eyebrow="Selected work"
      title="Projects"
      description="A small collection of things I've built — side projects, experiments, and shipped products."
    >
      <div className="space-y-4">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            className="group block rounded-xl border border-border bg-card p-5 hover:border-foreground/20 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-1.5">
                  {p.title}
                  <ArrowUpRight className="size-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{p.year}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-0.5 rounded-md bg-accent text-accent-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
