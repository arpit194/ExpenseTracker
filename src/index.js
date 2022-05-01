import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter, BrowserRouter } from "react-router-dom";
import { env } from "./store/constants";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  env === "PROD" ? (
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  ) : (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )
);
