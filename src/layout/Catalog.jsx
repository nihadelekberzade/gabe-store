import React, { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import Catalog_DB from "../db/catalog.json";

const Catalog = () => {
  const [topGames, setTopGames] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabs = ["Новинки", "Лидеры продаж", "Последние поступления", "Предзаказы"];
  const changeCurrentIndex = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  useEffect(() => {
    setTopGames(Catalog_DB.catalog);
  }, []);

  return (
    <section className="catalog">
      <div className="wrapper">
        <div className="catalog__tabs">
          {tabs.map((t, i) => (
            <div className={`catalog__link ${i === currentIndex ? `catalog__link--active` : ``}`} key={i} onClick={() => changeCurrentIndex(i)}>
              {t}
            </div>
          ))}
        </div>
        <div className="catalog__content">
          <ul className="catalog__list">
            {topGames.map((t, i) => (
              <li className="catalog__list-item" key={i}>
                <GameCard imageUrl={t.imageUrl} name={t.name} price={t.price} discount={t.discount} url={t.url} />
              </li>
            ))}
          </ul>
        </div>
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
