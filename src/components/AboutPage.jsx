import Owner from "../assets/owner2.jpg";
import Montains from "../assets/montains.jpg";
import Shop from "../assets/shopImg3.jpg";
import CoffeeProcessing from "../assets/coffee-processing.jpg";
import CoffeeProcessing2 from "../assets/coffee-processing3.jpg";
import CoffeeField from "../assets/coffee-processing2.jpg";
function AboutPage() {
  return (
    <div className="w-full flex flex-col min-h-screen p-4 gap-6 md:px-16 2xl:px-48">
      <div className="grid justify-items-center gap-4  mt-20 lg:grid-cols-2 lg:items-center lg:h-full">
        <figure className="grid grid-cols-2 grid-rows-2 gap-2 min-h-80 rounded-lg overflow-hidden lg:min-h-[30rem]">
          <img src={Owner} alt="owner" className="h-full w-full object-cover row-span-2" />
          <img src={Montains} alt="south american montains" className="h-full w-full object-cover" />
          <img src={Shop} alt="south american montains" className="h-full w-full object-cover" />
        </figure>
        <div className="flex flex-col text-center w-4/5 gap-2 py-4  lg:text-left lg:gap-4">
          <h1 className="capitalize font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
            Our Story
          </h1>
          <p className="text-base font-roboto-100 sm:text-lg">
            Our journey began with Maria's vision to bring South American coffee traditions to Gdansk . Today,
            CoffeeSouth stands as a testament to her passion and dedication. Every cup tells a story, transporting you
            to the Andes or the Amazon with each sip. Our baristas craft each drink with precision, creating a space
            where warmth, flavor, and community thrive. Join us and let us take you on a journey of discoveryone cup at
            a time.
          </p>
        </div>
      </div>
      <div className="grid justify-items-center gap-4 lg:grid-cols-2 lg:items-center lg:h-full">
        <figure className="grid grid-cols-2 grid-rows-2 gap-2 min-h-80 lg:min-h-[30rem]  rounded-lg overflow-hidden lg:order-1">
          <img src={CoffeeProcessing} alt="coffee grinder machine" className="h-full w-full object-cover" />
          <img src={CoffeeField} alt="fueld worker" className="h-full w-full object-cover row-span-2" />
          <img src={CoffeeProcessing2} alt="coffee processing" className="h-full w-full object-cover " />
        </figure>
        <div className="flex flex-col text-center w-4/5 gap-2 py-4  lg:text-left lg:gap-4">
          <h1 className="capitalize font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
            Coffee Story
          </h1>
          <p className="text-base font-roboto-100 sm:text-lg">
            Our coffee beans are sourced from the finest regions of South America, renowned for their quality. We
            embrace a natural processing method where the whole coffee cherries are sun-dried. This traditional approach
            allows the cherries to develop deep, rich flavors. After drying, the cherries are meticulously hulled to
            extract the beans, which are then sorted and roasted. This process ensures that every cup of CoffeeSouth
            delivers a unique and flavorful experience, echoing the vibrant essence of South America.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
