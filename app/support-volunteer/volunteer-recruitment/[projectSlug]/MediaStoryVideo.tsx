"use client";

import { useState } from "react";
import styles from "./page.module.css";

type MediaStoryVideoProps = {
  label: string;
  youtubeId?: string;
};

export function MediaStoryVideo({ label, youtubeId }: MediaStoryVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (youtubeId && isPlaying) {
    return (
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={styles.videoFrame}
        referrerPolicy="strict-origin-when-cross-origin"
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={label}
      />
    );
  }

  return (
    <button
      aria-label={youtubeId ? `播放${label}影片` : `${label}影片待補`}
      className={styles.videoCover}
      disabled={!youtubeId}
      onClick={() => setIsPlaying(true)}
      type="button"
    >
      <span className={styles.playButton} aria-hidden="true">
        <span className={styles.playIcon} />
      </span>
    </button>
  );
}
