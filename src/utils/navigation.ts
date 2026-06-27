import { getCollection } from 'astro:content';

export async function getSectionNavigation(
  collectionName: string,
  currentId: string,
  basePath: string,
  includeOverview: boolean = false
) {
  const allEntries = await getCollection(collectionName as any);

  // Sort by order if available, otherwise sort alphabetically by title
  allEntries.sort((a: any, b: any) => {
    if (a.data.order !== undefined && b.data.order !== undefined) {
      return a.data.order - b.data.order;
    }
    if (a.data.title && b.data.title) {
      return a.data.title.localeCompare(b.data.title);
    }
    return 0;
  });

  const links = [];

  if (includeOverview) {
    links.push({
      label: 'Overview',
      href: basePath,
    });
  }

  // Ensure basePath doesn't end with a trailing slash so we can consistently append /id
  const cleanBasePath = basePath.replace(/\/$/, '');

  const generatedLinks = allEntries.map((e: any) => ({
    label: e.data.title,
    href: `${cleanBasePath}/${e.id}`,
  }));

  links.push(...generatedLinks);

  const currentIndex = allEntries.findIndex((e: any) => e.id === currentId);
  const nextEntry = allEntries[currentIndex + 1] || null;

  return { links, nextEntry };
}
