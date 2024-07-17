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
  {
    /* <div className="flex flex-col items-center text-center gap-2 md:flex-row md:gap-[4rem] md:text-left md:items-stretch lg:gap-[6rem]"> */
  }
  return (
    <footer>
      <div className="flex flex-col p-8">
        <div className="flex flex-col items-center gap-4">
          <div>
            <p className="font-outfit font-semibold text-lg">COFFEESOUTH</p>
          </div>
          <div className="flex gap-10">
            <menu className="text-center">
              <p className="font-medium font-outfit block mb-2 text-lg">Pages</p>
              <ul className="flex flex-col font-roboto-100 text-sm gap-1">
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
              <p className="font-medium font-outfit block mb-2 text-lg">Contacts</p>
              <ul className="flex flex-col font-roboto-100  gap-1">
                <li>
                  <NavLink to="/aboutus">Instagram</NavLink>
                </li>
                <li>
                  <NavLink to="/shop">Linkedln</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">Twitter</NavLink>
                </li>
              </ul>
            </menu>
          </div>

          <div className="w-full flex flex-col items-center">
            <p className="font-medium font-outfit block mb-2 text-lg">Join Our Newsletter</p>
            <div className=" rounded-lg w-full flex justify-end p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l-lg outline-none w-full bg-orange placeholder-white"
              />
              <button className="bg-white text-black font-semibold p-2 rounded-r-lg">Submit</button>
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
