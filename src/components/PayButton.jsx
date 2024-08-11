import axios from "axios";
const { VITE_URL_BACK_END } = import.meta.env;
const PayButton = ({ items, user }) => {
  console.log(items, user);
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
    <div className="w-full items-end flex">
      <button
        className="bg-green text-white uppercase py-2 px-4 rounded-lg tracking-[0.12em] inline-block ml-auto sm:text-lg"
        onClick={handleOnClick}
      >
        CheckOut
      </button>
    </div>
  );
};

export default PayButton;
