import { Section } from '@/components/ui/Section';
import { SkillCard } from '@/components/sections/SkillCard';
import { buildMetadata } from '@/lib/seo';
import { getSkillGroups } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Skills',
  description: 'Technical and cross-functional skills, grouped by category.',
  path: '/skills',
});

export default function SkillsPage() {
  const skillGroups = getSkillGroups();

  return (
    <Section className="pt-16">
      <h1 className="font-display text-fg text-3xl font-semibold sm:text-4xl">Skills</h1>
      <p className="text-fg-muted mt-4 max-w-2xl text-lg leading-relaxed">
        Grouped by category rather than a flat list — the categories themselves are part
        of the story.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}
