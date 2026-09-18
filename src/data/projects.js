/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} description
 * @property {string} role
 * @property {string} challenge
 * @property {string} outcome
 * @property {string} approach
 * @property {'portfolio'} visual
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
    role: 'Product direction · Front-end architecture · Implementation',
    challenge:
      'Build a recruiter-facing portfolio that can evolve without coupling every page to a single content source.',
    outcome:
      'A responsive Next.js foundation with reusable components, centralized content, and consistent SEO across routes.',
    approach:
      'A reusable component system, centralized content layer, and progressive enhancement for motion and theme preferences.',
    visual: 'portfolio',
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Netlify'],
    repoUrl: 'https://github.com/CarlosQuerales/Carlos-Portfolio-OS',
    demoUrl: 'https://carlosmqueralesporfolio.netlify.app/',
  },
];
