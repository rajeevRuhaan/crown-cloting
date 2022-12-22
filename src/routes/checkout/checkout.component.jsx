import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../context/cart.context";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span></span>Product
        </div>
        <div className="header-block">
          <span></span>Description
        </div>
        <div className="header-block">
          <span></span>Quantity
        </div>
        <div className="header-block">
          <span></span>Price
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckOutItem key={id} cartItem={cartItem} />;
      })}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};
export default CheckOut;
