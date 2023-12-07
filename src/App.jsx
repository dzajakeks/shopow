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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/cartpage'>
          <CartPage />
        </Route>
        <Route exact path='/products'>
          <ProductsPage />
        </Route>
        <Route exact path='/products/:id' children={<SingleProductPage />} />
        <Route exact path='/checkout'>
          <CheckoutPage />
        </Route>
        <Route path='*'>
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
