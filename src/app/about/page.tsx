import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About — Maan Teckwani",
  description: "A bit about me, my background, and what I care about.",
  openGraph: {
    title: "About — Maan Teckwani",
    description: "A bit about me, my background, and what I care about.",
  },
};

export default function About() {
  return (
    <PageShell eyebrow="About me" title="A little about me">
      <div className="prose prose-neutral max-w-none text-foreground">
        <p className="text-lg leading-relaxed">
          Hi, I'm <span className="font-semibold">Maan Teckwani</span>. I'm a computer science student at VIT Vellore. I love taking ideas that exist only in my head and turning them into products people can actually use. Building and shipping is what excites me most.
        </p>
        <p className="mt-4 text-base text-muted-foreground leading-relaxed">
          When I'm not building or coding, you'll usually find me on a badminton court, reading about topics that interest me, or exploring somewhere new. I need a minimum 3 coffee cups a day, non negotiable.
        </p>

        <h3 className="mt-10 text-base font-semibold text-foreground uppercase tracking-wider">
          What I'm focused on right now
        </h3>
        <ul className="mt-3 space-y-2 text-base text-muted-foreground list-disc list-inside marker:text-foreground/40">
          <li>Learning and getting better at AI powered engineering.</li>
          <li>Shipping small projects end-to-end and building in public.</li>
          <li>Writing clear documentation for what I build.</li>
        </ul>

        <h3 className="mt-10 text-base font-semibold text-foreground uppercase tracking-wider">
          Currently
        </h3>
        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
          I am building <a href="https://posturepal.in" target="_blank" rel="noreferrer" className="underline hover:no-underline">PosturePal</a>, a posture correction desktop app that provides gentle nudges while you work to correct your posture and reduce the risk of back and neck pain.
        </p>
      </div>
    </PageShell>
  );
}
