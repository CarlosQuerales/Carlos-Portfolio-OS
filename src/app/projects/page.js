import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { buildMetadata } from '@/lib/seo';
import { getProjects } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Selected Work',
  description: 'Selected projects with clear roles, technical decisions, and outcomes.',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Section className="pt-16">
      <h1 className="font-display text-fg text-3xl font-semibold sm:text-4xl">
        Selected work
      </h1>
      <p className="text-fg-muted mt-4 max-w-2xl text-lg leading-relaxed">
        Projects presented through the problem, my contribution, and the outcome. Live
        demos and source code are included where they can be shared publicly.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
