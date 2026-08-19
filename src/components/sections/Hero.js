import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

/**
 * @param {{ profile: import('@/data/profile').Profile }} props
 */
export function Hero({ profile }) {
  return (
    <div className="flex flex-col gap-6">
      <Badge tone="accent">{profile.role}</Badge>

      <h1 className="font-display text-fg max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        {profile.heroStatement}
      </h1>

      <p className="text-fg-muted max-w-2xl text-lg leading-relaxed">{profile.summary}</p>

      <div className="flex flex-wrap gap-3 pt-2">
        <Button href="/projects">View projects</Button>
        <Button href="/contact" variant="ghost">
          Get in touch
        </Button>
      </div>
    </div>
  );
}
