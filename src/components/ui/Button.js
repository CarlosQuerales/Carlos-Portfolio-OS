import Link from 'next/link';

const VARIANT_CLASSES = {
  primary: 'bg-accent text-accent-contrast hover:bg-accent-hover',
  ghost: 'border border-border text-fg hover:border-accent hover:text-accent',
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${VARIANT_CLASSES[variant]} ${className}`;

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
