import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import type { AppItemOverview } from 'types/client/apps';

import marketplaceApps from 'data/marketplaceApps.json';
import { apos } from 'lib/html-entities';
import EmptySearchResult from 'ui/apps/EmptySearchResult';
import MarketplaceApp from 'ui/pages/MarketplaceApp';
import Page from 'ui/shared/Page/Page';

const AppPage: NextPage = () => {
  const router = useRouter();
  const [ isLoading, setIsLoading ] = useState(true);
  const [ app, setApp ] = useState<AppItemOverview | undefined>(undefined);

  const { id }: { id?: string } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    const app = marketplaceApps.find((app) => app.id === id);
    setApp(app);
    setIsLoading(false);
  }, [ id ]);

  if (app || isLoading) {
    return (
      <>
        <Head><title>{ app ? `Blockscout | ${ app.title }` : 'Loading app..' }</title></Head>
        <MarketplaceApp app={ app } isLoading={ isLoading }/>
      </>
    );
  }

  return (
    <Page>
      <Head><title>Blockscout | No app found</title></Head>
      <EmptySearchResult text={ `Couldn${ apos }t find an app.` }/>
    </Page>
  );
};

export default AppPage;

export { getStaticPaths } from 'lib/next/apps/getStaticPaths';
export { getStaticProps } from 'lib/next/getStaticProps';