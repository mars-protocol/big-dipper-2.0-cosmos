import MarsLogo from '@assets/mars-red.svg';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useStyles } from './styles';

const Networks:React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const {
    t,
  } = useTranslation('common');

  const openUrl = (url: string) => {
    window.open(url, '_self');
  };

  return (
    <div className={className}>
      <div className={classes.network} role="button" onClick={() => { openUrl('https://explorer.marsprotocol.io/'); }}>
        <div className={classes.image}><MarsLogo /></div>
        <div className={classes.copy}>
          <Typography variant="body2" className={classes.label}>
            {t('mainnet')}
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {t('chainId', { id: 'mars-1' })}
          </Typography>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.network} role="button" onClick={() => { openUrl('https://testnet-explorer.marsprotocol.io/'); }}>
          <div className={classes.image}><MarsLogo /></div>
          <div className={classes.copy}>
            <Typography variant="body2" className={classes.label}>
              {t('testnet')}
            </Typography>
            <Typography variant="body2" className={classes.description}>
              {t('chainId', { id: 'ares-1' })}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networks;
