import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import "./styles/styles.css";

const ProductList = lazy(() => import("./components/ProductList"));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>
    </>
  );
}
