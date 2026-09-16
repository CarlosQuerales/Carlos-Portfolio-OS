/**
 * Generic surface. ProjectCard/CaseStudyCard compose this rather than
 * duplicating border/radius/padding styles independently.
 * @param {{ children: React.ReactNode, className?: string }} props
 */
export function Card({ children, className = '' }) {
  return (
    <div
      className={`border-border bg-surface hover:border-accent/40 rounded-2xl border p-6 shadow-[0_18px_60px_-36px_rgba(5,26,32,0.45)] transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-34px_rgba(5,26,32,0.55)] ${className}`}
    >
      {children}
    </div>
  );
}
