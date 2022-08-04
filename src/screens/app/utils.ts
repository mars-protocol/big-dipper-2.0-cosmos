import { generalConfig } from '@configs';

export const OPEN_GRAPH_SEO = {
  type: 'website',
  site_name: 'Mars Hub Blockexplorer',
  images: [
    {
      url: generalConfig.previewImage,
      width: 800,
      height: 600,
      alt: 'Preview Photo',
    },
  ],
};

export const TWITTER_SEO = {
  cardType: 'summary_large_image',
};

export const ADDITIONAL_LINK_TAGS_SEO = [
  {
    rel: 'apple-touch-icon',
    href: '/icons/apple-touch-icon.png',
    sizes: '180x180',
  },
  {
    rel: 'icon',
    href: '/icons/favicon.svg',
  },
  {
    rel: 'manifest',
    href: '/icons/site.webmanifest',
  },
  {
    rel: 'mask-icon',
    href: '/icons/safari-pinned-tab.svg',
    color: '#5bbad5',
  },
];

export const ADDITIONAL_META_TAGS = [
  {
    property: 'viewport',
    content: 'minimum-scale=1, initial-scale=1, width=device-width',
  },
  {
    property: 'msapplication-TileColor',
    content: '#da532c',
  },
  {
    name: 'msapplication-config',
    content: '/icons/browserconfig.xml',
  },
  {
    name: 'theme-color',
    content: '#ffffff',
  },
];
