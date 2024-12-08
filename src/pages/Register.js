import React, { useState } from 'react';
import axios from '../api/axios';
import { Form, Button, Container, Row, Col, Alert, InputGroup } from 'react-bootstrap';

function Register () {

    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirming password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    
      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact_number: '',
        password: '',
        password_confirmation: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/register', formData);
            console.log('Registration successful:', response.data);
            setErrors({}); 
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors); // Set validation errors
            } else {
                console.error('Unexpected error:', error.message);
            }
        }
    };

    return (
        <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Register</h2>
            <Form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name && errors.name[0]}
                </Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email && errors.email[0]}
                </Form.Control.Feedback>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formContactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  name="contact_number"
                  value={formData.contact_number}
                  onChange={handleChange}
                  isInvalid={!!errors.contact_number}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.contact_number && errors.contact_number[0]}
                </Form.Control.Feedback>
              </Form.Group>


            {/* Password Field */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                  {showPassword ? 'Hide' : 'Show'}
                </InputGroup.Text>
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                {errors.password && errors.password[0]}
              </Form.Control.Feedback>
            </Form.Group>
  
              {/* Confirm Password Field */}
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <InputGroup>
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                />
                <InputGroup.Text onClick={toggleConfirmPasswordVisibility} style={{ cursor: 'pointer' }}>
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
  
  
              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
};

export default Register;
