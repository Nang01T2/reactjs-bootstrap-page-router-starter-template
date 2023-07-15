import '@/styles/globals.css';
import '@/styles/theme.scss';

import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import * as nextI18nNextConfig from '../../next-i18next.config.js';
import { NextPageWithLayout } from '../types';
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(App, nextI18nNextConfig);