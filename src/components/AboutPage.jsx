import Owner from "../assets/owner.jpg";

function AboutPage() {
  return (
    <div className="w-full flex flex-col">
      <div className="grid justify-items-center gap-4 lg:grid-cols-2 lg:items-center">
        <div>
          <img src={Owner} alt="owner" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col text-center w-4/5 gap-2 py-4  lg:text-left lg:gap-4">
          <h1 className="font-semibold text-2xl lg:font-bold lg:text-5xl">Our Story</h1>
          <p className="lg:w-4/5">
            Our journey began years ago, when our founder, Maria, embarked on a quest to bring the rich traditions of
            South American coffee to the bustling streets of [insert location]. Armed with a passion for coffee and a
            deep respect for its heritage, Maria set out to create a space where coffee lovers could come together to
            savor the flavors of Colombia, Brazil, and beyond. Today, our café stands as a testament to Maria's vision—a
            place where every cup tells a story, and every sip transports you to the sun-drenched slopes of the Andes or
            the lush valleys of the Amazon. Here, amidst the laughter of friends and the gentle hum of conversation,
            you'll find our passionate baristas hard at work, crafting each cup with precision and care. Whether you're
            here to linger over a leisurely cappuccino or grab a quick pick-me-up espresso, our café is your home away
            from home. It's a place where the spirit of South American coffee culture thrives—a place where warmth,
            flavor, and community come together to create something truly special. So come join us at [café name], and
            let us take you on a journey of discovery—one cup at a time.
          </p>
        </div>
      </div>
      <hr className="w-full bg-zinc-900 h-[1px]" />
    </div>
  );
}

export default AboutPage;
