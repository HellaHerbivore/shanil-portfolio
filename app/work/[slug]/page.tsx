import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Shanil`,
    description: project.blurb,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const [hero, ...rest] = project.gallery;

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="container py-12">
      <Link
        href="/"
        className="group mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-5 shrink-0 transition-transform group-hover:-translate-x-1" />
        <span className="font-medium">Back to work</span>
      </Link>

      {/* Intro */}
      <header className="mb-10 mx-auto max-w-3xl text-center animate-fade-in-up opacity-0">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.blurb}</p>
      </header>

      {/* Top media: embed for some projects, screenshot gallery for the rest */}
      <section className="mb-16 animate-fade-in opacity-0 [animation-delay:150ms]">
        {project.heroEmbed === "youtube" && project.youtubeId ? (
          <div className="mx-auto aspect-[9/16] w-full max-w-[360px] overflow-hidden rounded-xl border bg-muted shadow-sm">
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0`}
              title={`${project.title} demo`}
              allow="accelerated-sensors; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : project.heroEmbed === "site" && project.liveUrl ? (
          <div className="space-y-3">
            <div className="overflow-hidden rounded-xl border bg-muted shadow-sm">
              <iframe
                src={project.liveUrl}
                title={`${project.title} live project`}
                loading="lazy"
                allow="fullscreen"
                className="h-[70vh] min-h-[420px] w-full"
              />
            </div>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Open the live project
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            <Image
              src={hero}
              alt={`${project.title} — main view`}
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-auto w-full rounded-xl border bg-muted"
            />
            {rest.length > 0 && (
              <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2">
                {rest.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${project.title} — view ${i + 2}`}
                    width={0}
                    height={0}
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full rounded-xl border bg-muted"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Story */}
      <div className="mx-auto max-w-3xl space-y-12">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-semibold tracking-tight">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-4">
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            {(section.palette || section.paletteImage) && (
              <div className="mt-8 flex flex-wrap items-center gap-5">
                {section.palette?.map((color) => (
                  <div
                    key={color}
                    className="h-16 w-16 rounded-full border border-border shadow-sm"
                    style={{ backgroundColor: `#${color}` }}
                    title={`#${color}`}
                  />
                ))}
                {section.paletteImage && (
                  <Image
                    src={section.paletteImage}
                    alt={`${project.title} logo`}
                    width={180}
                    height={180}
                    className="ml-auto h-[180px] w-[180px] object-contain"
                  />
                )}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Prev / next navigation */}
      <nav className="mt-20 flex items-stretch justify-between gap-6 border-t pt-8">
        <Link
          href={`/work/${prev.slug}`}
          className="group flex max-w-[46%] items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-5 shrink-0 transition-transform group-hover:-translate-x-1" />
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wide">
              Previous
            </span>
            <span className="block truncate font-medium text-foreground">
              {prev.title}
            </span>
          </span>
        </Link>

        <Link
          href={`/work/${next.slug}`}
          className="group flex max-w-[46%] items-center gap-3 text-right text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wide">
              Next
            </span>
            <span className="block truncate font-medium text-foreground">
              {next.title}
            </span>
          </span>
          <ArrowRight className="size-5 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </nav>
    </article>
  );
}
