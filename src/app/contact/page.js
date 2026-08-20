import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <h1 className="font-display text-fg text-3xl font-semibold sm:text-4xl">Contact</h1>
      <p className="text-fg-muted mt-4 max-w-xl text-lg leading-relaxed">
        Open to remote Front-End Developer, Customer Success Engineer, and Technical
        Solutions Engineer roles.
      </p>

      <div className="mt-8">
        <Button href="mailto:camelsouth@gmail.com">Email Carlos</Button>
      </div>
    </Section>
  );
}
