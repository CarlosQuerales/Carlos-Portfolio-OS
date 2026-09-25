import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { ProjectCarousel } from '@/components/sections/ProjectCarousel';
import { ProjectScreenshot } from '@/components/sections/ProjectScreenshot';
import { WorkVisual } from '@/components/sections/WorkVisual';

/** @param {{ projects: import('@/data/projects').Project[] }} props */
export function SelectedWorkShowcase({ projects }) {
  const featuredProjects = projects.filter((project) => project.featured);
  const archiveProjects = projects.filter((project) => !project.featured);

  if (!projects.length) return null;

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
            Selected web projects · 01—08
          </p>
          <h2 className="font-display text-fg mt-3 max-w-xl text-[length:var(--type-heading-2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]">
            Digital experiences built with clarity and character.
          </h2>
        </div>
        <p className="text-fg-muted max-w-2xl text-base leading-relaxed lg:justify-self-end lg:text-lg">
          Selected nonprofit, advocacy, education, and cultural projects delivered with
          Elevation Web—shown through real interfaces rather than abstract placeholders.
        </p>
      </header>

      <div className="scroll-reveal relative mt-12">
        <ProjectCarousel projects={featuredProjects} />
      </div>

      {archiveProjects.length > 0 && (
        <div className="relative mt-16">
          <div className="mb-7 flex items-end justify-between gap-5">
            <div>
              <p className="text-secondary text-xs font-semibold tracking-[0.16em] uppercase">
                More selected work
              </p>
              <h3 className="font-display text-fg mt-2 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                Additional delivery and engineering work.
              </h3>
            </div>
            <span className="text-fg-muted hidden font-mono text-xs sm:block">
              {String(archiveProjects.length).padStart(2, '0')} projects
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {archiveProjects.map((project) => (
              <article
                key={project.slug}
                className="group border-border bg-surface/70 hover:border-border-strong overflow-hidden rounded-3xl border transition-[border-color,transform,box-shadow] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
              >
                {project.images?.[0] ? (
                  <ProjectScreenshot
                    image={project.images[0]}
                    className="rounded-none border-0 border-b"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                ) : (
                  <WorkVisual
                    variant={project.visual}
                    className="min-h-0 rounded-none border-0 border-b"
                  />
                )}
                <div className="p-6">
                  <p className="text-accent text-[0.65rem] font-semibold tracking-[0.14em] uppercase">
                    {project.sector}
                  </p>
                  <h4 className="font-display text-fg mt-2 text-xl font-semibold">
                    <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                  </h4>
                  <p className="text-fg-muted mt-3 text-sm leading-relaxed">
                    {project.summary}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-accent mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                  >
                    Explore project
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      <div className="border-border relative mt-12 flex flex-wrap gap-3 border-t pt-8">
        <Button href="/projects" variant="ghost">
          View all projects
        </Button>
        <Button href="/case-studies" variant="ghost">
          Technical case studies
        </Button>
      </div>
    </Section>
  );
}
