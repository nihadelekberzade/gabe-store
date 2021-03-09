import React from "react";

const Navigation = () => (
  <div className="navigation">
    <div className="line"></div>
    <a className="navigation__link" href="/">
      Главная
    </a>
    <div className="line line--small"></div>
    <a className="navigation__link" href="/">
      Каталог игр
    </a>
    <div className="line line--small"></div>
    <a className="navigation__link" href="/">
      Dying Light – Enhanced Edition
    </a>
    <div className="line"></div>
  </div>
);
const Versions = () => (
  <div className="versions">
    <div className="versions__inner">
      <a href="/" className="version">
        Standart
        <p className="price">4.99 $</p>
      </a>
      <a href="/" className="version">
        Enhanced
        <p className="price">5.26 $</p>
      </a>
    </div>
  </div>
);

const GamePage = () => {
  return (
    <main className="gamepage">
      <div className="container">
        <Navigation />
        <Versions />
        <div className="row">
          <div className="col">
            <div className="card__img">
              <img src="/build" alt="/build " />
              <div className="card__img-label">Хит продаж</div>
              <div className="card__rating-label">
                <div className="card__rating-label-value">4.8</div>
                <div className="card__rating-label-title">GabeStore</div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card__head">
              <h1 className="card__title">КУПИТЬ DYING LIGHT – ENHANCED EDITION</h1>
              <div className="card__favorite"></div>
            </div>
            <ul className="card__available-list">
              <li className="card__available-item">В наличии</li>
              <li className="card__available-item">Последний ключ купили 2 часа назад</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GamePage;
