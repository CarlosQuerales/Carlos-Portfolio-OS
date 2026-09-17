import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/sections/Timeline';
import { PageHeader } from '@/components/ui/PageHeader';
import { buildMetadata } from '@/lib/seo';
import { getExperience } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Experience',
  description: 'Customer success, technical support, and service delivery experience.',
  path: '/experience',
});

export default function ExperiencePage() {
  const entries = getExperience();

  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Selected experience"
        title="A career built around customer clarity and technical ownership."
        description="More than a decade leading support, investigating complex systems, and helping customers and internal teams reach the right next step."
      />

      <div className="mt-12">
        <Timeline entries={entries} />
      </div>
    </Section>
  );
}
