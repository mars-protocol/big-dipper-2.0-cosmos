const REDBANK_URL = 'https://app.marsprotocol.io';
const FIELDS_URL = 'https://app.marsprotocol.io/#/fields';
const COUNCIL_URL = 'https://council.marsprotocol.io';
const BLOCK_EXPLORER = 'https://explorer.marsprotocol.io';

const DOCS_URL = 'https://docs.marsprotocol.io';
const LITEPAPER_URL = 'https://mars-protocol.medium.com/mars-protocol-litepaper-1-0-60d1b024405a';
const TERMS_URL = 'https://docs.marsprotocol.io/mars-protocol/terms-of-service/mars-terms-of-service';

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
        key: 'fieldsOfMars',
        url: FIELDS_URL,
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
        key: 'litepaper',
        url: LITEPAPER_URL,
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
