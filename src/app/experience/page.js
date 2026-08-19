import { Section } from '@/components/ui/Section';
import { Timeline } from '@/components/sections/Timeline';
import { buildMetadata } from '@/lib/seo';
import { getExperience } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Experience',
  description: 'Career history and quantified outcomes.',
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
        Every highlight below should carry a real number by the time this ships — a claim
        without a metric is not evidence.
      </p>

      <div className="mt-12">
        <Timeline entries={entries} />
      </div>
    </Section>
  );
}
