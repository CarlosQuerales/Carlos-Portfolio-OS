/**
 * @typedef {Object} ExperienceEntry
 * @property {string} id
 * @property {string} chapter
 * @property {string} theme
 * @property {string} role
 * @property {string} organization
 * @property {string} period - e.g. '2022 — Present'
 * @property {string} summary
 * @property {string[]} highlights
 * @property {string} impact
 * @property {string[]} technologies
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 'elevation-web',
    chapter: '01',
    theme: 'Customer Success + Engineering',
    role: 'Customer Success Engineer & Technical Support',
    organization: 'Elevation Web',
    period: '2021 — Present',
    summary:
      'Own technical support and customer success for global web accounts, connecting customer context with engineering investigation and delivery.',
    highlights: [
      'Support 7+ global accounts and coordinate complex delivery with a two-person engineering team.',
      'Manage roughly 100 complex tickets per month with 70% first-contact and 90% cumulative resolution.',
      'Troubleshoot WordPress, WooCommerce, APIs, payments, analytics, hosting, and front-end behavior.',
    ],
    impact: '7+ global accounts · ~100 complex tickets per month',
    technologies: ['WordPress', 'WooCommerce', 'REST APIs', 'Analytics'],
  },
  {
    id: 'bistrosoft',
    chapter: '02',
    theme: 'Service Delivery + Leadership',
    role: 'Head of Customer Support & Product Delivery',
    organization: 'PDS / Bistrosoft',
    period: '2018 — 2021',
    summary:
      'Built the customer service function and led support delivery for a software platform and its connected commercial integrations.',
    highlights: [
      'Led a three-person support team and coordinated up to 15 people across operations and development.',
      'Managed integrations with fiscal systems, delivery platforms, and payment services.',
      'Partnered with Product, QA, and .NET Engineering on prioritization, release validation, and continual improvement.',
    ],
    impact: 'Built the support function · led 3 · coordinated up to 15',
    technologies: ['ITIL', 'Product', 'QA', '.NET', 'Payments'],
  },
  {
    id: 'intersouth',
    chapter: '03',
    theme: 'Technical Support + Software',
    role: 'Technical Support Lead',
    organization: 'Intersouth',
    period: '2014 — 2016',
    summary:
      'Led multi-tier support for corporate software customers, combining issue ownership with implementation and quality assurance.',
    highlights: [
      'Supported approximately 30 corporate clients and handled 20–30 monthly technical cases.',
      'Worked with SQL Server, Android, PHP, JavaScript, HTML, and structured QA practices.',
      'Created documentation, gathered requirements, tested releases, and supported implementations.',
    ],
    impact: '~30 corporate clients · 20–30 monthly cases',
    technologies: ['SQL Server', 'Android', 'PHP', 'JavaScript', 'QA'],
  },
];
