import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { products, error } = useProducts();
  const search = useSelector((s) => s.cart.search);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid">
      {filtered.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
