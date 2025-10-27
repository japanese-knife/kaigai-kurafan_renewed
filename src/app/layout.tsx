import type { Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 5.0,
  userScalable: true,
  themeColor: "#000000",
};

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: '海外クラファン.com | 株式会社RE-IDEA',
  description: "海外クラウドファンディングの活用で海外進出をハードル低く実現。海外挑戦の最初の一歩を高コスパで全力サポートいたします。"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="海外クラウドファンディングの活用で海外進出をハードル低く実現。海外挑戦の最初の一歩を高コスパで全力サポートいたします。" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="海外クラファン.com | 株式会社RE-IDEA (RE-IDEA)" />
        <meta name="twitter:description" content="海外クラウドファンディングの活用で海外進出をハードル低く実現。海外挑戦の最初の一歩を高コスパで全力サポートいたします。" />
        <meta name="twitter:image" content="/opengraph-image.png" />
        
        <meta name="keywords" content="海外クラファン代行, 海外クラウドファンディング, 海外進出, RE-IDEA" />
        <meta name="robots" content="index, follow" />
        <link rel="manifest" href="/manifest" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://kaigai-kurafan.com/" />

        {/* Facebook Domain Verification */}
        <meta name="facebook-domain-verification" content="u8keqr2xuq472lesipae1kd6o5dxet" />

        {/* Open Graph */}
        <meta property="og:title" content="海外クラファン.com | 株式会社RE-IDEA (RE-IDEA)" />
        <meta property="og:description" content="日本企業の海外進出を、私たちが徹底的にサポートいたします。" />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:url" content="https://kaigai-kurafan.com/" />
        <meta property="og:type" content="website" />
      </head>
      <body>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZD2TMHX');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ot2bxaqzk3");
            `,
          }}
        />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '918068736917732');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WZD2TMHX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=918068736917732&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}

        {/* HubSpot Embed Code */}
        <Script
          id="hs-script-loader"
          src="//js.hs-scripts.com/46906111.js"
          strategy="lazyOnload"
          async
          defer
        />
      </body>
    </html>
  );
}
