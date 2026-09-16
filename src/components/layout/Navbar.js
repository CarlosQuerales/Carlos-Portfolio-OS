import Link from 'next/link';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Navbar() {
  return (
    <header className="border-border bg-bg/90 sticky top-0 z-40 border-b backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <span className="bg-accent text-accent-contrast font-display inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold">
            CQ
          </span>
          <span className="font-display text-fg group-hover:text-accent text-base font-semibold transition-colors">
            {SITE_NAME}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-fg-muted hover:bg-surface hover:text-fg rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
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
              className="border-border text-fg-muted flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-md border marker:content-[''] [&::-webkit-details-marker]:hidden"
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
              className="border-border bg-surface absolute top-12 right-0 z-50 flex w-48 flex-col gap-1 rounded-lg border p-2 shadow-lg"
            >
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-fg-muted hover:bg-bg hover:text-accent rounded-md px-3 py-2 text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </Container>
    </header>
  );
}
