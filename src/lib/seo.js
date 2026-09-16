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
export function buildMetadata({ title, description, path = '', image }) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`;

  const openGraph = {
    title: fullTitle,
    description,
    url,
    siteName: SITE_NAME,
    type: 'website',
    ...(image ? { images: [{ url: image }] } : {}),
  };

  const twitter = {
    card: image ? 'summary_large_image' : 'summary',
    title: fullTitle,
    description,
    ...(image ? { images: [image] } : {}),
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph,
    twitter,
  };
}
