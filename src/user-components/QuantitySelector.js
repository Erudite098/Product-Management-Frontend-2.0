import React, { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <ButtonGroup style={{ maxWidth: "200px" }}>
      <Button variant="outline-primary" onClick={decrement}>
        -
      </Button>
      <Button variant="light" disabled>
        {quantity}
      </Button>
      <Button variant="outline-primary" onClick={increment}>
        +
      </Button>
    </ButtonGroup>
  );
}

export default QuantitySelector;
