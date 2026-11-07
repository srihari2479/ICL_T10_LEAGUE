/**
 * Resolves public asset paths to work seamlessly in both local development
 * (where BASE_URL is '/') and GitHub Pages / subfolder deployments
 * (where BASE_URL is e.g. '/ICL_T10_LEAGUE/').
 */
export const getAssetUrl = (path?: string | null): string => {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  return `${normalizedBase}${cleanPath}`;
};
