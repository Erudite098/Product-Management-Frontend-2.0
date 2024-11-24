import React from 'react';
import NavigationaBar from '../user-components/NavigationBar';
import { Container } from 'react-bootstrap';

function ProductDetails() {
    return (
        <div>
            <NavigationaBar/>
            <Container className='mt-5'>
            <h2>Product Details</h2>
            {/* Display product details */}

            </Container>
            
        </div>
    );
}   

export default ProductDetails;