import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { StaticRouter, BrowserRouter } from "react-router-dom";
import { env } from "./store/variables";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  env === "PROD" ? (
    <StaticRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  ) : (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
);
