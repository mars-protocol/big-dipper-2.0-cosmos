import {
  useState,
} from 'react';
import * as R from 'ramda';
import { useRouter } from 'next/router';
import {
  useProposalDetailsQuery,
  ProposalDetailsQuery,
} from '@graphql/types/general_types';
import DOMPurify from 'dompurify';
import { ProposalState } from './types';

export const useProposalDetails = () => {
  const router = useRouter();
  const [state, setState] = useState<ProposalState>({
    loading: true,
    exists: true,
    overview: {
      proposer: '',
      content: '',
      title: '',
      id: 0,
      description: '',
      summary: '',
      status: '',
      submitTime: '',
      depositEndTime: '',
      votingStartTime: '',
      votingEndTime: '',
      authors: '',
      forumURL: '',
      voteContext: '',
    },
  });

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  // ==========================
  // fetch data
  // ==========================
  useProposalDetailsQuery({
    variables: {
      proposalId: R.pathOr('', ['query', 'id'], router),
    },
    onCompleted: (data) => {
      handleSetState(formatProposalQuery(data));
    },
  });

  // ==========================
  // parsers
  // ==========================

  const formatProposalQuery = (data: ProposalDetailsQuery) => {
    const stateChange: any = {
      loading: false,
    };

    if (!data.proposal.length) {
      stateChange.exists = false;
      return stateChange;
    }

    // =========================
    // overview
    // =========================
    const formatOverview = () => {
      const DEFAULT_TIME = '0001-01-01T00:00:00';
      let votingStartTime = R.pathOr(DEFAULT_TIME, ['proposal', 0, 'votingStartTime'], data);
      votingStartTime = votingStartTime === DEFAULT_TIME ? null : votingStartTime;
      let votingEndTime = R.pathOr(DEFAULT_TIME, ['proposal', 0, 'votingEndTime'], data);
      votingEndTime = votingEndTime === DEFAULT_TIME ? null : votingEndTime;

      const metadata = JSON.parse(R.pathOr('', ['proposal', 0, 'metadata'], data));

      const overview = {
        proposer: R.pathOr('', ['proposal', 0, 'proposer'], data),
        content: R.pathOr('', ['proposal', 0, 'messages'], data),
        title: (metadata.title === '' ? 'No title provided' : DOMPurify.sanitize(metadata.title)),
        id: R.pathOr('', ['proposal', 0, 'proposalId'], data),
        description: DOMPurify.sanitize(metadata.details),
        summary: (metadata.summary === '' || !metadata.summary ? 'No summary provided' : DOMPurify.sanitize(metadata.summary)),
        status: R.pathOr('', ['proposal', 0, 'status'], data),
        submitTime: R.pathOr('', ['proposal', 0, 'submitTime'], data),
        depositEndTime: R.pathOr('', ['proposal', 0, 'depositEndTime'], data),
        votingStartTime,
        votingEndTime,
        authors: DOMPurify.sanitize(metadata.authors),
        forumURL: metadata.proposal_forum_url,
        voteContext: DOMPurify.sanitize(metadata.vote_option_context),
      };

      return overview;
    };

    stateChange.overview = formatOverview();

    return stateChange;
  };

  return {
    state,
  };
};
