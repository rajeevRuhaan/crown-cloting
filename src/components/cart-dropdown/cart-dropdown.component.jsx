import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button/button.component';

import { CartContext } from '../../context/cart.context';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
const {cartItems} = useContext(CartContext);
const navigate = useNavigate();

const goToCheckOutHandler = ()=> {
    console.log("checkout")
    navigate('/checkout')
}
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
           
            <Button type="button" buttonType="inverted" onClick={goToCheckOutHandler}>go to checkout</Button>
            
            
        </div>
    )
}

export default CartDropdown;