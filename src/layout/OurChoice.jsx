import React, { useEffect, useState } from "react";
import Data from "../db/ourchoice.json";
import { images } from "../img/images";
import PropTypes from "prop-types";

const ChoiceCard = ({ url, title, price, discount, imageUrl }) => (
  <div className="choice-card">
    <a className="choice-card__img" href={url}>
      <img src={imageUrl} alt="choice card img" />
    </a>
    <div className="choice-card__inner">
      <div className="choice-card__content">
        <a className="choice-card__title" href={url}>
          {title}
        </a>
        <div className="choice-card__info">
          <h3 className="choice-card__price">{price}$</h3>
          <h3 className="choice-card__discount">{discount}%</h3>
          <a className="choice-card__cart-btn btn btn--primary" href="/">
            В корзину
          </a>
        </div>
      </div>
    </div>
  </div>
);
ChoiceCard.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
  imageUrl: PropTypes.string,
};
const OurChoice = () => {
  const [choiceCards, setChoiceCards] = useState([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setChoiceCards(Data.choiceCards);
    let tempCards = [];
    for (let i = 0; i < 4; i++) {
      tempCards.push(Data.choiceCards[i]);
    }
    setCurrentCards(tempCards);
  }, []);
  const handleControlBtnClick = (value) => {
    const slider__slide = document.querySelector(".ourchoice").querySelector(".slider__slide");
    slider__slide.classList.add("slider__slide--hidden");
    const buttons = document.querySelector(".ourchoice").querySelectorAll(".control__btn");
    buttons.forEach((e) => {
      e.classList.add("control__btn--disabled");
    });

    let tempIndex = currentIndex;
    if (currentIndex + value === 4) {
      setCurrentIndex(0);
      tempIndex = 0;
    } else if (currentIndex + value === -1) {
      setCurrentIndex(3);
      tempIndex = 3;
    } else {
      setCurrentIndex(currentIndex + value);
      tempIndex += value;
    }
    let tempCards = [];
    for (let i = tempIndex * 4; i < (tempIndex + 1) * 4; i++) {
      tempCards.push(choiceCards[i]);
    }
    setTimeout(() => {
      setCurrentCards(tempCards);
      slider__slide.classList.remove("slider__slide--hidden");
      buttons.forEach((e) => {
        e.classList.remove("control__btn--disabled");
      });
    }, 1200);
  };
  const getControls = () => (
    <div className="control">
      <div className="control__btn control__btn--up" onClick={() => handleControlBtnClick(-1)}>
        <img src={images.down_arrow} alt="arrow" />
      </div>
      <div className="control__progressbar">
        <div className="control__progressbar-value" style={{ top: `${25 * currentIndex}%` }}></div>
      </div>
      <div className="control__btn control__btn--down" onClick={() => handleControlBtnClick(1)}>
        <img src={images.down_arrow} alt="arrow" />
      </div>
    </div>
  );
  return (
    <section className="ourchoice">
      <div className="container">
        <h2 className="section-title">НАШ ВЫБОР</h2>
        <div className="ourchoice__inner">
          <div className="slider">
            <div className="slider__slide">
              <ul className="ourchoice__list">
                {currentCards.map((card, index) => (
                  <li className={`ourchoice__list-item ourchoice__list-item--${index}`} key={index}>
                    <ChoiceCard title={card.title} price={card.price} discount={card.discount} imageUrl={card.imageUrl} url={card.url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {getControls()}
        </div>
      </div>
    </section>
  );
};
export default OurChoice;
