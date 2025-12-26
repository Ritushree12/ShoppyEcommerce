import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/styles.css";

const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const NotFound = lazy(() => import("./components/NotFound"));
const Checkout = lazy(() => import("./components/Checkout"));

export default function App() {
  return (
    <Router>
      <Header /> {/* always visible */}
      <main className="main-content">
        <Suspense fallback={<p className="loader"></p>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}
