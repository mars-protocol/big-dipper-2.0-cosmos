import {
  DiscordSVG,
  GithubSVG,
  MediumSVG,
  RedditSVG,
  TelegramSVG, TwitterSVG, YoutTubeSVG,
} from '@src/components/svg/index#';
import React from 'react';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TwitterSVG />,
    className: 'twitter',
    url: 'https://twitter.marsprotocol.io',
  },
  {
    component: <MediumSVG />,
    className: 'medium',
    url: 'https://medium.marsprotocol.io',
  },
  {
    component: <DiscordSVG />,
    className: 'discord',
    url: 'https://discord.marsprotocol.io',
  },
  {
    component: <RedditSVG />,
    className: 'reddit',
    url: 'https://reddit.marsprotocol.io',
  },
  {
    component: <TelegramSVG />,
    className: 'telegram',
    url: 'https://telegram.marsprotocol.io',
  },
  {
    component: <YoutTubeSVG />,
    className: 'youtube',
    url: 'https://youtube.marsprotocol.io',
  },
  {
    component: <GithubSVG />,
    className: 'github',
    url: 'https://github.marsprotocol.io',
  },
];
