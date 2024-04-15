import Owner from "../assets/owner.jpg";

function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="grid justify-items-center gap-4 lg:grid-cols-2 lg:items-center">
        <div>
          <img src={Owner} alt="owner" className="h-full w-full" />
        </div>
        <div className="flex flex-col text-center w-4/5 gap-2 py-4  lg:text-left lg:gap-4">
          <h1 className="font-semibold text-2xl lg:font-bold lg:text-5xl">Our Story</h1>
          <p className="lg:w-4/5">
            Our journey began with Maria's vision to bring South American coffee traditions to [insert location]. Today,
            [café name] stands as a testament to her passion and dedication. Every cup tells a story, transporting you
            to the Andes or the Amazon with each sip. Our baristas craft each drink with precision, creating a space
            where warmth, flavor, and community thrive. Whether you're here for a leisurely cappuccino or a quick
            espresso, [café name] is your home away from home. Join us and let us take you on a journey of discovery—one
            cup at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
