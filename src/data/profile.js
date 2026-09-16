/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} role
 * @property {string} location
 * @property {string} availability
 * @property {string} heroStatement
 * @property {string} summary
 * @property {string[]} focusAreas
 * @property {{ value: string, label: string }[]} proofPoints
 */

/** @type {Profile} */
export const profile = {
  name: 'Carlos Querales',
  role: 'Front-End Developer & Customer Success Engineer',
  location: 'Venezuela · Open to remote work',
  availability: 'Open to remote opportunities',
  heroStatement: 'I turn complex web issues into clear products and customer outcomes.',
  summary:
    'Front-end developer and customer success engineer with 10+ years across technical support, web delivery, and WordPress. I bridge customers and engineering by investigating issues, shaping clear next steps, and building maintainable interfaces.',
  focusAreas: [
    'Front-End Development (React, JavaScript)',
    'Customer Success Engineering',
    'Technical Solutions & Integrations',
    'WordPress & PHP',
  ],
  proofPoints: [
    { value: '10+', label: 'Years in customer-facing technical work' },
    { value: 'React · Next.js', label: 'Modern front-end delivery' },
    { value: 'WordPress · APIs', label: 'Web platforms and integrations' },
  ],
};
