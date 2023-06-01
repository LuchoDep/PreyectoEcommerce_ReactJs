import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CheckoutFormulario } from "./CheckoutFormulario";


export const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutFormulario cartItems={cart} />
    </div>
  );
};
