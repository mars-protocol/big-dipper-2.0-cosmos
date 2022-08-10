import React from 'react';
import { socialMediaLinks } from './utils';
import { useStyles } from './styles';

const SocialMedia = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} social-media`}>
      {socialMediaLinks.map((x) => {
        return (
          <a
            key={x.className}
            href={x.url}
            target="_blank"
            rel="noreferrer"
            className={`media ${x.className}`}
          >
            {x.component}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
