import { useGetBalances } from '@src/hooks/use_get_balance';
import { readMarket } from '@src/recoil/market';
import { useDataBlocks } from '@src/screens/home/components/data_blocks/hooks';
import { useTokenomics } from '@src/screens/home/components/tokenomics/hooks';
import { formatNumber } from '@utils/format_token';
import numeral from 'numeral';
import {
  useEffect, useState,
} from 'react';
import { useRecoilValue } from 'recoil';

export const formatMarket = (data: {
  marketCap: number;
  communityPool: TokenUnit;
  supply: TokenUnit;
  inflation: number;
  apr: number;
}) => {
  const exludedItems = [null, 0];

  const { state } = useTokenomics();
  const { state: dataBlocks } = useDataBlocks();
  const vestingBalances = useGetBalances(
    'mars14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9smxjtde',
  );
  const incentivesBalances = useGetBalances(
    'mars1krxwf5e308jmclyhfd9u92kp369l083wvxkp6n',
  );
  const marketState = useRecoilValue(readMarket);

  const [vesting, setVesting] = useState<number | undefined>();
  const [incentives, setIncentives] = useState<number | undefined>();

  useEffect(() => {
    const vestingResult = async () => {
      const vestingInfo = await vestingBalances;
      const vestingValue = Number(vestingInfo) / 1000000;
      setVesting(vestingValue);
    };
    const incentivesResult = async () => {
      const incentivesInfo = await incentivesBalances;
      const incentivesValue = Number(incentivesInfo) / 1000000;
      setIncentives(incentivesValue);
    };

    if (!vesting) vestingResult();
    if (!incentives) incentivesResult();
  }, [vestingBalances, incentivesBalances]);

  const communityPool = Number(marketState.communityPool.value);
  const community = communityPool + incentives;
  const circulating = state.total - community - vesting;
  const { price } = dataBlocks;

  const marketCap = exludedItems.includes(data.marketCap)
    ? 'N/A'
    : `$${formatNumber((circulating * (price ?? 0)).toString(), 2)}`;

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
      key: 'circulating',
      data: `${formatNumber(circulating.toString(), 0)} MARS`,
    },
    {
      key: 'price',
      data: price !== null ? `$${numeral(price).format('0.00')}` : 'N/A',
    },
    {
      key: 'marketCap',
      data: marketCap,
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
