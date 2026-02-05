import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.baratexangola.com'; // Substitua pelo seu domínio final

  // Lista dos slugs de serviços que criou no [slug]/page.tsx
  const services = ['desbaratizacao', 'desratizacao', 'termitas'];

  const serviceUrls = services.map((slug) => ({
    url: `${baseUrl}/servicos/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    ...serviceUrls,
  ];
}
