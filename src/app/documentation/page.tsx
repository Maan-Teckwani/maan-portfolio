import type { Metadata } from "next";
import { FileText, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Documentation — Maan Teckwani",
  description: "Documentation and write-ups for my projects.",
  openGraph: {
    title: "Documentation — Maan Teckwani",
    description: "Documentation and write-ups for my projects.",
  },
};

const docs = [
  {
    title: "PosturePal — Setup & Architecture",
    description: "How PosturePal works, system design, installation, and local development setup.",
    excerpt:
      "PosturePal is built with an Electron desktop app, TensorFlow MoveNet for real-time posture detection, and a lightweight local backend. This guide covers the project architecture, design decisions, and how to run everything locally.",
    link: "https://app.notion.com/p/38ed17927d2b81ad93fee7914a9c32bf",
    date: "2026",
  },
  {
    title: "Project Two — API Reference",
    description: "Endpoints, request/response examples, and authentication notes.",
    excerpt:
      "All endpoints live under /v1 and accept JSON. Authentication is a bearer token in the Authorization header; tokens are scoped per workspace and rotate every 30 days. Rate limits are returned in standard X-RateLimit-* headers.",
    link: "#",
    date: "2025",
  },
  {
    title: "Project Three — Deployment Guide",
    description: "Step-by-step deployment instructions and environment configuration.",
    excerpt:
      "Deploys run from main via GitHub Actions: build, run tests, push container to the registry, then a blue/green swap on the host. Environment variables are sourced from the secret manager at boot — no .env files in production.",
    link: "#",
    date: "2024",
  },
];

export default function Documentation() {
  return (
    <PageShell
      eyebrow="Project docs"
      title={
        <a
          href="https://app.notion.com/p/Documentation-38ed17927d2b81f7adf7cdc3bcf421e6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
          data-cursor="hover"
        >
          Documentation
          <ArrowUpRight className="size-5" />
        </a>
      }
      description="Technical write-ups and documentation for the projects I've built."
    >
      <div className="space-y-3">
        {docs.map((d) => (
          <a
            key={d.title}
            href={d.link}
            target="_blank"
            data-cursor="hover"
            className="group flex flex-col rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-all"
          >
            <div className="flex items-start gap-4">
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
            </div>

            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] motion-safe:transition-[grid-template-rows] duration-500 ease-out">
              <div className="overflow-hidden">
                <div className="mt-3 pt-3 border-t border-border pl-14">
                  <p className="text-sm text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {d.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
