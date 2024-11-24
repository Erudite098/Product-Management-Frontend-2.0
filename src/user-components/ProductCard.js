import {Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../Styles/User.css";
import QuantitySelector from './QuantitySelector';


function ProductCard({ product }) {
    const naviagte = useNavigate();

    const handleClick = () => {
        naviagte(`/product/${product.id}`);
    };
    
    return (
        <Card 
        className='product-card'
        style={{ 
            width: '18rem', 
            height: '13rem', 
            cursor: 'pointer', 
            borderRadius: '10px', 
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }} 
        onClick={handleClick}
        
        >
        
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title >{product.product_name}</Card.Title>  

                <Card.Subtitle className='mt-2 text-muted'>
                    {product.description}
                </Card.Subtitle>         
            </Card.Body>

            <Card.Footer className='d-flex justify-content-between'>
                <Card.Text className='fw-bold text-success fs-4'>
                    ₱{product.price}
                </Card.Text>
                            
                {/* <Button variant="warning" >View</Button> */}
               
            </Card.Footer>
        </Card>
    );
}

export default ProductCard;