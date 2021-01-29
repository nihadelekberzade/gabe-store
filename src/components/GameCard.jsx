import React from "react";

const GameCard = ({ imageUrl, url, name, price, discount }) => (
  <div className="gamecard">
    <img className="gamecard__add-to-favs-btn" alt="favourite btn" />
    <a className="gamecard__add-to-cart-btn btn btn--primary" href="/">
      В корзину
    </a>
    <a href={url}>
      <img src={imageUrl} alt="game cover img" className="gamecard__img" />
    </a>
    <div className="gamecard__info">
      <a className="gamecard__name" href={url}>
        {name}
      </a>
      <a className="gamecard__price" href={url}>
        <h3 className="gamecard__price-current">{price} $</h3>
        <h4 className="gamecard__price-discount">{discount}%</h4>
      </a>
    </div>
  </div>
);
export default GameCard;
