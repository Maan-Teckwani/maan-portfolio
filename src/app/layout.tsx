import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";

import { Sidebar, MobileNav } from "@/components/Sidebar";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maan Teckwani — Portfolio",
  description: "Personal portfolio — projects, documentation, and more.",
  openGraph: {
    title: "Maan Teckwani — Portfolio",
    description: "Personal portfolio — projects, documentation, and more.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <CustomCursor />
        <div className="flex min-h-screen bg-background text-foreground">
          <Sidebar />
          <main className="flex-1 min-w-0 flex flex-col">
            <MobileNav />
            <div className="flex-1">{children}</div>
            <footer className="border-t border-border px-6 py-4 text-xs text-muted-foreground flex justify-between">
              <span>Made by Maan Teckwani</span>
              <span>© {new Date().getFullYear()}</span>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
