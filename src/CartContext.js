import React, { createContext, useState, useEffect } from 'react';
import axios from './api/axios';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Fetch the cart items
  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token);

      if (!token) {
        console.error('Token not found in local storage');
        return;
      }

      const response = await axios.get('/cart', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(response.data.cartItems);
      setCartTotal(response.data.total);
    } catch (error) {
      console.error('Error fetching cart:', error.response?.data?.message || error.message);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    console.log('Logged out and cart cleared');
  };

  // Add an item to the cart
  const addItem = async (productId, quantity) => {
    try {
      const token = localStorage.getItem('token');

      await axios.post(
        '/cart/add',
        { product_id: productId, quantity_requested: quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.alert('Item added to cart!');
      fetchCart(); // Refresh cart after adding
    } catch (error) {
      console.error('Error adding item:', error.response?.data?.message || error.message);
      window.alert(error.response?.data?.message || error.message);
    }
  };

  // Update the cart item quantity
  const updateCartItemQuantity = async (cartItemId, quantity) => {
    try {
      const token = localStorage.getItem('token');

      await axios.put(
        `/cart/update/${cartItemId}`,
        { quantity_requested: quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // window.alert('Item quantity updated!');
      fetchCart(); // Refresh cart after updating
    } catch (error) {
      console.error('Error updating cart:', error.response?.data?.message || error.message);
      window.alert(error.response?.data?.message || error.message);
    }
  };

  // Remove an item from the cart
  const removeItem = async (cartItemId) => {
    try {
      const token = localStorage.getItem('token');

      await axios.delete(`/cart/remove/${cartItemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.alert('Item removed from cart!');
      console.log('Item removed from cart:', cartItemId);
      fetchCart(); // Refresh cart after removing
    } catch (error) {
      console.error('Error removing item:', error.response?.data?.message || error.message);
    }
  };

  // Clear the entire cart
  const clearCart = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post('/cart/clear', null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      window.confirm('You have placed your order!');
      fetchCart(); 

    } catch (error) {
      console.error('Error clearing cart:', error.response?.data?.message || error.message);
    }
  };

  // Fetch the cart when the component mounts
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        addItem,
        updateCartItemQuantity,
        removeItem,
        clearCart,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
