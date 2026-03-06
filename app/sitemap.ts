import { allPosts } from 'content-collections';
import { type MetadataRoute } from 'next';
import { DATA } from '@/shared/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dev.cluster-taek.cloud';

  const blogPosts = allPosts.map((post) => ({
    url: `${baseUrl}/posts/${post._meta.path.replace(/\.mdx$/, '')}`,
    lastModified: new URLSearchParams(post.publishedAt).get('date') || new Date(),
  }));

  const projectPages = DATA.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ['', '/posts', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogPosts, ...projectPages];
}
