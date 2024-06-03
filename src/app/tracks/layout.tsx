import Image from "next/image";
import Bar from "@/components/Bar/Bar";
import Centerblock from "@/components/Centerblock/Centerblock";
import Menu from "@/components/Menu/Menu";
import Playlist from "@/components/Playlist/Playlist";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./layout.module.css";

export default function TrackLayout ({children}) {
    return (
        <div className={styles.wrapper}>
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
            <Playlist/>
          </div>
          <Sidebar />
        </main>
        <Bar/>
        <footer className="footer" />
      </div>
    </div>
    )
}