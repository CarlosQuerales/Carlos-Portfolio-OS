/**
 * Generic surface. ProjectCard/CaseStudyCard compose this rather than
 * duplicating border/radius/padding styles independently.
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Card({ children, className = '' }) {
  return (
    <div
      className={`border-border hover:border-border-strong rounded-[var(--radius-card)] border bg-[image:var(--gradient-surface)] p-6 shadow-[var(--shadow-card)] transition-[border-color,transform,box-shadow] duration-[var(--duration-standard)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] ${className}`}
    >
      {children}
    </div>
  );
}
