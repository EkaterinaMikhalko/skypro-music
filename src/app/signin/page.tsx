import Link from "next/link";
import styles from "./signin.module.css"
import classNames from "classnames";
import Image from "next/image";

export default function SigninPage () {
    return (
  <div className={styles.wrapper}>
    <div className={styles.containerEnter}>
      <div className={styles.modalBlock}>
        <form className={styles.modalFormLogin} action="#">
          <Link href="/">
            <div className={styles.modalLogo}>
              <Image src="/img/logo_modal.png" alt="logo"  width={140} height={21} />
            </div>
          </Link>
          <input
            className={classNames (styles.modalInput, styles.login)}
            type="text"
            name="login"
            placeholder="Почта"
          />
          <input
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <button className={styles.modalBtnEnter}>
            <Link href="/">Войти</Link>
          </button>
          <button className={styles.modalBtnSignup}>
            <a href="/signup">Зарегистрироваться</a>
          </button>
        </form>
      </div>
    </div>
  </div>
    )
}