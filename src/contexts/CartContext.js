import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
  const [cart, setCart] = useState([]);

  const addToCart = element => {
    setCart([...cart, element]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
