import FooterLogo from '@assets/mars-protocol.svg';
import { Typography } from '@material-ui/core';
import { readMarket } from '@recoil/market';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { useStyles } from './styles';
import { formatMarket } from './utils';

const TitleBar: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('common');
  const classes = useStyles();
  const marketState = useRecoilValue(readMarket);

  const market = formatMarket(marketState);

  return (
    <div className={classnames(className, classes.root)}>
      <FooterLogo className={classes.logo} />
      <div className={classes.content}>
        {market.map((x) => (
          <div key={x.key} className={classes.item}>
            <Typography variant="body1" className="label">
              {t(x.key)}
            </Typography>
            <Typography variant="body1">{x.data}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
