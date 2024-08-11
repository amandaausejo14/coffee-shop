import { useEffect } from "react";
import { useOrderItems } from "./orderItems-context/context";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const CheckOutSuccess = () => {
  const { setItems } = useOrderItems();
  useEffect(() => {
    setItems([]);
  }, [setItems]);
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col gap-2 items-center">
        <IoIosCheckmarkCircleOutline size={80} color="#47A878" className="mt-28" />
        <h1 className="text-base  font-roboto-100 sm:text-lg">Your transaction has been completed successfully.</h1>
      </div>
    </div>
  );
};

export default CheckOutSuccess;
