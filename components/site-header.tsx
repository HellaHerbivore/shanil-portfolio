import Link from "next/link";

import { Logo } from "@/components/logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center">
        <Link href="/" aria-label="Home" className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-semibold tracking-tight">
            Shanil Wijesinghe
          </span>
        </Link>
      </div>
    </header>
  );
}
