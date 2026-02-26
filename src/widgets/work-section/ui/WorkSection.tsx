'use client';

/* eslint-disable @next/next/no-img-element */
import dayjs from 'dayjs';
import { Building2, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { DATA } from '@/shared/config';
import { cn, getDuration } from '@/shared/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/ui/accordion';
import { Badge } from '@/shared/ui/badge';

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none flex items-center justify-center">
        <Building2 className="size-4 md:size-5 text-muted-foreground" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="multiple" className="w-full grid gap-6">
      {DATA.work.map((work) => (
        <AccordionItem key={work.company} value={work.company} className="w-full border-b-0 grid gap-2">
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex items-center gap-x-3 justify-between w-full text-left">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {work.company}
                    <span className="relative inline-flex items-center w-3.5 h-3.5">
                      <ChevronRight
                        className={cn(
                          'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out',
                          'opacity-100',
                          'group-hover:translate-x-1',
                          'group-data-[state=open]:opacity-0'
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          'absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200',
                          'opacity-0 rotate-0',
                          'group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180'
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">{work.title}</div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {work.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-[10px] px-1.5 py-0 h-4 font-normal">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                <span>
                  {dayjs(work.start).format('YYYY.MM')} - {work.end ? dayjs(work.end).format('YYYY.MM') : 'Present'}
                  <br />({getDuration(work.start, work.end)})
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 ml-13 text-xs sm:text-sm text-muted-foreground">
            {work.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
