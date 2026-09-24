/**
 * @param {{ children: React.ReactNode, tone?: 'default' | 'accent' | 'muted' }} props
 */
export function Badge({ children, tone = 'default' }) {
  const toneClasses = {
    default: 'bg-surface-raised text-fg-muted border border-border',
    accent: 'bg-accent-soft text-accent border border-accent/25',
    muted: 'bg-secondary-soft text-secondary border border-secondary/20',
  };

  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-pill)] px-3 py-1.5 text-xs font-semibold tracking-[0.01em] ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
