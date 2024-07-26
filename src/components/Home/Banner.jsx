import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="bg-green">
      <div className="flex flex-col p-8 text-center gap-2 sm:gap-3 lg:gap-6">
        <p className="uppercase font-outfit font-semibold tracking-[0.08em] sm:text-lg md:text-xl">are you ready?</p>
        <h2 className="text-white font-outfit font-bold text-2xl capitalize sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.2rem]">
          Make our amazing <br /> drinks at home
        </h2>
        <button className="bg-black text-white uppercase py-2 px-4 rounded-lg tracking-[0.12em] inline-block mx-auto sm:text-lg">
          <Link to="/shop">buy our coffee</Link>
        </button>
      </div>
    </section>
  );
};

export default Banner;
