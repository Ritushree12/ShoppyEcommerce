import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/cartSlice";
import "../styles/styles.css";

export default function Header() {
  const cartItems = useSelector((s) => s.cart.items);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <h1 className="home-page-title">ShoppyGlobe</h1>

      <input
        className="home-page-search"
        type="text"
        placeholder="Search..."
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/cart">
          <img
            width="15px"
            height="20px"
            src="/src/assets/shopping-bag.png"
            alt="Cart"
            className="cart-icon"
          />
          <span> </span>
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
}
