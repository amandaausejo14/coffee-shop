import ImgHero from "../../assets/img-hero.png";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section>
      <div className="w-full h-screen 2xl:flex justify-center">
        <div className="absolute w-full h-screen flex flex-col-reverse gap-8 items-center justify-center p-8 sm:p-10 lg:flex-row xl:px-20 2xl:px-[10rem] xl:w-4/5 2xl:gap-32">
          <div className="flex flex-col gap-4 md:gap-5 lg:w-3/5">
            <h1 className="font-outfit font-semibold text-3xl capitalize sm:font-bold sm:text-4xl md:text-5xl lg:text-6xl">
              Experience the essence of south American coffee!
            </h1>
            <p className="font-roboto-100 sm:text-xl">
              Discover Coffee South, where every sip of our delicious drinks tells the story of the finest South
              American coffee beans.
            </p>
            <div className="flex flex-col gap-4 text-white font-outfit tracking-[0.12em] sm:flex-row sm:text-lg">
              <button className="bg-green uppercase py-2 rounded-lg sm:px-4 sm:py-2">
                <Link to="/menu">Visit our menu</Link>
              </button>
              <button className="bg-black uppercase py-2 rounded-lg sm:px-4 sm:py-2">
                <Link to="/shop">Buy our coffee</Link>
              </button>
            </div>
          </div>
          <figure className="p-2">
            <img src={ImgHero} alt="drink" />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Hero;
