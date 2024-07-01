import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./components/user-context/context";
import { OrderItemsProvider } from "./components/orderItems-context/context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <OrderItemsProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </OrderItemsProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
