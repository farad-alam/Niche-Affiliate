import { clientEnv } from '@/env/clientEnv';
import { getBaseUrl as getVercelDerivedBaseUrl } from '@/utils/getBaseUrl';
import type { LinkFragmentType } from './sanity/queries/fragments/fragment.types';

/**
 * Site base URL used for canonical links, Open Graph URLs, etc.
 *
 * NEXT_PUBLIC_SITE_URL should be set to the real production domain
 * (e.g. https://www.pethygienelab.com) in the Vercel project settings.
 * If it's ever left unset, or still holds a template placeholder value
 * such as "https://your-vercel-url.vercel.app" that was never replaced
 * with the real domain, we fall back to the Vercel-derived production
 * URL instead of silently shipping a dead/placeholder canonical host.
 */
export const getBaseURL = () => {
  const configured = clientEnv.NEXT_PUBLIC_SITE_URL;
  const looksLikePlaceholder =
    !configured || configured.includes('your-vercel-url');

  return looksLikePlaceholder ? getVercelDerivedBaseUrl() : configured;
};

/**
 * Generic function to generate a link to a document based on its type and slug
 */
export const getDocumentLink = (
  { _type, slug }: { _type: string; slug: string | null },
  absolute: boolean = false
) => {
  const linkBase = absolute ? getBaseURL() : '';

  switch (_type) {
    case 'page':
      return `${linkBase}/${slug}`;
    case 'post':
      return `${linkBase}/blog/${slug}`;
    case 'category':
      return `${linkBase}/category/${slug}`;
    case 'homePage':
      return `${linkBase}/`;
    default:
      return `${linkBase}/`;
  }
};

export const getLinkByLinkObject = (
  link: Pick<LinkFragmentType, 'type' | 'external' | 'internal'>
) => {
  const { type, external, internal } = link;

  if (type === 'external') {
    return external || '';
  }

  if (type === 'internal' && internal) {
    return getDocumentLink(internal, false);
  }
};
