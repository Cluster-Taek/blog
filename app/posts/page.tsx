import { type Metadata } from 'next';
import { BlogPage } from '@/views/blog';

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Thoughts on software development, life, and more.',
  openGraph: {
    title: 'Posts',
    description: 'Thoughts on software development, life, and more.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Posts',
    description: 'Thoughts on software development, life, and more.',
  },
};

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  return <BlogPage page={page} />;
}
