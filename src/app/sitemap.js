import { SITE_URL } from '@/lib/constants';
import { getProjects, getCaseStudies } from '@/services/content';

const STATIC_ROUTES = [
  '',
  '/about',
  '/skills',
  '/experience',
  '/projects',
  '/case-studies',
  '/contact',
];

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectEntries = getProjects().map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyEntries = getCaseStudies().map((caseStudy) => ({
    url: `${SITE_URL}/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...projectEntries, ...caseStudyEntries];
}
