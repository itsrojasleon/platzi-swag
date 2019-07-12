import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { StyledCart, Button } from '../styles/components';
import priceFormat from '../utils/priceFormat';
import { CartContext } from '../contexts/CartContext';

export default function cart() {
  const { cart } = useContext(CartContext);
  return (
    <StyledCart>
      <h2>Shopping Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map(swag => (
            <tr key={swag.sku}>
              <td>
                <img src={swag.metadata.img} alt={swag.name} /> {swag.name}
              </td>
              <td>USD {priceFormat(swag.price)}</td>
              <td>{swag.quantity}</td>
              <td>{priceFormat(swag.price * swag.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal: </h3>
          <small>Total</small>
        </div>
        <div>
          <Link to='/'>
            <Button type='outline'>Go back</Button>
          </Link>
          <Button>Buy</Button>
        </div>
      </nav>
    </StyledCart>
  );
}
