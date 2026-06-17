import type { Metadata } from "next";
import { Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact — Maan Teckwani",
  description: "Get in touch — email, phone, LinkedIn, or X.",
  openGraph: {
    title: "Contact — Maan Teckwani",
    description: "Get in touch — email, phone, LinkedIn, or X.",
  },
};

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-6.59L4.64 22H1.38l8.02-9.16L1 2h7.02l4.84 6.05L18.244 2Zm-1.2 18h1.88L7.04 4H5.06l11.984 16Z" />
    </svg>
  );
}

const links = [
  {
    label: "Email",
    value: "maanteckwani@gmail.com",
    href: "mailto:maanteckwani@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+91 96638 07303",
    href: "tel:+919663807303",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/maan-teckwani-07487428a/",
    href: "https://www.linkedin.com/in/maan-teckwani-07487428a/",
    icon: Linkedin,
  },
  {
    label: "X",
    value: "@maan_teckwani",
    href: "https://x.com/maan_teckwani",
    icon: XIcon,
  },
];

export default function Contact() {
  return (
    <PageShell
      eyebrow="Say hello"
      title="Let's talk"
      description="Reach out for opportunities, collaborations, or just to chat about software, ideas, or anything else."
    >
      <div className="grid sm:grid-cols-2 gap-3">
        {links.map(({ label, value, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 hover:border-foreground/20 hover:-translate-y-0.5 transition-all"
          >
            <div className="size-10 rounded-lg bg-accent flex items-center justify-center shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
              <Icon className="size-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
              <div className="text-sm font-medium text-foreground truncate">{value}</div>
            </div>
            <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </a>
        ))}
      </div>
    </PageShell>
  );
}
