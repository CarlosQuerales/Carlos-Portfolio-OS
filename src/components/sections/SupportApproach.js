import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function SupportApproach({ steps }) {
  return (
    <Section className="border-border bg-surface/35 border-y">
      <SectionHeading
        eyebrow="How I support customers"
        title="A calm, technical process from first signal to resolution."
        description="Every interaction should reduce uncertainty for the customer and increase the quality of information available to the team."
      />

      <ol className="border-border bg-border mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] border md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.number} className="bg-bg p-6 sm:p-7">
            <span className="font-display text-accent text-sm font-semibold">
              {step.number}
            </span>
            <h3 className="font-display text-fg mt-5 text-lg font-semibold">
              {step.title}
            </h3>
            <p className="text-fg-muted mt-3 text-sm leading-relaxed">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
