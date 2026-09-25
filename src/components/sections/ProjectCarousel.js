'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { ProjectScreenshot } from '@/components/sections/ProjectScreenshot';

/** @param {{ projects: import('@/data/projects').Project[] }} props */
export function ProjectCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const project = projects[activeIndex];

  if (!project) return null;

  const select = (index) => {
    const nextIndex = (index + projects.length) % projects.length;
    setActiveIndex(nextIndex);
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      select(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      select(activeIndex + 1);
    }
    if (event.key === 'Home') {
      event.preventDefault();
      select(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      select(projects.length - 1);
    }
  };

  const onTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(distance) < 48) return;
    select(activeIndex + (distance < 0 ? 1 : -1));
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured web projects"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX;
      }}
      onTouchEnd={onTouchEnd}
      className="border-border bg-surface/65 focus-visible:ring-accent relative overflow-hidden rounded-[2rem] border p-4 shadow-[var(--shadow-lift)] outline-none focus-visible:ring-2 sm:p-6 lg:p-8"
    >
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Project {activeIndex + 1} of {projects.length}: {project.title}
      </p>

      <article className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="lg:col-span-7">
          <ProjectScreenshot
            image={project.images[0]}
            priority={activeIndex === 0}
            sizes="(min-width: 1024px) 52vw, 92vw"
          />
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="text-accent font-mono text-sm font-semibold">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <span className="bg-border-strong h-px flex-1" />
            <span className="text-fg-muted text-xs font-semibold tracking-[0.14em] uppercase">
              {project.sector}
            </span>
          </div>

          <h3 className="font-display text-fg mt-6 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            {project.title}
          </h3>
          <p className="text-fg-muted mt-4 text-base leading-relaxed sm:text-lg">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((capability) => (
              <Badge key={capability}>{capability}</Badge>
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="text-accent-contrast mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold shadow-[0_14px_34px_-18px_var(--accent)] transition hover:-translate-y-0.5 hover:brightness-110"
          >
            View case study <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>

      <div className="border-border mt-7 flex flex-col gap-5 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2" aria-label="Choose project">
          {projects.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`Show ${item.title}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => select(index)}
              className={`h-2.5 rounded-full transition-[width,background-color] ${
                index === activeIndex
                  ? 'bg-accent w-8'
                  : 'bg-border-strong hover:bg-fg-muted w-2.5'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-fg-muted mr-1 font-mono text-xs">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(projects.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={() => select(activeIndex - 1)}
            aria-label="Previous project"
            className="border-border text-fg hover:border-accent hover:text-accent flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            onClick={() => select(activeIndex + 1)}
            aria-label="Next project"
            className="border-border text-fg hover:border-accent hover:text-accent flex h-11 w-11 items-center justify-center rounded-full border transition-colors"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
