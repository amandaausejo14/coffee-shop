import logo from "../../img/Logo.png";
function NavBar() {
  return (
    <>
      <nav className="flex bg-faded-black items-center justify-between p-4">
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
