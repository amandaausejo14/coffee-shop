import { useState, useEffect } from "react";
import { useOrderItems } from "./orderItems-context/context";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
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
    <section>
      <div>
        <div className="flex justify-center">
          <h1 className="font-semibold text-2xl">Your cart</h1>
        </div>
        <div>
          <p>Your products</p>
          <hr></hr>
          {items &&
            items.map((item) => (
              <div key={item.product._id} className="flex gap-4 p-4">
                <figure className="w-[130px]">
                  <img src={item.product.image} alt={item.product.name} />
                </figure>
                <div className="flex flex-col gap-4">
                  <div>
                    <p>{item.product.name}</p>
                    <p>
                      {item.product.package_quantity.value}
                      {item.product.package_quantity.unit}
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-3">
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
                  </div>
                  <div className="bg-black text-white p-1 rounded-lg">
                    <button onClick={() => handleRemoveFromCart(item.product._id)}> Remove from cart</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div>
          <div className="flex border m-4 justify-between p-2">
            <p>Total Price</p>
            <p>{totalPrice}€</p>
          </div>
        </div>
        {!user && (
          <Link to={user ? `/checkout` : "/login-signup"} state={{ from: location.pathname }}>
            <button className="flex border m-4 justify-between p-2 bg-black text-white">Log In To check out</button>
          </Link>
        )}
        {user && <PayButton items={items} user={user} />}
      </div>
    </section>
  );
};

export default Cart;
