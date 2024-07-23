import React from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics(): JSX.Element | null {
  if (!GA_TRACKING_ID) {
    console.warn('Missing NEXT_PUBLIC_GA_ID environment variable. Google Analytics tracking will not work.');
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `,
      }}
      />
    </>
  );
}
