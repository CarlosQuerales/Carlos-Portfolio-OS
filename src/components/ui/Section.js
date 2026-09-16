import { Container } from '@/components/ui/Container';

/**
 * Consistent vertical rhythm between page sections. This one component is
 * what keeps spacing uniform site-wide instead of re-guessed per page.
 * @param {{
 *   children: React.ReactNode,
 *   className?: string,
 *   as?: string,
 *   id?: string
 * }} props
 */
export function Section({ children, className = '', as: Tag = 'section', id }) {
  return (
    <Tag id={id} className={`py-[var(--space-section)] ${className}`}>
      <Container>{children}</Container>
    </Tag>
  );
}
