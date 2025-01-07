import Image from 'next/image';
import Link from 'next/link';
import { load } from 'cheerio';
import styles from '../page.module.css';

async function fetchLinkPreview(url: string) {
  const response = await fetch(url);
  const html = await response.text();
  const $ = load(html);
  return {
    url,
    title: $('meta[property="og:title"]').attr('content'),
    description: $('meta[property="og:description"]').attr('content'),
    image: $('meta[property="og:image"]').attr('content'),
  };
}

async function fetchPreviews(urls: string[]) {
  try {
    const results = await Promise.all(urls.map((url) => fetchLinkPreview(url)));
    return results;
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}

export default async function Resources() {
  const urls = {
    マズレンコ製作所: 'https://mazurenkojp.base.shop/p/00010',
  };

  const data = await fetchPreviews(Object.values(urls));
  return (
    <div className={styles.page}>
      <div>
        <h2>解説サイト集</h2>
        <p>筋トレについての解説をされているサイト集です</p>
      </div>
      {data &&
        data.length > 0 &&
        data.map((site) => (
          <div key={site.url}>
            <Link href={site.url} target="_blank" rel="noopener noreferrer">
              {site.image && site.title && (
                <Image
                  src={site.image}
                  alt={site.title}
                  width={100}
                  height={100}
                />
              )}
              <h3>{site.title}</h3>
              <p>{site.description}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}
