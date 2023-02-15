import { Layout } from '@components';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { List } from './components';
import { useProposals } from './hooks';
import { useStyles } from './styles';

const Proposals = () => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const {
    state, loadMoreItems, itemCount, isItemLoaded,
  } = useProposals();

  return (
    <>
      <NextSeo
        title={t('proposals')}
        openGraph={{
          title: t('proposals'),
        }}
      />
      <Layout navTitle={t('proposals')} className={classes.root}>
        <List
          items={state.items}
          rawDataTotal={state.rawDataTotal}
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        />
      </Layout>
    </>
  );
};

export default Proposals;
