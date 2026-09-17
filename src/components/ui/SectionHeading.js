/**
 * @param {{ eyebrow: string, title: string, description: string, align?: 'left' | 'center' }} props
 */
export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center' ? 'mx-auto items-center text-center' : 'items-start';

  return (
    <header className={`flex max-w-3xl flex-col ${alignment}`}>
      <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-fg mt-3 text-[length:var(--type-heading-2)] leading-[var(--leading-heading)] font-semibold tracking-[var(--tracking-heading)]">
        {title}
      </h2>
      <p className="text-fg-muted mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
        {description}
      </p>
    </header>
  );
}
