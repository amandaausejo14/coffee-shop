import Cup from "../assets/cup.png";
function NotFound() {
  return (
    <div className="flex gap-4 justify-center items-center m-4 lg:m-16 lg:gap-10">
      <figure className="h-10 lg:h-16">
        <img src={Cup} alt="cup" className="w-full h-full" />
      </figure>
      <h1 className="text-xl text-[#CD5959] lg:text-5xl">Page Not Found</h1>
    </div>
  );
}

export default NotFound;
