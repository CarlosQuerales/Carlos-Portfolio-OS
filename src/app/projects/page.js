import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { PageHeader } from '@/components/ui/PageHeader';
import { buildMetadata } from '@/lib/seo';
import { getProjects } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Selected Work',
  description: 'Selected web projects with real interface previews and delivery context.',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Build and delivery"
        title="Selected work"
        description="A visual archive of web delivery across advocacy, education, housing, culture, and technical product work. Contribution details are only stated where they have been confirmed."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
