import { useInitializeLikedTracks } from "@/hooks/likes";
import styles from "./User.module.css";
import { useAppSelector } from "@/hooks/store";
export default function User() {
//   useInitializeLikedTracks();

//   const userName = useAppSelector((state) => state.user.user?.username);

//   if (!userName) {
//     return null;
//   }

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>

      {/* <Icon
        name="logout"
        wrapperClass={styles.sidebarIcon}
        iconClass={styles.sidebarIconSvg}
      /> */}
    </div>
  );
}
