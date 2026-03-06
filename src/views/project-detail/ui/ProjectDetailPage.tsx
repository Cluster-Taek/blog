import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/shared/config';
import { ProjectDetail } from '@/shared/ui/project-card';

interface ProjectDetailPageProps {
  slug: string;
}

export function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <section className="max-w-2xl mx-auto">
      <div className="flex justify-start items-center mb-6">
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg px-2 py-1 inline-flex items-center gap-1 group"
          aria-label="Back to Projects"
        >
          <ChevronLeft className="size-3 group-hover:-translate-x-px transition-transform" />
          Back to Projects
        </Link>
      </div>
      <ProjectDetail
        title={project.title}
        dates={project.dates}
        description={project.description}
        tags={project.technologies}
        slides={project.slides}
        links={project.links}
      />
    </section>
  );
}
