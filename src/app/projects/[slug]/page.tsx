import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

import { projects, getProject } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  const title = `${project.title} — Maan Teckwani`;
  return {
    title,
    description: project.description,
    openGraph: { title, description: project.description },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasLink = project.link && project.link !== "#";

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16 animate-fade-in">
      <Link
        href="/projects"
        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        All Projects
      </Link>

      <header className="mt-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{project.tagline}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          By Maan Teckwani · {project.year}
        </p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded-md bg-accent text-accent-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-8 overflow-hidden rounded-xl border border-border bg-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/projects/${project.image}`}
          alt={`${project.title} screenshot`}
          className="w-full h-auto"
        />
      </div>

      <div className="mt-10 space-y-8">
        <p className="text-base text-foreground leading-relaxed">
          {project.overview}
        </p>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            What people use it for
          </h2>
          <ul className="mt-3 space-y-2 text-base text-muted-foreground list-disc list-inside marker:text-foreground/40">
            {project.useCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Why I built it
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            {project.reason}
          </p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {hasLink && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Visit website
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:border-foreground/20 transition-colors"
          >
            <Github className="size-4" />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
