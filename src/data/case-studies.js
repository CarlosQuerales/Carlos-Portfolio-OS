/**
 * @typedef {Object} CaseStudy
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} focus
 * @property {string} problem
 * @property {string} approach
 * @property {string} result
 * @property {string} role
 * @property {'diagnostics'} visual
 * @property {string[]} technologies
 */

/** @type {CaseStudy[]} */
export const caseStudies = [
  {
    slug: 'wordpress-performance-optimization',
    title: 'WordPress Performance Optimization',
    summary:
      'A practical workflow for diagnosing WordPress performance issues without relying on unverified claims.',
    focus: 'Diagnosis · Prioritization · Clear communication',
    problem:
      'WordPress performance problems rarely come from one source. Themes, plugins, media, third-party scripts, caching, and hosting can all affect the visitor experience, so changing components without a baseline can create risk without proving improvement.',
    approach:
      'Start with a repeatable audit: capture Lighthouse and Core Web Vitals observations, review the request waterfall, identify the heaviest assets and scripts, and inspect the active plugin stack. Prioritize reversible changes such as image delivery, asset loading, caching, and removing avoidable work, then test each change against the same pages and conditions.',
    result:
      'The outcome is a documented optimization process that connects technical findings to user impact and gives teams a safer way to prioritize fixes. Client-specific measurements are intentionally not published; no performance numbers are claimed without a reproducible baseline.',
    role: 'Technical investigation · prioritization · customer communication',
    visual: 'diagnostics',
    technologies: ['WordPress', 'WP-CLI', 'Caching', 'Lighthouse'],
  },
];
