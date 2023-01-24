const REDBANK_URL = 'https://app.marsprotocol.io';
const COUNCIL_URL = 'https://council.marsprotocol.io';
const BLOCK_EXPLORER = 'https://explorer.marsprotocol.io';

const DOCS_URL = 'https://docs.marsprotocol.io';
const WHITEPAPER_URL = 'https://whitepaper.marsprotocol.io';
const TERMS_URL = 'https://docs.marsprotocol.io/docs/overview/legal/terms-of-service';

const BLOG_URL = 'https://blog.marsprotocol.io';
const FORUM_URL = 'https://forum.marsprotocol.io';

export const footerLinks = [
  {
    key: 'mars',
    links: [
      {
        key: 'redBank',
        url: REDBANK_URL,
      },
      {
        key: 'council',
        url: COUNCIL_URL,
      },
      {
        key: 'blockExplorer',
        url: BLOCK_EXPLORER,
      },
    ],
  },
  {
    key: 'documentation',
    links: [
      {
        key: 'docs',
        url: DOCS_URL,
      },
      {
        key: 'whitepaper',
        url: WHITEPAPER_URL,
      },
      {
        key: 'termsOfService',
        url: TERMS_URL,
      },
    ],
  },
  {
    key: 'community',
    links: [
      {
        key: 'blog',
        url: BLOG_URL,
      },
      {
        key: 'forum',
        url: FORUM_URL,
      },
    ],
  },
];
