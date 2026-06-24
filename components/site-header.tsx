import Link from "next/link";

import { Logo } from "@/components/logo";

const navItems = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center">
        <nav className="flex flex-1 items-center gap-6 text-sm font-medium uppercase tracking-wide">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" aria-label="Home" className="shrink-0">
          <Logo />
        </Link>

        <div className="flex-1" />
      </div>
    </header>
  );
}
