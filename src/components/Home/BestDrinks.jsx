import Bg from "../../assets/bg-best-drinks.png";
import Beans from "../../assets/orange-beans.png";
import IcedCoffeeChoco from "../../assets/iced-coffee-choco.png";
import IcedAmericano from "../../assets/iced-americano.png";
import ShakenEspresso from "../../assets/shaken-espresso.png";
import NitroColdBrew from "../../assets/nitro-cold-brew.png";
import IcedLatte from "../../assets/iced-latte.png";
import Cappuccino from "../../assets/cappuccino.png";
import { useState } from "react";
const bestDrinks = [
  {
    name: "Iced coffee choco",
    image: IcedCoffeeChoco,
  },
  {
    name: "Ice americano",
    image: IcedAmericano,
  },
  {
    name: "Shaken espresso",
    image: ShakenEspresso,
  },
  {
    name: "Nitro cold Brew",
    image: NitroColdBrew,
  },
  {
    name: "Iced latte",
    image: IcedLatte,
  },
  {
    name: "Cappuccino",
    image: Cappuccino,
  },
];
const BestDrinks = () => {
  //change the images of the drink
  const [image, setImage] = useState(IcedCoffeeChoco);
  return (
    <section className="bg-green">
      <div className="flex flex-col p-8 gap-8 xl:px-20">
        <div>
          <h2 className="capitalize font-outfit font-bold text-3xl text-white text-center sm:text-4xl lg:text-5xl  xl:text-[3.2rem]">
            Discover our <br />
            best Drinks
          </h2>
        </div>
        <div className="flex flex-col gap-4  lg:hidden">
          <figure className="relative flex justify-center items-center">
            <div className="relative w-full flex justify-center">
              <img src={Bg} alt="background" className="w-full h-auto  md:max-w-[500px]" />
              <img
                src={image}
                alt="coffee-drink"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
              />
            </div>
          </figure>
          <div className="flex gap-3 justify-center">
            <div className="grid grid-cols-2 gap-2 lg:gap-x-4">
              {bestDrinks.map((drink, index) => (
                <button
                  key={index}
                  className="flex bg-white p-2 rounded-lg justify-center md:items-center gap-2"
                  onClick={() => setImage(drink.image)}
                >
                  <img src={Beans} alt="coffee bean" className="hidden md:block" />
                  <p className="capitale font-outfit font-semibold sm:text-lg">{drink.name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 my-8">
          <div className="grid grid-rows-3 items-center justify-end">
            {bestDrinks.slice(0, 3).map((drink, index) => (
              <button
                key={index}
                className={`flex bg-white px-4 justify-center py-2 rounded-lg items-center gap-2 ${
                  index === 1 ? "md:relative md:left-[-3rem]" : ""
                }`}
                onClick={() => setImage(drink.image)}
              >
                <img src={Beans} alt="coffee bean" className="hidden md:block" />
                <p className="capitale font-outfit font-semibold sm:text-lg">{drink.name}</p>
              </button>
            ))}
          </div>
          <figure className="relative flex justify-center items-center">
            <div className="relative w-full">
              <img src={Bg} alt="background" className="w-full h-auto" />
              <img
                src={image}
                alt="coffee-drink"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-full max-h-full"
              />
            </div>
          </figure>
          <div className="grid grid-rows-3 items-center justify-start">
            {bestDrinks.slice(3, 6).map((drink, index) => (
              <button
                key={index}
                className={`flex bg-white px-4 justify-center py-2 rounded-lg items-center gap-2 ${
                  index === 1 ? "md:relative md:left-[3rem]" : ""
                }`}
                onClick={() => setImage(drink.image)}
              >
                <img src={Beans} alt="coffee bean" className="hidden md:block" />
                <p className="capitale font-outfit font-semibold lg:text-lg">{drink.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default BestDrinks;
