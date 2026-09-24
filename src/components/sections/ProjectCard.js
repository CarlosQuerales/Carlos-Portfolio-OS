import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { WorkVisual } from '@/components/sections/WorkVisual';

const STATUS_LABEL = {
  shipped: 'Shipped',
  'in-progress': 'In progress',
  planned: 'Planned',
};

/**
 * @param {{ project: import('@/data/projects').Project }} props
 */
export function ProjectCard({ project }) {
  return (
    <Card className="group flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-0">
      <WorkVisual
        variant={project.visual}
        className="min-h-64 rounded-none border-0 sm:min-h-72"
      />

      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-3">
          <p className="text-accent text-xs font-semibold tracking-[0.14em] uppercase">
            Production project
          </p>
          <Badge tone={project.status === 'shipped' ? 'accent' : 'muted'}>
            {STATUS_LABEL[project.status]}
          </Badge>
        </div>

        <div>
          <h3 className="font-display text-fg text-2xl font-semibold tracking-[-0.025em]">
            <Link href={`/projects/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>
          <p className="text-fg-muted mt-2 text-sm leading-relaxed">{project.role}</p>
        </div>

        <p className="text-fg text-base leading-relaxed">{project.summary}</p>

        <div className="border-border border-t pt-4">
          <p className="text-fg-muted text-xs font-semibold tracking-wide uppercase">
            Outcome
          </p>
          <p className="text-fg-muted mt-2 text-sm leading-relaxed">{project.outcome}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="text-accent mt-auto inline-flex items-center gap-2 text-sm font-semibold"
        >
          View project{' '}
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </Card>
  );
}
