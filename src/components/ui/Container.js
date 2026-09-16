/**
 * Max-width + horizontal padding wrapper. Every section body should be
 * wrapped in this instead of guessing padding per-page.
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Container({ children, className = '' }) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--content-width)] px-[var(--space-gutter)] ${className}`}
    >
      {children}
    </div>
  );
}
