import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Maan Teckwani",
  description: "Selected projects and things I've built.",
  openGraph: {
    title: "Projects — Maan Teckwani",
    description: "Selected projects and things I've built.",
  },
};

export default function Projects() {
  return (
    <PageShell
      eyebrow="Selected work"
      title="Projects"
      description="A small collection of things I've built — side projects, experiments, and shipped products."
    >
      <div className="space-y-4">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            data-cursor="hover"
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

            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] motion-safe:transition-[grid-template-rows] duration-500 ease-out">
              <div className="overflow-hidden">
                <div className="mt-4 aspect-[16/9] relative rounded-lg overflow-hidden border border-border bg-accent">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/projects/${p.image}`}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </div>
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
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
