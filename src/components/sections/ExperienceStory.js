import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

/**
 * @param {{ entries: import('@/data/experience').ExperienceEntry[], compact?: boolean }} props
 */
export function ExperienceStory({ entries, compact = false }) {
  return (
    <Section
      id="experience-story"
      className={`border-border relative overflow-hidden border-b ${compact ? '' : 'pt-16'}`}
    >
      <div
        aria-hidden="true"
        className="font-display text-fg/[0.025] pointer-events-none absolute top-8 left-[-0.08em] text-[8rem] leading-none font-semibold tracking-[-0.07em] uppercase sm:text-[13rem] lg:text-[18rem]"
      >
        Experience
      </div>

      <header className="scroll-reveal relative grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Selected experience · 01—03
          </p>
          <h2 className="font-display text-fg mt-3 max-w-xl text-[length:var(--type-heading-2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]">
            Customer context meets technical ownership.
          </h2>
        </div>
        <p className="text-fg-muted max-w-2xl text-base leading-relaxed lg:justify-self-end lg:text-lg">
          A progression from hands-on support to customer success, service delivery, and
          cross-functional leadership.
        </p>
      </header>

      <ol className="relative mt-14">
        {entries.map((entry, index) => {
          const alternate = index % 2 === 1;
          const highlights = compact ? entry.highlights.slice(0, 2) : entry.highlights;

          return (
            <li
              key={entry.id}
              className="scroll-reveal border-border grid gap-8 border-t py-12 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-16"
            >
              <div
                className={`border-border bg-surface-soft relative min-h-72 overflow-hidden rounded-[var(--radius-card)] border p-7 shadow-[var(--shadow-card)] lg:col-span-5 lg:min-h-80 ${alternate ? 'lg:order-2' : ''}`}
              >
                <div className="bg-accent/10 absolute -right-16 -bottom-20 h-64 w-64 rounded-full blur-3xl" />
                <p className="text-accent/15 absolute top-1 right-4 font-mono text-[8rem] leading-none font-semibold tracking-[-0.12em] sm:text-[10rem]">
                  {entry.chapter}
                </p>
                <div className="relative flex h-full min-h-56 flex-col justify-between">
                  <div>
                    <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
                      Chapter {entry.chapter}
                    </p>
                    <p className="font-display text-fg mt-4 max-w-xs text-2xl font-semibold tracking-tight sm:text-3xl">
                      {entry.theme}
                    </p>
                  </div>
                  <div>
                    <p className="text-fg-muted text-xs font-semibold tracking-[0.12em] uppercase">
                      Key impact
                    </p>
                    <p className="font-display text-fg mt-2 max-w-sm text-lg font-semibold">
                      {entry.impact}
                    </p>
                  </div>
                </div>
              </div>

              <article
                className={`relative lg:col-span-7 ${alternate ? 'lg:order-1 lg:pl-8' : 'lg:pr-8'}`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-accent text-sm font-semibold">{entry.period}</p>
                  <span className="bg-border-strong h-px w-8" aria-hidden="true" />
                  <p className="text-fg-muted text-sm">{entry.organization}</p>
                </div>
                <h3 className="font-display text-fg mt-4 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                  {entry.role}
                </h3>
                <p className="text-fg-muted mt-4 max-w-2xl text-base leading-relaxed">
                  {entry.summary}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-fg flex gap-3 text-sm leading-relaxed"
                    >
                      <span
                        className="bg-accent mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        aria-hidden="true"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.technologies.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ol>

      {compact && (
        <div className="mt-2 flex justify-center">
          <Button href="/experience" variant="ghost">
            View full experience
          </Button>
        </div>
      )}
    </Section>
  );
}
