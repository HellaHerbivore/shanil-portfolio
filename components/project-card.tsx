"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, X } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

const actionButton =
  "flex w-14 shrink-0 items-center justify-center self-stretch rounded-lg border border-input bg-background text-foreground transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring [&_svg]:size-5";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [videoOpen, setVideoOpen] = useState(false);
  const href = `/work/${project.slug}`;

  return (
    <>
      <Card className="group overflow-hidden animate-fade-in-up opacity-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ animationDelay: `${index * 90}ms` }}>
        <Link
          href={href}
          aria-label={`${project.title} case study`}
          className="relative block aspect-[16/10] overflow-hidden bg-muted"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>

        <div className="flex items-stretch justify-between gap-3 p-5">
          <Link href={href} className="min-w-0 flex-1 space-y-1">
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground">{project.blurb}</p>
          </Link>

          {project.demoVideo ? (
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label={`Watch ${project.title} demo`}
              className={actionButton}
            >
              <Play />
            </button>
          ) : project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} in a new tab`}
              className={actionButton}
            >
              <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </Card>

      {project.demoVideo && videoOpen && (
        <VideoLightbox
          src={project.demoVideo}
          title={project.title}
          onClose={() => setVideoOpen(false)}
        />
      )}
    </>
  );
}

function VideoLightbox({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} demo`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={cn(
          "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full",
          "bg-white/10 text-white transition-colors hover:bg-white/20"
        )}
      >
        <X className="size-5" />
      </button>

      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm">
        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="h-auto max-h-[85vh] w-full rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
