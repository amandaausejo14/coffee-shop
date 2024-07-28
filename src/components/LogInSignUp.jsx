import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Img from "../assets/login.jpg";
const { VITE_URL_BACK_END } = import.meta.env;
import { useUser } from "./user-context/context";

function LogInSignUp({ state }) {
  const [signUpForm, setSignUpForm] = useState(true);
  const [message, setMessage] = useState("");
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { login } = useUser();
  //useNavigate to send home after the log in
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from === "/cart" ? "/cart" : "/";
  // get user info from google
  // useEffect(() => {
  //   const getUser = () => {
  //     fetch(`http://localhost:3000/auth/login/success`, {
  //       method: "GET",
  //       credentials: "include",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": true,
  //       },
  //     })
  //       .then((response) => {
  //         if (response.status === 200) return response.json();
  //         console.log(`response` + response);
  //         throw new Error("authentication has been failed!");
  //       })
  //       .then((resObject) => {
  //         console.log(resObject);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   getUser();
  // }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     console.log("sono qui");
  //     try {
  //       const response = await fetch(`${VITE_URL_BACK_END}/auth/login/success`, {
  //         method: "GET",
  //         credentials: "include",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Credentials": true,
  //         },
  //       });

  //       if (response.status === 200) {
  //         const resObject = await response.json();
  //         console.log(`response` + resObject);
  //         login(resObject.user);
  //         navigate("/");
  //       } else {
  //         throw new Error("Authentication has failed!");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   fetchUser();
  // }, [location, login, navigate]);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${VITE_URL_BACK_END}/auth/signup`, {
        user_name: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
      });
      setMessage("Sign up successful");
      setSignUpForm(false);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data || "Sign up failed");
    }
  };

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${VITE_URL_BACK_END}/auth/login`, {
        email: signUpData.email,
        password: signUpData.password,
      });
      const { user, token } = response.data;
      login(user, token);
      setMessage("Log in successful");
      navigate(from);
    } catch (error) {
      console.log(error.response);
      setMessage(error.response || "Log in failed");
    }
  };

  const google = () => {
    window.open(`${VITE_URL_BACK_END}/auth/google`, "_self");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 md:px-16 2xl:px-48">
      <div className="w-full flex flex-col items-center mt-16 gap-8 lg:gap-12 lg:grid grid-cols-3 h-screen ">
        <figure className="hidden lg:block lg:min-w-[500px] col-span-2 w-full h-screen rounded-lg overflow-hidden">
          <img src={Img} alt="south america" className="md: w-full h-screen object-cover" />
        </figure>
        <div className="w-full flex flex-col bg-white gap-4 p-8 rounded-2xl sm:w-[90%] md:w-[70%] md:p-10  lg:min-w-[500px]">
          <h1 className="capitalize font-outfit font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[3.2rem]">
            {" "}
            {signUpForm ? "Create account" : "Log In"}
          </h1>
          <form action="" className="flex flex-col gap-4 ">
            {signUpForm && (
              <div className="flex flex-col gap-1">
                <label className="text-base font-roboto-100 sm:text-lg">User Name*</label>
                <input
                  type="text"
                  name="userName"
                  className="border rounded-md"
                  required
                  onChange={(e) => {
                    setSignUpData({ ...signUpData, username: e.target.value });
                  }}
                  autoComplete="username"
                />
              </div>
            )}
            <div className="flex flex-col gap-1">
              <label className="text-base font-roboto-100 sm:text-lg">Email*</label>
              <input
                type="email"
                name="email"
                className="border rounded-md"
                required
                onChange={(e) => {
                  setSignUpData({ ...signUpData, email: e.target.value });
                }}
                autoComplete={signUpForm ? "new-email" : "email"}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-roboto-100 sm:text-lg">Password*</label>
              <input
                type="password"
                name="password"
                className="border rounded-md"
                required
                onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                autoComplete={signUpForm ? "new-password" : "current-password"}
              />
            </div>

            {signUpForm ? (
              <button className="bg-zinc-900 text-white p-1.5 rounded-xl" type="submit" onClick={handleSignUpSubmit}>
                Sign Up
              </button>
            ) : (
              <button
                className="bg-zinc-900 text-white w-[130px] p-1.5 rounded-xl"
                type="submit"
                onClick={handleLogInSubmit}
              >
                Log In
              </button>
            )}
          </form>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <hr className="w-20" />
              <p>OR</p>
              <hr className="w-20" />
            </div>
            <div className="w-full flex justify-center gap-2 border-2 p-2 rounded-xl cursor-pointer" onClick={google}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
              <p>{signUpForm ? "Sign Up with Google" : "Log In with Google"}</p>
            </div>
            <div className="flex gap-2 cursor-pointer ">
              <p>{signUpForm ? "Already a Member?" : "New Here?"}</p>
              {signUpForm ? (
                <button className="underline" onClick={() => setSignUpForm(false)}>
                  Log In
                </button>
              ) : (
                <button className="underline" onClick={() => setSignUpForm(true)}>
                  Sign Up
                </button>
              )}
            </div>
            {message && (
              <div>
                <p>{message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInSignUp;
