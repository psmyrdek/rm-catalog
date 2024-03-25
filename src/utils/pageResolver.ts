export function pageResolver(url: string): string {
  const urlObj = new URL(url);
  const page = urlObj.searchParams.get('page');

  return `/list/${page || 1}`;
}
