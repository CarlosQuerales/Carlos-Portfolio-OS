import Link from 'next/link';

const VARIANT_CLASSES = {
  primary:
    'bg-[image:var(--gradient-brand)] text-white shadow-[0_14px_34px_-18px_var(--accent)] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_-18px_var(--accent)]',
  ghost:
    'border border-border bg-surface/70 text-fg shadow-[var(--shadow-card)] hover:border-border-strong hover:bg-surface-raised hover:text-accent hover:-translate-y-0.5',
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
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-pill)] px-5 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-[background-color,border-color,color,filter,transform,box-shadow] duration-[var(--duration-standard)] disabled:pointer-events-none disabled:opacity-55 ${VARIANT_CLASSES[variant]} ${className}`;

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
