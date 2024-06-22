import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
const { VITE_URL_BACK_END } = import.meta.env;
const Product = () => {
  //take the id
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);
  const [stockLimitMessage, setStockLimitMessage] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${VITE_URL_BACK_END}/products/${id}`);
        console.log(response);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //handle minus
  const handleMinus = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
      setStockLimitMessage("");
    }
  };
  //handle plus
  const handlePlus = () => {
    if (quantity >= product.stock_quantity) {
      setStockLimitMessage("Maximum quantity available in stock");
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div>
      {product && (
        <div className="flex flex-col p-8 gap-8">
          <figure>
            <img src={product.image} alt="product" />
          </figure>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl">{product.name}</h1>
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
            <p>{product.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>Caffee - {product.name}</p>
            <div className="flex gap-4">
              <p>Quantity</p>
              <div className="flex gap-4 border-2 border-black-800 px-2">
                <button onClick={handleMinus}>
                  <CiCircleMinus />
                </button>
                <p>{quantity}</p>
                <button onClick={handlePlus}>
                  <CiCirclePlus />
                </button>
              </div>
            </div>
            {stockLimitMessage.length > 0 && (
              <div className="bg-[#FFEBEE] border border-[#C62828] rounded-lg p-2 text-center">
                <p className="text-[#C62828]">Max Limit of Stock for this product</p>
              </div>
            )}
            <div className="mt-4">
              <button className="text-white bg-black rounded-lg px-4 py-2">Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
