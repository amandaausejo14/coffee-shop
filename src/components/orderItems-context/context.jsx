import React, { createContext, useState, useContext, useEffect } from "react";

const OrderItemsContext = createContext(null);

export const useOrderItems = () => useContext(OrderItemsContext);

export const OrderItemsProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addItem = (newProduct, quantity) => {
    const existingItemIndex = items.findIndex((item) => item.product._id === newProduct._id);

    if (existingItemIndex !== -1) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        quantity: updatedItems[existingItemIndex].quantity + quantity,
      };
      setItems(updatedItems);
    } else {
      const newItem = { product: newProduct, quantity };
      setItems([...items, newItem]);
    }
  };

  const removeItem = (productId) => {
    const updatedItems = items.filter((item) => item.product._id !== productId);
    setItems(updatedItems);
  };

  const updateItemQuantity = (productId, newQuantity) => {
    const updatedItems = items.map((item) =>
      item.product._id === productId ? { ...item, quantity: newQuantity } : item,
    );
    setItems(updatedItems);
  };

  return (
    <OrderItemsContext.Provider value={{ items, setItems, addItem, removeItem, updateItemQuantity }}>
      {children}
    </OrderItemsContext.Provider>
  );
};
