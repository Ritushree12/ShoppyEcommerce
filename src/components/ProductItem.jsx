import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/styles.css";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img
        loading="lazy"
        src={product.thumbnail}
        alt={product.title}
        className="product-image-list-page"
      />
      <h3>{product.title}</h3>
      <div className="price-section">
        <div className="current-price">
          <span className="discount-price">
            $
            {(product.price * (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
        </div>
        <div className="price-row">
          <span className="original-price">${product.price}</span>
          <span className="discount-percent">
            {product.discountPercentage}% OFF
          </span>
        </div>
      </div>

      <Link to={`/product/${product.id}`} className="view-link">
        View Product
      </Link>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}
