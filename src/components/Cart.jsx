import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/styles.css";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const [toast, setToast] = useState("");

  const removeItem = (id, title) => {
    dispatch(removeFromCart(id));
    setToast(`${title} removed from cart`);
    setTimeout(() => setToast(""), 3000);
  };

  return (
    <>
      <Link to="/" className="back-to-products">
        ← Back to Products
      </Link>
      {toast && <div className="toast">{toast}</div>}
      {!items.length ? (
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
      ) : (
        <>
          <h1 className="cart-title">Your Cart</h1>
          {items.map((i) => (
            <CartItem key={i.id} item={i} onRemove={removeItem} />
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
      )}
    </>
  );
}
