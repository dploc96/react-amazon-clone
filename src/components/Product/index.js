import Rating from '@material-ui/lab/Rating';
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

function Product(props) {
  const { product } = props;

  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="card__img" src={product.image} alt={product.name} />
      </Link>
      <div className="card__body">
        <Link to={`/product/${product._id}`}>
          <h2 className="card__name">{product.name}</h2>
        </Link>
        <Rating
          name="read-only"
          precision={0.5}
          value={product.rating}
          readOnly
        />
        <span>{product.numReviews + ' reviews'}</span>
        <div className="card__price">${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
