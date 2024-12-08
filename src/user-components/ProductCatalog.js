import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard"; 

function ProductCatalog2({ searchTerm, category, priceOrder }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products from API on component mount
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // Initialize with all products
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filterProducts = () => {
    let filtered = [...products]; // Clone the products array to avoid unintended mutations
  
    // Filter by category
    if (category && category !== "All") {
      filtered = filtered.filter((product) => product.category === category);
    }
  
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    // Sort by price
    if (priceOrder === "highest") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (priceOrder === "lowest") {
      filtered.sort((a, b) => a.price - b.price);
    }else{
      //default sort
      filtered.sort((a, b) => a.id - b.id);
    }
  
    setFilteredProducts(filtered);
  };
  

  // Whenever any filter changes, re-filter the products
  useEffect(() => {
    filterProducts();
  }, [searchTerm, category, priceOrder]);

  return (
    <Row className="d-flex flex-wrap">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Col key={product.id} lg={3} md={6} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </Row>
  );
}

export default ProductCatalog2;
