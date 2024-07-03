import { useEffect } from "react";
import { useOrderItems } from "./orderItems-context/context";

const CheckOutSuccess = () => {
  const { setItems } = useOrderItems();
  useEffect(() => {
    setItems([]);
  }, [setItems]);
  return (
    <div>
      <h1>Checkout Success</h1>
    </div>
  );
};

export default CheckOutSuccess;
