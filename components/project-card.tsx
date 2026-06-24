import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block animate-fade-in-up opacity-0"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <Card className="overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="space-y-1 p-5">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground">{project.blurb}</p>
        </div>
      </Card>
    </Link>
  );
}
