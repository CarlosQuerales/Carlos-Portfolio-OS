import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { getProjects, getProjectBySlug } from '@/services/content';

const STATUS_LABEL = {
  shipped: 'Shipped',
  'in-progress': 'In progress',
  planned: 'Planned',
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project)
    return buildMetadata({ title: 'Project not found', path: `/projects/${slug}` });

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section className="pt-16">
      <Link
        href="/projects"
        className="border-border text-fg-muted hover:border-accent hover:text-accent inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors"
      >
        ← All projects
      </Link>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <h1 className="font-display text-fg text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
          {project.title}
        </h1>
        <Badge tone={project.status === 'shipped' ? 'accent' : 'muted'}>
          {STATUS_LABEL[project.status]}
        </Badge>
      </div>

      <p className="text-fg-muted mt-6 max-w-3xl text-lg leading-relaxed">
        {project.description}
      </p>

      <dl className="border-border bg-border mt-10 grid gap-px overflow-hidden rounded-2xl border shadow-[0_18px_60px_-42px_rgba(5,26,32,0.55)] sm:grid-cols-3">
        <div className="bg-surface p-6">
          <dt className="text-fg-muted text-xs font-semibold tracking-wide uppercase">
            Role
          </dt>
          <dd className="text-fg mt-2 text-sm leading-relaxed">{project.role}</dd>
        </div>
        <div className="bg-surface p-6">
          <dt className="text-fg-muted text-xs font-semibold tracking-wide uppercase">
            Challenge
          </dt>
          <dd className="text-fg mt-2 text-sm leading-relaxed">{project.challenge}</dd>
        </div>
        <div className="bg-surface p-6">
          <dt className="text-fg-muted text-xs font-semibold tracking-wide uppercase">
            Outcome
          </dt>
          <dd className="text-fg mt-2 text-sm leading-relaxed">{project.outcome}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {project.repoUrl && <Button href={project.repoUrl}>View repo</Button>}
        {project.demoUrl && (
          <Button href={project.demoUrl} variant="ghost">
            Live demo
          </Button>
        )}
      </div>
    </Section>
  );
}
