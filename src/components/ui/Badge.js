/**
 * @param {{ children: React.ReactNode, tone?: 'default' | 'accent' | 'muted' }} props
 */
export function Badge({ children, tone = 'default' }) {
  const toneClasses = {
    default: 'bg-surface-raised text-fg-muted border border-border',
    accent: 'bg-accent-soft text-accent border border-accent/20',
    muted: 'bg-transparent text-fg-muted border border-border/60',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
