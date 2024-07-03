import axios from "axios";
import Coffee from "../assets/coffee-log.png";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const { VITE_URL_BACK_END } = import.meta.env;
import { useUser } from "./user-context/context";

function LogInSignUp({ state }) {
  const [signUpForm, setSignUpForm] = useState(false);
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
    <div className="flex justify-center items-center">
      <div className="grid items-center mx-2 my-8 md:grid-cols-2 md:mx-6 lg:gap-16">
        <figure className="sm: hidden md:block lg:min-w-[500px]">
          <img src={Coffee} alt="coffee" className="md: w-full" />
        </figure>
        <div className="flex flex-col items-center gap-4 shadow-2xl p-8 rounded-2xl md:p-4 lg:min-w-[500px]">
          <h1 className="text-[2rem] border-b-2"> {signUpForm ? "Sign Up" : "Log In"}</h1>
          <form action="" className="flex flex-col items-center gap-4">
            {signUpForm && (
              <>
                <label>User Name:</label>
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
              </>
            )}
            <label>Email:</label>
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
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="border rounded-md"
              required
              onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
              autoComplete={signUpForm ? "new-password" : "current-password"}
            />
            {signUpForm ? (
              <button
                className="bg-zinc-900 text-white w-[130px] p-1.5 rounded-xl"
                type="submit"
                onClick={handleSignUpSubmit}
              >
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
            <p>or</p>
            <div className="flex gap-2 border-2 p-2 rounded-xl cursor-pointer" onClick={google}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
              <p>{signUpForm ? "Sign Up with Google" : "Log In with Google"}</p>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <p>{signUpForm ? "Already a Member?" : "New Here?"}</p>
              {signUpForm ? (
                <button onClick={() => setSignUpForm(false)}>Log In</button>
              ) : (
                <button onClick={() => setSignUpForm(true)}>Sign Up</button>
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
