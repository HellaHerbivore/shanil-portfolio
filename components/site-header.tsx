import Link from "next/link";

import { Logo } from "@/components/logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-center">
        <Link href="/" aria-label="Home" className="flex items-center gap-4">
          <Logo />
          <span className="text-2xl font-semibold leading-none tracking-tight md:text-3xl">
            Shanil Wijesinghe
          </span>
        </Link>
      </div>
    </header>
  );
}
