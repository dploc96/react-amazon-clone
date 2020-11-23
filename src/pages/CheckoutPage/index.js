import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Subtotal from '../../components/Subtotal';
import './CheckoutPage.css';

function Checkout(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Header />
      <main className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="small"
                      ></img>
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </div>
                    <div>
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>${item.price}</div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
