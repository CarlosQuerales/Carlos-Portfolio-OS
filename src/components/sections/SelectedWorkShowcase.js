import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { WorkVisual } from '@/components/sections/WorkVisual';

function WorkFacts({ problem, role, impact }) {
  return (
    <dl className="border-border mt-7 grid gap-px overflow-hidden border-y sm:grid-cols-3">
      {[
        ['Problem', problem],
        ['Role', role],
        ['Impact', impact],
      ].map(([label, value]) => (
        <div
          key={label}
          className="border-border py-4 sm:border-l sm:px-4 sm:first:border-l-0 sm:first:pl-0"
        >
          <dt className="text-fg-muted text-[0.65rem] font-semibold tracking-[0.16em] uppercase">
            {label}
          </dt>
          <dd className="text-fg mt-2 text-sm leading-relaxed">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * @param {{ projects: import('@/data/projects').Project[], caseStudies: import('@/data/case-studies').CaseStudy[] }} props
 */
export function SelectedWorkShowcase({ projects, caseStudies }) {
  const project = projects[0];
  const caseStudy = caseStudies[0];

  if (!project && !caseStudy) return null;

  return (
    <Section
      id="selected-work"
      className="border-border relative overflow-hidden border-y"
    >
      <div
        aria-hidden="true"
        className="font-display text-fg/[0.025] pointer-events-none absolute top-6 left-[-0.04em] text-[10rem] leading-none font-semibold tracking-[-0.08em] uppercase sm:text-[16rem] lg:text-[22rem]"
      >
        Work
      </div>

      <header className="scroll-reveal relative grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Selected work · 01—02
          </p>
          <h2 className="font-display text-fg mt-3 max-w-xl text-[length:var(--type-heading-2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]">
            Proof through products and technical judgment.
          </h2>
        </div>
        <p className="text-fg-muted max-w-2xl text-base leading-relaxed lg:justify-self-end lg:text-lg">
          Real work framed around the problem, the contribution, and the outcome.
        </p>
      </header>

      <div className="relative mt-14 space-y-20 lg:space-y-28">
        {project && (
          <article className="scroll-reveal grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
            <WorkVisual variant={project.visual} className="lg:col-span-7" />
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="text-accent font-mono text-sm font-semibold">01</span>
                <span className="bg-border-strong h-px flex-1" />
                <span className="text-fg-muted text-xs font-semibold tracking-[0.14em] uppercase">
                  Production project
                </span>
              </div>
              <h3 className="font-display text-fg mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                <Link href={`/projects/${project.slug}`} className="hover:text-accent">
                  {project.title}
                </Link>
              </h3>
              <p className="text-fg-muted mt-4 leading-relaxed">{project.summary}</p>
              <WorkFacts
                problem={project.challenge}
                role={project.role}
                impact={project.outcome}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
              <Button href={`/projects/${project.slug}`} className="mt-7">
                Explore project <span aria-hidden="true">→</span>
              </Button>
            </div>
          </article>
        )}

        {caseStudy && (
          <article className="scroll-reveal grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
            <WorkVisual variant={caseStudy.visual} className="lg:order-2 lg:col-span-7" />
            <div className="lg:order-1 lg:col-span-5">
              <div className="flex items-center gap-4">
                <span className="text-secondary font-mono text-sm font-semibold">02</span>
                <span className="bg-border-strong h-px flex-1" />
                <span className="text-fg-muted text-xs font-semibold tracking-[0.14em] uppercase">
                  Technical case study
                </span>
              </div>
              <h3 className="font-display text-fg mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="hover:text-accent"
                >
                  {caseStudy.title}
                </Link>
              </h3>
              <p className="text-fg-muted mt-4 leading-relaxed">{caseStudy.summary}</p>
              <WorkFacts
                problem={caseStudy.problem}
                role={caseStudy.role}
                impact={caseStudy.result}
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {caseStudy.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
              <Button href={`/case-studies/${caseStudy.slug}`} className="mt-7">
                Read case study <span aria-hidden="true">→</span>
              </Button>
            </div>
          </article>
        )}
      </div>

      <div className="border-border relative mt-16 flex flex-wrap gap-3 border-t pt-8">
        <Button href="/projects" variant="ghost">
          All projects
        </Button>
        <Button href="/case-studies" variant="ghost">
          All case studies
        </Button>
      </div>
    </Section>
  );
}
