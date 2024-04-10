import NavBar from "../NavBar.jsx";
import coffeeDrop from "../../assets/coffee-drop.mp4";
import { ReactTyped } from "react-typed";
import FirstLayout from "./FirstLayout.jsx";
import Alpaca from "../../assets/alpaca.jpg";
import Montains from "../../assets/peru-montains.jpg";
import Sea from "../../assets/peru-sea.jpg";
function HomePage() {
  return (
    <div>
      <div className="w-full h-screen">
        <NavBar />
        <video src={coffeeDrop} autoPlay loop muted className="w-full h-full object-cover" />
        <div className="absolute w-full h-screen -top-0 flex flex-col justify-center items-center text-white">
          <div className="flex flex-col items-center p-4 text-center md:gap-3 ">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <h1 className="text-[2rem] sm:text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                Keep calm and grab some
              </h1>
              <ReactTyped
                className="text-[2rem] pl-2 sm:text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl"
                strings={["coffee!", "cappuccino!", "espresso!"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </div>

            <p className="md:text-xl xl:text-2xl  ">too much stress... come to CoffeeSouth and relax.</p>
          </div>
        </div>
      </div>
      <FirstLayout
        img1={Alpaca}
        img2={Montains}
        img3={Sea}
        imgPosition="left"
        title="South American coffee in Poland!"
        paragraph="Embarking on a journey of flavor discovery since its inception in 1994, Coffee Bean Corral has been a
        steadfast purveyor of the finest South American green coffee beans. With an unwavering dedication to
        quality, we ve forged enduring partnerships with coffee farmers across South America, bringing forth a
        curated selection that embodies the essence of the region s rich coffee heritage. From the velvety
        richness of Colombian beans to the vibrant acidity of Brazilian varieties, our collection showcases the
        diverse terroirs and distinct flavors of South American coffee. Whether you re an aspiring home roaster
        or a seasoned artisan, Coffee Bean Corral is your gateway to the unparalleled depth and complexity of
        South American coffee. Join us in savoring the essence of South America, one cup at a time."
        btnText="Discover"
      />
      <FirstLayout
        img1={Alpaca}
        img2={Montains}
        img3={Sea}
        imgPosition="rigth"
        title="A bit of South America in a tiny place."
        paragraph="Step into our cozy cafe, where the aroma of freshly roasted South American coffee beans fills the air, inviting you to indulge in a moment of pure sensory delight. Located in the heart of Warsaw, our cozy space invites you to savor the rich flavors of Colombia and Brazil in every cup. Join us for a memorable coffee experience that captures the essence of South American culture."
        btnText="Discover"
      />
    </div>
  );
}

export default HomePage;
