import { allPosts } from 'content-collections';
import { type MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dev.cluster-taek.cloud';

  const blogPosts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post._meta.path.replace(/\.mdx$/, '')}`,
    lastModified: new URLSearchParams(post.publishedAt).get('date') || new Date(),
  }));

  const routes = ['', '/blog', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogPosts];
}
