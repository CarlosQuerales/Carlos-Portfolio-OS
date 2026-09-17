import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TechnicalCustomerSuccess({ capabilities }) {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Technical customer success"
            title="Technical depth in service of customer outcomes."
            description="I can investigate the system directly, then translate what I find into useful choices for customers and internal teams."
          />

          <div className="border-border bg-accent-soft mt-8 rounded-[var(--radius-card)] border p-6">
            <p className="text-accent text-xs font-semibold tracking-[0.14em] uppercase">
              The bridge
            </p>
            <p className="font-display text-fg mt-3 text-xl font-semibold">
              Customer need <span className="text-accent">↔</span> Technical action
            </p>
            <p className="text-fg-muted mt-2 text-sm leading-relaxed">
              Enough product and engineering fluency to diagnose precisely. Enough
              customer empathy to communicate clearly.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {capabilities.map((capability) => (
            <Card key={capability.title}>
              <h3 className="font-display text-fg text-xl font-semibold">
                {capability.title}
              </h3>
              <p className="text-fg-muted mt-2 text-sm leading-relaxed">
                {capability.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {capability.tools.map((tool) => (
                  <Badge key={tool}>{tool}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
