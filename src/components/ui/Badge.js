/**
 * @param {{ children: React.ReactNode, tone?: 'default' | 'accent' | 'muted' }} props
 */
export function Badge({ children, tone = 'default' }) {
  const toneClasses = {
    default: 'bg-surface text-fg-muted border border-border',
    accent: 'bg-accent/10 text-accent border border-accent/20',
    muted: 'bg-transparent text-fg-muted border border-border/60',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
