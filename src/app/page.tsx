import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import Centerblock from "@/components/Centerblock/Centerblock";
import Sidebar from "@/components/Sidebar/Sidebar";
import Bar from "@/components/Bar/Bar";

export default function Home() {
  return (
  <div className="wrapper">
    <div className="container">
      <main className="main">
        <nav className="main__nav nav">
          <div className="nav__logo logo">
            <Image alt="логотип Скайпро-музыка" className="logo__image" width={113} height={17} src="/img/logo.png" />
          </div>
<Menu/>
        </nav>
<Centerblock/>
<Sidebar/>
      </main>
<Bar/>
      <footer className="footer" />
    </div>
  </div>
  );
}
