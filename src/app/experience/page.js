import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/sections/Timeline';
import { PageHeader } from '@/components/ui/PageHeader';
import { buildMetadata } from '@/lib/seo';
import { getExperience } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Experience',
  description: 'Technical experience across customer success and web development.',
  path: '/experience',
});

export default function ExperiencePage() {
  const entries = getExperience();

  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Career focus"
        title="Experience"
        description="More than a decade connecting customer needs, technical investigation, and web delivery — presented without exposing confidential client or employer information."
      />

      <div className="mt-12">
        <Timeline entries={entries} />
      </div>
    </Section>
  );
}
