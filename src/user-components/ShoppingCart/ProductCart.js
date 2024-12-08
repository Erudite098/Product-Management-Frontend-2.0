import React, { useContext, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FiTrash2 } from 'react-icons/fi';
import QuantitySelector from '../QuantitySelector';
import { CartContext } from '../../CartContext';

function ProductCart({ product }) {
    const { removeItem, updateCartItemQuantity } = useContext(CartContext);

    // Local state for quantity, initialized with product's quantity
    const [quantity, setQuantity] = useState(product.quantity);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity); // Update local state
        updateCartItemQuantity(product.cartItemId, newQuantity); // Sync with context
    };

    const handleRemove = () => {
        removeItem(product.cartItemId);
    };

    return (
        <div className="d-flex justify-content-center my-3">
            <Card
                style={{
                    width: '40rem', 
                    height: 'auto',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                }}
            >
                <Card.Body>
                    <Row className="align-items-center text-center">

                        {/* Product Details */}
                        <Col xs={3}>
                            <Card.Subtitle className="mb-1">{product.product_name}</Card.Subtitle>
                            <Card.Subtitle className="text-success">
                                ₱{product.price.toFixed(2)}
                            </Card.Subtitle>
                        </Col>

                        {/* Quantity Selector */}
                        <Col xs={4}>
                            <QuantitySelector 
                                quantity={quantity} // Pass local state
                                setQuantity={handleQuantityChange}
                            />
                        </Col>

                        {/* Total Price of the item */}
                        <Col xs={3}>
                            <Card.Subtitle className="fw-bold">
                                ₱{(product.price * product.quantity).toFixed(2)}
                            </Card.Subtitle>
                        </Col>

                        {/* Remove item */}
                        <Col xs={2}>
                            <FiTrash2 
                                size={25} 
                                className="trash-icon text-danger"
                                style={{ cursor: 'pointer' }} 
                                onClick={handleRemove} 
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductCart;
