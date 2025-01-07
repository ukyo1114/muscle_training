// import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <div>
        「筋トレの情報っていっぱいあって、どれが正しいか分からない！」という方のために、信頼度の高いコンテンツを紹介します。
      </div>
      <Link href="/youtube">
        YouTubeチャンネル集
        <p>
          チャンネルや動画を紹介しています。なるべく初心者の方向けにわかりやすく解説しているコンテンツを集めてみました。
        </p>
      </Link>
      <Link href="/resources">
        解説サイト集
        <p>
          効率の良いトレーニング方法や科学的裏付けのある知見が掲載されているページを集めてみました。
        </p>
        集
      </Link>
      <Link href="/exercises">
        トレーニング種目別
        <p>種目ごとに詳しく解説されているサイトをまとめてみました。</p>
      </Link>
      <Link href="/nutrition">
        食事解説<p>筋トレ中の食事管理に役立つサイトを集めてみました。</p>
      </Link>
      <Link href="/trivia">
        筋トレ雑学<p>知っておくと筋トレが楽しくなる雑学を集めてみました。</p>
      </Link>
    </div>
  );
}
