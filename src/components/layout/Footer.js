import { Container } from '@/components/ui/Container';
import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-surface/50 border-t">
      <Container className="grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-display text-fg text-lg font-semibold">{SITE_NAME}</p>
          <p className="text-fg-muted mt-2 max-w-md text-sm leading-relaxed">
            Front-end development and customer success engineering, connected by clear
            technical communication.
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
              className="border-border text-fg-muted hover:border-accent hover:text-accent rounded-full border px-4 py-2 text-sm font-medium transition-colors"
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
