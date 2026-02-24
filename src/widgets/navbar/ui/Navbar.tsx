'use client';

import { NAVBAR_ITEMS, SOCIAL_LINKS } from '@/shared/config';
import { Dock, DockIcon } from '@/shared/ui/dock';
import { ModeToggle } from '@/shared/ui/mode-toggle';
import { Separator } from '@/shared/ui/separator';
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from '@/shared/ui/tooltip';

const DOCK_ICON_CLASS =
  'rounded-3xl cursor-pointer size-full bg-background p-0 text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors';

const TOOLTIP_CLASS =
  'rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]';

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {NAVBAR_ITEMS.map((item) => {
          const isExternal = item.href.startsWith('http');
          return (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  <DockIcon className={DOCK_ICON_CLASS}>
                    <item.icon className="size-full rounded-sm overflow-hidden object-contain" />
                  </DockIcon>
                </a>
              </TooltipTrigger>
              <TooltipContent side="top" sideOffset={8} className={TOOLTIP_CLASS}>
                <p>{item.label}</p>
                <TooltipArrow className="fill-primary" />
              </TooltipContent>
            </Tooltip>
          );
        })}
        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
        {Object.entries(SOCIAL_LINKS)
          .filter(([, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith('http');
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  >
                    <DockIcon className={DOCK_ICON_CLASS}>
                      <IconComponent className="size-full rounded-sm overflow-hidden object-contain" />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8} className={TOOLTIP_CLASS}>
                  <p>{name}</p>
                  <TooltipArrow className="fill-primary" />
                </TooltipContent>
              </Tooltip>
            );
          })}
        <Separator orientation="vertical" className="h-2/3 m-auto w-px bg-border" />
        <Tooltip>
          <TooltipTrigger asChild>
            <DockIcon className={DOCK_ICON_CLASS}>
              <ModeToggle className="size-full cursor-pointer" />
            </DockIcon>
          </TooltipTrigger>
          <TooltipContent side="top" sideOffset={8} className={TOOLTIP_CLASS}>
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </Dock>
    </div>
  );
}
