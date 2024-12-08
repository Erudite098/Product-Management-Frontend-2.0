import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import UserProfile from './UserProfile';
import CartIcon from './CartIcon';
import SearchBar from './SearchBar';
import '../../Styles/NavigationBar.css';

function NavigationBar({onSearch , searchTerm}) {


    return (
        <div>
            <Navbar expand="lg" className="custom-navbar">
                <Container>
                    {/* Brand Name */}
                    <Navbar.Brand href="#" className="brand-name">
                        <p className="d-flex flex-column lh-1 align-items-center mt-3">
                            <span className="keep">Keep</span> 
                            <span className="shopping">SHOPPIN'</span>
                        </p>
                    </Navbar.Brand>

                    {/* Search Bar */}
                    <SearchBar searchTerm={searchTerm} onSearch={onSearch} />

                    {/* Icons Section */}
                    <Nav className="icons-nav">
                        <CartIcon />
                        <UserProfile />
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;
