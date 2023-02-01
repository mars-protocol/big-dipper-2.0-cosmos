import axios from 'axios';

interface BalancesResponse {
  balances?: AssetResponse[]
  balance?: AssetResponse
  pagination: Pagination
}

interface AssetResponse {
  denom: string
  amount: string
}

interface Pagination {
  nextKey: null | number
  total: string
}

export const useGetBalances = async (address?: string): Promise<BalancesResponse | undefined> => {
  const restUrl = process.env.NEXT_PUBLIC_CHAIN_TYPE === 'mainnet' ? 'https://rest.marsprotocol.io' : 'https://testnet-rest.marsprotocol.io';
  const URL = address ? `${restUrl}/cosmos/bank/v1beta1/balances/${address}/by_denom?denom=umars` : `${restUrl}/mars/safety/v1beta1/balances`;

  return axios({
    url: URL,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      const result = address ? response.data.balance.amount : response.data.balances[0]?.amount;
      return result || 0;
    })
    .catch((err) => console.error(err));
};
