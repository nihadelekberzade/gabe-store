import React from "react";
import PropTypes from "prop-types";
const GameCard = ({ imageUrl, url, title, price, discount }) => (
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
        {title}
      </a>
      <a className="gamecard__price" href={url}>
        <h3 className="gamecard__price-current">{price} $</h3>
        <h4 className="gamecard__price-discount">{discount}%</h4>
      </a>
    </div>
  </div>
);
GameCard.propTypes = {
  imageUrl: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  discount: PropTypes.number,
};
export default GameCard;
