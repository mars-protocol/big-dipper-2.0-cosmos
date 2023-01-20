import Button from '@material-ui/core/Button';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { useStyles } from './styles';

const COOKIE_POLICY_URL = 'https://docs.marsprotocol.io/mars-protocol/terms-of-service/mars-cookie-policy';
const PRIVACY_POLICY_URL = 'https://docs.marsprotocol.io/mars-protocol/terms-of-service/mars-privacy-policy';

const CookieConsent = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const hasCookie = document.cookie.match(new RegExp('(^| )viewed_cookie_policy=([^;]+)'));
  const [cookieConsent, setCookieConsent] = useState<boolean>(!!hasCookie);
  const createCookie = () => {
    setCookieConsent(true);
    document.cookie = 'viewed_cookie_policy=yes; path=/';
  };

  return cookieConsent ? null : (
    <section className={classes.root}>
      <div className="cookie_consent">
        <div className="body">
          <p className="info">
            <Trans
              i18nKey="common:cookieConsent"
              components={[<a
                href={PRIVACY_POLICY_URL}
                target="_blank"
                rel="nofollow noreferrer"
                title={t('common:privacyPolicy')}
                aria-label={t('common:privacyPolicy')}
              />,
                <a
                  href={COOKIE_POLICY_URL}
                  target="_blank"
                  rel="nofollow noreferrer"
                  title={t('common:cookiePolicy')}
                  aria-label={t('common:cookiePolicy')}
                />]}
            />
          </p>
          <Button
            role="button"
            aria-label={t('common:understood')}
            onClick={createCookie}
          >
            {t('common:understood')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;
