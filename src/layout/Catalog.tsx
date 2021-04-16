import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import Catalog_DB from "../db/catalog.json";

const Catalog1: React.FC = () => {
  const [games, setGames] = useState<any[]>([]);
  const [currentGames, setCurrentGames] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const tabs = ["Новинки", "Лидеры продаж", "Последние поступления", "Предзаказы"];
  const content: any = document.querySelector(".catalog__content");
  const changeCurrentIndex = (newIndex: number) => {
    content.classList.add("catalog__content--hidden");
    setCurrentIndex(newIndex);
    setTimeout(() => {
      let tempGames: Array<any> = [];
      // for (let i = newIndex * 5; i < (newIndex + 1) * 5; i++) {
      //   console.log(i);
      //   tempGames.push(games[i]);
      // }
      for (let i = 0; i < 5; i++) {
        tempGames.push(games[i]);
      }
      setCurrentGames(tempGames);
      content.classList.remove("catalog__content--hidden");
    }, 300);
  };
  useEffect(() => {
    let tempGames = [];
    for (let i = 0; i < 5; i++) {
      tempGames.push(Catalog_DB.catalog[i]);
    }
    setGames(Catalog_DB.catalog);
    setCurrentGames(tempGames);
  }, []);
  const getTabs = () => (
    <div className="catalog__tabs">
      {tabs.map((t, i) => (
        <div className={`catalog__link ${i === currentIndex ? `catalog__link--active` : ``}`} key={i} onClick={() => changeCurrentIndex(i)}>
          {t}
        </div>
      ))}
    </div>
  );
  const getContent = () => (
    <div className="catalog__content">
      <ul className="catalog__list">
        {currentGames.map((t, i) => (
          <li className="catalog__list-item" key={i}>
            <GameCard imageUrl={t.imageUrl} title={t.title} price={t.price} discount={t.discount} url={t.url} />
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <section className="catalog">
      <div className="wrapper">
        {getTabs()}
        {getContent()}
        <div className="txt-center">
          <a className="btn btn--primary" href="/">
            Cмотреть все
          </a>
        </div>
      </div>
    </section>
  );
};
export default Catalog1;
