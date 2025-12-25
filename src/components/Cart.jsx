import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);

  if (!items.length)
    return (
      <div className="not-found">
        <img
          width="50px"
          height="50px"
          src="/src/assets/sad-face.png"
          alt="Shopping Cart"
        />
        <br />
        <p className="empty">Your cart is empty!</p>
        <a href="/" className="go-back">
          Go Shopping
        </a>
      </div>
    );

  return (
    <>
      <h1 className="cart-title">Your Cart</h1>
      {items.map((i) => (
        <CartItem key={i.id} item={i} />
      ))}

      <div className="cart-total">
        <h2>
          Total: $
          {items
            .reduce(
              (total, item) =>
                total +
                item.price *
                  (1 - item.discountPercentage / 100) *
                  item.quantity,
              0
            )
            .toFixed(2)}
        </h2>
      </div>

      <div className="cart-footer">
        <div className="cart-total-mobile">
          <h2>
            Total: $
            {items
              .reduce(
                (total, item) =>
                  total +
                  item.price *
                    (1 - item.discountPercentage / 100) *
                    item.quantity,
                0
              )
              .toFixed(2)}
          </h2>
        </div>
        <Link to="/checkout" className="checkout-btn">
          Go to Checkout
        </Link>
      </div>
    </>
  );
}
