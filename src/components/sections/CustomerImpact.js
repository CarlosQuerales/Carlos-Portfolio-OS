import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function CustomerImpact({ impact }) {
  return (
    <Section id="customer-impact" className="scroll-mt-24 pt-10 sm:pt-16">
      <SectionHeading
        eyebrow="Customer impact"
        title="Evidence of support that moves customers forward."
        description="The numbers provide context; the real outcome is faster clarity, coordinated action, and a customer who knows what happens next."
      />

      <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {impact.map((item) => (
          <div
            key={item.label}
            className="border-border bg-surface relative overflow-hidden rounded-[var(--radius-card)] border p-6 shadow-[var(--shadow-card)]"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-[image:var(--gradient-brand)]" />
            <dt className="font-display text-accent text-3xl font-semibold tracking-tight">
              {item.value}
            </dt>
            <dd className="font-display text-fg mt-3 font-semibold">{item.label}</dd>
            <p className="text-fg-muted mt-2 text-sm leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </dl>
    </Section>
  );
}
