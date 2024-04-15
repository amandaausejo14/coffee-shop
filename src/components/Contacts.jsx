import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
function Contacts() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="lg:m-[2rem]">
        <h1 className="text-3xl font-semibold lg:font-bold lg:text-5xl">Get in touch with us</h1>
      </div>

      <div className="grid h-full gap-12 px-4 py-8 lg:grid-cols-2 items-center lg:gap-[10rem]">
        <div className="flex flex-col items-center gap-4 lg:grid grid-cols-2 lg:items-start lg:gap-8">
          <div className="lg:flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2">
              <CiMail className="w-8 h-8" />
              <p>HELLO@GMAIL.COM</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CiPhone className="w-8 h-8" />
              <p>+48 596 568 256 22</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 ">
            <CiLocationOn className="w-8 h-8" />
            <p>HELLO 52/43, 80-891 GDAŃSK</p>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4754.352770034749!2d14.548149349525627!3d53.42955443162041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0938e8c99629%3A0x62de6105fe3c0a8f!2sStarbucks!5e0!3m2!1sit!2spl!4v1713086916570!5m2!1sit!2spl"
                width="250"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="border:0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="md:flex flex-col items-center">
          <div className="flex flex-col shadow-2xl p-8 rounded-2xl gap-4 md:w-[100%]">
            <form action="" method="get" className="flex flex-col gap-2">
              <label for="name">First Name:</label>
              <input type="text" id="name" name="user_name" className="border rounded-md" />
              <label for="name">Last Name:</label>
              <input type="text" id="surname" name="user_surname" className="border rounded-md" />
              <label for="name">Email:</label>
              <input type="text" id="email" name="email" className="border rounded-md" />
              <label for="message">What can we help you with?</label>
              <textarea id="message" name="message" className="border rounded-md"></textarea>
            </form>
            <button className="bg-zinc-900 text-white w-[130px] p-1.5 rounded-xl">Send Message</button>
          </div>
        </div>
      </div>
      <hr className="w-full bg-zinc-900 h-[1px]" />
    </div>
  );
}

export default Contacts;
