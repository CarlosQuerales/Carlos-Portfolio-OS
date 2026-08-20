/**
 * @typedef {Object} ExperienceEntry
 * @property {string} id
 * @property {string} role
 * @property {string} organization
 * @property {string} period - e.g. '2022 — Present'
 * @property {string} summary
 * @property {string[]} highlights
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 'technical-delivery',
    role: 'Technical Support & Customer Success Engineering',
    organization: 'Client-facing SaaS and technical environments',
    period: 'Professional focus',
    summary:
      'Supporting customers by investigating technical issues, translating findings into clear communication, and coordinating with engineering and product stakeholders.',
    highlights: [
      'Troubleshooting web applications, integrations, APIs, and service-management workflows.',
      'Turning logs, reproduction steps, and technical constraints into actionable customer updates.',
      'Working across support, engineering, product, and delivery teams to keep issues moving.',
    ],
  },
  {
    id: 'web-development',
    role: 'Front-End & WordPress Development',
    organization: 'Web projects and technical delivery',
    period: 'Professional focus',
    summary:
      'Building and maintaining responsive web experiences with JavaScript, React, WordPress, and PHP while keeping usability and client needs in view.',
    highlights: [
      'Developing reusable interfaces and responsive layouts for production websites.',
      'Working with WordPress, PHP, REST APIs, Git, and modern front-end tooling.',
      'Balancing implementation quality with practical delivery and maintainability.',
    ],
  },
];
