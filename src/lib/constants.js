/**
 * Centralized constants. Anything that would otherwise be a magic string
 * scattered across components lives here instead — one place to update
 * the site name, nav structure, or social links.
 */

export const SITE_NAME = 'Carlos Querales';

export const SITE_TAGLINE =
  'Front-End Developer & Customer Success Engineer — I sit between engineering and customer outcomes.';

export const SITE_URL = 'https://carlosmqueralesporfolio.netlify.app';

/**
 * Only routes that are actually built ship in the nav.
 * Blog / Resources / Ask Carlos are intentionally absent until they exist —
 * a nav link to nothing is worse than no nav link.
 */
export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Projects', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/CarlosQuerales' },
  { label: 'Email', href: 'mailto:camelsouth@gmail.com' },
];
