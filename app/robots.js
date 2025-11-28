export default function robots() {
  const baseUrl = "https://www.paramour.fr/";

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/studio/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

