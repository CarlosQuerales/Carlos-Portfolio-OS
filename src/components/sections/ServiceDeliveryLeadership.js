import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ServiceDeliveryLeadership({ highlights }) {
  return (
    <Section className="border-border bg-surface/35 border-y">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-14">
        <SectionHeading
          eyebrow="Service delivery & leadership"
          title="Systems, teams, and ownership—not just tickets."
          description="My support experience includes building the function, leading people, and improving how work travels across departments."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="border-border bg-bg rounded-[var(--radius-card)] border p-6 shadow-[var(--shadow-card)]"
            >
              <p className="font-display text-accent text-2xl font-semibold">
                {item.value}
              </p>
              <h3 className="font-display text-fg mt-4 font-semibold">{item.title}</h3>
              <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
