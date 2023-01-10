import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

/* import { CartContext } from "../../context/cart.context"; */
import { selectCartItems } from "../../store/cart/cart.selector";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  /* const { cartItems } = useContext(CartContext); */
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>

      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={goToCheckOutHandler}
      >
        go to checkout
      </Button>
    </CartDropDownContainer>
  );
};

export default CartDropdown;
