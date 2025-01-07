import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My AdSense Enabled Site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6870293550717146"
          crossOrigin="anonymous"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-XXXXXXXXXXXXXX",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </head>
      <body>
        <header>
          <Link href="/">筋トレ情報ポータル -Lift-</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
