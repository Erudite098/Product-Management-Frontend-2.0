import { Container, Row, Col, Form, InputGroup, Button, Dropdown } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import "../Styles/User.css";

function ProductCatalog() {
    
    // States for search, category filter, products, and search results
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);

    // Fetch products from API on component mount
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products')
            .then(response => response.json())
            .then(products => {
                setProducts(products);
                setSearchResults(products); 
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
       <div>
             
            <div className="d-flex flex-wrap" >
                {searchResults 
                    .filter(product => product.product_name.toLowerCase().includes(search.toLowerCase()))   
                    .map(product => (
                        <Col className="m-2">
                            <ProductCard product={product} />   
                        </Col>
                    ))}
            </div>
      
           

       </div>
    );
}

export default ProductCatalog;