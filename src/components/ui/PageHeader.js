/**
 * Shared editorial heading for internal pages.
 * @param {{ eyebrow: string, title: string, description: string }} props
 */
export function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="border-border relative overflow-hidden border-b pb-10 sm:pb-12">
      <div className="bg-accent absolute bottom-0 left-0 h-px w-24" />
      <p className="text-accent text-xs font-semibold tracking-[0.16em] uppercase">
        {eyebrow}
      </p>
      <h1 className="font-display text-fg mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] text-balance sm:text-5xl">
        {title}
      </h1>
      <p className="text-fg-muted mt-5 max-w-2xl text-lg leading-relaxed">
        {description}
      </p>
    </header>
  );
}
