/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} role
 * @property {string} location
 * @property {string} availability
 * @property {string} serviceLine
 * @property {string} positioning
 * @property {string} summary
 * @property {{ value: string, label: string }[]} signals
 * @property {string[]} focusAreas
 * @property {string} resumePath
 */

/** @type {Profile} */
export const profile = {
  name: 'Carlos M. Querales Daza',
  role: 'Customer Success Engineer',
  location: 'Venezuela · Open to remote work',
  availability: 'Open to remote opportunities',
  serviceLine: 'Technical Support · IT Service Delivery · SaaS',
  positioning:
    'Solving complex technical problems, managing customer relationships, and connecting Customer Success with Engineering.',
  summary:
    'Customer Success Engineer with 10+ years across technical support, IT service delivery, and web platforms. I bridge customers and engineering by diagnosing issues, coordinating the right teams, and turning technical complexity into confident next steps.',
  signals: [
    { value: '10+', label: 'Years of experience' },
    { value: 'EN · ES', label: 'Bilingual support' },
    { value: 'Remote', label: 'International teams' },
  ],
  focusAreas: [
    'Customer Success Engineering',
    'Technical Support & Incident Management',
    'Service Delivery & Team Leadership',
    'Web Platforms, APIs & Integrations',
  ],
  resumePath: '/documents/carlos-querales-customer-success-resume.pdf',
};
