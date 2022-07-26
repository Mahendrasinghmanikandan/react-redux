import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/themeRedux";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
