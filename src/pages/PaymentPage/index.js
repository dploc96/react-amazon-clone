import { CardElement } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import CheckoutProduct from '../../components/CheckoutProduct';
import './PaymentPage.css';

function Payment() {
  const [processing, setProcessing] = useState('');
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  return (
    <main className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p></p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items"></div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
                <button disabled={processing || disabled}>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Payment;
