import NavBar from "../NavBar.jsx";
import coffeeDrop from "../../assets/coffee-drop.mp4";
function HomePage() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <video src={coffeeDrop} autoPlay loop muted className="w-full h-full object-cover" />
      <div className="absolute w-full h-screen -top-0 flex flex-col justify-center items-center text-white">
        <div className="flex flex-col items-center p-4 text-center md:gap-3 ">
          <h1 className="text-[2rem] sm:text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
            Keep calm and grab some coffee!
          </h1>
          <p className="md:text-xl xl:text-2xl  ">too much stress... come to CoffeeSouth and relax.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
