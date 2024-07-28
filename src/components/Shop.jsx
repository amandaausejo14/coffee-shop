import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { VITE_URL_BACK_END } = import.meta.env;

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

  console.log(products);

  return (
    <div className="flex flex-col p-4 gap-6 items-center min-h-screen">
      <div className="flex flex-col text-center gap-2 mt-16 sm:w-4/5 md:w-3/5 md:gap-4 lg:w-2/5">
        <h1 className="capitalize font-outfit font-bold text-3xl text-center sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
          Buy Our Coffee
        </h1>
        <p className="text-base font-roboto-100 sm:text-lg">
          Join us in celebrating the essence of South American coffee and discover your next favorite blend today.
        </p>
      </div>

      <div
        className={
          products.length > 0
            ? "grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:gap-5 lg:gap-8 lg:grid-cols-3 2xl:grid-cols-4 2xl:gap-20"
            : "flex justify-center items-center w-full p-4"
        }
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id}>
              <figure className="p-4 h-[320px] w-full">
                <img src={product.image} alt="product" className="h-full w-full object-cover" />
              </figure>
              <div className="flex flex-col items-center font-outfit text-sm tracking-[0.12em] uppercase gap-2 pb-4">
                <p>{product.name}</p>
                <p>{product.country_of_origin}</p>
                <p className="font-semibold text-xl">{product.price}€</p>
                <Link to={`/product/${product._id}`}>
                  <button className="bg-orange text-white uppercase py-2 px-4 rounded-lg tracking-[0.12em] inline-block mx-auto sm:text-lg">
                    More details
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Shop;
