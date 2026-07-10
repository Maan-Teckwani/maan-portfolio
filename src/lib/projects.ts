export type Project = {
  slug: string;
  title: string;
  // Short tagline shown under the title, e.g. "AI posture coach for your desk".
  tagline: string;
  // One-line summary used on the projects list card.
  description: string;
  // Longer overview paragraph(s) shown at the top of the detail page.
  overview: string;
  // Bullet points: what the project is used for / who it's for.
  useCases: string[];
  // Why you built it.
  reason: string;
  // Image file living in /public/projects — just the file name.
  image: string;
  // Live website. Use "#" if there isn't one yet.
  link: string;
  // Optional source link.
  github?: string;
  tags: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "posturepal",
    title: "PosturePal",
    tagline: "AI posture coach that nudges you while you work",
    description:
      "PosturePal uses AI to improve posture, reduce discomfort, and promote healthier work habits.",
    overview:
      "PosturePal is a desktop app that watches your posture through your webcam and gives gentle, real-time nudges when you start to slouch. It runs quietly in the background so you can stay focused while building healthier habits over the course of the day.",
    useCases: [
      "Desk workers who sit for long hours and want to avoid back and neck pain",
      "Students and developers spending full days at a laptop",
      "Anyone trying to build a consistent, healthier posture habit",
    ],
    reason:
      "I kept ending my work days with a sore neck and bad posture I never noticed in the moment. I wanted something that quietly kept me accountable without getting in the way, so I built PosturePal.",
    image: "PosturePalScreenshot.png",
    link: "https://posturepal.in",
    tags: ["Next.js", "JavaScript", "Electron.js"],
    year: "2026",
  },
  {
    slug: "alfred",
    title: "Alfred",
    tagline: "Autonomous headless engineering pipeline for the SDLC",
    description:
      "Alfred is an event-driven agentic worker that resolves backlog bugs end-to-end across Jira, GitHub, and Slack.",
    overview:
      "Alfred is an autonomous AI software engineering agent that resolves low-priority development tasks with minimal human intervention. It integrates with Jira, GitHub, and Slack to automatically process tickets, provision isolated sandbox environments, generate code patches using an LLM, validate changes through an iterative self-correction loop with automated testing, and create production-ready pull requests. If validation repeatedly fails, Alfred escalates the task to engineers via a Human-in-the-Loop (HITL) workflow, reducing maintenance overhead and improving developer productivity.",
    useCases: [
      "Engineering teams drowning in low-severity backlog bugs and technical debt",
      "Organizations that want to reduce mean time to resolution (MTTR) on routine patches",
      "Senior engineers who want to protect deep-work time from constant task-switching",
    ],
    reason:
      "I wanted to see how far an autonomous agent could go inside a real SDLC — from a Jira ticket all the way to a passing Pull Request — without a human babysitting each step, while still failing safely back to a person when it hits its limits.",
    image: "AlfredScreenshot.png",
    link: "https://alfred-web-nine.vercel.app/#top",
    tags: ["Python", "LLM Agents", "Jira", "GitHub", "Slack", "Docker"],
    year: "2026",
    github: "https://github.com/Maan-Teckwani/alfred"
  },
  {
    slug: "db-health-analyzer",
    title: "Database Health Analyzer",
    tagline: "Understand and fix your database in minutes",
    description:
      "An AI-assisted tool that scans relational databases to assess structure, integrity, performance, and storage health.",
    overview:
      "Database Health Analyzer automatically scans relational databases to audit their structure, integrity, performance, and storage health. It extracts metadata — tables, columns, primary and foreign keys, indexes, and row statistics — builds a relationship graph, and runs a deterministic rule engine to detect issues like missing foreign keys, orphaned records, duplicate columns, redundant indexes, and storage waste. From those findings it computes a database health score, prioritizes remediation actions, generates executable SQL fixes, and produces an AI-powered executive summary, so developers can understand and optimize complex schemas in minutes.",
    useCases: [
      "Developers inheriting complex or undocumented database schemas",
      "Teams auditing production databases for integrity and storage issues",
      "Engineers who want prioritized, executable SQL fixes rather than raw metrics",
    ],
    reason:
      "I wanted a way to understand an unfamiliar database's real health — its broken relationships, redundant indexes, and wasted storage — without manually digging through metadata, and to get actionable SQL fixes instead of just a list of problems.",
    image: "DBHealthAnalyzerScreenshot.png",
    link: "#",
    tags: ["FastAPI", "SQLAlchemy", "PostgreSQL", "Gemini 2.5 Flash", "Next.js", "React Flow"],
    year: "2026",
    github: "https://github.com/Maan-Teckwani/db-health-analyzer"
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
