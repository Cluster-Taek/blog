import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX } from '@content-collections/mdx';
import GithubSlugger from 'github-slugger';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';
import { remarkCodeMeta } from './src/shared/lib/remark-code-meta';

function extractHeadings(content: string) {
  const slugger = new GithubSlugger();
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings: { level: number; text: string; slug: string }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/\*\*(.+?)\*\*/g, '$1').replace(/`(.+?)`/g, '$1');
    headings.push({
      level: match[1].length,
      text,
      slug: slugger.slug(text),
    });
  }
  return headings;
}

const posts = defineCollection({
  name: 'posts',
  directory: 'content',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    updatedAt: z.string().optional(),
    author: z.string().optional(),
    summary: z.string(),
    image: z.string().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm, remarkCodeMeta],
      rehypePlugins: [rehypeSlug],
    });
    const headings = extractHeadings(document.content);
    return {
      ...document,
      mdx,
      headings,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
