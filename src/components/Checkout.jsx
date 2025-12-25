import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleOrder() {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  }

  return (
    <div>
      <h2>Checkout</h2>

      {items.map((i) => (
        <p key={i.id}>
          {i.title} x {i.quantity}
        </p>
      ))}

      <form>
        <input placeholder="Name" required />
        <input placeholder="Address" required />
        <input placeholder="Phone" required />
      </form>

      <button onClick={handleOrder}>Place Order</button>
    </div>
  );
}
