import { cn } from "@/lib/utils";

/** Simple monogram mark. Swap for a real logo asset later. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold tracking-tight text-primary-foreground",
        className
      )}
      aria-hidden="true"
    >
      SW
    </span>
  );
}
