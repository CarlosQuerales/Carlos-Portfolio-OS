'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * @param {{ href: string, label: string, mobile?: boolean }} props
 */
export function NavLink({ href, label, mobile = false }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={
        mobile
          ? `rounded-[var(--radius-control)] px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-accent-soft text-accent'
                : 'text-fg-muted hover:bg-surface-raised hover:text-fg'
            }`
          : `rounded-[var(--radius-pill)] px-4 py-2 text-sm font-medium transition-[background-color,color,box-shadow] ${
              isActive
                ? 'bg-surface-raised text-fg shadow-[var(--shadow-card)]'
                : 'text-fg-muted hover:bg-surface-raised/70 hover:text-fg'
            }`
      }
    >
      {label}
    </Link>
  );
}
