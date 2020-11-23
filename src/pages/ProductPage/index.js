import Rating from '@material-ui/lab/Rating';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../../actions/productActions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import './ProductPage.css';

function ProductPage(props) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <>
      <Header />
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <main className="product__row product">
          <div className="product__colImg">
            <img
              className="product__img"
              src={product.image}
              alt={product.name}
            ></img>
          </div>
          <div className="product__col">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li className="product__ratingReviews">
                <Rating
                  name="read-only"
                  precision={0.5}
                  value={product.rating}
                  readOnly
                />
                <span>{product.numReviews} Reviews</span>
              </li>
              <li>Pirce : ${product.price}</li>
              <li>
                Description:
                <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="product__col">
            <div className="product__cartBody">
              <ul>
                <li>
                  <div className="product__row">
                    <div>Price</div>
                    <div className="product__price">${product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="product__row">
                    <div>Status</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="product__success">In Stock</span>
                      ) : (
                        <span className="product__danger">Unavailable</span>
                      )}
                    </div>
                  </div>
                </li>
                {product.countInStock > 0 && (
                  <>
                    <li>
                      <div className="product__row">
                        <div>Qty</div>
                        <div>
                          <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </li>
                    <li>
                      <button className="product__btnAdd">Add to Cart</button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </>
  );
}

export default ProductPage;
