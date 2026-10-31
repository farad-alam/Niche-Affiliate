import { stegaClean } from '@sanity/client/stega';
import { Image } from 'next-sanity/image';

import { urlForImage } from '@/lib/sanity/client/utils';

interface CoverImageProps {
  image: { asset?: { _ref?: string }; alt?: string };
  priority?: boolean;
  /**
   * Used when the image has no editor-supplied alt text in Sanity, so we
   * never ship an empty alt attribute (bad for accessibility and flagged
   * by SEO audits). Pass something descriptive, e.g. the post/page title.
   */
  fallbackAlt?: string;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority, fallbackAlt } = props;

  const image = source?.asset?._ref ? (
    <Image
      className="rounded-2xl shadow-md transition-shadow object-cover"
      fill={true}
      alt={stegaClean(source?.alt) || fallbackAlt || ''}
      src={
        urlForImage(source)
          ?.height(720)
          .width(1280)
          .auto('format')
          .url() as string
      }
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: '100%' }} />
  );

  return <div className="relative aspect-video">{image}</div>;
}
