/**
 * @typedef {Object} SkillGroup
 * @property {string} category
 * @property {string[]} items
 */

// TODO(carlos): adjust groupings/levels to match your real day-to-day fluency.
// Only list what you can defend in a live technical conversation.

/** @type {SkillGroup[]} */
export const skillGroups = [
  {
    category: 'Customer Success & Service Delivery',
    items: [
      'Technical Support',
      'Incident & Problem Management',
      'ITIL Practices',
      'SLA & KPI Management',
      'Stakeholder Communication',
    ],
  },
  {
    category: 'Web Platforms & Integrations',
    items: ['WordPress', 'WooCommerce', 'REST APIs', 'PHP', 'MySQL', 'Payments & CRM'],
  },
  {
    category: 'Technical Delivery',
    items: ['JavaScript', 'React', 'Next.js', 'Git & GitHub', 'QA', 'Browser DevTools'],
  },
  {
    category: 'Leadership & Collaboration',
    items: [
      'Team Leadership',
      'Cross-functional Coordination',
      'Product Collaboration',
      'Agile Delivery',
      'Release Validation',
    ],
  },
];
