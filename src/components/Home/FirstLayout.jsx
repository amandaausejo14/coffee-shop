import { NavLink } from "react-router-dom";
function FirstLayout({ img1, img2, img3, imgPosition, title, paragraph, btnText }) {
  const isImagesLeft = imgPosition === "left";
  return (
    <>
      {isImagesLeft ? (
        <>
          <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4">
              <div className="max-w-[500px] flex flex-col gap-4 text-center items-center md:items-start">
                <h1 className="text-2xl font-bold text-center md:text-3xl md:text-left">{title}</h1>
                <p className="md:text-left">{paragraph}</p>
                <button className="border border-black p-2 rounded-xl">
                  {" "}
                  <NavLink to="/aboutus">{btnText}</NavLink>
                </button>
              </div>
              <div className="max-w-[610px] grid grid-cols-2 grid-rows-2 gap-2">
                <img src={img1} alt="alpaca" className="row-span-2 w-full h-full object-cover" />
                <img src={img2} alt="montains" className="w-full h-full object-cover" />
                <img src={img3} alt="sea" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full bg-zinc-900 text-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 justify-items-end">
              <div className="max-w-[610px] grid grid-cols-2 grid-rows-2 gap-2">
                <img src={img1} alt="shop" className="row-span-2 w-full h-full object-cover" />
                <img src={img2} alt="shop" className="w-full h-full object-cover" />
                <img src={img3} alt="shop" className="w-full h-full object-cover" />
              </div>
              <div className="max-w-[500px] flex flex-col gap-4 text-center items-center md:items-end">
                <h1 className="text-2xl font-bold text-center md:text-3xl md:text-left">{title}</h1>
                <p className="md:text-end">{paragraph}</p>
                <button className="border border-white p-2 rounded-xl">
                  {" "}
                  <NavLink to="/aboutus">{btnText}</NavLink>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default FirstLayout;
