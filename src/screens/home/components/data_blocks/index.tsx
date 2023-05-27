import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import React from 'react';
import { SingleBlock } from './components';
import { useDataBlocks } from './hooks';
import { useStyles } from './styles';

const DataBlocks: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('home');
  const classes = useStyles();
  const { state } = useDataBlocks();
  const priceDom = state.price !== null
    ? [
      <div>
        $
        {numeral(state.price).format('0.00')}
        <span className="sub">{state.priceDecimals}</span>
      </div>,
    ]
    : 'N/A';
  const data = [
    {
      key: t('latestBlock'),
      value: numeral(state.blockHeight).format('0,0'),
      className: classes.blockHeight,
    },
    {
      key: t('averageBlockTime'),
      value: `${numeral(state.blockTime).format('0.00')} s`,
      className: classes.blockTime,
    },
    {
      key: t('price'),
      value: priceDom,
      className: classes.price,
    },
    {
      key: t('activeValidators'),
      value: numeral(state.validators.active).format('0,0'),
      description: t('outOfValidators', {
        count: numeral(state.validators.total).format('0,0'),
      }),
      className: classes.validators,
    },
  ];

  return (
    <div className={classnames(classes.root, className)}>
      {data.map((x) => (
        <SingleBlock
          key={x.key}
          label={x.key}
          value={x.value}
          description={x.description}
          className={x.className}
        />
      ))}
    </div>
  );
};

export default DataBlocks;
