import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useOrderItems } from "./orderItems-context/context";
const { VITE_URL_BACK_END } = import.meta.env;

const Product = () => {
  const { id } = useParams();
  const { addItem, removeItem, items } = useOrderItems();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [stockLimitMessage, setStockLimitMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${VITE_URL_BACK_END}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setStockLimitMessage("");
    }
  };

  const handlePlus = () => {
    if (quantity < product?.stock_quantity) {
      setQuantity(quantity + 1);
      setStockLimitMessage("");
    } else {
      setStockLimitMessage("Maximum quantity available in stock");
    }
  };

  const handleAddToCart = () => {
    if (product && quantity > 0) {
      addItem(product, quantity);

      setQuantity(0);
      setStockLimitMessage("");
    } else {
      console.log("Missing product or quantity.");
    }
  };

  return (
    <div className="flex min-h-screen p-4 gap-6 items-center xl:justify-center">
      {product ? (
        <div className="flex flex-col p-8 gap-8 mt-16 xl:flex-row xl:justify-center xl:gap-16 items-center xl:h-full">
          <div className="flex flex-col gap-8 h-full xl:flex-1">
            <h1 className="capitalize font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem] xl:hidden">
              {product.name}
            </h1>
            <figure className="max-w-[600px] w-full h-full overflow-hidden rounded-lg">
              <img src={product.image} alt="product" className="h-full w-full object-cover" />
            </figure>
          </div>

          <div className="flex flex-col gap-8 xl:flex-1">
            <div className="flex flex-col gap-2 text-base font-roboto-100 sm:text-lg">
              <h1 className="hidden xl:block capitalize font-outfit font-bold text-3xl mb-4 sm:text-4xl lg:text-5xl xl:text-[3.2rem] xl:mb-8">
                {product.name}
              </h1>
              <p>
                <span className="font-semibold">Category:</span> {product.category.name}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {product.price} €
              </p>
              <p>
                <span className="font-semibold">Country:</span> {product.country_of_origin}
              </p>
              <p>
                <span className="font-semibold">Quantity of coffee:</span> {product.package_quantity.value}{" "}
                {product.package_quantity.unit}
              </p>
              <p className="max-w-[700px]">{product.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 items-center">
                <p className="uppercase font-bold tracking-[0.08em] text-xl">Quantity</p>
                <div className="flex gap-4 border-2 rounded-lg border-black-800 p-1 text-base font-roboto-100 sm:text-lg">
                  <button onClick={handleMinus}>
                    <CiCircleMinus size={27} />
                  </button>
                  <p className="text-xl">{quantity}</p>
                  <button onClick={handlePlus}>
                    <CiCirclePlus size={27} />
                  </button>
                </div>
              </div>
              {stockLimitMessage.length > 0 && (
                <div className="bg-[#FFEBEE] border border-[#C62828] rounded-lg p-2 text-center">
                  <p className="text-[#C62828]">Max Limit of Stock for this product</p>
                </div>
              )}
              <div className="mt-4">
                <button
                  className="bg-green text-white uppercase py-2 px-4 rounded-lg tracking-[0.12em] inline-block mx-auto sm:text-lg"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Product;
