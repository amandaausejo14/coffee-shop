import { useOrderItems } from "./orderItems-context/context";
import { useState, useEffect } from "react";
import { useUser } from "../components/user-context/context";
import axios from "axios";
const { VITE_URL_BACK_END } = import.meta.env;

const ShopCheckOut = () => {
  const { items } = useOrderItems();
  const { user, token } = useUser();
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
        setTotalPrice(response.data);
      } catch (error) {
        console.error("Error fetching total price:", error);
      }
    };

    fetchTotalPrice();
  }, []);
  return (
    <div>
      {items &&
        items.map((item) => (
          <div className="flex flex-col gap-4" key={item.product._id}>
            <div className="flex gap-4 p-4">
              <figure className="w-[100px]">
                <img src={item.product.image} alt={item.product.name} />
              </figure>
              <div className="flex flex-col gap-4">
                <div>
                  <p>{item.product.name}</p>
                  <div className="flex gap-4">
                    <p>
                      {item.product.package_quantity.value}
                      {item.product.package_quantity.unit}
                    </p>
                    <p>{item.product.price}€</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <div className="flex border m-4 justify-between p-2">
        <p>Total Price</p>
        <p>{totalPrice}€</p>
      </div>
      <div className="flex flex-col items-center gap-4 p-8  md:p-4 lg:min-w-[500px]">
        <h1 className="text-[2rem] border-b-2">Dalivery adress</h1>
        <form action="" className="flex flex-col items-center gap-4">
          <>
            <label>Country</label>
            <input type="text" name="country" className="border rounded-md" required autoComplete="country" />
          </>
          <>
            <label>Name</label>
            <input type="text" name="name" className="border rounded-md" required autoComplete="name" />
          </>
          <>
            <label>Surname</label>
            <input type="text" name="surname" className="border rounded-md" required autoComplete="surname" />
          </>
          <>
            <label>Street</label>
            <input type="text" name="street" className="border rounded-md" required autoComplete={"street"} />
          </>
          <>
            <label>House Number</label>
            <input
              type="text"
              name="house-number"
              className="border rounded-md"
              required
              autoComplete={"house-number"}
            />
          </>
          <>
            <label>Zip</label>
            <input type="text" name="zip" className="border rounded-md" required autoComplete={"zip"} />
          </>
          <>
            <label>City</label>
            <input type="text" name="city" className="border rounded-md" required autoComplete={"city"} />
          </>
          <>
            <label>Phone Number</label>
            <input type="text" name="phone-number" className="border rounded-md" required autoComplete={"number"} />
          </>
          <>
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="border rounded-md"
              required
              autoComplete={"email"}
              value={user ? user.email : ""}
              onChange={(e) => e.target.value}
            />
          </>
        </form>
      </div>
    </div>
  );
};

export default ShopCheckOut;
