import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { PageHeader } from '@/components/ui/PageHeader';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact',
  description: 'Get in touch.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <PageHeader
        eyebrow="Start a conversation"
        title="Let's connect"
        description="I'm open to remote Front-End Developer, Customer Success Engineer, and Technical Solutions Engineer roles. If you're hiring for work that connects customers, product, and engineering, let's talk."
      />

      <div className="border-border bg-surface mt-10 flex flex-col items-start gap-5 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="font-display text-fg text-xl font-semibold">Ready to talk?</p>
          <p className="text-fg-muted mt-1 text-sm">
            Email is the fastest way to reach me.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="mailto:camelsouth@gmail.com">Email Carlos</Button>
          <Button href="https://github.com/CarlosQuerales" variant="ghost">
            View GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
}
