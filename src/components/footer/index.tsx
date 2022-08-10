import React from 'react';
import classnames from 'classnames';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import {
  Divider,
  Typography,
} from '@material-ui/core';
import {
  generalConfig,
} from '@src/configs';
import { SocialMedia } from './components';
import {
  footerLinks,
} from './utils';
import { useStyles } from './styles';

const Footer: React.FC<{className?: string}> = ({ className }) => {
  const { t } = useTranslation();
  const classes = useStyles();

  // ============================
  // Footer
  // ============================
  const year = new Date().getFullYear();

  return (
    <div className={classnames(className, classes.root)}>
      <div className={classnames('footer')}>

        {/* ============================= */}
        {/* links */}
        {/* ============================= */}
        <div className="footer__links">
          {footerLinks.map((group, index) => {
            return (
              <div key={group.key} className={`${group.key} links__group`}>
                <h3>{t(`common:${group.key}`)}</h3>
                <>
                  {
                    group.links.map((x) => {
                      return (
                        <a
                          key={x.url}
                          href={x.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t(`common:${x.key}`)}
                        </a>
                      );
                    })
                  }
                </>
                <>
                  {index === 2 && (
                    <div className="footer__social">
                      <SocialMedia />
                    </div>
                  )}
                </>
              </div>

            );
          })}
          {/* ============================= */}
          {/* social */}
          {/* ============================= */}

        </div>
      </div>
      <Divider />
      <div className="footer__closing--container">
        <Typography className="footer__closing--text">
          {/* ============================= */}
          {/*
            WARNING: WE ARE USING APACHE 2.0 LICENSE
            DO YOUR RESEARCH BEFORE TRYING TO REMOVE/ EDIT THE FOLLOWING LINE(S)
            RESPECT OPEN SOURCE!!
          */}
          {/* ============================= */}
          <Trans
            i18nKey="common:copyright"
            components={[
              (
                // eslint-disable-next-line
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://raw.githubusercontent.com/forbole/big-dipper-2.0-cosmos/master/LICENSE"
                />
              ),
            ]}
            values={{
              name: generalConfig.maintainer.name,
            }}
          />
          {' '}
          {year}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
