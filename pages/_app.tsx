import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps): ReactNode {
  return (
    <>
      <Script
        src="https://static.cloudflareinsights.com/beacon.min.js"
        strategy="worker"
        data-cf-beacon='{"token": "5d9623f456704b5d8f9894ae832dec76"}'
      />

      <Script
        strategy="worker"
        src="https://www.googletagmanager.com/gtag/js?id=G-NT1ZXWS6JB"
      />

      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.gtag = function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NT1ZXWS6JB', { 
                page_path: window.location.pathname,
            });
        `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
