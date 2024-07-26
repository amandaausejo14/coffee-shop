import Origins from "../../assets/story-01.png";
import CoffeeProcess from "../../assets/story-02.png";
import YourCoffee from "../../assets/story-03.png";
const CoffeStory = () => {
  return (
    <section className="p-8 flex flex-col gap-8 xl:px-20 2xl:items-center ">
      <div className="text-center">
        <h1 className="capitalize font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
          The story of <br /> our coffee
        </h1>
      </div>
      <div className="flex flex-col gap-8 lg:grid grid-cols-3 lg:my-10 xl:gap-12 2xl:px-[5rem] 2xl:w-4/5">
        <div className="flex flex-col gap-4">
          <figure>
            <img src={Origins} alt="coffee origin" className="xl:w-full" />
          </figure>
          <div className="flex flex-col gap-1 md:w-3/4 lg:w-full">
            <p className="text-orange font-outfit font-bold text-3xl sm:text-4xl">01</p>
            <h2 className="font-semibold font-outfit text-2xl sm:text-3xl ">The Origins</h2>
            <p className="text-base font-roboto-100 sm:text-lg">
              All our coffee comes from the renowned regions of South America known for producing some of the finest
              coffee beans in the world.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:items-end lg:flex-col-reverse">
          <figure className="lg:w-full">
            <img src={CoffeeProcess} alt="coffee process" className="xl:w-full" />
          </figure>
          <div className="flex flex-col gap-1 items-end text-end md:w-3/4 lg:w-full lg:text-start lg:items-start">
            <p className="text-orange font-outfit font-bold text-3xl sm:text-4xl">02</p>
            <h2 className="font-semibold font-outfit text-2xl sm:text-3xl">Coffee processing</h2>
            <p className="text-base font-roboto-100 sm:text-lg">
              We use a natural process method, which involves drying the whole coffee cherries under the sun. This
              technique enhances the beans' flavors.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <figure>
            <img src={YourCoffee} alt="coffee costumer" className="xl:w-full" />
          </figure>
          <div className="flex flex-col gap-1 md:w-3/4 lg:w-full">
            <p className="text-orange font-outfit font-bold text-3xl sm:text-4xl">03</p>
            <h2 className="font-semibold font-outfit text-2xl sm:text-3xl">Your Drink</h2>
            <p className="text-base font-roboto-100 sm:text-lg">
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
