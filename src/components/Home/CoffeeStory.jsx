import Origins from "../../assets/story-01.png";
import CoffeeProcess from "../../assets/story-02.png";
import YourCoffee from "../../assets/story-03.png";
const CoffeStory = () => {
  return (
    <section className="p-8 flex flex-col gap-8">
      <div className="text-center">
        <h1 className="capitalize font-outfit font-bold text-3xl">
          The story of <br /> our coffee
        </h1>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <figure>
            <img src={Origins} alt="" />
          </figure>
          <div className="flex flex-col gap-1">
            <p className="text-orange font-outfit font-bold text-3xl">01</p>
            <h2 className="font-semibold font-outfit text-2xl">The Origins</h2>
            <p className="text-base font-roboto-100">
              All our coffee comes from the renowned regions of South America known for producing some of the finest
              coffee beans in the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <figure>
            <img src={CoffeeProcess} alt="" />
          </figure>
          <div className="flex flex-col gap-1 items-end text-end">
            <p className="text-orange font-outfit font-bold text-3xl">02</p>
            <h2 className="font-semibold font-outfit text-2xl">Coffee processing</h2>
            <p className="text-base font-roboto-100">
              We use a natural and traditional process method, which involves drying the whole coffee cherries under the
              sun. This technique enhances the beans' flavors.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <figure>
            <img src={YourCoffee} alt="" />
          </figure>
          <div className="flex flex-col gap-1">
            <p className="text-orange font-outfit font-bold text-3xl">03</p>
            <h2 className="font-semibold font-outfit text-2xl">Your Drink</h2>
            <p className="text-base font-roboto-100">
              From farm to cup, our coffee retains its unique flavors and aromas. Enjoy a truly exceptional coffee
              experience with every sip of your drink.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoffeStory;
