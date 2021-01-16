import React from "react";

const GameCard = ({ imageUrl, name, price, discount }) => (
  <div className="gamecard">
    <a href="/">
      <img className="gamecard__add-to-favs-btn" />
      <a className="gamecard__add-to-cart-btn btn btn--primary" href="/">
        В корзину
      </a>
      <img src={imageUrl} alt="game cover image" className="gamecard__img" />
      <div className="gamecard__info">
        <h2 className="gamecard__name">{name}</h2>
        <div className="gamecard__price">
          <h3 className="gamecard__price-current">{price} $</h3>
          <h4 className="gamecard__price-discount">{discount}%</h4>
        </div>
      </div>
    </a>
  </div>
);
export default GameCard;
