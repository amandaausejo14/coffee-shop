import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { VITE_URL_BACK_END, VITE_URL_FRONT_END } = import.meta.env;
function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${VITE_URL_BACK_END}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  /// console.log(products);
  return (
    <div className="flex flex-col p-4 gap-6">
      <div className="flex flex-col text-center gap-2">
        <h1 className="font-semibold text-2xl">Buy Our Coffee</h1>
        <p>Join us in celebrating the essence of South American coffee and discover your next favorite blend today.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product._id}>
            <figure>
              <Link to={`${VITE_URL_FRONT_END}/product/${product._id}`}>
                <img src={product.image} alt="product" className="lg:w-[300px]" />
              </Link>
            </figure>
            <div className="flex justify-between">
              <p>{product.name}</p>
              <p>{product.price}€</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
