'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/lib/utils';

interface Heading {
  level: number;
  text: string;
  slug: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeSlug, setActiveSlug] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headingElements = headings.map((h) => document.getElementById(h.slug)).filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSlug(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    for (const el of headingElements) {
      observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  const minLevel = Math.min(...headings.map((h) => h.level));

  const items = headings.map((h) => ({
    ...h,
    depth: h.level - minLevel,
  }));

  const handleClick = (slug: string) => {
    const el = document.getElementById(slug);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav className="hidden xl:block absolute top-0 left-full h-full ml-8 w-56">
      <div className="sticky top-24">
        <ul className="space-y-2 text-sm border-l border-border pl-4">
          {items.map((h) => (
            <li key={h.slug} style={{ paddingLeft: `${h.depth * 12}px` }}>
              <button
                onClick={() => handleClick(h.slug)}
                className={cn(
                  'text-left transition-colors duration-200 cursor-pointer leading-snug',
                  activeSlug === h.slug
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground/80'
                )}
              >
                {h.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
