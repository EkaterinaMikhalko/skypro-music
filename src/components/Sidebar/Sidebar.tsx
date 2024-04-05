import Link from "next/link";
import styles from "./Sidebar.module.css"

export default function Sidebar() {
  return (
    <>
      <div className={styles.mainSidebar}>
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
          <div className={styles.sidebarIcon}>
            <Link href="/signin">
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
            </Link>
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <Link className={styles.sidebarLink} href="#">
                <img
                  className={styles.sidebarImg}
                  src="img/playlist01.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link className={styles.sidebarLink} href="#">
                <img
                  className={styles.sidebarImg}
                  src="img/playlist02.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
            <div className={styles.sidebarItem}>
              <Link className={styles.sidebarLink} href="#">
                <img
                  className={styles.sidebarImg}
                  src="img/playlist03.png"
                  alt="day's playlist"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
