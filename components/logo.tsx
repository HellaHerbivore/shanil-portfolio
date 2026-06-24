import Image from "next/image";

import { cn } from "@/lib/utils";

/** Brand mark loaded from /public/projects/shanil-logo.png. */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/projects/shanil-logo.png"
      alt="Shanil Wijesinghe logo"
      width={40}
      height={40}
      priority
      className={cn("h-10 w-10 object-contain", className)}
    />
  );
}
