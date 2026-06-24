import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Shanil Wijesinghe`,
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

  return (
    <article className="container py-12">
      <Button variant="ghost" size="sm" asChild className="mb-8 -ml-2">
        <Link href="/">
          <ArrowLeft />
          Back to work
        </Link>
      </Button>

      {/* Intro */}
      <header className="mb-10 max-w-3xl animate-fade-in-up opacity-0">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {project.category}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">{project.blurb}</p>
        <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Role</dt>
            <dd className="font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Year</dt>
            <dd className="font-medium">{project.year}</dd>
          </div>
        </dl>
      </header>

      {/* Gallery */}
      <section className="mb-16 space-y-4 animate-fade-in opacity-0 [animation-delay:150ms]">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl border bg-muted">
          <Image
            src={hero}
            alt={`${project.title} — main view`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {rest.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {rest.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-muted"
              >
                <Image
                  src={src}
                  alt={`${project.title} — view ${i + 2}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
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
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
