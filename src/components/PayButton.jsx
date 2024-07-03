import axios from "axios";
const { VITE_URL_BACK_END } = import.meta.env;
const PayButton = ({ items, user }) => {
  const handleOnClick = async () => {
    try {
      const response = await axios.post(`${VITE_URL_BACK_END}/stripe/create-checkout-session`, {
        items,
        userId: user._id,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="flex border m-4 justify-between p-2 bg-black text-white" onClick={handleOnClick}>
        CheckOut
      </button>
    </div>
  );
};

export default PayButton;
