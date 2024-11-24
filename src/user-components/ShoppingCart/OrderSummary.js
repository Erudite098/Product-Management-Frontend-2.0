import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

function OrderSummary() {
    return (
        <div className="my-4">
            <Container
                className="p-4"
                style={{
                    backgroundColor: '#59b280',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
            >
                {/* Order Summary Title */}
                <h3 className="text-center text-white mb-4">Order Summary</h3>

                {/* Order Table */}
                <Table bordered hover size="sm" className="bg-white">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Item 1</td>
                            <td>$10.00</td>
                        </tr>
                        <tr>
                            <td>Item 2</td>
                            <td>$20.00</td>
                        </tr>
                        <tr>
                            <td>Item 3</td>
                            <td>$30.00</td>
                        </tr>
                    </tbody>
                </Table>

                {/* Total */}
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <h5 className="text-white">Total:</h5>
                    <h5 className="text-white fw-bold">$60.00</h5>
                </div>

                {/* Checkout Button */}
                <Button
                    variant="success"
                    className="mt-4"
                    style={{
                        width: '100%',
                        position: 'relative', // Adjusted to avoid overlap with other content
                        borderRadius: '30px',
                    }}
                >
                    Checkout
                </Button>
            </Container>
        </div>
    );
}

export default OrderSummary;
