import React, { useEffect, useState } from "react";
import { images } from "../img/images";
import Hits_DB from "../db/hits.json";
import GameCard from "../components/GameCard";

const Hits = () => {
  const [hits, setHits] = useState([]);
  useEffect(() => {
    setHits(Hits_DB.hits);
  }, []);
  const [sliderIndex, setSliderIndex] = useState(0);
  const sliders = [1, 2, 3, 4, 5];
  const handleControlBtnClick = (value) => {
    if (sliderIndex + value === 5) {
      setSliderIndex(0);
    } else if (sliderIndex + value === -1) {
      setSliderIndex(3);
    } else {
      setSliderIndex(sliderIndex + value);
    }
  };

  return (
    <div className="promo__hits">
      <h4 className="promo__hits-title">ХИТЫ ПРОДАЖ</h4>
      <div className="slider">
        {sliders.map((_, i) => {
          return (
            <div className={`slider__slide ${sliderIndex === i ? `slider__slide--active` : ``}`} key={i}>
              <ul className="promo__hits-list">
                {hits.map((game, index) => {
                  if (index >= i * 3 && index < (i + 1) * 3) {
                    return (
                      <li className={`promo__hits-item promo__hits-item--${(index % 3) + 1}`} key={index}>
                        <GameCard name={game.name} price={game.price} discount={game.discount} imageUrl={game.imageUrl} url={game.url} />
                      </li>
                    );
                  }
                  return <React.Fragment key={index} />;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="control">
        <div className="control__btn control__btn--up" onClick={() => handleControlBtnClick(-1)}>
          <img src={images.down_arrow} alt="arrow" />
        </div>
        <div className="control__progressbar">
          <div className="control__progressbar-value" style={{ top: `${20 * sliderIndex}%` }}></div>
        </div>
        <div className="control__btn control__btn--down" onClick={() => handleControlBtnClick(1)}>
          <img src={images.down_arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

function Promo() {
  return (
    <div className="promo">
      <div className="promo__main-slider"></div>
      <div className="container">
        <div className="promo__content">
          <div className="promo__main-slider-info"></div>
          {Hits()}
        </div>
      </div>
    </div>
  );
}
export default Promo;
