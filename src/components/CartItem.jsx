import { useDispatch } from "react-redux";
import { changeQuantity } from "../redux/cartSlice";
import trashIcon from "../assets/trash.png";
import "../styles/styles.css";

export default function CartItem({ item, onRemove }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        loading="lazy"
        src={item.thumbnail}
        alt={item.title}
        className="cart-item-products-image"
      />
      <div className="item-details">
        <p className="item-title">{item.title}</p>
        {/* 🔽 Added: Brand */}
        <p className="item-brand">Brand: {item.brand}</p>
        {/* 🔽 Added: Stock */}
        {/* <p className="stock">
          {item.stock > 0 ? `In Stock (${item.stock})` : "Out of Stock"}
        </p> */}
        <div className="price-row">
          <span className="discount-price">
            $
            {(
              item.price *
              (1 - item.discountPercentage / 100) *
              item.quantity
            ).toFixed(2)}
          </span>

          <span className="original-price">
            ${(item.price * item.quantity).toFixed(2)}
          </span>

          <span className="discount-percent">
            {item.discountPercentage}% OFF
          </span>
        </div>
      </div>
      <input
        className="quantity-input"
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) =>
          dispatch(
            changeQuantity({ id: item.id, quantity: Number(e.target.value) })
          )
        }
      />
      <button
        className="remove-btn"
        onClick={() => onRemove(item.id, item.title)}
      >
        <img
          src={trashIcon}
          alt="Remove"
          className="trash-icon"
          loading="lazy"
        />
      </button>
    </div>
  );
}
