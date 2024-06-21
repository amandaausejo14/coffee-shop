import Logo2 from "../assets/logo2.png";
import { NavLink } from "react-router-dom";
import { useUser } from "./user-context/context";
function Footer() {
  const { user, logout } = useUser();
  const logOut = (e) => {
    e.preventDefault();
    window.open(`${VITE_URL_BACK_END}/auth/logout`, "_self");
    logout();
  };
  return (
    <footer className="border-t-[1px] sticky top-[100vh]">
      <div className="w-full flex py-8 px-4 justify-center">
        <div className="flex flex-col items-center text-center gap-2 md:flex-row md:gap-[4rem] md:text-left md:items-stretch lg:gap-[6rem]">
          <div className="flex md:items-center">
            <img src={Logo2} alt="logo" className="w-[100px] md:w-max-[150px]" />
          </div>

          <menu>
            <span className="font-medium">Pages</span>
            <ul className="flex flex-col">
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>

              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>

              <li>
                <NavLink to="/contacts">Contacts</NavLink>
              </li>
              {user ? (
                <li>
                  <NavLink onClick={logOut}>Log Out</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/login-signup">Log In</NavLink>
                </li>
              )}
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
