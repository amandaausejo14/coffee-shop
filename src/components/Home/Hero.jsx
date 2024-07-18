import { NavLink } from "react-router-dom";
import ImgHero from "../../assets/img-hero.png";
function Hero() {
  return (
    <section>
      <div className="w-full h-screen">
        <div className="absolute h-screen flex flex-col-reverse gap-8 items-center justify-center p-8 lg:flex-row">
          <div className="flex flex-col gap-4 md:gap-3 ">
            <h1 className="font-outfit font-semibold text-3xl capitalize lg:font-bold lg:text-6xl">
              Experience the essence of south American coffee!
            </h1>
            <p className="font-roboto-100 text-base">
              Discover Coffee South, where every sip of our delicious drinks tells the story of the finest South
              American coffee beans.
            </p>
            <div className="flex flex-col gap-4 text-white font-outfit text-base tracking-[0.12em] ">
              <button className="bg-green uppercase p-2 rounded-lg">Visit our menu</button>
              <button className="bg-black uppercase p-2 rounded-lg">Buy our coffee</button>
            </div>
          </div>
          <figure className="p-4">
            <img src={ImgHero} alt="drink" />
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Hero;
