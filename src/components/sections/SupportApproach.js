import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SupportApproach({ steps }) {
  return (
    <Section className="border-border bg-surface/35 border-y">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <SectionHeading
          eyebrow="How I solve problems"
          title="A clear path through technical complexity."
          description="Each step reduces uncertainty for the customer and improves the quality of information available to the team."
        />
        <p className="font-display text-fg-muted hidden justify-self-end text-right text-sm font-semibold tracking-[0.12em] uppercase lg:block">
          Signal → evidence → action → learning
        </p>
      </div>

      <div className="relative mt-12">
        <div
          className="bg-border-strong absolute top-6 right-[7%] left-[7%] hidden h-px lg:block"
          aria-hidden="true"
        />
        <ol className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="scroll-reveal group relative flex gap-5 md:block"
            >
              <div className="border-border bg-bg group-hover:border-accent group-hover:bg-accent-soft relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border shadow-[var(--shadow-card)] transition-[background-color,border-color,transform] duration-[var(--duration-standard)] group-hover:-translate-y-1">
                <span className="font-display text-accent text-sm font-semibold">
                  {step.number}
                </span>
              </div>
              <div className="pt-1 md:pt-0">
                <h3 className="font-display text-fg mt-0 text-lg font-semibold md:mt-6">
                  {step.title}
                </h3>
                <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
