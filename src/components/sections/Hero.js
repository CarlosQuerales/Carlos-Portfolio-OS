import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

/**
 * @param {{ profile: import('@/data/profile').Profile }} props
 */
export function Hero({ profile }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.75fr)] lg:items-center lg:gap-16">
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">{profile.availability}</Badge>
          <span className="text-fg-muted text-sm">{profile.location}</span>
        </div>

        <p className="font-display text-accent text-sm font-semibold tracking-[0.14em] uppercase">
          {profile.role}
        </p>

        <h1 className="font-display text-fg max-w-4xl text-4xl font-semibold tracking-[-0.045em] text-balance sm:text-5xl sm:leading-[1.02] lg:text-6xl">
          {profile.heroStatementLead}{' '}
          <span className="text-accent">{profile.heroStatementAccent}</span>
        </h1>

        <p className="text-fg-muted max-w-2xl text-lg leading-relaxed">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button href="#customer-impact">See customer impact</Button>
          <Button href="/contact" variant="ghost">
            Start a conversation
          </Button>
        </div>

        <a
          href={profile.resumePath}
          download
          className="text-fg-muted hover:text-accent decoration-border-strong text-sm font-medium underline underline-offset-4 transition-colors"
        >
          Download résumé (PDF)
        </a>
      </div>

      <figure className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
        <div className="absolute -inset-3 rounded-[2rem] bg-[image:var(--gradient-brand)] opacity-30 blur-xl" />
        <div className="border-border bg-surface relative overflow-hidden rounded-[2rem] border p-2 shadow-[var(--shadow-lift)]">
          <Image
            src="/images/carlos-querales-profile.jpg"
            alt="Carlos Querales, Customer Success Engineer and Technical Support professional"
            width={896}
            height={1200}
            sizes="(min-width: 1024px) 35vw, (min-width: 640px) 28rem, 90vw"
            priority
            className="aspect-[4/5] w-full rounded-[1.55rem] object-cover object-top"
          />
          <figcaption className="border-border bg-bg/90 absolute right-5 bottom-5 left-5 rounded-2xl border p-4 backdrop-blur-md">
            <p className="font-display text-fg font-semibold">
              Technical depth. Human clarity.
            </p>
            <p className="text-fg-muted mt-1 text-sm">
              Bilingual customer support · English & Spanish
            </p>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
