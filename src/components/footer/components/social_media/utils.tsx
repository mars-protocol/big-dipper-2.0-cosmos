import {
  TelegramSVG, TwitterSVG,
} from '@src/components/svg/index#';
import React from 'react';

export const socialMediaLinks:{
  component: React.ReactNode;
  className: string;
  url: string;
}[] = [
  {
    component: <TelegramSVG />,
    className: 'telegram',
    url: 'https://t.me/forbole',
  },
  {
    component: <TwitterSVG />,
    className: 'twitter',
    url: 'https://twitter.com/bigdipperlive',
  },
];
