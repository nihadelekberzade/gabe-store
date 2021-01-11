import React, { useState } from "react";

const ChoiceCard = ({ url, title, price, discount, imageUrl }) => (
  <a href={url} className="choice-card">
    <div className="choice-card__img">
      <img src={imageUrl} alt="choice card img" />
    </div>
    <div className="choice-card__inner">
      <div className="choice-card__info">
        <h2 className="choice-card__title">{title}</h2>
        <div className="choice-card__price">
          <h3 className="choice-card__price-current">{price}$</h3>
          <h3 className="choice-card__price-discount">{discount}%</h3>
          <a className="btn btn--primary choice-card__price-cart-btn" href="/">
            В корзину
          </a>
        </div>
      </div>
    </div>
  </a>
);

const OurChoice = () => {
  const choiceCards = [
    {
      title: "Star Wars Battlefront 2",
      price: 23.96,
      discount: "12",
      imageUrl: "https://static.gabestore.ru/product/QKHTohFTK72nPIOhVr5y1kY6O3J_iG5h.jpg",
      url: "/red-dead-redemption-2",
    },
    {
      title: "Rainbow Six Siege",
      price: 12.96,
      discount: "67",
      imageUrl: "https://static.gabestore.ru/product/UWTcq8mGlGJ7FYTIixFWAtxBtWpyObQz.jpg",
      url: "/red-dead-redemption-2",
    },
    {
      title: "Dark Souls III",
      price: 7.96,
      discount: "70",
      imageUrl: "https://static.gabestore.ru/product/1Ze1yEWlh_ea0sIA7GNWW77XHp5zpB5T.jpg",
      url: "/red-dead-redemption-2",
    },
    {
      title: "Sid Meier’s Civilization VI – Rise and Fall",
      price: 3.96,
      discount: "42",
      imageUrl: "https://static.gabestore.ru/product/oFJBHpQUf0TDCYsVnUJn0CGGR2vqKrw_.jpg",
      url: "/red-dead-redemption-2",
    },
  ];
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleControlBtnClick = (value) => {
    if (sliderIndex + value === 4) {
      setSliderIndex(0);
    } else if (sliderIndex + value === -1) {
      setSliderIndex(3);
    } else {
      setSliderIndex(sliderIndex + value);
    }
  };

  return (
    <section className="ourchoice">
      <div className="wrapper">
        <h2 className="section-title">НАШ ВЫБОР</h2>
        <div className="ourchoice__inner">
          <ul className="ourchoice__list ourchoice__list--active">
            {choiceCards.map((card, index) => (
              <li className={`ourchoice__list-item ourchoice__list-item--${++index}`} key={index} style={{ animationDelay: `${index * 0.3}s` }}>
                <ChoiceCard title={card.title} price={card.price} discount={card.discount} imageUrl={card.imageUrl} url={card.url} />
              </li>
            ))}
          </ul>
          <div className="control">
            <div className="control__btn control__btn--up" onClick={() => handleControlBtnClick(-1)}></div>
            <div className="control__progressbar">
              <div className="control__progressbar-value" style={{ top: `${25 * sliderIndex}%` }}></div>
            </div>
            <div className="control__btn control__btn--down" onClick={() => handleControlBtnClick(1)}></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurChoice;
