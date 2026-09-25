import Image from 'next/image';

/**
 * @param {{
 *   image: import('@/data/projects').ProjectImage,
 *   className?: string,
 *   priority?: boolean,
 *   sizes?: string
 * }} props
 */
export function ProjectScreenshot({
  image,
  className = '',
  priority = false,
  sizes = '(min-width: 1024px) 58vw, 100vw',
}) {
  return (
    <figure
      className={`border-border bg-surface relative overflow-hidden rounded-[var(--radius-card)] border shadow-[var(--shadow-lift)] ${className}`}
    >
      <div className="border-border bg-surface-soft flex h-9 items-center gap-1.5 border-b px-4">
        <span className="h-2 w-2 rounded-full bg-[#ff7b72]" />
        <span className="h-2 w-2 rounded-full bg-[#e3b341]" />
        <span className="h-2 w-2 rounded-full bg-[#58dfcf]" />
        <span className="bg-border ml-3 h-1.5 w-24 rounded-full" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top"
        />
      </div>
      <figcaption className="text-fg-muted bg-surface/95 absolute right-3 bottom-3 rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] uppercase shadow-lg backdrop-blur-sm">
        {image.label}
      </figcaption>
    </figure>
  );
}
