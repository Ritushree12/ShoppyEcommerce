import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * (1 - item.discountPercentage / 100) * item.quantity,
    0
  );

  function handleOrder() {
    alert("Order placed successfully!");
    dispatch(clearCart());
    navigate("/");
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-items">
        <h2>Your Order</h2>
        {items.map((item) => (
          <div key={item.id} className="checkout-item">
            <img
              src={item.thumbnail}
              alt={item.title}
              className="checkout-item-image"
            />
            <div className="checkout-item-details">
              <h3>{item.title}</h3>
              <p className="checkout-item-brand">Brand: {item.brand}</p>
              <div className="checkout-price-section">
                <span className="checkout-discount-price">
                  $
                  {(
                    item.price *
                    (1 - item.discountPercentage / 100) *
                    item.quantity
                  ).toFixed(2)}
                </span>
                <span className="checkout-original-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <span className="checkout-discount-percent">
                  {item.discountPercentage}% OFF
                </span>
              </div>
              <p className="checkout-quantity">Quantity: {item.quantity}</p>
            </div>
          </div>
        ))}

        <div className="checkout-total">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      </div>

      <div className="checkout-form-container">
        <h2>Shipping Information</h2>
        <form className="checkout-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <textarea
              id="address"
              placeholder="Enter your complete shipping address"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
        </form>
      </div>

      <div className="checkout-actions">
        <button
          className="checkout-btn place-order-btn"
          onClick={handleOrder}
          disabled={items.length === 0}
        >
          Place Order
        </button>
        <button
          className="checkout-btn cancel-btn"
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </button>
      </div>
    </div>
  );
}
