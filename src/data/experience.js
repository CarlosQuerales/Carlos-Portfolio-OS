/**
 * @typedef {Object} ExperienceEntry
 * @property {string} id
 * @property {string} role
 * @property {string} organization
 * @property {string} period - e.g. '2022 — Present'
 * @property {string} summary
 * @property {string[]} highlights - quantified where possible, no vague adjectives
 */

// TODO(carlos): replace with your real roles, real dates, and real numbers.
// The roadmap doc flagged this exact section on the old site as the weakest
// part — "reduced resolution time" with no baseline/delta is not evidence.
// Every highlight below should have a number by the time this ships.

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 'role-1',
    role: 'Customer Success Engineer',
    organization: 'Company Name',
    period: '20XX — Present',
    summary:
      'One or two sentences on the scope: who you supported, what product, what you were accountable for.',
    highlights: [
      'Quantified outcome #1 — e.g. reduced X from A to B over N months.',
      'Quantified outcome #2 — e.g. handled N escalations/month across M product areas.',
      'Quantified outcome #3 — e.g. built/shipped Y that removed Z hours of manual work.',
    ],
  },
  {
    id: 'role-2',
    role: 'Front-End / WordPress Developer',
    organization: 'Company Name',
    period: '20XX — 20XX',
    summary: 'Scope of the role, the stack, and who you worked with.',
    highlights: ['Quantified outcome #1.', 'Quantified outcome #2.'],
  },
];
