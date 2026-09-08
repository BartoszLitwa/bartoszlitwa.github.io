import { describe, expect, it } from 'vitest';
import certifications from './certifications.json';
import experience from './experience.json';
import products from './products.json';
import translations from './translations.json';

const expectedProductStages = {
  doifynow: 'building',
  rentifynow: 'active-build',
  houseifynow: 'building',
  goalifynow: 'building',
  deployifynow: 'building',
  postifynow: 'active-build',
  leadifynow: 'discovery',
  insightifynow: 'discovery',
  supportifynow: 'discovery'
} as const;

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

  it('keeps the Now portfolio membership and stages explicit', () => {
    expect(products.map((product) => product.id)).toEqual(Object.keys(expectedProductStages));
    expect(Object.fromEntries(products.map((product) => [product.id, product.stage]))).toEqual(
      expectedProductStages
    );
    expect(new Set(products.map((product) => product.name)).size).toBe(products.length);
  });

  it('keeps product links optional, unique, secure, and evidence-based', () => {
    const linkedProducts = products.filter(
      (product): product is (typeof products)[number] & { url: string } => 'url' in product
    );

    expect(linkedProducts.map((product) => product.id)).toEqual([
      'doifynow',
      'rentifynow',
      'houseifynow',
      'goalifynow',
      'deployifynow',
      'leadifynow'
    ]);
    expect(new Set(linkedProducts.map((product) => product.url)).size).toBe(linkedProducts.length);
    expect(linkedProducts.every((product) => /^https:\/\//.test(product.url))).toBe(true);
    expect(
      products
        .filter((product) => ['postifynow', 'insightifynow', 'supportifynow'].includes(product.id))
        .every((product) => !('url' in product))
    ).toBe(true);
  });

  it('keeps product copy bilingual and presents DoifyNow as the parent company', () => {
    products.forEach((product) => {
      expect(product.icon).toMatch(/^\/product-icons\/.+\.(png|svg|ico)$/);
      expect(product.role.en.trim()).not.toBe('');
      expect(product.role.pl.trim()).not.toBe('');
      expect(product.description.en.trim()).not.toBe('');
      expect(product.description.pl.trim()).not.toBe('');
      expect(product.tags.en.length).toBeGreaterThan(0);
      expect(product.tags.pl.length).toBeGreaterThan(0);
      expect(product.tags.en.every((tag) => tag.trim() !== '')).toBe(true);
      expect(product.tags.pl.every((tag) => tag.trim() !== '')).toBe(true);
    });

    const doifyNow = products.find((product) => product.id === 'doifynow');
    expect(doifyNow?.role.en.toLowerCase()).toContain('parent company');
    expect(doifyNow?.role.pl.toLowerCase()).toContain('firma macierzysta');
  });

  it('keeps IDs and required collections unique and populated', () => {
    const certificationIds = certifications.map((certification) => certification.id);

    expect(new Set(certificationIds).size).toBe(certificationIds.length);
    expect(experience.length).toBeGreaterThan(0);
  });
});
