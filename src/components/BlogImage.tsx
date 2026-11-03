import Image, { type StaticImageData } from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

type BlogImageProps = Omit<ComponentPropsWithoutRef<typeof Image>, 'src' | 'onLoad' | 'onError'> & {
  src?: string | StaticImageData | null;
  containerClassName?: string;
};

export default function BlogImage({
  src,
  alt = '',
  className,
  containerClassName,
  quality = 70,
  ...props
}: BlogImageProps) {
  if (!src) {
    return null;
  }

  const imageClassName = [
    className ?? '',
    props.fill ? 'h-full w-full' : '',
    'object-cover',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={[
        'relative block overflow-hidden',
        props.fill ? 'h-full w-full' : '',
        containerClassName ?? '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Image
        {...props}
        src={src}
        alt={alt}
        className={imageClassName}
        quality={quality}
      />
    </span>
  );
}
