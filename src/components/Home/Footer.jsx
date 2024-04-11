import Logo2 from "../../assets/logo2.png";
function Footer() {
  return (
    <footer>
      <div className="w-full flex py-8 px-4 justify-center">
        <div className="flex flex-col items-center text-center gap-2 md:flex-row md:gap-[4rem] md:text-left md:items-stretch lg:gap-[6rem]">
          <div className="flex md:items-center">
            <img src={Logo2} alt="logo" className="w-[100px] md:w-max-[150px]" />
          </div>

          <menu>
            <span className="font-medium">Pages</span>
            <ul className="flex flex-col">
              <li>About Us</li>
              <li>Menu</li>
              <li>Gallery</li>
              <li>Contacts</li>
            </ul>
          </menu>

          <div>
            <span className="font-medium">Contacts</span>
            <p>HELLO 52/43, 80-891 GDAŃSK</p>
            <p>HELLO@GMAIL.COM</p>
            <p>+48 596 568 256 22</p>
          </div>
        </div>
      </div>

      <div className="w-full bg-zinc-900 flex text-white justify-center py-1 text-xs">
        <p>Amanda Ausejo @2024 | © Copyright</p>
      </div>
    </footer>
  );
}

export default Footer;
