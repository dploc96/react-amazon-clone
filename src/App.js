import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import OrdersPage from './pages/Orders';
import PaymentPage from './pages/PaymentPage';
import ProductPage from './pages/ProductPage';
import RegisterPage from './pages/RegisterPage';
import SigninPage from './pages/SigninPage';

const promise = loadStripe(
  'pk_test_51HorS4EPgMjB3CoCi36TZbrZxpJHZskby0Zyz6H2cR20PvCfT7DJ0d6i7s2RmaRH9IeqWcd9rkX4AYTZGM6mu4wm00dkai2yOx'
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/orders">
          <Header />
          <OrdersPage />
          <Footer />
        </Route>
        <Route path="/signin" component={SigninPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <PaymentPage />
          </Elements>
          <Footer />
        </Route>
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/" exact>
          <Header />
          <HomePage />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
