import { getCategoryTracks } from "@/api/tracks";
import Playlist from "@/components/Playlist/Playlist";
import styles from "@components/Centerblock/Centerblock.module.css";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  AwaitedReactNode,
} from "react";

type CategoryType = {
  params: { id: string };
};

export default async function CategoryPage({ params }: CategoryType) {
  const categoryTracks = await getCategoryTracks(params.id);
  let PlaylistTitle;
  switch (params.id) {
    case "1":
      PlaylistTitle = "Плейлист дня";
      break;

    case "2":
      PlaylistTitle = "100 танцевальных хитов";
      break;

    case "3":
      PlaylistTitle = "Инди-заряд";
      break;

    default:
      PlaylistTitle = "Треки";
      break;
  }
  return (
    <div>
      <h2 className={styles.centerblockH2}>{PlaylistTitle}</h2>
      <Playlist tracks={categoryTracks} playlist={categoryTracks} />
    </div>
  );
}
