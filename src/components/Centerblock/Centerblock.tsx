"use client"
import { ChangeEvent, useState } from "react";
import styles from "./Centerblock.module.css";
import { useAppDispatch } from "@/hooks";
import { setFilters } from "@/store/features/playlistSlice";

export default function Centerblock() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    dispatch(setFilters({ searchValue: e.target.value }));
  };
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
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      <h2 className={styles.centerblockH2}>Треки</h2>
    </>
  );
}
