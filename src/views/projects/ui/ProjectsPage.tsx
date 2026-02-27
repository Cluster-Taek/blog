import { ProjectsSection } from '@/widgets/projects-section';

export function ProjectsPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="projects">
        <ProjectsSection />
      </section>
    </main>
  );
}
