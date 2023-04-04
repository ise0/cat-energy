import type { AppProps } from 'next/app';
import Head from 'next/head';
import './app/styles/index.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Cat energy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <meta name="description" content="some desc...." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
