/**
 * Customer-success evidence is kept separate from general profile copy so it
 * can later be sourced from a CMS without changing the section components.
 */
export const customerSuccess = {
  impact: [
    {
      value: '10+',
      label: 'Years in technical service',
      detail: 'Supporting customers across SaaS, web platforms, and business systems.',
    },
    {
      value: '7+',
      label: 'Global accounts supported',
      detail: 'Ongoing technical partnership across distributed customer environments.',
    },
    {
      value: '~100',
      label: 'Complex tickets per month',
      detail:
        'Investigated, prioritized, and coordinated with a two-person engineering team.',
    },
    {
      value: '70% / 90%',
      label: 'First-contact / cumulative resolution',
      detail: 'Clear triage and disciplined follow-through across the support lifecycle.',
    },
  ],
  supportSteps: [
    {
      number: '01',
      title: 'Understand the real impact',
      description:
        'Clarify the customer goal, urgency, environment, and business consequence before choosing a technical path.',
    },
    {
      number: '02',
      title: 'Reproduce and diagnose',
      description:
        'Use logs, browser tools, APIs, databases, and controlled testing to move from symptoms to a defensible cause.',
    },
    {
      number: '03',
      title: 'Coordinate the right teams',
      description:
        'Give Product, QA, and Engineering concise evidence, priority context, and actionable reproduction steps.',
    },
    {
      number: '04',
      title: 'Communicate through closure',
      description:
        'Set expectations, translate technical findings, validate the solution, and close the loop with the customer.',
    },
  ],
  technicalCapabilities: [
    {
      title: 'Web platforms',
      description:
        'Production support and delivery across content, commerce, and custom web experiences.',
      tools: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'React', 'Gutenberg'],
    },
    {
      title: 'Integrations & data',
      description:
        'Tracing failures across connected systems and making integration behavior understandable.',
      tools: ['REST APIs', 'MySQL', 'Stripe', 'PayPal', 'HubSpot', 'Analytics'],
    },
    {
      title: 'Delivery environments',
      description:
        'Working comfortably where customer issues meet deployment, hosting, and source control.',
      tools: ['Git', 'GitHub', 'cPanel', 'npm', 'Browser DevTools', 'QA'],
    },
  ],
  serviceDelivery: [
    {
      value: '0 → 1',
      title: 'Built a support function',
      description:
        'Established the customer service operation, workflows, ownership, and escalation model from the ground up.',
    },
    {
      value: '3',
      title: 'Direct support leadership',
      description:
        'Led a three-person support team with coaching, workload coordination, and quality accountability.',
    },
    {
      value: '15',
      title: 'Cross-functional coordination',
      description:
        'Aligned support, operations, logistics, Product, QA, and Engineering around delivery and incident outcomes.',
    },
  ],
};
