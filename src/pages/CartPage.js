import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../user-components/Navigation/NavigationBar';
import ProductCart from '../user-components/ShoppingCart/ProductCart';
import OrderSummary from '../user-components/ShoppingCart/OrderSummary';
import EmptyCart from '../user-components/ShoppingCart/EmptyCart';
import BackToShoppingButton from '../user-components/BackToShoppingButton';
import { CartContext } from '../CartContext'; 

function CartPage() {
    const { cart, cartTotal, updateCart, removeItem } = useContext(CartContext);

    return (
        <div>
            <NavigationBar />

            {/* Main Container */}
            <Container className="mt-5">
                <Row>
                    {/* Shopping Cart Section */}
                    <Col className="d-flex flex-column">
                        <h2 className="mb-4" style={{ color: '#59b280' }}>
                            Shopping Cart
                        </h2>

                        <Row>
                            <Col>
                                <h6>{cart.length} items</h6>
                            </Col>
                            <Col
                                className="text-end text-danger"
                                style={{ cursor: 'pointer' }}
                                onClick={() => cart.forEach((item) => removeItem(item.id))}
                            >
                                <h6>Remove All</h6>
                            </Col>
                        </Row>
                        <hr />

                        {/* Cart Items */}
                        {cart.length > 0 ? (
                            <div
                                className="flex-grow-1"
                                style={{
                                    maxHeight: '400px', // Set the maximum height for the scrollable area
                                    overflowY: 'auto', // Enable vertical scrolling
                                    paddingRight: '10px', // Optional: Prevent content from cutting off near the scrollbar
                                }}
                            >
                                {cart.map((item) => (
                                    <ProductCart
                                        key={item.id}
                                        product={{
                                            cartItemId: item.id,
                                            productId: item.product.id,
                                            product_name: item.product.product_name,
                                            price: item.product.price,
                                            quantity: item.quantity_requested
                                        }}
                                    />
                                ))}
                            </div>
                        ) : (
                            <EmptyCart />
                        )}

                        {/* Back to Shopping Button */}
                        <BackToShoppingButton />
                    </Col>

                    {/* Order Summary Section */}
                    <Col>
                        <OrderSummary total={cartTotal} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CartPage;

