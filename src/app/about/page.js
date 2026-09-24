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
            My strongest work happens where customer context meets technical
            investigation: understanding the business impact, finding what is happening in
            the system, and guiding customers and internal teams toward a practical
            resolution.
          </p>
          <p className="text-fg-muted mt-5 leading-relaxed">
            I bring the perspective of a support leader and a hands-on web practitioner,
            so I can move comfortably between an executive update, a customer
            conversation, and a detailed engineering handoff.
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
