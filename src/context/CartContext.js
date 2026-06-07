'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [giftWrap, setGiftWrap] = useState(false);

  // Load cart from localStorage on mount (Next.js client-safe)
  useEffect(() => {
    const savedCart = localStorage.getItem('felu_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save cart to localStorage
  const saveCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem('felu_cart', JSON.stringify(newCart));
  };

  const addToCart = (product, quantity = 1) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    let newCart;
    if (existingItem) {
      newCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      newCart = [...cart, { product, quantity, customMessage: '' }];
    }
    saveCart(newCart);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.product.id !== productId);
    saveCart(newCart);
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const newCart = cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    saveCart(newCart);
  };

  const updateCustomMessage = (productId, message) => {
    const newCart = cart.map((item) =>
      item.product.id === productId ? { ...item, customMessage: message } : item
    );
    saveCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('felu_cart');
  };

  const getCartSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        deliveryDate,
        setDeliveryDate,
        giftWrap,
        setGiftWrap,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCustomMessage,
        clearCart,
        getCartSubtotal,
        getCartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
