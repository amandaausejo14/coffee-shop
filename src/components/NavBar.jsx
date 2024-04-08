import { useState } from "react";
import logo from "../../img/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex absolute w-full bg-neutral-950/50 items-center justify-between px-8 py-4 z-10">
        <div>
          <img src={logo} alt="coffee south logo" />
        </div>
        <menu className="hidden md:flex text-lg mt-2">
          <ul className="flex gap-6 text-white">
            <li>About Us</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Contacts</li>
          </ul>
        </menu>
        <div className="block md:hidden" onClick={() => setOpen(true)}>
          <AiOutlineMenu size={30} className="color text-white" />
        </div>
      </nav>
      {/* mobile menu */}
      {open ? (
        <>
          <div className="absolute w-full h-screen top-0 left-0 bg-black/50  z-20"></div>
          <div className="flex flex-col absolute w-2/4 h-screen right-0 bg-white z-30 p-4 gap-4">
            <div className="flex justify-end" onClick={() => setOpen(false)}>
              <AiOutlineClose size={20} />
            </div>
            <nav className="flex justify-center">
              <ul className="flex flex-col gap-4 text-center">
                <li>About Us</li>
                <li>Menu</li>
                <li>Gallery</li>
                <li>Contacts</li>
              </ul>
            </nav>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default NavBar;
