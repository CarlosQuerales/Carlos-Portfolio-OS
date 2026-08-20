/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} description
 * @property {('frontend'|'cse'|'solutions')[]} tags
 * @property {('shipped'|'in-progress'|'planned')} status
 * @property {string[]} technologies
 * @property {string} [repoUrl]
 * @property {string} [demoUrl]
 */

/** @type {Project[]} */
export const projects = [
  {
    slug: 'portfolio-os',
    title: 'Carlos Portfolio OS',
    summary:
      'A production portfolio built with Next.js and a content architecture designed to evolve without coupling pages to a single CMS.',
    description:
      'Carlos Portfolio OS is the site you are viewing. It uses the Next.js App Router, reusable UI components, centralized SEO helpers, and a service layer that keeps page components independent from the current content source. The result is a fast, maintainable foundation that can later connect to WordPress or other services without rewriting the presentation layer.',
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Netlify'],
    repoUrl: 'https://github.com/CarlosQuerales/Carlos-Portfolio-OS',
    demoUrl: 'https://carlosmqueralesporfolio.netlify.app/',
  },
];
