import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { add } from './App'
import {refreshCart} from './App'
import {fetchCart} from './App'
import {handleAddToCart} from './App'
import {handleRemoveFromCart} from './App'
import {handleEmptyCart} from './App'
import handleUpdateCartQty from './components/Cart/CartItem/CartItem'
import renderEmptyCart from './components/Cart/Cart'
import handleSubmit from './components/CheckoutForm/PaymentForm'


it('renders without crashing handleSubmit', () => {
    const div = document.createElement('div');
    ReactDOM.render(<handleSubmit />, div);
  });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders without crashing renderEmptyCart', () => {
  const div = document.createElement('div');
  ReactDOM.render(<renderEmptyCart />, div);
});

it('renders without crashing handleUpdateCartQty', () => {
  const div = document.createElement('div');
  ReactDOM.render(<handleUpdateCartQty />, div);
});

it('renders without crashing handleEmptyCart', () => {
  const div = document.createElement('div');
  ReactDOM.render(<handleEmptyCart />, div);
});

it('renders without crashing refreshCart', () => {
  const div = document.createElement('div');
  ReactDOM.render(<refreshCart />, div);
});

it('renders without crashing fetchCart', () => {
  const div = document.createElement('div');
  ReactDOM.render(<fetchCart />, div);
});

it('renders without crashing handleAddtoCart', () => {
  const div = document.createElement('div');
  ReactDOM.render(<handleAddToCart />, div);
});

test('Test', () => {
  expect(true).toBeTruthy();
})

