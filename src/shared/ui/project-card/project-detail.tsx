'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Badge } from '@/shared/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/shared/ui/carousel';
import { DialogClose, DialogDescription, DialogHeader, DialogTitle } from '@/shared/ui/dialog';

interface Slide {
  image?: string;
  video?: string;
  description?: React.ReactNode;
}

interface ProjectDetailProps {
  title: string;
  dates: string;
  description: string;
  tags: readonly string[];
  slides?: readonly Slide[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function ProjectDetail({ title, dates, description, tags, slides = [], links }: ProjectDetailProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const count = slides.length;

  const onSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  return (
    <div className="flex flex-col h-full">
      <DialogHeader className="shrink-0 p-6 pb-4 text-left">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription>{dates}</DialogDescription>
          </div>
          <DialogClose className="rounded-full p-1.5 hover:bg-muted transition-colors">
            <X className="h-4 w-4" />
          </DialogClose>
        </div>
      </DialogHeader>

      <div className="flex-1 overflow-y-auto px-6 pb-6 flex flex-col gap-6">
        {count > 0 && (
          <div className="relative">
            <Carousel
              setApi={(carouselApi) => {
                setApi(carouselApi);
                carouselApi?.on('select', onSelect);
              }}
              className="w-full"
            >
              <CarouselContent>
                {slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col gap-3">
                      {(slide.image || slide.video) && (
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                          {slide.video ? (
                            <video
                              src={slide.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-contain bg-muted"
                            />
                          ) : (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={slide.image}
                              alt={`${title} ${index + 1}`}
                              className="w-full h-full object-contain bg-muted"
                            />
                          )}
                        </div>
                      )}
                      {slide.description && (
                        <div className="text-sm text-muted-foreground leading-relaxed">{slide.description}</div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {count > 1 && (
                <>
                  <CarouselPrevious className="-left-3 sm:-left-4" />
                  <CarouselNext className="-right-3 sm:-right-4" />
                </>
              )}
            </Carousel>
            {count > 1 && (
              <div className="flex justify-center gap-1.5 mt-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === current ? 'w-6 bg-primary' : 'w-1.5 bg-muted-foreground/30'
                    }`}
                    onClick={() => api?.scrollTo(index)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tech) => (
              <Badge key={tech} className="text-xs border border-border px-2 h-6" variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link key={idx} href={link.href} target="_blank" rel="noopener noreferrer">
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  <span className="[&>svg]:h-3.5 [&>svg]:w-3.5">{link.icon}</span>
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
