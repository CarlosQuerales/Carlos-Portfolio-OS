import { Hero } from '@/components/sections/Hero';
import { ProjectCard } from '@/components/sections/ProjectCard';
import { CaseStudyCard } from '@/components/sections/CaseStudyCard';
import { CustomerImpact } from '@/components/sections/CustomerImpact';
import { ExperienceStory } from '@/components/sections/ExperienceStory';
import { SupportApproach } from '@/components/sections/SupportApproach';
import { TechnicalCustomerSuccess } from '@/components/sections/TechnicalCustomerSuccess';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import {
  getProfile,
  getProjects,
  getCaseStudies,
  getCustomerSuccess,
  getExperience,
} from '@/services/content';

export default function HomePage() {
  const profile = getProfile();
  const featuredProjects = getProjects().slice(0, 3);
  const featuredCaseStudies = getCaseStudies().slice(0, 2);
  const customerSuccess = getCustomerSuccess();
  const experience = getExperience();

  return (
    <>
      <Section className="py-0">
        <Hero profile={profile} />
      </Section>

      <CustomerImpact impact={customerSuccess.impact} />
      <ExperienceStory entries={experience} compact />
      <SupportApproach steps={customerSuccess.supportSteps} />
      <TechnicalCustomerSuccess bridge={customerSuccess.expertiseBridge} />

      <Section
        id="selected-work"
        className="border-border bg-surface/35 border-y py-14 sm:py-20"
      >
        <div className="mb-9">
          <SectionHeading
            eyebrow="Selected technical work"
            title="Supporting evidence: how I investigate, build, and explain."
            description="Projects and case studies that demonstrate the technical judgment behind my customer-facing work."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects" variant="ghost">
            All projects
          </Button>
          <Button href="/case-studies" variant="ghost">
            All case studies
          </Button>
        </div>
      </Section>

      <Section className="border-border border-t py-14 sm:py-20">
        <div className="bg-surface border-border relative grid gap-8 overflow-hidden rounded-3xl border p-7 shadow-[0_24px_80px_-48px_rgba(5,26,32,0.7)] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="bg-accent/10 absolute -right-20 -bottom-28 h-64 w-64 rounded-full blur-3xl" />
          <div className="relative">
            <p className="text-accent text-xs font-semibold tracking-[0.14em] uppercase">
              Let&apos;s work together
            </p>
            <h2 className="font-display text-fg mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Need someone who can connect the product, the issue, and the customer?
            </h2>
            <p className="text-fg-muted mt-3 max-w-2xl leading-relaxed">
              I&apos;m open to remote Customer Success Engineering, Technical Support, and
              IT Service Delivery roles.
            </p>
          </div>
          <Button href="mailto:camelsouth@gmail.com" className="relative">
            Start a conversation
          </Button>
        </div>
      </Section>
    </>
  );
}
