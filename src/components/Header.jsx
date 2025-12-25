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
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
}
