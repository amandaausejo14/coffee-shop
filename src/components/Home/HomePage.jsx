import Hero from "./Hero";
import CoffeStory from "./CoffeeStory";
// import BestDrinks from "./BestDrinks";
import Testimonials from "./Testimonials";
import Banner from "./Banner";
function HomePage() {
  return (
    <div className="flex-col">
      <Hero />
      <CoffeStory />
      {/* <BestDrinks /> */}
      <Testimonials />
      <Banner />
    </div>
  );
}

export default HomePage;
