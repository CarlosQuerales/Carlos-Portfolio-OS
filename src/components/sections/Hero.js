import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

/**
 * @param {{ profile: import('@/data/profile').Profile }} props
 */
export function Hero({ profile }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(17rem,0.65fr)] lg:items-end lg:gap-16">
      <div className="flex flex-col items-start gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <Badge tone="accent">{profile.availability}</Badge>
          <span className="text-fg-muted text-sm">{profile.location}</span>
        </div>

        <p className="font-display text-accent text-sm font-semibold tracking-[0.14em] uppercase">
          {profile.role}
        </p>

        <h1 className="font-display text-fg max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-6xl sm:leading-[1.02]">
          {profile.heroStatement}
        </h1>

        <p className="text-fg-muted max-w-2xl text-lg leading-relaxed">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button href="/projects">Explore selected work</Button>
          <Button href="mailto:camelsouth@gmail.com" variant="ghost">
            Email Carlos
          </Button>
        </div>
      </div>

      <aside className="border-border bg-surface/60 relative overflow-hidden rounded-2xl border p-6 sm:p-7">
        <div className="bg-accent absolute top-0 left-0 h-1 w-20" />
        <p className="text-fg-muted text-xs font-semibold tracking-[0.14em] uppercase">
          What I bring
        </p>
        <ul className="mt-5 space-y-4">
          {profile.focusAreas.slice(0, 3).map((area, index) => (
            <li
              key={area}
              className="border-border flex gap-4 border-t pt-4 first:border-0 first:pt-0"
            >
              <span className="text-accent font-display text-sm font-semibold">
                0{index + 1}
              </span>
              <span className="text-fg text-sm leading-relaxed font-medium">{area}</span>
            </li>
          ))}
        </ul>
      </aside>

      <dl className="border-border bg-border grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3 lg:col-span-2">
        {profile.proofPoints.map((point) => (
          <div key={point.label} className="bg-bg px-5 py-5 sm:px-6">
            <dt className="font-display text-fg text-lg font-semibold">{point.value}</dt>
            <dd className="text-fg-muted mt-1 text-sm leading-snug">{point.label}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
