import { useRef, useState } from "react";
import styles from "./Track.module.css";

type TrackType = {
  name: string;
  author: string;
  album: string;
  duration_in_seconds: number;
  onClick: () => void;
};

export default function Track({
  name,
  author,
  album,
  duration_in_seconds,
  onClick,
}: TrackType) {
  return (
    <div onClick={onClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
          <div className={styles.playingDot}>
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
            </div>
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAuthor} href="http://">
            {album}
          </a>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>{duration_in_seconds}</span>
        </div>
      </div>
    </div>
  );
}
