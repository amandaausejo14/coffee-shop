import Testimonial1 from "../../assets/testimonial-01.png";
import Testimonial2 from "../../assets/testimonial-02.png";
import Testimonial3 from "../../assets/testimonial-03.png";
const testimonials = [
  {
    name: "Olivia Cole",
    testimonial:
      "I absolutely love Coffee South! Their dedication to sourcing beans from the best regions in South America really shines through in every cup. You can taste the rich, full-bodied flavor in every sip.",
    photo: Testimonial1,
  },
  {
    name: "Jane Collin",
    testimonial:
      "As someone who drinks coffee daily, I'm always on the lookout for quality brews. Coffee South has quickly become my go-to spot. The atmosphere is cozy, the staff is friendly, and most importantly, the coffee is top-notch.",
    photo: Testimonial2,
  },
  {
    name: "Robert Smith",
    testimonial:
      "I've been visiting Coffee South regularly for over a year now and the commitment to natural processing methods really sets their coffee apart. Highly recommend!",
    photo: Testimonial3,
  },
];
const Testimonials = () => {
  return (
    <section className="flex flex-col p-8 gap-8">
      <div>
        <h2 className="capitalize font-outfit font-bold text-3xl text-center">Read what others have to say</h2>
      </div>
      {testimonials.map((client) => (
        <div className="flex flex-col items-center relative">
          <div className="bg-orange px-6 pt-20 pb-6 text-center text-white rounded-xl w-full mt-16">
            <p className="font-outfit font-semibold text-lg uppercase tracking-[0.12em]">{client.name}</p>
            <p className="text-sm font-roboto-100">{client.testimonial}</p>
          </div>
          <figure className="absolute -top-4">
            <img src={client.photo} alt="testimonial" className="rounded-full border-4 border-white" />
          </figure>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
