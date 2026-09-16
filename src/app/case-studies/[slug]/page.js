import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { buildMetadata } from '@/lib/seo';
import { getCaseStudies, getCaseStudyBySlug } from '@/services/content';

export function generateStaticParams() {
  return getCaseStudies().map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy)
    return buildMetadata({
      title: 'Case study not found',
      path: `/case-studies/${slug}`,
    });

  return buildMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: `/case-studies/${caseStudy.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Section className="pt-16">
      <Link
        href="/case-studies"
        className="border-border text-fg-muted hover:border-accent hover:text-accent inline-flex rounded-full border px-4 py-2 text-sm font-medium transition-colors"
      >
        ← All case studies
      </Link>

      <h1 className="font-display text-fg mt-8 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
        {caseStudy.title}
      </h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {caseStudy.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <div className="border-border bg-surface rounded-2xl border p-6">
          <p className="text-accent font-display text-sm font-semibold">01</p>
          <h2 className="font-display text-fg-muted mt-4 text-sm font-semibold tracking-wide uppercase">
            Problem
          </h2>
          <p className="text-fg mt-2 leading-relaxed">{caseStudy.problem}</p>
        </div>
        <div className="border-border bg-surface rounded-2xl border p-6">
          <p className="text-accent font-display text-sm font-semibold">02</p>
          <h2 className="font-display text-fg-muted mt-4 text-sm font-semibold tracking-wide uppercase">
            Approach
          </h2>
          <p className="text-fg mt-2 leading-relaxed">{caseStudy.approach}</p>
        </div>
        <div className="border-border bg-surface rounded-2xl border p-6">
          <p className="text-accent font-display text-sm font-semibold">03</p>
          <h2 className="font-display text-fg-muted mt-4 text-sm font-semibold tracking-wide uppercase">
            Result
          </h2>
          <p className="text-fg mt-2 leading-relaxed">{caseStudy.result}</p>
        </div>
      </div>
    </Section>
  );
}
