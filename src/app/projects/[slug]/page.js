import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { WorkVisual } from '@/components/sections/WorkVisual';
import { ProjectScreenshot } from '@/components/sections/ProjectScreenshot';
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

  const projects = getProjects();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

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
              {project.sector}
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
        {project.images?.[0] ? (
          <ProjectScreenshot
            image={project.images[0]}
            priority
            className="lg:col-span-7"
          />
        ) : (
          <WorkVisual variant={project.visual} className="lg:col-span-7" />
        )}
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

      {project.images?.length > 1 && (
        <section className="mt-16" aria-labelledby="selected-pages-heading">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
                Interface gallery
              </p>
              <h2
                id="selected-pages-heading"
                className="font-display text-fg mt-2 text-3xl font-semibold tracking-[-0.04em]"
              >
                Selected pages
              </h2>
            </div>
            <p className="text-fg-muted max-w-xl text-sm leading-relaxed">
              Real local project renders showing how the visual system extends beyond the
              homepage.
            </p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {project.images.slice(1).map((image) => (
              <ProjectScreenshot
                key={image.src}
                image={image}
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            ))}
          </div>
        </section>
      )}

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

      {nextProject && nextProject.slug !== project.slug && (
        <nav
          aria-label="Next project"
          className="border-border mt-16 flex items-center justify-between gap-6 border-t pt-8"
        >
          <span className="text-fg-muted text-xs font-semibold tracking-[0.14em] uppercase">
            Next project
          </span>
          <Link
            href={`/projects/${nextProject.slug}`}
            className="font-display text-fg hover:text-accent text-right text-xl font-semibold transition-colors sm:text-2xl"
          >
            {nextProject.title} <span aria-hidden="true">→</span>
          </Link>
        </nav>
      )}
    </Section>
  );
}
