import Image from "next/image";

import { cn } from "@/lib/utils";

/** Brand mark loaded from /public/projects/shanil-logo.png. */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/projects/shanil-logo.png"
      alt="Shanil Wijesinghe logo"
      width={64}
      height={64}
      priority
      className={cn("h-14 w-14 object-contain", className)}
    />
  );
}
