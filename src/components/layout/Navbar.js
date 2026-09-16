import Link from 'next/link';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NavLink } from '@/components/layout/NavLink';
import { BrandMark } from '@/components/ui/BrandMark';

export function Navbar() {
  return (
    <header className="border-border bg-bg/82 sticky top-0 z-40 border-b backdrop-blur-xl">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link
          href="/"
          aria-label={`${SITE_NAME} — Home`}
          className="group flex items-center gap-3 rounded-[var(--radius-control)]"
        >
          <BrandMark className="h-10 w-10 transition-transform duration-[var(--duration-standard)] group-hover:scale-[1.03] group-hover:-rotate-3" />
          <span className="font-display text-fg group-hover:text-accent text-base font-semibold transition-colors">
            {SITE_NAME}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="border-border bg-surface/55 hidden items-center gap-1 rounded-[var(--radius-pill)] border p-1 shadow-[var(--shadow-card)] md:flex"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile menu — a native <details>/<summary> disclosure instead of
              a JS-driven hamburger. It's keyboard-accessible and animation-free
              by default, and it needs no "use client" component: the whole
              Navbar stays a zero-JS Server Component. */}
          <details className="relative md:hidden">
            <summary
              aria-label="Open menu"
              className="border-border bg-surface/60 text-fg-muted hover:border-border-strong hover:text-fg flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-[var(--radius-control)] border transition-colors marker:content-[''] [&::-webkit-details-marker]:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </summary>
            <nav
              aria-label="Primary (mobile)"
              className="border-border bg-surface absolute top-12 right-0 z-50 flex w-52 flex-col gap-1 rounded-[var(--radius-card)] border p-2 shadow-[var(--shadow-lift)]"
            >
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} mobile />
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
