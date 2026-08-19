/**
 * Generic surface. ProjectCard/CaseStudyCard compose this rather than
 * duplicating border/radius/padding styles independently.
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Card({ children, className = '' }) {
  return (
    <div
      className={`border-border bg-surface hover:border-accent/40 rounded-lg border p-6 transition-colors ${className}`}
    >
      {children}
    </div>
  );
}
