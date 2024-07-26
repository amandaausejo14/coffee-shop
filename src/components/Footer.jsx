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
    <footer>
      <div className="flex flex-col p-8 lg:justify-center items-center">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-14 2xl:gap-24">
          <div>
            <p className="font-outfit font-semibold text-lg sm:text-xl">COFFEESOUTH</p>
          </div>
          <div className="flex gap-10 2xl:gap-24">
            <menu className="text-center">
              <p className="font-medium font-outfit block mb-2 text-lg">Pages</p>
              <ul className="flex flex-col font-roboto-100 gap-1 ">
                <li>
                  <NavLink to="/aboutus">Our Story</NavLink>
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

            <menu className="text-center">
              <p className="font-medium font-outfit block mb-2 text-lg ">Contacts</p>
              <ul className="flex flex-col font-roboto-100 gap-1 ">
                <li>
                  <NavLink to="https://www.instagram.com/starbucksitalia/" target="_blank">
                    Instagram
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://www.linkedin.com/company/starbucks/" target="_blank">
                    LinkedIn
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://x.com/starbucks" target="_blank">
                    Twitter
                  </NavLink>
                </li>
              </ul>
            </menu>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <p className="font-medium font-outfit block mb-2 text-lg sm:text-xl">Join Our Newsletter</p>
            <div className="flex items-stretch w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-lg outline-none flex-grow bg-orange placeholder-white"
              />
              <button className="bg-white text-black font-semibold p-2 rounded-r-lg ">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-zinc-900 flex text-white justify-center py-1 text-xs">
        <p>Amanda @2024 | © Copyright</p>
      </div>
    </footer>
  );
}

export default Footer;
