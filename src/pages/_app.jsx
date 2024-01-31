import { NextIntlClientProvider } from 'next-intl';
import localFont from 'next/font/local';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { AudioProvider } from '@/components/AudioProvider';
import { Layout } from '@/components/Layout';
import '@/styles/loading-whiskey.css';
import '@/styles/tailwind.css';

const satoshi = localFont({
  src: './Satoshi-Variable.woff2',
});

export default function App({ Component, pageProps }) {
  return (
    <NextIntlClientProvider locale="en-US" timeZone="America/New_York">
      <AudioProvider>
        <Layout>
          <style jsx global>
            {`
              :root {
                --font-satoshi: ${satoshi.style.fontFamily};
              }
            `}
          </style>
          <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </Layout>
      </AudioProvider>
    </NextIntlClientProvider>
  );
}
