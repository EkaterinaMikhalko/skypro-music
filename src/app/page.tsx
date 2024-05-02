"use client";
import Image from "next/image";
import Menu from "@/components/Menu/Menu";
import Centerblock from "@/components/Centerblock/Centerblock";
import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";
import { useState } from "react";
import { trackType } from "@/components/types";
import Playlist from "@/components/Playlist/Playlist";
import styles from "./page.module.css";

export default function Home() {
  const [track, setTrack] = useState<trackType | null>(null);
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <Image
                alt="логотип Скайпро-музыка"
                className="logo__image"
                width={113}
                height={17}
                src="/img/logo.png"
              />
            </div>
            <Menu />
          </nav>
          <div className={styles.mainCenterblock}>
            <Centerblock />
            <Playlist setTrack={setTrack} />
          </div>
          <Sidebar />
        </main>
        {track && <Bar track={track} />}
        <footer className="footer" />
      </div>
    </div>
  );
}
