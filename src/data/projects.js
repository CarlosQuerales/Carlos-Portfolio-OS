/**
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} summary
 * @property {string} description
 * @property {('frontend'|'cse'|'solutions')[]} tags
 * @property {('shipped'|'in-progress'|'planned')} status - be honest; a
 *   "planned" tag is more credible than pretending everything is finished.
 * @property {string[]} technologies
 * @property {string} [repoUrl]
 * @property {string} [demoUrl]
 */

// TODO(carlos): this list mirrors the project roadmap from our planning doc.
// Replace/reorder as you actually build things, and flip `status` honestly
// as each one ships — a portfolio with 2 "shipped" + 3 "planned" projects
// reads as credible momentum; a portfolio faking 5 "shipped" projects that
// don't hold up under a follow-up question reads as the opposite.

/** @type {Project[]} */
export const projects = [
  {
    slug: 'portfolio-os',
    title: 'Carlos Portfolio OS',
    summary:
      'This site — a Next.js portfolio built around a content-abstraction layer designed for future WordPress and AI integration.',
    description:
      'The portfolio itself is a project: a static-first Next.js App Router site with a services/ abstraction layer so future WordPress-headless and AI features can be added without refactoring existing pages.',
    tags: ['frontend'],
    status: 'in-progress',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Netlify'],
    repoUrl: 'https://github.com/your-github-username/carlos-portfolio-os',
  },
  {
    slug: 'wordpress-plugin',
    title: 'Custom WordPress Plugin',
    summary:
      'An installable WordPress plugin using ACF Pro patterns and custom REST endpoints, documented as a public repo.',
    description:
      'Demonstrates PHP and WordPress core API fluency independent of the main portfolio stack — a standalone, documented, installable plugin rather than a theme customization.',
    tags: ['frontend', 'solutions'],
    status: 'planned',
    technologies: ['PHP', 'WordPress Plugin API', 'ACF Pro', 'MySQL'],
  },
  {
    slug: 'support-ticket-dashboard',
    title: 'Support Ticket Triage Dashboard',
    summary:
      'A React dashboard that classifies and prioritizes support tickets and visualizes SLA risk.',
    description:
      'Simulates the daily tool of a Customer Success/Support Engineer — ticket triage, prioritization, and SLA-risk visualization built as a real, interactive React app.',
    tags: ['frontend', 'cse'],
    status: 'planned',
    technologies: ['Next.js', 'React', 'REST API (mock)'],
  },
  {
    slug: 'ask-carlos',
    title: 'Ask Carlos — RAG Assistant',
    summary:
      'A retrieval-augmented chatbot, embedded on this site, that answers questions about my experience grounded in my real content.',
    description:
      "A RAG pipeline over this site's own content — recruiters can ask it direct questions and get answers grounded in real case studies and experience, not hallucinated ones.",
    tags: ['frontend', 'solutions'],
    status: 'planned',
    technologies: ['Next.js API Routes', 'OpenAI API', 'Embeddings'],
  },
];
