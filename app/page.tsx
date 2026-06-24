import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <div className="container py-16">
      <header className="mb-12 animate-fade-in">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Selected Work
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <p className="mt-10 text-right text-xs text-muted-foreground">
        Clicking a project opens its case study page.
      </p>
    </div>
  );
}
