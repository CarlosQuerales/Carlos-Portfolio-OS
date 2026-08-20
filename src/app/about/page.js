import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { buildMetadata } from '@/lib/seo';
import { getProfile } from '@/services/content';

export const metadata = buildMetadata({
  title: 'About',
  description: 'Background, focus areas, and how I work.',
  path: '/about',
});

export default function AboutPage() {
  const profile = getProfile();

  return (
    <Section className="pt-16">
      <h1 className="font-display text-fg text-3xl font-semibold sm:text-4xl">About</h1>

      <p className="text-fg-muted mt-6 max-w-2xl text-lg leading-relaxed">
        {profile.summary}
      </p>

      <p className="text-fg-muted mt-4 max-w-2xl text-lg leading-relaxed">
        My strongest work happens at the intersection of code, troubleshooting, and
        communication: understanding what is happening in the product, explaining it
        without unnecessary jargon, and helping customers and internal teams reach a
        practical next step.
      </p>

      <h2 className="font-display text-fg-muted mt-12 text-sm font-semibold tracking-wide uppercase">
        Focus areas
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {profile.focusAreas.map((area) => (
          <Badge key={area} tone="accent">
            {area}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
