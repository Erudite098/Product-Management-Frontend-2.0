import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Navbar, Container, Form, FormControl, Nav } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { MdSearch, MdShoppingCart, MdPerson } from 'react-icons/md'; 
import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';

import '../Styles/NavigationBar.css'; 

function NavigationBar() {
    return (
        <div >
            <Navbar expand="lg" className="custom-navbar sticky-top" >
                <Container>
                    <Navbar.Brand href="#" className='brand-name'>
                        <span className='keep'>Keep</span>
                        <span className='shopping'>SHOPPIN'</span>
                    </Navbar.Brand>

                    <Form className="search-bar">
                        <div className="search-input-container">
                            <FaSearch className="search-icon" />
                            <FormControl
                                type="search"
                                // placeholder="Search"
                                className="search-input"
                                aria-label="Search"
                            />
                        </div>
                    </Form>

                    <Nav className="icons-nav">
                        <Link to="/cart" className="cart-icon">
                            <HiOutlineShoppingCart size={30} strokeWidth={2}/>
                            <span className="cart-badge">3</span>
                        </Link>
                        <Nav.Link href="#" className="profile-icon">
                            <FaUserCircle size={34} />
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>    
        </div>

    );
}

export default NavigationBar;
