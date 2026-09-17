import { Container } from '@/components/ui/Container';
import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants';
import { BrandMark } from '@/components/ui/BrandMark';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface/50 border-t">
      <Container className="grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="h-9 w-9" />
            <p className="font-display text-fg text-lg font-semibold">{SITE_NAME}</p>
          </div>
          <p className="text-fg-muted mt-2 max-w-md text-sm leading-relaxed">
            Customer success and technical support, connected by clear investigation,
            communication, and ownership.
          </p>
          <p className="text-fg-muted mt-5 text-xs">
            © {year} {SITE_NAME}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="border-border bg-surface/60 text-fg-muted hover:border-border-strong hover:bg-surface-raised hover:text-accent rounded-[var(--radius-pill)] border px-4 py-2 text-sm font-medium transition-colors"
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer' }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
