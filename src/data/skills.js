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
    category: 'Front-End',
    items: ['React', 'JavaScript', 'Next.js', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Back-End & Integrations',
    items: ['PHP', 'WordPress', 'REST APIs', 'Node.js'],
  },
  {
    category: 'Customer Success & Support',
    items: [
      'Technical Support',
      'IT Service Management (ITSM)',
      'Incident & Problem Management',
      'Stakeholder Management',
    ],
  },
  {
    category: 'Process & Collaboration',
    items: [
      'Agile',
      'QA',
      'Git & GitHub',
      'Product Collaboration',
      'Cross-team collaboration with .NET/C# engineering',
    ],
  },
];
