/* eslint-disable @next/next/no-img-element */

interface MediaContainerProps {
  src: string;
  alt?: string;
  type?: 'image' | 'video';
  className?: string;
}

export function MediaContainer({ src, alt = '', type = 'image', className = '' }: MediaContainerProps) {
  return (
    <div className={`ring-4 ring-muted w-full rounded-lg overflow-hidden ${className}`}>
      {type === 'image' ? (
        <img src={src} alt={alt} className="w-full" />
      ) : (
        <video src={src} className="block w-full" controls />
      )}
    </div>
  );
}
