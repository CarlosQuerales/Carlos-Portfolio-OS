import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/sections/Timeline';
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
      <h1 className="font-display text-fg text-3xl font-semibold sm:text-4xl">
        Experience
      </h1>
      <p className="text-fg-muted mt-4 max-w-2xl text-lg leading-relaxed">
        More than a decade of experience connecting customer needs, technical
        investigation, and web delivery. This overview focuses on the work I can discuss
        publicly without exposing confidential client or employer information.
      </p>

      <div className="mt-12">
        <Timeline entries={entries} />
      </div>
    </Section>
  );
}
