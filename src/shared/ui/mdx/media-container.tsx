'use client';

/* eslint-disable @next/next/no-img-element */
import { XIcon } from 'lucide-react';
import { Dialog as DialogPrimitive, VisuallyHidden } from 'radix-ui';
import { useState } from 'react';
import { Dialog, DialogClose, DialogOverlay, DialogPortal } from '@/shared/ui/dialog';

interface MediaContainerProps {
  src: string;
  alt?: string;
  type?: 'image' | 'video';
  className?: string;
}

export function MediaContainer({ src, alt = '', type = 'image', className = '' }: MediaContainerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`ring-4 ring-muted w-full rounded-lg overflow-hidden ${className}`}>
        {type === 'image' ? (
          <img src={src} alt={alt} className="w-full cursor-zoom-in" onClick={() => setOpen(true)} />
        ) : (
          <video src={src} className="block w-full" controls />
        )}
      </div>

      {type === 'image' && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogPortal>
            <DialogOverlay className="bg-black/80" />
            <DialogPrimitive.Content
              className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none"
              onClick={() => setOpen(false)}
            >
              <VisuallyHidden.Root>
                <DialogPrimitive.Title>{alt || '이미지 크게 보기'}</DialogPrimitive.Title>
              </VisuallyHidden.Root>
              <img
                src={src}
                alt={alt}
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <DialogClose className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white opacity-80 hover:opacity-100 transition-opacity">
                <XIcon className="size-5" />
                <span className="sr-only">닫기</span>
              </DialogClose>
            </DialogPrimitive.Content>
          </DialogPortal>
        </Dialog>
      )}
    </>
  );
}
