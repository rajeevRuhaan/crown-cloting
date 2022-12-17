
import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    
    const cartItemMatch = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

    if (cartItemMatch) {
        return cartItems.map((cartItem) => 
            (cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity +1}
            : cartItem)
        )
    } 

    return  [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const cartItemMatch = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id)

    if(cartItemMatch.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id )
    }
    return cartItems.map((cartItem) => 
            (cartItem.id === cartItemToRemove.id ? 
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem)
        )   
}

const deleteCartProduct = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) =>cartItem.id !== cartItemToClear.id )
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=> {},
    clearItemFromCart: ()=> {},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity , 0);
        
        setCartCount(newCartCount)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
    
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (cartItemToRemove) => {
        
        setCartItems(removeCartItem(cartItems, cartItemToRemove))
    }

    const clearItemFromCart = (cartItemToClear) =>{
        setCartItems(deleteCartProduct(cartItems, cartItemToClear))
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart,  cartItems, cartCount, clearItemFromCart}

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}