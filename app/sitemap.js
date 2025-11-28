import { getProjectsSlugs } from "@/sanity/sanity-util";

export default async function sitemap() {
  const baseUrl = "https://www.paramour.fr/"; 

  const projects = await getProjectsSlugs();

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/works/${project.slug.current}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Pages statiques
  const routes = [
    "",
    "/infos",
    "/contact",
    "/works",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === "" ? 1 : 0.9,
  }));

  return [...routes, ...projectUrls];
}

