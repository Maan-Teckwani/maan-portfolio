"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, FileText, User, Sparkles, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/projects", label: "Projects", icon: Compass },
  { to: "/documentation", label: "Documentation", icon: FileText },
  { to: "/skills", label: "Skills", icon: Sparkles },
  { to: "/about", label: "About", icon: User },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 border-r border-border bg-sidebar flex-col px-4 py-6 sticky top-0 h-screen">
      <Link href="/" className="flex items-center gap-3 px-2 py-2 mb-6 group">
        <div className="size-11 rounded-full bg-gradient-to-br from-accent to-muted flex items-center justify-center text-base font-semibold text-foreground ring-1 ring-border">
          MT
        </div>
        <div className="leading-tight">
          <div className="font-semibold text-foreground">Maan Teckwani</div>
          <div className="text-xs text-muted-foreground">Software Developer</div>
        </div>
      </Link>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              href={to}
              className={
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all " +
                (active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground")
              }
            >
              <Icon className="size-4" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto px-2 text-xs text-muted-foreground">
        <Clock />
      </div>
    </aside>
  );
}

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return <span>{time}</span>;
}

export function MobileNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border px-4 py-3 flex gap-1 overflow-x-auto">
      {navItems.map(({ to, label }) => {
        const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
        return (
          <Link
            key={to}
            href={to}
            className={
              "whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors " +
              (active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-accent hover:text-foreground")
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
