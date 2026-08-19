import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

/**
 * @param {{ caseStudy: import('@/data/case-studies').CaseStudy }} props
 */
export function CaseStudyCard({ caseStudy }) {
  return (
    <Card className="flex flex-col gap-4">
      <h3 className="font-display text-fg text-lg font-semibold">
        <Link href={`/case-studies/${caseStudy.slug}`} className="hover:text-accent">
          {caseStudy.title}
        </Link>
      </h3>

      <p className="text-fg-muted text-sm leading-relaxed">{caseStudy.summary}</p>

      <div className="flex flex-wrap gap-2">
        {caseStudy.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="text-accent mt-auto text-sm font-medium hover:underline"
      >
        Read case study →
      </Link>
    </Card>
  );
}
