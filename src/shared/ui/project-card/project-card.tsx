'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { forwardRef, useState } from 'react';
import Markdown from 'react-markdown';
import { cn } from '@/shared/lib/utils';
import { Badge } from '@/shared/ui/badge';

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className="w-full h-48 object-cover" onError={() => setImageError(true)} />
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(function ProjectCard(
  { title, description, dates, tags, image, video, links, className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        'flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200',
        className
      )}
      {...props}
    >
      <div className="relative shrink-0">
        <div className="block">
          {video ? (
            <video src={video} autoPlay loop muted playsInline className="w-full h-48 object-cover" />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" aria-hidden />
        </div>
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-auto">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-[11px] bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  <span className="[&>svg]:h-3 [&>svg]:w-3">{link.icon}</span>
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
