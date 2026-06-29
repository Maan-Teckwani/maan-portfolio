import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Maan Teckwani — Software Developer",
  description: "Personal portfolio of Maan Teckwani — software developer, builder, learner.",
  openGraph: {
    title: "Maan Teckwani — Software Developer",
    description: "Personal portfolio of Maan Teckwani.",
  },
};

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16 animate-fade-in">
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
        Hey, I'm <span className="bg-foreground text-background px-2 rounded-md">Maan Teckwani</span>
      </h1>
      <h2 className="mt-3 text-2xl md:text-3xl text-muted-foreground font-light">
        Software Developer
      </h2>

      <p className="mt-8 text-lg text-foreground leading-relaxed">
        I turn ideas into shipped products. Currently exploring{" "}
        <span className="italic">Applied AI and full-stack development</span> and building things that matter.
      </p>

      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
        This is my personal corner of the internet where I publish projects, write documentation,
        and share what I'm learning along the way.
      </p>

      <section className="mt-12">
        <div className="flex items-center gap-2 mb-5">
          <Briefcase className="size-4 text-muted-foreground" />
          <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Experience
          </h3>
        </div>

        <article className="group rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-all">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-semibold text-foreground">
                  Software Development Intern
                </h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                  Internship
                </span>
              </div>
              <a
                href="https://www.linkedin.com/company/hfactor1308/"
                className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
              >
                HfactoR
                <ArrowUpRight className="size-3" />
              </a>
            </div>
            <div className="text-xs text-muted-foreground whitespace-nowrap">
              May 2026 — July 2026
            </div>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc list-inside marker:text-foreground/40">
            <li>Built an enterprise ASP.NET Core Web API managing the end-to-end client-contract lifecycle for the company's HR-tech product, using a layered Controller-Repository architecture over SQL Server with ADO.NET.</li>
            <li>Engineered an intelligent duplicate-contract detection engine that validates new contracts against existing records using business rules — Client ID, Contract Code, Line of Business, and JSON-stored consultant assignments — preventing duplicate creation and protecting data integrity.</li>
            <li>Implemented repository-layer data access with parameterized ADO.NET queries against SQL Server, keeping controllers thin and the codebase maintainable in a team setting; delivered the feature toward production for enterprise clients.</li>
          </ul>
        </article>
      </section>

      <section className="mt-10">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
        >
          See what I've been building
          <ArrowUpRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
