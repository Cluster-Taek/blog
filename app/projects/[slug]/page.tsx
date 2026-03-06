import { type Metadata } from 'next';
import { DATA, getProjectBySlug } from '@/shared/config';
import { ProjectDetailPage } from '@/views/project-detail';

export async function generateStaticParams() {
  return DATA.projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return undefined;

  const { title, description, image } = project;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${DATA.url}/projects/${slug}`,
      ...(image && { images: [{ url: `${DATA.url}${image}` }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(image && { images: [`${DATA.url}${image}`] }),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectDetailPage slug={slug} />;
}
