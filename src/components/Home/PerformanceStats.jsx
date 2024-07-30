import React from "react";

const PerformanceStats = () => {
  return (
    <section className="flex bg-green gap-8 py-6 px-4 justify-center sm:gap-12 md:gap-16 lg:gap-20 lg:py-10 xl:gap-24 2xl:gap-32">
      <div className="flex gap-4">
        <div className="border-r border-white w-1"></div>
        <div className="text-white">
          <p className="font-outfit font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-[3rem]">5</p>
          <p className="text-sm font-semibold font-roboto-100 capitalize sm:text-base">
            Years of <br></br> Experiece
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="border-r border-white w-1"></div>
        <div className="text-white">
          <p className="font-outfit font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-[3rem]">7K</p>
          <p className="text-sm font-semibold font-roboto-100 capitalize sm:text-base">
            Happy <br></br> costumers
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="border-r border-white w-1"></div>
        <div className="text-white">
          <p className="font-outfit font-bold text-2xl  sm:text-4xl lg:text-5xl xl:text-[3rem]">3K</p>
          <p className="text-sm font-semibold font-roboto-100 capitalize sm:text-base">
            Coffees <br></br> per day
          </p>
        </div>
      </div>
      <div className="hidden sm:flex gap-4">
        <div className="border-r border-white w-1"></div>
        <div className="text-white">
          <p className="font-outfit font-bold text-2xl  sm:text-4xl lg:text-5xl xl:text-[3rem]">6</p>
          <p className="text-sm font-semibold font-roboto-100 capitalize sm:text-base">
            Locations <br></br> operating
          </p>
        </div>
      </div>
      <div className="hidden md:flex gap-4">
        <div className="border-r border-white w-1"></div>
        <div className="text-white">
          <p className="font-outfit font-bold text-2xl  sm:text-4xl lg:text-5xl xl:text-[3rem]">15</p>
          <p className="text-sm font-semibold font-roboto-100 capitalize sm:text-base">
            Seasonal <br></br> Coffee Drinks
          </p>
        </div>
      </div>
    </section>
  );
};

export default PerformanceStats;
