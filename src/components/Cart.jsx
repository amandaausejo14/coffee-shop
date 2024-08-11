import { useState, useEffect } from "react";
import { useOrderItems } from "./orderItems-context/context";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
const { VITE_URL_BACK_END } = import.meta.env;
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "./user-context/context";
import PayButton from "./PayButton";
const Cart = () => {
  const location = useLocation();
  const { items, removeItem, updateItemQuantity } = useOrderItems();
  const { user } = useUser();
  // console.log(user);
  const [totalPrice, setTotalPrice] = useState();
  console.log(items);
  useEffect(() => {
    const fetchTotalPrice = async () => {
      try {
        const orderItems = items.map((item) => ({
          quantity: item.quantity,
          product: item.product._id,
        }));
        const response = await axios.post(`${VITE_URL_BACK_END}/orders/getorderprice`, {
          orderItems,
        });
        //    console.log(response.data);
        setTotalPrice(response.data);
      } catch (error) {
        console.error("Error fetching total price:", error);
      }
    };

    fetchTotalPrice();
  }, [items]);

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateItemQuantity(productId, newQuantity);
    }
  };

  const handleRemoveFromCart = (productId) => {
    removeItem(productId);
  };

  // console.log(items);
  return (
    <section className="w-full flex flex-col gap-6 p-4 min-h-screen">
      <div className="flex justify-center w-full mt-16">
        <h1 className="capitalize font-outfit font-bold text-3xl text-center sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
          Your cart
        </h1>
      </div>
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-col gap-6 xl:w-[90%]">
          <div>
            <p className="text-base font-semibold font-roboto-100 sm:text-lg">Your products</p>
          </div>
          <div className="flex flex-col gap-6">
            {/* <hr></hr> */}
            {items &&
              items.map((item) => (
                <div key={item.product._id} className="flex gap-4 shadow-md p-4 rounded-lg">
                  <figure className="w-[130px] rounded-lg overflow-hidden">
                    <img src={item.product.image} alt={item.product.name} />
                  </figure>
                  <div className="flex flex-col gap-6 ">
                    <div>
                      <p className="font-semibold">{item.product.name}</p>
                      <p>
                        {item.product.package_quantity.value}
                        {item.product.package_quantity.unit}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex gap-4">
                        <div className="flex gap-4 border-2 border-black-800 px-2">
                          <button onClick={() => handleUpdateQuantity(item.product._id, item.quantity - 1)}>
                            <CiCircleMinus />
                          </button>
                          <p>{item.quantity}</p>
                          <button onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}>
                            <CiCirclePlus />
                          </button>
                        </div>
                      </div>
                      <p>{item.product.price}€</p>
                    </div>

                    <div className="flex text-black font-roboto-100 p-1 rounded-lg w-full items-center">
                      <CiTrash />
                      <button onClick={() => handleRemoveFromCart(item.product._id)} className="underline text-sm">
                        Remove item
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <div className="flex border-y-2  justify-between p-2">
              <p className="font-bold uppercase tracking-[0.05em]">Total Price</p>
              <p className="text-base font-semibold font-roboto-100 sm:text-lg">{totalPrice}€</p>
            </div>
          </div>
          {!user && (
            <Link
              to={user ? `/checkout` : "/login-signup"}
              state={{ from: location.pathname }}
              className="flex justify-end"
            >
              <button className="bg-green text-white uppercase py-2 px-4 rounded-lg tracking-[0.12em] inline-block ml-auto sm:text-lg">
                Log In to check out
              </button>
            </Link>
          )}
          {user && <PayButton items={items} user={user} />}
        </div>
      </div>
    </section>
  );
};

export default Cart;
