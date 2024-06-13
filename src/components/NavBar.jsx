import { useState, useContext } from "react";
import logo from "../../img/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "./user-context/context";

function NavBar() {
  //user Context
  const { user, logout } = useUser();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const locationHome = location.pathname === "/";

  const logOut = () => {
    window.open("http://localhost:3000/auth/logout", "_self");
    logout();
  };

  return (
    <>
      <nav
        className={`flex ${
          locationHome ? "absolute bg-neutral-950/50" : "relative bg-zinc-900"
        } w-full  items-center justify-between px-8 py-4 z-10`}
      >
        <div>
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-[150px]" />
          </NavLink>
        </div>
        <menu className="hidden md:flex text-lg mt-2">
          <ul className="flex gap-6 text-white">
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            {user ? (
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
            ) : (
              ""
            )}

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
                <li>
                  <NavLink to="/aboutus" onClick={() => setOpen(false)}>
                    About Us
                  </NavLink>
                </li>
                {user ? (
                  <li>
                    <NavLink to="/menu">Menu</NavLink>
                  </li>
                ) : (
                  ""
                )}

                <li>Gallery</li>
                <li>
                  <NavLink to="/contacts" onClick={() => setOpen(false)}>
                    Contacts
                  </NavLink>
                </li>
                {user ? (
                  <li>
                    <NavLink to="/menu">Log Out</NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/login-signup">Log In</NavLink>
                  </li>
                )}
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
