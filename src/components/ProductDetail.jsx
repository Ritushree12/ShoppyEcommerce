import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Unable to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        setError(e.message);
      }
    }
    load();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="detail">
      <img loading="lazy" src={product.thumbnail} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}
