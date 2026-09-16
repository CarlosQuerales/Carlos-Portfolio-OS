/**
 * Max-width + horizontal padding wrapper. Every section body should be
 * wrapped in this instead of guessing padding per-page.
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}
