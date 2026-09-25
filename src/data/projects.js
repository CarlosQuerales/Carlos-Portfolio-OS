/**
 * @typedef {Object} ProjectImage
 * @property {string} src
 * @property {string} alt
 * @property {string} label
 *
 * @typedef {Object} Project
 * @property {string} slug
 * @property {string} title
 * @property {string} sector
 * @property {string} summary
 * @property {string} description
 * @property {string} role
 * @property {string} challenge
 * @property {string} outcome
 * @property {string} approach
 * @property {'portfolio'} [visual]
 * @property {ProjectImage[]} [images]
 * @property {boolean} [featured]
 * @property {('frontend'|'cse'|'solutions')[]} tags
 * @property {('shipped'|'in-progress'|'planned')} status
 * @property {string[]} technologies
 * @property {string} [repoUrl]
 * @property {string} [demoUrl]
 */

const image = (file, label, alt) => ({
  src: `/images/projects/${file}.jpg`,
  label,
  alt,
});

/** @type {Project[]} */
export const projects = [
  {
    slug: 'lawg-org',
    title: 'LAWG.org',
    sector: 'Human rights & advocacy',
    summary:
      'A distinctive editorial experience that turns complex advocacy work into clear campaigns and action paths.',
    description:
      'The Latin America Working Group project pairs a tactile visual identity with strong editorial hierarchy. Its homepage and campaign templates create urgency without sacrificing clarity, giving policy content, stories, and calls to action a coherent system.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Present dense policy and campaign content with enough clarity and visual energy to support action.',
    outcome:
      'A cohesive, action-oriented experience across homepage, campaign listing, and campaign detail views.',
    approach:
      'Editorial typography, campaign-specific page patterns, high-contrast calls to action, and responsive content hierarchy.',
    images: [
      image('lawg-home', 'Homepage', 'LAWG.org homepage with advocacy campaign hero'),
      image('lawg-campaign', 'Campaigns', 'LAWG.org campaigns page'),
      image('lawg-campaign-detail', 'Campaign detail', 'LAWG.org campaign detail page'),
    ],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Editorial UI', 'Campaign UX', 'Responsive delivery'],
  },
  {
    slug: 'wnpa',
    title: 'WNPA',
    sector: 'Parks & conservation',
    summary:
      'A cinematic, image-led platform with flexible content patterns for stories, programs, and park discovery.',
    description:
      'The WNPA experience uses large-scale photography, layered typography, and flexible editorial modules to connect visitors with parks and conservation work. The system holds together across immersive landing pages and content-heavy interiors.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Balance immersive destination imagery with practical access to programs, resources, and detailed content.',
    outcome:
      'A flexible visual system that remains consistent from the homepage to long-form interior layouts.',
    approach:
      'Full-bleed media, modular content blocks, clear section transitions, and responsive information architecture.',
    images: [
      image('wnpa-home', 'Homepage', 'WNPA homepage with cinematic park photography'),
      image('wnpa-interior', 'Interior', 'WNPA content-rich interior page'),
      image('wnpa-blocks', 'Content system', 'WNPA modular content blocks page'),
    ],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Visual storytelling', 'Modular UI', 'Responsive delivery'],
  },
  {
    slug: 'new-destiny-housing',
    title: 'New Destiny Housing',
    sector: 'Housing & social impact',
    summary:
      'A warm, cohesive nonprofit experience made memorable by a flexible puzzle-inspired visual motif.',
    description:
      'New Destiny Housing combines human-centered photography with a recognizable puzzle motif and a clear visual rhythm. The result feels approachable while preserving the structure required for services, resources, and organizational storytelling.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Create a welcoming service-focused experience that can organize sensitive and practical information.',
    outcome:
      'A recognizable visual identity carried consistently across the homepage and interior content.',
    approach:
      'Branded geometric motifs, human photography, accessible hierarchy, and reusable content sections.',
    images: [
      image('new-destiny-home', 'Homepage', 'New Destiny Housing branded homepage'),
      image('new-destiny-interior', 'Interior', 'New Destiny Housing service page'),
    ],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Nonprofit UX', 'Brand systems', 'Content design'],
  },
  {
    slug: 'krc-pbpc',
    title: 'KRC–PBPC',
    sector: 'Public policy & civic engagement',
    summary:
      'A bold civic editorial system designed for policy issues, articles, news, and public engagement.',
    description:
      'KRC–PBPC uses assertive typography, strong color blocking, and repeatable editorial patterns to make issue-focused content easier to navigate. The same identity remains intact across homepage, issue, and news views.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Organize policy content and current updates without losing the urgency of the organization’s voice.',
    outcome:
      'A consistent civic publishing experience across issue, article, and news-oriented templates.',
    approach:
      'Bold hierarchy, modular publishing patterns, structured calls to action, and responsive content layouts.',
    images: [
      image('krc-home', 'Homepage', 'KRC–PBPC civic policy homepage'),
      image('krc-issue', 'Issue page', 'KRC–PBPC policy issue page'),
      image('krc-news', 'News', 'KRC–PBPC news page'),
    ],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Editorial systems', 'Content hierarchy', 'Responsive UI'],
  },
  {
    slug: 'iprh-global',
    title: 'IPRH Global',
    sector: 'Global health & mission',
    summary:
      'A mission-led site where photography, color, and clear content pathways work as one visual system.',
    description:
      'IPRH Global balances expressive photography with a confident color system and clear mission storytelling. The interface creates visual continuity between the organization’s story, interior content, and giving journey.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Communicate a global mission with emotional resonance while keeping information and support paths clear.',
    outcome:
      'A cohesive experience connecting mission storytelling, program content, and donation journeys.',
    approach:
      'Photography-led layouts, a disciplined color system, modular narratives, and prominent support actions.',
    images: [
      image('iprh-home', 'Homepage', 'IPRH Global photography-led homepage'),
      image('iprh-interior', 'Interior', 'IPRH Global mission content page'),
      image('iprh-donate', 'Donation journey', 'IPRH Global donation page'),
    ],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Mission storytelling', 'Donation UX', 'Responsive delivery'],
  },
  {
    slug: 't-howard-foundation',
    title: 'T. Howard Foundation',
    sector: 'Education, media & diversity',
    summary:
      'A professional, energetic platform for programs, events, student pathways, and diversity initiatives.',
    description:
      'The T. Howard Foundation site creates a polished bridge between institutional credibility and student energy. Distinct page types support the homepage, student resources, and diversity storytelling without fragmenting the brand.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Serve students, partners, and event audiences through a single energetic but professional system.',
    outcome:
      'A consistent multi-audience experience across program, diversity, and student-focused pages.',
    approach:
      'Audience-led navigation, strong event imagery, repeatable content modules, and responsive hierarchy.',
    images: [
      image('thoward-home', 'Homepage', 'T. Howard Foundation homepage'),
      image('thoward-diversity', 'Diversity', 'T. Howard Foundation diversity page'),
      image('thoward-students', 'Students', 'T. Howard Foundation student page'),
    ],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Multi-audience UX', 'Event content', 'Responsive UI'],
  },
  {
    slug: 'dance-flurry',
    title: 'Dance Flurry',
    sector: 'Arts, culture & events',
    summary:
      'An expressive event-focused identity that keeps its personality across promotional and interior pages.',
    description:
      'Dance Flurry uses movement, color, and event-focused content to create a lively digital presence. The visual language feels distinctive while still supporting practical schedules, details, and supporting information.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Capture the energy of a live cultural event while keeping essential visitor information easy to scan.',
    outcome:
      'An expressive, consistent event experience across the homepage and supporting content.',
    approach:
      'Dynamic imagery, confident color, event-first hierarchy, and adaptable interior layouts.',
    images: [
      image('dance-flurry-home', 'Homepage', 'Dance Flurry event homepage'),
      image('dance-flurry-interior', 'Interior', 'Dance Flurry information page'),
    ],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Event UX', 'Visual identity', 'Responsive delivery'],
  },
  {
    slug: 'cellospeak',
    title: 'Cellospeak',
    sector: 'Music education',
    summary:
      'An immersive arts-focused homepage shaped by performance imagery and a clear educational journey.',
    description:
      'Cellospeak gives music education a visually immersive presentation. Its homepage combines performance photography, clear program pathways, and an arts-led visual tone that feels specific to its audience.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Translate an in-person music learning community into an inviting and navigable digital experience.',
    outcome:
      'A focused homepage that connects atmosphere, programs, and participation pathways.',
    approach:
      'Immersive media, arts-oriented composition, program hierarchy, and clear calls to action.',
    images: [image('cellospeak-home', 'Homepage', 'Cellospeak music education homepage')],
    featured: true,
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Arts UX', 'Program pathways', 'Responsive UI'],
  },
  {
    slug: 'fulfillment-fund',
    title: 'Fulfillment Fund',
    sector: 'Education & youth opportunity',
    summary:
      'A polished nonprofit platform with clear program storytelling and flexible event content.',
    description:
      'Fulfillment Fund presents education programs through an approachable nonprofit design system. Program and event pages extend the homepage language into structured, reusable paths for discovery and participation.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Explain multiple student programs and events without creating a fragmented browsing experience.',
    outcome:
      'A cohesive program storytelling system spanning homepage, program, and event templates.',
    approach:
      'Program-led navigation, modular storytelling, event patterns, and responsive page templates.',
    images: [
      image('fulfillment-home', 'Homepage', 'Fulfillment Fund nonprofit homepage'),
      image('fulfillment-programs', 'Programs', 'Fulfillment Fund programs page'),
      image('fulfillment-events', 'Events', 'Fulfillment Fund event page'),
    ],
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Program UX', 'Event templates', 'Content systems'],
  },
  {
    slug: 'settlement-housing-fund',
    title: 'Settlement Housing Fund',
    sector: 'Affordable housing',
    summary:
      'A housing-focused experience with distinctive urban photography and a strong visual direction.',
    description:
      'Settlement Housing Fund uses architectural imagery, bold scale, and modular content to give affordable housing work a confident presence. Its visual system supports both organizational storytelling and detailed content patterns.',
    role: 'Project contribution details pending Carlos’s confirmation.',
    challenge:
      'Present housing impact and organizational information with credibility, humanity, and visual distinction.',
    outcome:
      'A recognizable urban visual direction with flexible page-building patterns.',
    approach:
      'Architecture-led imagery, editorial scale, reusable modules, and clear content progression.',
    images: [
      image('settlement-home', 'Homepage', 'Settlement Housing Fund homepage'),
      image(
        'settlement-blocks',
        'Content system',
        'Settlement Housing Fund content blocks'
      ),
    ],
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Housing UX', 'Visual storytelling', 'Modular UI'],
  },
  {
    slug: 'portfolio-os',
    title: 'Carlos Portfolio OS',
    sector: 'Personal product & engineering',
    summary:
      'A production portfolio built with Next.js and a content architecture designed to evolve without coupling pages to a single CMS.',
    description:
      'Carlos Portfolio OS is the site you are viewing. It uses the Next.js App Router, reusable UI components, centralized SEO helpers, and a service layer that keeps page components independent from the current content source. The result is a fast, maintainable foundation that can later connect to WordPress or other services without rewriting the presentation layer.',
    role: 'Product direction · Front-end architecture · Implementation',
    challenge:
      'Build a recruiter-facing portfolio that can evolve without coupling every page to a single content source.',
    outcome:
      'A responsive Next.js foundation with reusable components, centralized content, and consistent SEO across routes.',
    approach:
      'A reusable component system, centralized content layer, and progressive enhancement for motion and theme preferences.',
    visual: 'portfolio',
    tags: ['frontend'],
    status: 'shipped',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Netlify'],
    repoUrl: 'https://github.com/CarlosQuerales/Carlos-Portfolio-OS',
    demoUrl: 'https://carlosmqueralesporfolio.netlify.app/',
  },
];
