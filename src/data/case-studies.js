/**
 * @typedef {Object} CaseStudy
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} problem
 * @property {string} approach
 * @property {string} result - must contain a real number when you fill this in
 * @property {string[]} technologies
 */

// TODO(carlos): these map to the two flagship case studies from the roadmap
// (WordPress performance, HubSpot/WordPress sync). Fill in `result` with a
// real before/after metric — that single number does more hiring work than
// the rest of the paragraph combined.

/** @type {CaseStudy[]} */
export const caseStudies = [
  {
    slug: 'wordpress-performance-optimization',
    title: 'WordPress Performance Optimization',
    summary:
      'Reducing load time and improving Core Web Vitals on a production WordPress site.',
    problem:
      'Describe the starting state: what was slow, what was the business impact (bounce rate, support load, etc.).',
    approach:
      'Describe what you changed: caching strategy, image optimization, query optimization, plugin audit — whatever was real.',
    result:
      'TODO: real before/after numbers. e.g. "Reduced LCP from 4.2s to 1.6s; Lighthouse performance score from 54 to 96."',
    technologies: ['WordPress', 'WP-CLI', 'Caching', 'Lighthouse'],
  },
  {
    slug: 'hubspot-wordpress-sync',
    title: 'HubSpot ↔ WordPress Integration',
    summary: 'Building a reliable sync between a CRM and a WordPress-based site.',
    problem:
      'Describe the integration gap and its cost — manual work, data drift, delays.',
    approach:
      'Describe the webhook/API approach, error handling, and how you validated it.',
    result:
      'TODO: real numbers — hours saved per week, error rate, data freshness improvement.',
    technologies: ['HubSpot API', 'WordPress REST API', 'Webhooks'],
  },
];
