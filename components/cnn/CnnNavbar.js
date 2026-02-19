"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Stack", href: "/#stack" },
  {
    label: "Contact",
    href: "/#contact"
  }
];

export default function CnnNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-20 w-full ${
        scrolled
          ? "border-b backdrop-blur-xl"
          : "border-b border-transparent backdrop-blur-md"
      }`}
      style={{
        borderColor: scrolled ? "rgba(255,255,255,0.08)" : "transparent",
        backgroundColor: scrolled ? "rgba(11,15,20,0.84)" : "rgba(11,15,20,0.5)"
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-[0.08em] text-[var(--text)]"
        >
          Taha Hasnat
        </Link>
        <nav className="flex flex-wrap items-center gap-6 text-xs font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="border-b border-transparent pb-1 transition hover:border-[rgba(199,164,107,0.35)] hover:text-[var(--text)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
