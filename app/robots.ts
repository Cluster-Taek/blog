import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://dev.cluster-taek.cloud/sitemap.xml',
    host: 'https://dev.cluster-taek.cloud',
  };
}
