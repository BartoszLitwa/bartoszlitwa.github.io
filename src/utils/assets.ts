const experienceAssetModules = {
  ...(import.meta.glob('../assets/companyLogos/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default'
  }) as Record<string, string>),
  ...(import.meta.glob('../assets/img/logo.webp', { eager: true, import: 'default' }) as Record<
    string,
    string
  >)
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

const experienceFallback = experienceAssetModules['../assets/img/logo.webp'] ?? '';
const projectFallback = projectAssetModules['../assets/rentifynow/dashboard.webp'] ?? '';

const normalizeAssetPath = (relativePath: string): string => `../assets/${relativePath}`;

export const resolveExperienceImage = (relativePath: string): string =>
  experienceAssetModules[normalizeAssetPath(relativePath)] ?? experienceFallback;

export const resolveProjectImage = (relativePath: string): string =>
  projectAssetModules[normalizeAssetPath(relativePath)] ?? projectFallback;
