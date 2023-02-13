import {
  ProposalsQuery,
  useProposalsQuery,
} from '@graphql/types/general_types';
import DOMPurify from 'dompurify';
import * as R from 'ramda';
import { useState } from 'react';
import { ProposalsState } from './types';

export const useProposals = () => {
  const [state, setState] = useState<ProposalsState>({
    loading: true,
    exists: true,
    items: [],
    hasNextPage: false,
    isNextPageLoading: false,
    rawDataTotal: 0,
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ================================
  // proposals query
  // ================================

  const proposalQuery = useProposalsQuery({
    variables: {
      limit: 50,
      offset: 0,
    },
    onCompleted: (data) => {
      const newItems = R.uniq([...state.items, ...formatProposals(data)]);
      handleSetState({
        items: newItems,
        hasNextPage: newItems.length < state.items.length,
        isNextPageLoading: false,
        rawDataTotal: state.items.length,
      });
    },
  });

  const loadNextPage = async () => {
    handleSetState({
      isNextPageLoading: true,
    });
    // refetch query
    await proposalQuery
      .fetchMore({
        variables: {
          offset: state.items.length,
          limit: 50,
        },
      })
      .then(({ data }) => {
        const newItems = R.uniq([...state.items, ...formatProposals(data)]);
        // set new state
        handleSetState({
          items: newItems,
          isNextPageLoading: false,
          hasNextPage: newItems.length < state.items.length,
          rawDataTotal: state.items.length,
        });
      });
  };

  const formatProposals = (data: ProposalsQuery) => {
    return data.proposals.map((x) => {
      const metadata = JSON.parse(x.metadata);
      return {
        description:
          metadata.summary === '' || !metadata.summary
            ? 'No summary provided'
            : DOMPurify.sanitize(metadata.summary),
        id: x.proposalId,
        title:
          metadata.title === ''
            ? 'No title available'
            : DOMPurify.sanitize(metadata.title),
        status: x.status,
      };
    });
  };

  const itemCount = state.hasNextPage
    ? state.items.length + 1
    : state.items.length;
  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.items.length;

  return {
    state,
    loadNextPage,
    itemCount,
    loadMoreItems,
    isItemLoaded,
  };
};
