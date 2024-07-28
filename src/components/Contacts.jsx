import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import ContactForm from "./ContactForm";
function Contacts() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 md:px-16 2xl:px-48">
      <div className="flex flex-col items-center mt-16 gap-8 lg:gap-10">
        <h1 className="capitalize font-outfit font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.2rem]">
          Get in touch with us
        </h1>

        <div className="flex flex-col items-center gap-4 md:gap-16">
          <div className="flex flex-col gap-4 items-center md:gap-6 lg:flex-row lg:gap-12">
            <div className="flex items-center gap-1">
              <CiMail className="w-6 h-6" />
              <p>HELLO@GMAIL.COM</p>
            </div>
            <div className="flex items-center gap-1">
              <CiPhone className="w-6 h-6" />
              <p>+48 596 568 256 22</p>
            </div>
            <div className="flex items-center gap-1">
              <CiLocationOn className="w-6 h-6" />
              <p>HELLO 52/43, 80-891 GDAŃSK</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 md:grid grid-cols-2 ">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4754.352770034749!2d14.548149349525627!3d53.42955443162041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa0938e8c99629%3A0x62de6105fe3c0a8f!2sStarbucks!5e0!3m2!1sit!2spl!4v1713086916570!5m2!1sit!2spl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border:0 h-[250px] w-[250px] md:h-[440px] md:w-[300px] lg:h-[480px] lg:w-[350px] xl:w-[400px] "
              ></iframe>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
