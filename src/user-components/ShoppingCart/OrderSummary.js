import React from 'react';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';


function OrderSummary() {
    const { cart, cartTotal } = useContext(CartContext);

    return (
        <Container
            className="my-2 p-4 d-flex flex-column justify-content-between"
            style={{
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                height: '65vh',
            }}
        >
            <h4 className="mb-4 mt-3 text-center fw-bold" style={{ color: '#59b280' }}>
                Order Summary
            </h4>

            <Row>
                <Col>
                    <Container
                        className="p-4"
                        style={{
                            backgroundColor: 'rgba(173, 235, 200, 0.5)',
                            borderRadius: '10px',
                            height: '35vh',
                        }}
                    >
                        <Table hover size="sm" className="mb-1">
                            <thead>
                                <tr>
                                    <th style={{ border: 'none', backgroundColor: 'rgba(173, 235, 200, 0.0)' }}>Item</th>
                                    <th style={{ border: 'none', backgroundColor: 'rgba(173, 235, 200, 0.0)' }} className="text-end">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id}>
                                        <td style={{ border: 'none' ,backgroundColor: 'rgba(173, 235, 200, 0.0)'}}>
                                            {item.product.product_name}
                                        </td>
                                        <td style={{ border: 'none', backgroundColor: 'rgba(173, 235, 200, 0.0)'}} className="text-end">
                                            ₱{(item.product.price * item.quantity_requested).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Row>

            <Row className="mt-4 m-1">
                <Col className="d-flex justify-content-between">
                    <h5>Total:</h5>
                    <h5 className="fw-bold">₱{cartTotal.toFixed(2)}</h5>
                </Col>
            </Row>

            <Row className="mt-auto">
                <Col>
                    <Button
                        as={Link}
                        to="/checkout"
                        variant="success"
                        className="w-100"
                        style={{ borderRadius: '30px' }}
                    >
                        Checkout
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderSummary;
