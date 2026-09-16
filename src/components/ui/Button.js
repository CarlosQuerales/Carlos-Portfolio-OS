import Link from 'next/link';

const VARIANT_CLASSES = {
  primary:
    'bg-accent text-accent-contrast shadow-[0_10px_28px_-14px_var(--accent)] hover:bg-accent-hover hover:-translate-y-0.5',
  ghost:
    'border border-border bg-surface/70 text-fg hover:border-accent hover:text-accent hover:-translate-y-0.5',
};

/**
 * @param {{
 *   children: React.ReactNode,
 *   href?: string,
 *   variant?: 'primary' | 'ghost',
 *   className?: string,
 *   [key: string]: unknown
 * }} props
 */
export function Button({ children, href, variant = 'primary', className = '', ...rest }) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
