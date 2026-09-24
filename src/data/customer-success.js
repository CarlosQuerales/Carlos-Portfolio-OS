/**
 * Customer-success evidence is kept separate from general profile copy so it
 * can later be sourced from a CMS without changing the section components.
 */
export const customerSuccess = {
  impact: [
    {
      value: 7,
      suffix: '+',
      label: 'Global accounts supported',
      detail: 'Technical partnership across distributed customer environments.',
    },
    {
      value: 100,
      prefix: '~',
      label: 'Complex tickets per month',
      detail: 'Investigated, prioritized, and coordinated with engineering.',
    },
    {
      value: 70,
      suffix: '%',
      label: 'First-contact resolution',
      detail: 'Clear triage and actionable guidance from the first interaction.',
    },
    {
      value: 90,
      suffix: '%',
      label: 'Cumulative resolution',
      detail: 'Disciplined ownership and follow-through across the support lifecycle.',
    },
  ],
  supportSteps: [
    {
      number: '01',
      title: 'Investigate',
      description: 'Gather context, customer impact, logs, and reproducible evidence.',
    },
    {
      number: '02',
      title: 'Diagnose',
      description:
        'Isolate the cause and validate assumptions through controlled testing.',
    },
    {
      number: '03',
      title: 'Communicate',
      description: 'Translate findings, set expectations, and make the next step clear.',
    },
    {
      number: '04',
      title: 'Coordinate',
      description: 'Give Product, QA, and Engineering actionable evidence and priority.',
    },
    {
      number: '05',
      title: 'Resolve',
      description: 'Test the solution and confirm the intended customer outcome.',
    },
    {
      number: '06',
      title: 'Document',
      description:
        'Capture the root cause and turn the learning into a reusable playbook.',
    },
  ],
  expertiseBridge: {
    customer: [
      'Customer Success & stakeholder management',
      'Technical Support & onboarding',
      'ITIL & service delivery',
    ],
    technical: [
      'WordPress, PHP & JavaScript',
      'React, REST APIs & MySQL',
      'Git/GitHub, hosting & integrations',
    ],
    outcomes: ['Faster diagnosis', 'Clearer decisions', 'Trusted relationships'],
  },
};
