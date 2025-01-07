import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';

async function fetchYouTubeData(channelId: string) {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await response.json();
  return data.items[0];
}

async function fetchYouTubeChannels(channelIds: string[]) {
  try {
    const results = await Promise.all(
      channelIds.map((channelId) => fetchYouTubeData(channelId))
    );

    return results;
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}

export default async function Youtube() {
  const channelIds = {
    今古賀翔: 'UCIR8bP-MIXHwTPkUjcnjBCw',
    バズーカ岡田: 'UCrV1T0LCGPgGiBspaL2pZHw',
  };

  const data = await fetchYouTubeChannels(Object.values(channelIds));

  return (
    <div className={styles.page}>
      <div>
        <h2>Youtubeチャンネル集</h2>
        <p>筋トレについての総合的な解説をされているYouTubeチャンネル集です</p>
      </div>
      {data &&
        data.length > 0 &&
        data.map((channel) => (
          <div key={channel.id} className="youtube-card">
            <Link
              href={`https://www.youtube.com/channel/${channel.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={channel.snippet.thumbnails.default.url}
                alt={channel.snippet.title}
                width={88}
                height={88}
              />
              <h3>{channel.snippet.title}</h3>
            </Link>
          </div>
        ))}
    </div>
  );
}
