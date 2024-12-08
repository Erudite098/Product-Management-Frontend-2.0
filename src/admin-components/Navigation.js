import React, { useState } from 'react';
import '../Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

function Navigation() {
    const [showLogout, setShowLogout] = useState(false);

    // Toggle Logout Dropdown
    const toggleLogout = () => {
        setShowLogout((prevState) => !prevState);
    };

    return (
        <Navbar className="custom-nav bg-dark sticky-top">
            <Container>
                {/* Navbar Brand */}
                <Navbar.Brand href="#" className="text-light">
                    Product Management
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end align-items-center">
                    {/* Signed In As */}
                    <Navbar.Text className="text-light me-3">
                        Signed in as: <a href="#login" className="text-light">Admin</a>
                    </Navbar.Text>

                    {/* User Profile Icon with Logout */}
                    <div className="position-relative">
                        {/* User Icon */}
                        <Nav.Link href="#" className="profile-icon" onClick={toggleLogout}>
                            <FaUserCircle size={30} className="text-light" />
                        </Nav.Link>

                        {/* Logout Dropdown */}
                        {showLogout && (
                            <div
                                className="position-absolute"
                                style={{
                                    top: '100%', // Below the icon
                                    right: '0',  // Align to right
                                    backgroundColor: 'white',
                                    borderRadius: '5px',
                                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                                    padding: '10px',
                                    zIndex: 1000, // Ensure it stays on top
                                }}
                            >
                                <Nav.Link href="/" className="text-dark text-decoration-none">
                                    Logout
                                </Nav.Link>
                            </div>
                        )}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
