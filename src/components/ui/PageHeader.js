/**
 * Shared editorial heading for internal pages.
 * @param {{ eyebrow: string, title: string, description: string }} props
 */
export function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="border-border relative overflow-hidden border-b pb-10 sm:pb-12">
      <div className="absolute bottom-0 left-0 h-0.5 w-28 bg-[image:var(--gradient-brand)]" />
      <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
        {eyebrow}
      </p>
      <h1 className="font-display text-fg mt-4 max-w-3xl text-[length:var(--type-heading-1)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)] text-balance">
        {title}
      </h1>
      <p className="text-fg-muted mt-5 max-w-2xl text-lg leading-relaxed">
        {description}
      </p>
    </header>
  );
}
