import Cup from "../assets/cup.png";
function NotFound() {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-col gap-4 items-center">
        <figure className="h-10 lg:h-16 mt-28">
          <img src={Cup} alt="cup" className="w-full h-full" />
        </figure>
        <h1 className="text-xl text-[#CD5959] lg:text-5xl">Page Not Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
