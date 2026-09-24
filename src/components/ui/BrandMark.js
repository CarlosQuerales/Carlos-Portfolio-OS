/**
 * Geometric CQ monogram. The mark stays legible at favicon scale and uses
 * the shared brand gradient so it can travel across navigation and assets.
 */
export function BrandMark({ className = '' }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[0.8rem] bg-[image:var(--gradient-brand)] text-white shadow-[0_12px_30px_-16px_var(--accent)] ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 48 48" fill="none" className="h-[72%] w-[72%]">
        <path
          d="M22.5 12.5a12 12 0 1 0 0 23"
          stroke="currentColor"
          strokeWidth="4.25"
          strokeLinecap="round"
        />
        <circle cx="29" cy="24" r="10.5" stroke="currentColor" strokeWidth="4.25" />
        <path
          d="m34.5 32.5 4.5 4.5"
          stroke="currentColor"
          strokeWidth="4.25"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
