/**
 * @typedef {Object} Profile
 * @property {string} name
 * @property {string} role
 * @property {string} location
 * @property {string} heroStatement
 * @property {string} summary
 * @property {string[]} focusAreas
 */

// TODO(carlos): this is placeholder copy, structurally correct but not your
// real voice. Rewrite every field before this ships — see the roadmap doc,
// Phase 1, for the positioning statement this should be built from.

/** @type {Profile} */
export const profile = {
  name: 'Carlos Querales',
  role: 'Front-End Developer & Customer Success Engineer',
  location: 'Remote',
  heroStatement:
    'I sit between engineering and customer outcomes — I can read the stack trace and explain it in plain English.',
  summary:
    'Computer Science graduate with 10+ years of experience spanning Customer Success Engineering, front-end development (React, JavaScript), and WordPress/PHP. I have worked across REST API integrations, IT service management, and cross-functional collaboration with engineering, product, and .NET teams.',
  focusAreas: [
    'Front-End Development (React, JavaScript)',
    'Customer Success Engineering',
    'Technical Solutions & Integrations',
    'WordPress & PHP',
  ],
};
