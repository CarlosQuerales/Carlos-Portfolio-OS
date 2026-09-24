'use client';

import { useTheme } from '@/hooks/useTheme';

export function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="border-border bg-surface/60 text-fg-muted hover:border-border-strong hover:bg-surface-raised hover:text-accent inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-control)] border transition-[background-color,border-color,color,transform] duration-[var(--duration-fast)] hover:-translate-y-0.5"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
