import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { PageHeader } from '@/components/ui/PageHeader';
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
      <PageHeader
        eyebrow="Build and delivery"
        title="Selected work"
        description="Projects presented through the problem, my contribution, and the outcome. Live demos and source code are included where they can be shared publicly."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
