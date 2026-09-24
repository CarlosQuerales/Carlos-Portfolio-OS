import { Hero } from '@/components/sections/Hero';
import { CustomerImpact } from '@/components/sections/CustomerImpact';
import { ExperienceStory } from '@/components/sections/ExperienceStory';
import { SelectedWorkShowcase } from '@/components/sections/SelectedWorkShowcase';
import { SupportApproach } from '@/components/sections/SupportApproach';
import { TechnicalCustomerSuccess } from '@/components/sections/TechnicalCustomerSuccess';
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

      <SelectedWorkShowcase
        projects={featuredProjects}
        caseStudies={featuredCaseStudies}
      />

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
