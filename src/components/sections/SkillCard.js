import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

/**
 * @param {{ group: import('@/data/skills').SkillGroup }} props
 */
export function SkillCard({ group }) {
  return (
    <Card>
      <h3 className="font-display text-fg-muted mb-4 text-sm font-semibold tracking-wide uppercase">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </Card>
  );
}
