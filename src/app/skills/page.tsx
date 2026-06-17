import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Skills — Your Name",
  description: "Technologies and tools I work with.",
  openGraph: {
    title: "Skills — Your Name",
    description: "Technologies and tools I work with.",
  },
};

type Skill = { name: string; slug: string; color: string, iconURL?: string };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "TypeScript", slug: "typescript", color: "3178C6" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Java", slug: "openjdk", color: "ED8B00" },
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "Go", slug: "go", color: "00ADD8" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "Next.js", slug: "nextdotjs", color: "000000" },
      { name: "Tailwind", slug: "tailwindcss", color: "06B6D4" },
      { name: "Vite", slug: "vite", color: "646CFF" },
      { name: "HTML", slug: "html5", color: "E34F26" },
      { name: "CSS", slug: "css", color: "1572B6" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
      { name: "Express", slug: "express", color: "000000" },
      { name: "FastAPI", slug: "fastapi", color: "009688" },
      { name: "PostgreSQL", slug: "postgresql", color: "4169E1" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
      { name: "Redis", slug: "redis", color: "DC382D" },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "GitHub", slug: "github", color: "181717" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "AWS", slug: "amazonwebservices", color: "232F3E", iconURL: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg" },
      { name: "Vercel", slug: "vercel", color: "000000" },
      { name: "Figma", slug: "figma", color: "F24E1E" },
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group relative aspect-square rounded-xl border border-border bg-card flex flex-col items-center justify-center gap-2 cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg">
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: `#${skill.color}` }}
      />
      <img
        src={skill.iconURL || `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
        alt={skill.name}
        loading="lazy"
        className="size-8 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1"
      />
      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <PageShell
      eyebrow="Toolbox"
      title="Skills"
      description="Languages, frameworks, and tools I use to design, build, and ship software."
    >
      {groups.map((group) => (
        <section key={group.title}>
          <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            {group.title}
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {group.items.map((s) => (
              <SkillCard key={s.name} skill={s} />
            ))}
          </div>
        </section>
      ))}
    </PageShell>
  );
}
