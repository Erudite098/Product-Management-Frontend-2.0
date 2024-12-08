import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import '../../Styles/NavigationBar.css'; 
import { useContext } from 'react';
import { CartContext } from '../../CartContext';

function CartIcon() {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-icon-container">
            <Link to="/cart" className="cart-icon ">
                <HiOutlineShoppingCart size={35} />
                <span className="cart-badge">{cart.length}</span>
            </Link>
        </div>
    );
}

export default CartIcon;
