const experienceAssetModules = {
  ...(import.meta.glob('../assets/companyLogos/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default'
  }) as Record<string, string>)
};

const projectAssetModules = import.meta.glob(
  [
    '../assets/rentifynow/*.webp',
    '../assets/league_plus/*.webp',
    '../assets/distributed_database/*.webp',
    '../assets/image_steganography/*.webp',
    '../assets/portfolio/*.webp',
    '../assets/discord bot/*.webp',
    '../assets/todolist/*.webp'
  ],
  { eager: true, import: 'default' }
) as Record<string, string>;

const normalizeAssetPath = (relativePath: string): string => `../assets/${relativePath}`;

export const resolveExperienceImage = (relativePath: string): string =>
  experienceAssetModules[normalizeAssetPath(relativePath)] ?? '';

export const resolveProjectImage = (relativePath: string): string =>
  projectAssetModules[normalizeAssetPath(relativePath)] ?? '';
