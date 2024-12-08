import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Button } from 'react-bootstrap';


const AddToCartButton = ({ productId, quantity }) => {
    const { addItem } = useContext(CartContext);
  
    const handleAddToCart = () => {
      addItem(productId, quantity); // Use quantity from props
    };
  
    return (
      <Button 
      variant="success"
      onClick={handleAddToCart} 
      style={{ width: '100%' , borderRadius: '30px', marginTop: '10px'}}>
        Add to Cart
      </Button>
      
    );
  };
  
  export default AddToCartButton;
  