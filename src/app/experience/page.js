import { ExperienceStory } from '@/components/sections/ExperienceStory';
import { buildMetadata } from '@/lib/seo';
import { getExperience } from '@/services/content';

export const metadata = buildMetadata({
  title: 'Experience',
  description: 'Customer success, technical support, and service delivery experience.',
  path: '/experience',
});

export default function ExperiencePage() {
  const entries = getExperience();

  return <ExperienceStory entries={entries} />;
}
