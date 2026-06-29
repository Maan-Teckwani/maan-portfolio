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
    slug: "project-two",
    title: "Project Two",
    tagline: "A short tagline describing this project",
    description:
      "Another concise description of a project you want to highlight on your portfolio.",
    overview:
      "Replace this with a longer overview of the project — what it does, how it works, and what makes it interesting.",
    useCases: [
      "First use case or audience for this project",
      "Second use case",
      "Third use case",
    ],
    reason:
      "Explain why you built this project and the problem it solves for you or others.",
    image: "ProjectTwoScreenshot.png",
    link: "#",
    tags: ["Python", "FastAPI", "PostgreSQL"],
    year: "2025",
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "A short tagline describing this project",
    description:
      "Replace this placeholder text with a real description of your third project.",
    overview:
      "Replace this with a longer overview of the project — what it does, how it works, and what makes it interesting.",
    useCases: [
      "First use case or audience for this project",
      "Second use case",
      "Third use case",
    ],
    reason:
      "Explain why you built this project and the problem it solves for you or others.",
    image: "ProjectThreeScreenshot.png",
    link: "#",
    tags: ["Next.js", "Tailwind"],
    year: "2024",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
