import {
  Dialog, DialogContent, DialogTitle, IconButton, Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { Close as CloseIcon } from '@material-ui/icons';
import MarsLogo from '@assets/mars-red.svg';
import { useStyles } from './styles';

const NetworkList: React.FC<{
  open: boolean;
  handleCancel: () => void;
}> = ({
  open, handleCancel,
}) => {
  const classes = useStyles();
  const {
    t,
  } = useTranslation('common');

  const openUrl = (url: string) => {
    window.open(url, '_self');
  };
  return (
    <div>
      <Dialog
        maxWidth="md"
        onClose={handleCancel}
        open={open}
        className={classes.dialog}
      >
        <DialogTitle disableTypography className={classes.header}>
          <div className={classes.title}>
            <Typography variant="h2">
              {t('selectANetwork')}
            </Typography>
          </div>
          <IconButton
            aria-label="close"
            onClick={handleCancel}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
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
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NetworkList;
