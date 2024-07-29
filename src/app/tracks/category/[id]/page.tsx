import { getCategoryTracks } from "@/api/tracks";
import Playlist from "@/components/Playlist/Playlist";
import styles from "@components/Centerblock/Centerblock.module.css";

type CategoryType = {
  params: { id: string };
};

export default async function CategoryPage({ params }: CategoryType) {
  const categoryTracks = await getCategoryTracks(params.id);
  let playlistTitle;
  switch (params.id) {
    case "1":
      playlistTitle = "Плейлист дня";
      break;

    case "2":
      playlistTitle = "100 танцевальных хитов";
      break;

    case "3":
      playlistTitle = "Инди-заряд";
      break;

    default:
      playlistTitle = "Треки";
      break;
  }
  console.log (categoryTracks)
  return (
    <div>
      <h2 className={styles.centerblockH2}>{playlistTitle}</h2>
      <Playlist tracks={categoryTracks} playlist={categoryTracks} />
    </div>
  );
}
