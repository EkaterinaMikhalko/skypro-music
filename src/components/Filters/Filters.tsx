"use client";

import styles from "./Filter.module.css";
import FilterItem from "./FilterItem/FilterItem";
import { useState } from "react";

const filters = [
  {
    title: "исполнителю",
    list: ["1", "2"],
  },
  {
    title: "году выпуска",
    list: ["24", "23"],
  },
  {
    title: "жанру",
    list: ["рок", "поп"],
  },
];

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => (prev === newFilter ? null : newFilter));
  }
  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      {filters.map((filter) => (
        <FilterItem
        key = {filter.title}
          isOpened={activeFilter === filter.title}
          handleFilterClick={handleFilterClick}
          title={filter.title}
          list={filter.list}
        />
      ))}
    </div>
  );
}
