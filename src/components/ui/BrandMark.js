import { useId } from 'react';
import { SITE_NAME } from '@/lib/constants';

function MarkSvg({ monochrome = false, className = '' }) {
  const gradientId = useId().replaceAll(':', '');
  const stroke = monochrome ? 'currentColor' : `url(#${gradientId})`;

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {!monochrome && (
        <defs>
          <linearGradient
            id={gradientId}
            x1="10"
            y1="10"
            x2="54"
            y2="54"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="var(--accent)" />
            <stop offset="0.52" stopColor="#68baf6" />
            <stop offset="1" stopColor="var(--secondary)" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M43.5 12.5A22.5 22.5 0 1 0 40.5 52.5"
        stroke={stroke}
        strokeWidth="9"
        strokeLinecap="square"
      />
      <path d="m32 34 15 13" stroke={stroke} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Precision Cut CQ identity system.
 * - mark: gradient primary mark
 * - lockup: primary mark with the Carlos Querales wordmark
 * - monochrome: one-color mark that inherits currentColor
 */
export function BrandMark({
  variant = 'mark',
  className = '',
  markClassName = 'h-10 w-10',
  labelClassName = '',
}) {
  const monochrome = variant === 'monochrome';

  if (variant === 'lockup') {
    return (
      <span className={`inline-flex shrink-0 items-center gap-3 ${className}`}>
        <MarkSvg className={markClassName} />
        <span
          className={`font-display text-fg text-base font-semibold transition-colors ${labelClassName}`}
        >
          {SITE_NAME}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <MarkSvg monochrome={monochrome} className="h-full w-full" />
    </span>
  );
}
