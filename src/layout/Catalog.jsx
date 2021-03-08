import React, { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import Catalog_DB from "../db/catalog.json";

const Catalog = () => {
  const [games, setGames] = useState([]);
  const [currentGames, setCurrentGames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabs = ["Новинки", "Лидеры продаж", "Последние поступления", "Предзаказы"];
  const content = document.querySelector(".catalog__content");

  const changeCurrentIndex = (newIndex) => {
    console.log(newIndex);
    content.classList.add("catalog__content--hidden");
    setCurrentIndex(newIndex);
    console.log(games);
    setTimeout(() => {
      let tempGames = [];
      for (let i = newIndex * 5; i < (newIndex + 1) * 5; i++) {
        console.log(i);
        tempGames.push(games[i]);
      }
      console.log(tempGames);
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
export default Catalog;
