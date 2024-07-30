import Hero from "./Hero";
import CoffeStory from "./CoffeeStory";
import BestDrinks from "./BestDrinks";
import Testimonials from "./Testimonials";
import PerformanceStats from "./PerformanceStats";
import Banner from "./Banner";
function HomePage() {
  return (
    <div className="flex-col">
      <Hero />
      <PerformanceStats />
      <CoffeStory />
      <BestDrinks />
      <Testimonials />
      <Banner />
    </div>
  );
}

export default HomePage;
