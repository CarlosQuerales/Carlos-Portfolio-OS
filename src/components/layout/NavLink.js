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
          ? `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-accent-soft text-accent'
                : 'text-fg-muted hover:bg-bg hover:text-fg'
            }`
          : `rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color,box-shadow] ${
              isActive
                ? 'bg-surface text-fg shadow-sm'
                : 'text-fg-muted hover:bg-surface/60 hover:text-fg'
            }`
      }
    >
      {label}
    </Link>
  );
}
