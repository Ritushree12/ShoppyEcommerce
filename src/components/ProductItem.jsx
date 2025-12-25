import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/styles.css";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img loading="lazy" src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <Link to={`/product/${product.id}`}>View</Link>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}
