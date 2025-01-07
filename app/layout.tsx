import './globals.css';
import Link from 'next/link';
// import styles from './layout.module.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <header>
          <Link href="/">筋トレ情報ポータル -Lift-</Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
