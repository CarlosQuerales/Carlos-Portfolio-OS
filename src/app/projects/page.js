import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { buildMetadata } from '@/lib/seo';
import { getProjects } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Projects',
  description: 'Shipped and in-progress projects, tagged by the role they demonstrate.',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Section className="pt-16">
      <h1 className="font-display text-fg text-3xl font-semibold sm:text-4xl">
        Projects
      </h1>
      <p className="text-fg-muted mt-4 max-w-2xl text-lg leading-relaxed">
        Each project links to a live demo and a repo where one exists. Status is marked
        honestly — not everything here is finished yet.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
