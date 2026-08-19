import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

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
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-fg text-lg font-semibold">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <Badge tone={project.status === 'shipped' ? 'accent' : 'muted'}>
          {STATUS_LABEL[project.status]}
        </Badge>
      </div>

      <p className="text-fg-muted text-sm leading-relaxed">{project.summary}</p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="text-accent mt-auto text-sm font-medium hover:underline"
      >
        View details →
      </Link>
    </Card>
  );
}
