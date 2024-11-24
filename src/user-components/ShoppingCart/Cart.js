import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button} from 'react-bootstrap';
import NavigationaBar from '../NavigationBar';
import ProductCart from './ProductCart';
import OrderSummary from './OrderSummary';
import { FaBackward, FaCalendarMinus } from 'react-icons/fa';

function Cart() {
    return (
        <div>
            <NavigationaBar/>
            <Container className='mt-5'>
            <Row>
                <Col>
                <h2 style={{color: '#59b280'}}>Shopping Cart</h2>
                <ProductCart/>
                <ProductCart/>
                <ProductCart/>
                </Col>

                <Col>
                    <OrderSummary/>
                </Col>
            </Row>
            
            <Button variant="outline-success" 
            style={{
                borderRadius: '30px',
            }}>
            <Link to="/" style={{ textDecoration: 'none' }} className='text-success'>
                Back to Shopping
            </Link>
                
            </Button>
        
            </Container>
        </div>
    );
}

export default Cart;