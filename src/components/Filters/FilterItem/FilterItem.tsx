import { trackType } from "@/components/types";
import styles from "./FilterItem.module.css";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setFilters } from "@/store/features/playlistSlice";

type FilterItemType = {
  title: string;
  value: "author" | "genre" | "order";
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
  tracksData: trackType[];
};

const order = ["по умолчанию", "сначала новые", "сначала старые"];

export default function FilterItem({
  handleFilterClick,
  title,
  value,
  isOpened,
  tracksData,
}: FilterItemType) {
  const authorsList = useAppSelector(
    (state) => state.playlist.filterOptions.author
  );
  const genresList = useAppSelector(
    (state) => state.playlist.filterOptions.genre
  );
  const dispatch = useAppDispatch();
  const getFilterList = () => {
    if (value !== "order") {
      const array = new Set(
        tracksData?.map((track: trackType) => track[value]) || []
      );
      return Array.from(array);
    }
    return order;
  };

  const toggleFilter = (item: string) => {
    if (value !== "order") {
      dispatch(
        setFilters({
          author: authorsList.includes(item)
            ? authorsList.filter((el) => el !== item)
            : [...authorsList, item],
          genre: genresList.includes(item)
            ? genresList.filter((el) => el !== item)
            : [...genresList, item],
        })
      );
    } else {
      dispatch(setFilters({order:item}))
    }
  };
  getFilterList();
  return (
    <>
      <div>
        <div
          onClick={() => handleFilterClick(title)}
          className={classNames(styles.filterButton, styles._btnText, {
            [styles.active]: isOpened,
          })}
        >
          {title}
          {authorsList.length > 0 ? (
            <div className={styles.filteredItems}>{authorsList.length}</div>
          ) : null}
        </div>

        <div>
          {isOpened && (
            <ul className={styles.filterListDown}>
              {getFilterList().map((item) => (
                <li onClick={() => toggleFilter(item)} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
