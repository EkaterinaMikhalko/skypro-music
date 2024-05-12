"use client";
import styles from "./Track.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { trackType } from "../types";
import { setCurrentTrack } from "@/store/features/playlistSlice";
import classNames from "classnames";

type TrackType = {
  track: trackType;
  tracksData: trackType[];
};

export default function Track({ track, tracksData }: TrackType) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const { name, author, album, duration_in_seconds, id } = track;
  const isPlaying = currentTrack ? currentTrack.id === id : false;
  const dispatch = useAppDispatch();

  const handleTrackClick = () => {
    dispatch(setCurrentTrack({ track, tracksData }));
  };
  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg
              className={classNames(styles.trackTitleSvg, {
                [styles.playingDot]: isPlaying,
              })}
            >
              <use xlinkHref={"img/icon/sprite.svg#icon-note"} />
            </svg>
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
