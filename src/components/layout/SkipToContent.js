export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="focus:bg-accent focus:text-accent-contrast sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-[var(--radius-control)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-[var(--shadow-lift)]"
    >
      Skip to content
    </a>
  );
}
