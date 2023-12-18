import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import {
  Home,
  ErrorPage,
  CartPage,
  ProductsPage,
  PrivateRoute,
  CheckoutPage,
  SingleProductPage,
} from './pages';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/shopow'>
          <Home />
        </Route>
        <Route exact path='/shopow/cartpage'>
          <CartPage />
        </Route>
        <Route exact path='/shopow/products'>
          <ProductsPage />
        </Route>
        <Route
          exact
          path='/shopow/products/:id'
          children={<SingleProductPage />}
        />
        <Route path='/shopow/cart'>
          <CartPage />
        </Route>
        <Route exact path='/shopow/checkout'>
          <CheckoutPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
