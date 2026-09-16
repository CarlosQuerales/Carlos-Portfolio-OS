import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { PageHeader } from '@/components/ui/PageHeader';
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
      <PageHeader eyebrow="Profile" title="About" description={profile.summary} />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="border-border bg-surface rounded-2xl border p-6 sm:p-8">
          <p className="text-fg text-lg leading-relaxed">
            My strongest work happens at the intersection of code, troubleshooting, and
            communication: understanding what is happening in the product, explaining it
            without unnecessary jargon, and helping customers and internal teams reach a
            practical next step.
          </p>
        </div>
        <div className="border-border rounded-2xl border p-6 sm:p-8">
          <h2 className="font-display text-fg-muted text-sm font-semibold tracking-wide uppercase">
            Focus areas
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <Badge key={area} tone="accent">
                {area}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
