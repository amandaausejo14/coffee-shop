import logo from "../../img/Logo.png";
function NavBar() {
  return (
    <>
      <nav className="flex absolute w-full bg-neutral-950/50 items-center justify-between px-8 py-4">
        <div>
          <img src={logo} alt="coffee south logo" />
        </div>
        <menu className="flex text-lg mt-2">
          <ul className="flex gap-6 text-white">
            <li>About Us</li>
            <li>Menu</li>
            <li>Gallery</li>
            <li>Contacts</li>
          </ul>
        </menu>
      </nav>
    </>
  );
}

export default NavBar;
