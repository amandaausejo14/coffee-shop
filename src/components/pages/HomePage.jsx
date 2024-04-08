import NavBar from "../NavBar.jsx";
import coffeeDrop from "../../assets/coffee-drop.mp4";
function HomePage() {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <video src={coffeeDrop} autoPlay loop muted className="w-full h-full object-cover" />
      <div className="absolute w-full h-screen -top-0 flex flex-col justify-center items-center text-white gap-3">
        <h1 className="text-6xl font-bold">Keep calm and grab some coffee!</h1>
        <p className="text-2xl">too much stress... come to CoffeeSouth and relax.</p>
      </div>
    </div>
  );
}

export default HomePage;
