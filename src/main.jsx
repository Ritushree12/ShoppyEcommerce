import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./router";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Suspense fallback={<p>Loading...</p>}>
      <Router />
    </Suspense>
  </Provider>
);
