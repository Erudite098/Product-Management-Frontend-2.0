import NavigationBar from "../user-components/NavigationBar";
import '../Styles/App.css'; 
import { Container, Form, Dropdown} from 'react-bootstrap';
import ProductCatalog2 from "../user-components/ProductCatalog2";
import ProductCatalog from "../user-components/ProductCatalog";

import { Navbar, FormControl, Nav } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { MdSearch, MdShoppingCart, MdPerson } from 'react-icons/md'; 
import { HiOutlineShoppingCart, HiOutlineUser, HiOutlineSearch } from 'react-icons/hi';


import '../Styles/NavigationBar.css'; 


function FrontStore() {
    return (
        <div>
           <NavigationBar/>
           <Container >
            <div className="mt-5 text-center">
                <h1 style={{color: '#59b280'}}>Product Catalog</h1>
                <p style={{color: '#737373'}}>Lorem Ipsum is simply dummy <br/>
                text of the printing and typesetting industry.</p>               
            </div>


            <div className="d-flex justify-content-end gap-3 b-2">
                {/* <Form.Select >Category
                <option value="" disabled>Choose...</option>
                  <option>Fashion & Apparel</option>
                  <option>Electronics & Gadgets</option>
                  <option>Health & Beauty</option>
                  <option>Home & Living</option>
                  <option>Toys & Baby Products</option>
                  <option>Sports & Outdoor Equipment</option>
                  <option>Books & Media</option>
                  <option>Groceries & Food Products</option>
                  <option>Pet Supplies</option>
                  <option>Automotive Parts & Accessories</option>
                </Form.Select> */}

            <Dropdown>
                <Dropdown.Toggle variant="" className='p-3 fw-bold'>Category</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>Fashion & Apparel</Dropdown.Item>
                <Dropdown.Item>Electronics & Gadgets</Dropdown.Item>
                <Dropdown.Item>Health & Beauty</Dropdown.Item>
                <Dropdown.Item>Home & Living</Dropdown.Item>
                <Dropdown.Item>Toys & Baby Products</Dropdown.Item>
                <Dropdown.Item>Sports & Outdoor Equipment</Dropdown.Item>
                <Dropdown.Item>Books & Media</Dropdown.Item>
                <Dropdown.Item>Groceries & Food Products</Dropdown.Item>
                <Dropdown.Item>Pet Supplies</Dropdown.Item>
                <Dropdown.Item>Automotive Parts & Accessories</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
                     
            <Dropdown>
                <Dropdown.Toggle variant="" id="stock-qty" className='p-3 fw-bold'>Sort price by: </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >Highest</Dropdown.Item>
                  <Dropdown.Item >Lowest</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown> 
                     
            </div>  
                <ProductCatalog2/>    
           </Container>
           
        </div>
    );
}

export default FrontStore;

