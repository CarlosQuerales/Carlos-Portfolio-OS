import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TechnicalCustomerSuccess({ bridge }) {
  return (
    <Section>
      <SectionHeading
        eyebrow="Technical customer success"
        title="Two disciplines. One customer outcome."
        description="Technical depth makes the investigation credible. Customer judgment makes the resolution useful."
        align="center"
      />

      <blockquote className="font-display text-fg mx-auto mt-10 max-w-4xl text-center text-2xl leading-tight font-semibold tracking-[-0.035em] sm:text-3xl lg:text-4xl">
        “Technical enough to investigate the issue.
        <span className="text-accent block">Customer-focused enough to solve it.”</span>
      </blockquote>

      <div className="relative mt-12 grid gap-5 lg:grid-cols-2 lg:gap-16">
        <article className="scroll-reveal border-border bg-accent-soft relative overflow-hidden rounded-[var(--radius-card)] border p-7 sm:p-9">
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Customer
          </p>
          <h3 className="font-display text-fg mt-4 text-2xl font-semibold tracking-tight">
            Context, trust, and momentum
          </h3>
          <ul className="border-border mt-7">
            {bridge.customer.map((item, index) => (
              <li
                key={item}
                className="border-border flex items-center gap-4 border-t py-4 first:border-0 first:pt-0"
              >
                <span className="text-accent font-display text-xs font-semibold">
                  0{index + 1}
                </span>
                <span className="text-fg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <div
          aria-hidden="true"
          className="border-border bg-bg text-accent font-display absolute top-1/2 left-1/2 z-10 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-xl font-semibold shadow-[var(--shadow-lift)] lg:flex"
        >
          ↔
        </div>

        <article className="scroll-reveal border-border bg-secondary-soft relative overflow-hidden rounded-[var(--radius-card)] border p-7 sm:p-9">
          <p className="text-secondary text-xs font-semibold tracking-[0.18em] uppercase">
            Technical
          </p>
          <h3 className="font-display text-fg mt-4 text-2xl font-semibold tracking-tight">
            Evidence, systems, and action
          </h3>
          <ul className="border-border mt-7">
            {bridge.technical.map((item, index) => (
              <li
                key={item}
                className="border-border flex items-center gap-4 border-t py-4 first:border-0 first:pt-0"
              >
                <span className="text-secondary font-display text-xs font-semibold">
                  0{index + 1}
                </span>
                <span className="text-fg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <dl className="border-border mt-8 grid border-y sm:grid-cols-3">
        {bridge.outcomes.map((outcome) => (
          <div
            key={outcome}
            className="border-border px-5 py-5 sm:border-l sm:first:border-l-0"
          >
            <dt className="text-fg-muted text-xs font-semibold tracking-[0.14em] uppercase">
              Shared outcome
            </dt>
            <dd className="font-display text-fg mt-2 font-semibold">{outcome}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
