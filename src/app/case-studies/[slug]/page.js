import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { WorkVisual } from '@/components/sections/WorkVisual';
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

      <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
        <div className="lg:col-span-5">
          <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
            Technical case study
          </p>
          <h1 className="font-display text-fg mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            {caseStudy.title}
          </h1>
          <p className="text-fg-muted mt-6 text-lg leading-relaxed">
            {caseStudy.summary}
          </p>
          <p className="text-fg border-border mt-7 border-l-2 pl-5 text-sm leading-relaxed">
            <span className="text-fg-muted mb-1 block text-xs font-semibold tracking-[0.14em] uppercase">
              Role
            </span>
            {caseStudy.role}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {caseStudy.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
        <WorkVisual variant={caseStudy.visual} className="lg:col-span-7" />
      </div>

      <ol className="border-border mt-16 border-y">
        {[
          ['01', 'Problem', caseStudy.problem],
          ['02', 'Role', caseStudy.role],
          ['03', 'Technical approach', caseStudy.approach],
          ['04', 'Impact', caseStudy.result],
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
    </Section>
  );
}
