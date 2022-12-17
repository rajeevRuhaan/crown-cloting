
import React from 'react';
import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import {ReactComponent as CloseIcon} from '../../assets/icons8-close.svg'
import {ReactComponent as Left} from '../../assets/chevron-left.svg'
import {ReactComponent as Right} from '../../assets/chevron-right.svg'

import './checkout-item.styles.scss'

const CheckOutItem = ({cartItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)
    
  const clearItemHandler = ()=> clearItemFromCart(cartItem);

  const addItemHandler = ()=> addItemToCart(cartItem);

  const removeItemHandler = ()=> removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
          <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>
              &#10094;
            </div>
            {quantity}
            
            <div className='arrow' onClick={addItemHandler}>
            &#10095;
            </div>
            </span>
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckOutItem;