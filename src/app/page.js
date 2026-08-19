import { Hero } from '@/components/sections/Hero';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { CaseStudyCard } from '@/components/sections/CaseStudyCard';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { getProfile, getProjects, getCaseStudies } from '@/services/content';

export default function HomePage() {
  const profile = getProfile();
  const featuredProjects = getProjects().slice(0, 3);
  const featuredCaseStudies = getCaseStudies().slice(0, 2);

  return (
    <>
      <Section className="pt-20 sm:pt-28">
        <Hero profile={profile} />
      </Section>

      <Section className="border-border border-t">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-fg text-2xl font-semibold">
            Featured projects
          </h2>
          <Button href="/projects" variant="ghost">
            View all
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section className="border-border border-t">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-fg text-2xl font-semibold">Case studies</h2>
          <Button href="/case-studies" variant="ghost">
            View all
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </Section>
    </>
  );
}
