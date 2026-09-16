import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

/**
 * @param {{ caseStudy: import('@/data/case-studies').CaseStudy }} props
 */
export function CaseStudyCard({ caseStudy }) {
  return (
    <Card className="group flex h-full flex-col gap-5 overflow-hidden rounded-3xl p-6 sm:p-8">
      <p className="text-accent text-xs font-semibold tracking-[0.14em] uppercase">
        Technical case study
      </p>

      <div>
        <h3 className="font-display text-fg text-2xl font-semibold tracking-[-0.025em]">
          <Link href={`/case-studies/${caseStudy.slug}`} className="hover:text-accent">
            {caseStudy.title}
          </Link>
        </h3>
        <p className="text-fg-muted mt-2 text-sm leading-relaxed">{caseStudy.focus}</p>
      </div>

      <p className="text-fg text-base leading-relaxed">{caseStudy.summary}</p>

      <div className="border-border border-t pt-4">
        <p className="text-fg-muted text-xs font-semibold tracking-wide uppercase">
          Result
        </p>
        <p className="text-fg-muted mt-2 text-sm leading-relaxed">{caseStudy.result}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {caseStudy.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="text-accent mt-auto inline-flex items-center gap-2 text-sm font-semibold"
      >
        Read case study{' '}
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </Card>
  );
}
