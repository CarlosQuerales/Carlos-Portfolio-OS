import { Container } from '@/components/ui/Container';
import { SITE_NAME, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <Container className="text-fg-muted flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
        <p>
          © {year} {SITE_NAME}. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-accent transition-colors"
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
