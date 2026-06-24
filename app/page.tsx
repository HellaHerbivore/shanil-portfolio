import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function HomePage() {
  return (
    <div className="container py-16">
      <section className="mb-14 max-w-2xl animate-fade-in">
        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
          I look for fresh ways to help the animal advocacy movement through
          design. Drawing on my roots in game design, I build playful and
          interactive web pieces that change how people connect with a cause. I
          believe we can build deep trust and win more support for animals by
          making online spaces engaging, smooth, and fun to explore.
        </p>
      </section>

      <header className="mb-10 animate-fade-in">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Selected Work
        </h1>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
