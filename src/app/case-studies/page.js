import { Section } from '@/components/ui/Section';
import { CaseStudyCard } from '@/components/sections/CaseStudyCard';
import { buildMetadata } from '@/lib/seo';
import { getCaseStudies } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Problem, approach, and quantified result for real work.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <Section className="pt-16">
      <h1 className="font-display text-fg text-3xl font-semibold sm:text-4xl">
        Case Studies
      </h1>
      <p className="text-fg-muted mt-4 max-w-2xl text-lg leading-relaxed">
        Problem, approach, and a real number for the result — that&apos;s the whole
        format, deliberately, every time.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </Section>
  );
}
