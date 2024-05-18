import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext(null);

export const CartProvider = ({ children }:{children: any}) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
    //@ts-ignore
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  );

  const addToCart = (item:any) => {
    const isItemInCart = cartItems.find(
      (cartItem:any) => cartItem.id === item.id
    );
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem:any) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id: any) => {
    setCartItems(cartItems.filter((cartItem:any) => cartItem.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total:any, item:any) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
    //@ts-expect-error
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
