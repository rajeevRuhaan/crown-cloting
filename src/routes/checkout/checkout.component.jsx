import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import "./checkout.styles.scss";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
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
      <PaymentForm />
    </div>
  );
};
export default CheckOut;
