import styles from "./FilterItem.module.css";
import classNames from "classnames";

type FilterItemType = {
  title: string;
  list: string[];
  handleFilterClick: (newFilter: string) => void;
  isOpened: boolean;
};

export default function FilterItem({ handleFilterClick, title, list, isOpened }: FilterItemType) {
  return (
    <>
      <div onClick={()=> handleFilterClick(title)} className={classNames(styles.filterButton, styles._btnText)}>
        {title}
      </div>
      <div>
     {isOpened && ( <ul className={styles.filterListDown}>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>)}
      </div>
    </>
  );
}