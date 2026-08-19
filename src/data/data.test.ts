import { describe, expect, it } from 'vitest';
import certifications from './certifications.json';
import experience from './experience.json';
import projects from './projects.json';
import skills from './skills.json';
import translations from './translations.json';

const scalarPaths = (value: unknown, prefix = ''): string[] => {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => scalarPaths(item, `${prefix}.${index}`));
  }

  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) =>
      scalarPaths(item, prefix ? `${prefix}.${key}` : key)
    );
  }

  return [prefix];
};

describe('portfolio data', () => {
  it('keeps English and Polish translation structures aligned', () => {
    expect(scalarPaths(translations.en).sort()).toEqual(scalarPaths(translations.pl).sort());
  });

  it('uses unique project links and valid image paths', () => {
    const urls = projects.map((project) => project.url);
    expect(new Set(urls).size).toBe(urls.length);

    projects.forEach((project) => {
      expect(project.url).toMatch(/^https:\/\//);
      expect(project.imgUrl).toMatch(/\.webp$/);
      expect(project.type.trim()).not.toBe('');
    });
  });

  it('keeps IDs and required collections unique and populated', () => {
    const certificationIds = certifications.map((certification) => certification.id);
    const skillCategoryIds = skills.categories.map((category) => category.id);

    expect(new Set(certificationIds).size).toBe(certificationIds.length);
    expect(new Set(skillCategoryIds).size).toBe(skillCategoryIds.length);
    expect(experience.length).toBeGreaterThan(0);
    expect(skills.categories.every((category) => category.skills.length > 0)).toBe(true);
  });
});
