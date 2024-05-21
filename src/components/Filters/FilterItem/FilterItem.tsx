import { trackType } from "@/components/types";
import styles from "./FilterItem.module.css";
import classNames from "classnames";

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
  const getFilterList = () => {
    if (value !== "order") {
      const array = new Set(
        tracksData?.map((track: trackType) => track[value]) || []
      );
      return Array.from(array);
    }
    return order;
  };

  getFilterList();
  return (
    <>
      <div
        onClick={() => handleFilterClick(title)}
        className={classNames(styles.filterButton, styles._btnText, {
          [styles.active]: isOpened,
        })}
      >
        {title}
      </div>
      <div>
        {isOpened && (
          <ul className={styles.filterListDown}>
            {getFilterList().map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
