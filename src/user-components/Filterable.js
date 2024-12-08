import { Dropdown } from "react-bootstrap";
import { useState } from "react";

function Filterable({ onCategoryChange, onPriceSortChange }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceOrder, setPriceOrder] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Pass selected category up to FrontStore
  };

  const handlePriceSortSelect = (order) => {
    setPriceOrder(order);
    onPriceSortChange(order); // Pass selected price order up to FrontStore
  };

  return (
    <div className="d-flex justify-content-end gap-3 mb-2">
      {/* Category Filter */}
      <Dropdown>
        <Dropdown.Toggle variant="">Category</Dropdown.Toggle>
        <Dropdown.Menu>
          {[
            "All",
            "Fashion & Apparel",
            "Electronics & Gadgets",
            "Health & Beauty",
            "Home & Living",
            "Toys & Baby Products",
            "Sports & Outdoor Equipment",
            "Books & Media",
            "Groceries & Food Products",
            "Pet Supplies",
            "Automotive Parts & Accessories",
          ].map((cat) => (
            <Dropdown.Item key={cat} onClick={() => handleCategorySelect(cat)}>
              {cat}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {/* Price Sort */}
      <Dropdown>
        <Dropdown.Toggle variant="">Sort Price By</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handlePriceSortSelect("default")}>
            Default
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handlePriceSortSelect("highest")}>
            Highest to Lowest
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handlePriceSortSelect("lowest")}>
            Lowest to Highest
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Filterable;

