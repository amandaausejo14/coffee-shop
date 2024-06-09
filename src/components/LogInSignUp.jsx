import axios from "axios";
import Coffee from "../assets/coffee-log.png";
import { useState } from "react";
const { VITE_URL } = import.meta.env;
function LogIn() {
  const [signUpForm, setSignUpForm] = useState(false);
  const [message, setMessage] = useState("");
  //sign up data
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //user Context

  // sign up submition
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`http://localhost:3000/auth/signup`, {
        user_name: signUpData.username,
        email: signUpData.email,
        password: signUpData.password,
      });
      console.log(response);
      setUser({
        user_name: signUpData.username,
        email: signUpData.email,
      });
      setMessage("ok");
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };

  const handleLogInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`http://localhost:3000/auth/login`, {
        email: signUpData.email,
        password: signUpData.password,
      });
      console.log(response);
      setMessage("ok");
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  };
  // sign up / in with google
  const google = () => {
    window.open(VITE_URL, "_self");
  };
  return (
    <div className="flex h-[70%] justify-center items-center">
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
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              className="border rounded-md"
              required
              onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
            />
            <button
              className="bg-zinc-900 text-white w-[130px] p-1.5 rounded-xl"
              type="submit"
              onClick={signUpForm ? handleSignUpSubmit : handleLogInSubmit}
            >
              {signUpForm ? "Sign Up" : "Log In"}
            </button>
          </form>
          <div className="flex flex-col items-center gap-4">
            <p>or</p>
            <div className="flex gap-2 border-2 p-2 rounded-xl" onClick={google}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
              <p>{signUpForm ? "Sign Up with Google" : "Log In with Google"}</p>
            </div>
            <div className="flex gap-2">
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

export default LogIn;
