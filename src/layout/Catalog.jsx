import React, { useState } from "react";
import GameCard from "../components/GameCard";

const Catalog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const tabs = ["Новинки", "Лидеры продаж", "Последние поступления", "Предзаказы"];
  const changeCurrentIndex = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  const topGames = [
    {
      imageUrl: "https://static.gabestore.ru/product/cWiz77h6dlKn4E10q3zVTp2DkMbB_hFl.jpg",
      name: "Far Cry: 5",
      price: 12,
      discount: 60,
    },
    {
      imageUrl: "https://static.gabestore.ru/product/Ey5gPO_dKHf3BVLQnsNYPCCoBDcl9wvc.jpg",
      name: "Rainbow Six: Siege",
      price: 12,
      discount: 60,
    },
    {
      imageUrl: "https://static.gabestore.ru/product/Ey5gPO_dKHf3BVLQnsNYPCCoBDcl9wvc.jpg",
      name: "Rainbow Six: Siege",
      price: 12,
      discount: 60,
    },
    {
      imageUrl: "https://static.gabestore.ru/product/Ey5gPO_dKHf3BVLQnsNYPCCoBDcl9wvc.jpg",
      name: "Rainbow Six: Siege",
      price: 12,
      discount: 60,
    },
    {
      imageUrl: "https://static.gabestore.ru/product/Ey5gPO_dKHf3BVLQnsNYPCCoBDcl9wvc.jpg",
      name: "Rainbow Six: Siege",
      price: 12,
      discount: 60,
    },
  ];
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
                <GameCard imageUrl={t.imageUrl} name={t.name} price={t.price} discount={t.discount} />
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
