/**
 * The content abstraction layer.
 *
 * Every page/component gets content by calling a function from this file —
 * never by importing `data/*.js` or a `wordpress/`/`ai/` client directly.
 *
 * Why: today these functions read from local JS modules. When WordPress
 * headless is integrated for the Blog, or GitHub API enrichment is added to
 * Projects, the rewrite happens ONCE, inside this file. No page, no
 * component in components/sections/ changes. See the Phase 1 architecture
 * doc, section 9, for the full reasoning.
 */

import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/case-studies';

export function getProfile() {
  return profile;
}

export function getSkillGroups() {
  return skillGroups;
}

export function getExperience() {
  return experience;
}

export function getProjects() {
  return projects;
}

export function getProjectBySlug(/** @type {string} */ slug) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getCaseStudies() {
  return caseStudies;
}

export function getCaseStudyBySlug(/** @type {string} */ slug) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug) ?? null;
}
