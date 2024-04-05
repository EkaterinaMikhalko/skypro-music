import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu/Menu";
import Centerblock from "@/components/Centerblock/Centerblock";
import Sidebar from "@/components/Sidebar/Sidebar";

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
      <div className="bar">
        <div className="bar__content">
          <div className="bar__player-progress" />
          <div className="bar__player-block">
            <div className="bar__player player">
              <div className="player__controls">
                <div className="player__btn-prev">
                  <svg className="player__btn-prev-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                  </svg>
                </div>
                <div className="player__btn-play _btn">
                  <svg className="player__btn-play-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-play" />
                  </svg>
                </div>
                <div className="player__btn-next">
                  <svg className="player__btn-next-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-next" />
                  </svg>
                </div>
                <div className="player__btn-repeat _btn-icon">
                  <svg className="player__btn-repeat-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                  </svg>
                </div>
                <div className="player__btn-shuffle _btn-icon">
                  <svg className="player__btn-shuffle-svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                  </svg>
                </div>
              </div>
              <div className="player__track-play track-play">
                <div className="track-play__contain">
                  <div className="track-play__image">
                    <svg className="track-play__svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-note" />
                    </svg>
                  </div>
                  <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                  </div>
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </div>
                </div>
                <div className="track-play__like-dis">
                  <div className="track-play__like _btn-icon">
                    <svg className="track-play__like-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                  </div>
                  <div className="track-play__dislike _btn-icon">
                    <svg className="track-play__dislike-svg">
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bar__volume-block volume">
              <div className="volume__content">
                <div className="volume__image">
                  <svg className="volume__svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                  </svg>
                </div>
                <div className="volume__progress _btn">
                  <input
                    className="volume__progress-line _btn"
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer" />
    </div>
  </div>
  );
}
