import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setSearch } from "../redux/cartSlice";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { products, error } = useProducts();
  const search = useSelector((s) => s.cart.search);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && search) {
      dispatch(setSearch(""));
    }
  }, [location.pathname, dispatch]);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="product-list-title">Products</h1>
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">
            <p>No products found.</p>
          </div>
        )}
      </div>
    </>
  );
}
