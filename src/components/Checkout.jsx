import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/styles.css";

export default function Checkout() {
  const items = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const total = items.reduce(
    (sum, item) =>
      sum + item.price * (1 - item.discountPercentage / 100) * item.quantity,
    0
  );

  function handleOrder(e) {
    e.preventDefault();
    setErrors({});
    let hasError = false;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
      hasError = true;
    }
    if (!formData.address.trim()) {
      newErrors.address = "Shipping address is required";
      hasError = true;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

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
              loading="lazy"
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
        <form
          className="checkout-form"
          id="checkout-form"
          onSubmit={handleOrder}
        >
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            {errors.name && <p className="error-msg">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <textarea
              id="address"
              placeholder="Enter your complete shipping address"
              rows="3"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
            />
            {errors.address && <p className="error-msg">{errors.address}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>
        </form>
      </div>

      <div className="checkout-actions">
        <button
          type="submit"
          form="checkout-form"
          className="checkout-btn place-order-btn"
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
