import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/generator`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/guide`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/templates`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/faq`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified: new Date('2026-07-28'),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${siteConfig.url}/privacy-policy`,
      lastModified: new Date('2026-07-24'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/terms-of-service`,
      lastModified: new Date('2026-07-24'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  const blogPostPages = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPostPages];
}
