import { useState } from "react";
const { VITE_EMAIL_FORM_KEY } = import.meta.env;

function ContactForm() {
  //message to show when form is sent
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", VITE_EMAIL_FORM_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="md:flex flex-col items-center">
      <div className="flex flex-col shadow-2xl p-8 rounded-2xl gap-4 bg-white text-black md:h-[440px] md:w-[300px] lg:h-[480px] lg:w-[350px] xl:w-[400px]">
        {/*made with web3form*/}
        <form onSubmit={onSubmit} className="flex flex-col gap-2 text-base font-roboto-100 sm:text-lg">
          <label>First Name:</label>
          <input className="border rounded-md" type="text" name="name" required />
          <label className="text-base font-roboto-100 sm:text-lg">Last Name:</label>
          <input type="text" name="lastName" className="border rounded-md" required />
          <label className="text-base font-roboto-100 sm:text-lg">Email:</label>
          <input type="text" name="email" className="border rounded-md" required />
          <label className="text-base font-roboto-100 sm:text-lg">What can we help you with?</label>
          <textarea name="message" className="border rounded-md" required></textarea>
          <button className="bg-black text-white p-1.5 mt-4 rounded-xl w-full" type="submit">
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default ContactForm;
