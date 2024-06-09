"use client";
import styles from "./Track.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { trackType } from "../types";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import { formatDurationInMin } from "@/lib/formatDuration";

type TrackType = {
  track: trackType;
  tracksData: trackType[];
};

export default function Track({ track, tracksData }: TrackType) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const { name, author, album, duration_in_seconds, id } = track;
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  // const audioRef = useRef<null | HTMLAudioElement>(null);
  const dispatch = useAppDispatch();

  const handleTrackClick = () => {
    dispatch(setCurrentTrack({ track, tracksData }));
  };

  // const togglePlay = () => {
  //   if (audioRef.current) {
  //     {
  //       dispatch(setIsPlaying(!isPlaying));
  //     }
  //   }
  // };

  // useEffect(() => {
  //   audioRef.current?.play();
  //   setIsPlaying(true);
  // }, [currentTrack]);


  return (
    <div onClick={handleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {currentTrack?.id === id ? (
              isPlaying ? (
                <svg className={styles.playingDotActive}></svg>
              ) : (
                <svg className={styles.playingDot}></svg>
              )
            ) : (
              <svg className={styles.trackTitleSvg}>
                <use xlinkHref={"/img/icon/sprite.svg#icon-note"} />
              </svg>
            )}
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
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like" />
          </svg>
          <span className={styles.trackTimeText}>
            {formatDurationInMin(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
