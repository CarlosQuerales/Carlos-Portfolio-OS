import { Section } from '@/components/ui/Section';
import { CaseStudyCard } from '@/components/sections/CaseStudyCard';
import { PageHeader } from '@/components/ui/PageHeader';
import { buildMetadata } from '@/lib/seo';
import { getCaseStudies } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Case Studies',
  description: 'Technical problems, practical approaches, and honest outcomes.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const caseStudies = getCaseStudies();

  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Technical thinking"
        title="Case studies"
        description="A clear look at how I frame technical problems, evaluate tradeoffs, and communicate outcomes. Metrics appear only when they can be shared and verified."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </Section>
  );
}
