import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

/**
 * @param {{ group: import('@/data/skills').SkillGroup, index: number }} props
 */
export function SkillCard({ group, index }) {
  return (
    <Card className="relative overflow-hidden">
      <span className="text-accent/15 font-display absolute top-2 right-5 text-6xl font-semibold">
        0{index + 1}
      </span>
      <h3 className="font-display text-fg relative mb-5 text-lg font-semibold">
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
