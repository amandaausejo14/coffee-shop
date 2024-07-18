const Banner = () => {
  return (
    <section className="bg-green">
      <div className="flex flex-col p-8 text-center gap-2">
        <p className="uppercase font-outfit font-semibold tracking-[0.08em]">are you ready?</p>
        <h2 className="text-white font-outfit font-bold text-2xl capitalize">
          Make our amazing <br /> drinks at home
        </h2>
        <button className="bg-black text-white uppercase py-2 px-4 rounded-lg tracking-[0.12em] inline-block mx-auto">
          buy our coffee
        </button>
      </div>
    </section>
  );
};

export default Banner;
