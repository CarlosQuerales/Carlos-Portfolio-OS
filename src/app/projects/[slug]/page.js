import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WorkVisual } from '@/components/sections/WorkVisual';
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

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
              Production project
            </p>
            <Badge tone={project.status === 'shipped' ? 'accent' : 'muted'}>
              {STATUS_LABEL[project.status]}
            </Badge>
          </div>
          <h1 className="font-display text-fg mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="text-fg-muted mt-6 text-lg leading-relaxed">
            {project.description}
          </p>
          <p className="text-fg border-border mt-7 border-l-2 pl-5 text-sm leading-relaxed">
            <span className="text-fg-muted mb-1 block text-xs font-semibold tracking-[0.14em] uppercase">
              Role
            </span>
            {project.role}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
        <WorkVisual variant={project.visual} className="lg:col-span-7" />
      </div>

      <ol className="border-border mt-16 border-y">
        {[
          ['01', 'Problem', project.challenge],
          ['02', 'Technical approach', project.approach],
          ['03', 'Impact', project.outcome],
        ].map(([number, title, copy]) => (
          <li
            key={title}
            className="border-border grid gap-3 border-t py-8 first:border-t-0 sm:grid-cols-[4rem_14rem_1fr] sm:items-start"
          >
            <span className="text-accent font-mono text-sm font-semibold">{number}</span>
            <h2 className="font-display text-fg text-xl font-semibold">{title}</h2>
            <p className="text-fg-muted max-w-2xl leading-relaxed">{copy}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.repoUrl && (
          <Button href={project.repoUrl} target="_blank" rel="noreferrer">
            View repo <span aria-hidden="true">↗</span>
          </Button>
        )}
        {project.demoUrl && (
          <Button href={project.demoUrl} variant="ghost" target="_blank" rel="noreferrer">
            Live demo <span aria-hidden="true">↗</span>
          </Button>
        )}
      </div>
    </Section>
  );
}
