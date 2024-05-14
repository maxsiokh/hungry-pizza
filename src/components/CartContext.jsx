import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addToCart = (item) => {
    // перевіряє чи піца вже є в кошику
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.title === item.title &&
        cartItem.activeSize === item.activeSize &&
        cartItem.typeNames === item.typeNames
    );


    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1; // збільшуємо кількість 
      setCartItems(updatedCartItems);
    } else {
      // Якщо піца не існує в кошику, додаємо її
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // додаємо піцу 
    }

    // оновлюємо загальну вартість та кількість піц у кошику
    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
    setTotalItems((prevTotalItems) => prevTotalItems + 1); // збільшуємо загальну кількість на 1
  };

  const removeFromCart = (itemId) => {
    // Знаходимо видаляємий елемент за його id
    const removedItem = cartItems.find((item) => item.id === itemId);

    // Оновлюємо загальну кількість піц та їх вартість
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - removedItem.price * removedItem.quantity
    );
    setTotalItems((prevTotalItems) => prevTotalItems - removedItem.quantity);

    // Видаляємо елемент з кошика
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalItems(0);
  };

  const incrementItemQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
        setTotalItems((prevTotalItems) => prevTotalItems + 1);
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decrementItemQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);
        setTotalItems((prevTotalItems) => prevTotalItems - 1);
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
        decrementItemQuantity,
        incrementItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
