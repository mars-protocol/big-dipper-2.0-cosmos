import { useGetBalances } from '@src/hooks/use_get_balance';
import { formatNumber } from '@utils/format_token';
import Big from 'big.js';
import numeral from 'numeral';
import {
  useEffect, useState,
} from 'react';

export const formatMarket = (data: {
  marketCap: number;
  communityPool: TokenUnit;
  supply: TokenUnit;
  inflation: number;
  apr: number;
}) => {
  const exludedItems = [null, 0];
  const marketCap = exludedItems.includes(data.marketCap)
    ? 'N/A'
    : `$${formatNumber(data.marketCap.toString(), 2)}`;

  const safetyFundBalances = useGetBalances();
  const [safetyFund, setSafetyFund] = useState<number | undefined>();
  useEffect(() => {
    const safetyFundResult = async () => {
      const safetyFundInfo = await safetyFundBalances;
      const safetyFundValue = Number(safetyFundInfo) / 1000000;
      setSafetyFund(safetyFundValue);
    };
    if (!safetyFund) safetyFundResult();
  }, [safetyFundBalances]);

  return [
    {
      key: 'marketCap',
      data: marketCap,
    },
    {
      key: 'inflation',
      data: `${formatNumber(Big(data.inflation).times(100).toPrecision(), 0)}%`,
    },
    {
      key: 'apr',
      data: `${formatNumber(Big(data.apr).times(100).toPrecision(), 2)}%`,
    },
    {
      key: 'safetyFund',
      data: `${numeral(safetyFund).format('0,0')} USDC`,
    },
    {
      key: 'supply',
      data: `${formatNumber(
        data.supply.value,
        2,
      )} ${data.supply.displayDenom.toUpperCase()}`,
    },
  ];
};
