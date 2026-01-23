import category from './documents/category';
import page from './documents/page';
import author from './documents/author';
import post from './documents/post';
import blockContent from './objects/blockContent';
import button from './objects/button';
import link from './objects/link';
import menuItem from './objects/menuItem';
import card from './objects/sections/card';
import cardGrid from './objects/sections/cardGrid';
import cta from './objects/sections/cta';
import divider from './objects/sections/divider';
import hero from './objects/sections/hero';
import mediaText from './objects/sections/mediaText';
import postList from './objects/sections/postList';
import subscribe from './objects/sections/subscribe';
import seoTypes from './objects/seo';
// Affiliate objects
import comparisonTable from './objects/comparisonTable';
import faqItem from './objects/faqItem';
import faqSection from './objects/faqSection';
import productBox from './objects/productBox';
import prosConsList from './objects/prosConsList';
import videoEmbed from './objects/videoEmbed';
import blogPage from './singletons/blogPage';
import homePage from './singletons/homePage';
import settings from './singletons/settings';
// Affiliate pages
import aboutPage from './singletons/aboutPage';
import affiliateDisclosure from './singletons/affiliateDisclosure';
import contactPage from './singletons/contactPage';
import privacyPolicy from './singletons/privacyPolicy';
import termsOfService from './singletons/termsOfService';

export const schemaTypes = [
  // Singletons
  settings,
  homePage,
  blogPage,
  // Affiliate pages
  aboutPage,
  privacyPolicy,
  termsOfService,
  affiliateDisclosure,
  contactPage,

  // Documents
  page,
  post,
  author,
  category,

  // Sections
  cta,
  hero,
  mediaText,
  postList,
  card,
  cardGrid,
  divider,
  subscribe,

  // Objects
  blockContent,
  link,
  button,
  menuItem,
  // Affiliate objects
  productBox,
  faqItem,
  faqSection,
  prosConsList,
  comparisonTable,
  videoEmbed,
  ...seoTypes,
];
