import { SITE_NAME, SITE_URL } from '@/lib/constants';

/**
 * @typedef {Object} PageSeoInput
 * @property {string} title
 * @property {string} description
 * @property {string} [path] - route path, e.g. '/projects/ticket-dashboard'
 * @property {string} [image] - absolute or root-relative OG image path
 */

/**
 * Builds a Next.js Metadata object with sane defaults, so every page.js
 * writes one line instead of re-deriving OpenGraph/Twitter card boilerplate.
 * @param {PageSeoInput} input
 * @returns {import('next').Metadata}
 */
export function buildMetadata({
  title,
  description,
  path = '',
  image = '/og-default.png',
}) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
