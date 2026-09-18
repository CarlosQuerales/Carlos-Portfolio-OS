import { Section } from '@/components/ui/Section';
import { CountUp } from '@/components/ui/CountUp';

const LAYOUT_CLASSES = [
  'lg:col-span-5 lg:row-span-2 lg:min-h-[30rem] lg:justify-between',
  'lg:col-span-7 lg:min-h-56 lg:flex-row lg:items-end lg:justify-between lg:gap-10',
  'lg:col-span-3 lg:min-h-56',
  'lg:col-span-4 lg:min-h-56',
];

export function CustomerImpact({ impact }) {
  return (
    <Section
      id="customer-impact"
      className="border-border bg-surface/30 relative scroll-mt-24 overflow-hidden border-y"
    >
      <div
        aria-hidden="true"
        className="font-display text-fg/[0.025] pointer-events-none absolute top-4 right-[-0.08em] text-[9rem] leading-none font-semibold tracking-[-0.08em] uppercase sm:text-[14rem] lg:text-[20rem]"
      >
        Impact
      </div>

      <header className="scroll-reveal relative grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <div>
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Customer impact
          </p>
          <h2 className="font-display text-fg mt-3 text-[length:var(--type-heading-2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]">
            Support measured by outcomes.
          </h2>
        </div>
        <p className="text-fg-muted max-w-2xl text-base leading-relaxed lg:justify-self-end lg:text-lg">
          Clear triage, technical ownership, and consistent follow-through across global
          customer environments.
        </p>
      </header>

      <dl className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
        {impact.map((item, index) => (
          <div
            key={item.label}
            style={{ '--reveal-delay': `${index * 90}ms` }}
            className={`scroll-reveal border-border bg-bg/70 group relative flex min-h-52 flex-col overflow-hidden rounded-[var(--radius-card)] border p-6 shadow-[var(--shadow-card)] sm:p-8 ${LAYOUT_CLASSES[index]}`}
          >
            <div className="bg-accent/8 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125" />
            <div className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)]" />

            <dt
              className={`font-display text-accent relative leading-none font-semibold tracking-[-0.06em] ${index === 0 ? 'text-8xl sm:text-9xl lg:text-[10rem]' : 'text-6xl sm:text-7xl'}`}
            >
              <CountUp value={item.value} prefix={item.prefix} suffix={item.suffix} />
            </dt>

            <div className={`relative ${index === 1 ? 'lg:max-w-xs' : ''}`}>
              <dd className="font-display text-fg mt-6 text-lg font-semibold sm:text-xl">
                {item.label}
              </dd>
              <p className="text-fg-muted mt-2 max-w-sm text-sm leading-relaxed">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </dl>
    </Section>
  );
}
