import React, { useEffect, useState } from "react";
import Data from "../db/ourchoice.json";

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
  const [choiceCards, setChoiceCards] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliders = [1, 2, 3, 4];
  useEffect(() => {
    setChoiceCards(Data.choiceCards);
  }, []);
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
          <div className="slider">
            {sliders.map((_, i) => {
              return (
                <div className={`slider__slide ${sliderIndex === i ? `slider__slide--active` : ``}`} key={i}>
                  <ul className="ourchoice__list">
                    {choiceCards.map((card, index) => {
                      if (index >= i * 4 && index < (i + 1) * 4) {
                        return (
                          <li className={`ourchoice__list-item ourchoice__list-item--${(index % 4) + 1}`} key={index}>
                            <ChoiceCard title={card.title} price={card.price} discount={card.discount} imageUrl={card.imageUrl} url={card.url} />
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="control">
            <div className="control__btn control__btn--up" onClick={() => handleControlBtnClick(-1)}>
              <div> &uarr;</div>
            </div>
            <div className="control__progressbar">
              <div className="control__progressbar-value" style={{ top: `${25 * sliderIndex}%` }}></div>
            </div>
            <div className="control__btn control__btn--down" onClick={() => handleControlBtnClick(1)}>
              <div>&darr;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurChoice;
