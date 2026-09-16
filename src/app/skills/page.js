import { Section } from '@/components/ui/Section';
import { SkillCard } from '@/components/sections/SkillCard';
import { PageHeader } from '@/components/ui/PageHeader';
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
      <PageHeader
        eyebrow="Capabilities"
        title="Skills"
        description="Technical and cross-functional capabilities grouped by the kind of work they support."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.category} group={group} index={index} />
        ))}
      </div>
    </Section>
  );
}
