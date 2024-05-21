import styles from "./Centerblock.module.css";
import Filter from "../Filters/Filters";
import { trackType } from "../types";

export default function Centerblock(tracksData: trackType[]) {
  return (
    <>
      <div className={styles.centerblockSearch}>
        <svg className={styles.searchSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={styles.searchText}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter tracksData={tracksData} />
    </>
  );
}
