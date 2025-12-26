import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "../redux/cartSlice";
import { useState } from "react";
import "../styles/styles.css";

export default function Header() {
  const cartItems = useSelector((s) => s.cart.items);
  const search = useSelector((s) => s.cart.search);
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const showSearch = location.pathname === "/";

  return (
    <header className="header">
      <h1 className="home-page-title">
        <img
          src="/src/assets/eco-bag.png"
          alt="ShoppyGlobe Logo"
          className="logo-img"
        />
        ShoppyGlobe
      </h1>

      {showSearch && (
        <div className="search-container">
          <input
            className="home-page-search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          {search && (
            <button
              className="clear-search-btn"
              onClick={() => dispatch(setSearch(""))}
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      )}

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="hamburger-lines">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <nav className={menuOpen ? "open" : ""}>
        <Link className="nav-link" to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link
          className="nav-link"
          to="/cart"
          onClick={() => setMenuOpen(false)}
        >
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
