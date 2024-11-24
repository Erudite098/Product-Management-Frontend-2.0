import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; 
import ProductDetails from './user-components/ProductDetails';
import FrontStore from './pages/FrontStore';
import Cart from './user-components/ShoppingCart/Cart';

const App = () => {
  return (
    
    // <Routes>
    //   <Route path="/" element={<Login />} />       
    //   <Route path="/dashboard" element={<Dashboard />} />
    //   <Route path="/product/:id" element={<ProductDetails />} />
    // </Routes>
   <Routes>
   <Route path="/" element={<FrontStore />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />

  </Routes>
    
  );
};

export default App;
