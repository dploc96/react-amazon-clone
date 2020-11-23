import Rating from '@material-ui/lab/Rating';
import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct(props) {
  const {
    image,
    title,
    price,
    rating,
    hideButton,
    countInStock,
    quantity,
  } = props;

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          <Rating name="read-only" precision={0.5} value={rating} readOnly />
        </div>
        <input
          className="checkoutProduct__quantity"
          type="number"
          min="1"
          max={countInStock}
          value={quantity}
        />
        {!hideButton && <button>Remove from Basket</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
