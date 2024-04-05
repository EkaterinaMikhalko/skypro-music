import Link from "next/link"
import styles from "./signup.module.css"

export default function SignUp () {
    return (
  <div className={styles.wrapper}>
    <div className={styles.containerSignup}>
      <div className={styles.modalBlock}>
        <form className={styles.modalFormLogin}>
          <Link href="/">
            <div className={styles.modalLogo}>
              <img src="../img/logo_modal.png" alt="logo" />
            </div>
          </Link>
          <input
            className={styles.modalInput}
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
          <input
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <button className={styles.modalBtnSignupEnt}>
            <Link href="/">Зарегистрироваться</Link>
          </button>
        </form>
      </div>
    </div>
  </div>
    )
}