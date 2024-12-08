import NavigationaBar from '../user-components/Navigation/NavigationBar';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Col, Row, Container } from 'react-bootstrap'; 
import QuantitySelector from './QuantitySelector';
import BackToShoppingButton from './BackToShoppingButton';
import AddToCartButton from './AddToCartButton';

function ProductDetails() {
    const { id } = useParams(); // Access product ID from route params
    const [product, setProduct] = useState(null); // Store product details and initialize as null
    const [quantity, setQuantity] = useState(1); // Track selected quantity

    // Fetch product details from API
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error('Error fetching product details:', error));
    }, [id]);

    return (        
        <div>
            <NavigationaBar />

            <Container className='mt-5'>
                <h2 className="mb-4" style={{ color: '#59b280' }}>Product Details</h2>
                <Col md={4} className="mb-4 justify-content-center">
                    <Card
                        className="my-2 p-3 border-1 border-success"
                        style={{
                            height: '30rem', 
                            cursor: 'pointer',
                            borderRadius: '10px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <Card.Body className="d-flex flex-column">

                            <div className="d-flex flex-column">
                                <Card.Title className='fw-bold fs-3'>
                                    {product?.product_name}
                                </Card.Title>

                                 <Card.Text className='text-success'>
                                    {product?.category}
                                </Card.Text>
                                <Card.Text className='mt-4 fs-5 text-muted'>
                                    {product?.description}
                                </Card.Text>
                               
                                <Row className='mt-4 fs-4 fw-bold text-success'>
                                    <Col>
                                        <Card.Text>₱ {product?.price}</Card.Text>
                                    </Col>
                                    <Col className='d-flex justify-content-end'>
                                        <QuantitySelector quantity={quantity} setQuantity={setQuantity}/> 
                                    </Col>
                                </Row>


                                <Row>
                                    <Col>
                                        <Card.Text className='text-muted fst-italic'>{product?.quantity === 0 ? 'Out of Stock' : 'In Stock'}</Card.Text>
                                        
                                    </Col>
                                </Row>
                            </div>

                            <div className="mt-auto">
                                <AddToCartButton productId={product?.id} quantity={quantity}/>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>

                <BackToShoppingButton />
                
            </Container>
        </div>
    );
}   

export default ProductDetails;

