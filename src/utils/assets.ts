const experienceAssetModules = {
  ...(import.meta.glob('../assets/companyLogos/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default'
  }) as Record<string, string>)
};

const normalizeAssetPath = (relativePath: string): string => `../assets/${relativePath}`;

export const resolveExperienceImage = (relativePath: string): string =>
  experienceAssetModules[normalizeAssetPath(relativePath)] ?? '';
