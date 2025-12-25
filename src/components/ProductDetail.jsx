import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = product && cartItems.some((item) => item.id === product.id);

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
      <div className="product-images">
        <img loading="lazy" src={product.thumbnail} alt={product.title} />
        {product.images && product.images.length > 1 && (
          <div className="additional-images">
            {product.images.slice(1, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} ${index + 2}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>
        <p className="product-description">{product.description}</p>

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

        <div className="product-meta">
          <div className="meta-item">
            <strong>Rating:</strong> ⭐ {product.rating}/5
          </div>
          <div className="meta-item">
            <strong>Stock:</strong>{" "}
            {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
          </div>
          <div className="meta-item">
            <strong>Brand:</strong> {product.brand}
          </div>
          <div className="meta-item">
            <strong>Category:</strong> {product.category}
          </div>
          <div className="meta-item">
            <strong>SKU:</strong> {product.sku}
          </div>
          <div className="meta-item">
            <strong>Weight:</strong> {product.weight}g
          </div>
          <div className="meta-item">
            <strong>Dimensions:</strong> {product.dimensions?.width} ×{" "}
            {product.dimensions?.height} × {product.dimensions?.depth} cm
          </div>
          <div className="meta-item">
            <strong>Warranty:</strong> {product.warrantyInformation}
          </div>
          <div className="meta-item">
            <strong>Shipping:</strong> {product.shippingInformation}
          </div>
          <div className="meta-item">
            <strong>Return Policy:</strong> {product.returnPolicy}
          </div>
          <div className="meta-item">
            <strong>Minimum Order:</strong> {product.minimumOrderQuantity} units
          </div>
        </div>

        {product.tags && product.tags.length > 0 && (
          <div className="product-tags">
            <strong>Tags:</strong>
            {product.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          className="add-to-cart-btn"
          onClick={() => dispatch(addToCart(product))}
          disabled={product.stock === 0 || isInCart}
        >
          {isInCart
            ? "Added to Cart"
            : product.stock > 0
            ? "Add to Cart"
            : "Out of Stock"}
        </button>

        {product.reviews && product.reviews.length > 0 && (
          <div className="product-reviews">
            <h3>Customer Reviews</h3>
            {product.reviews.map((review, index) => (
              <div key={index} className="review">
                <div className="review-header">
                  <span className="reviewer-name">{review.reviewerName}</span>
                  <span className="review-rating">⭐ {review.rating}/5</span>
                </div>
                <p className="review-comment">{review.comment}</p>
                <small className="review-date">
                  {new Date(review.date).toLocaleDateString()}
                </small>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
