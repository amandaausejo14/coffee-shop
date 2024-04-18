import { Link } from "react-router-dom";
import Coffee from "../assets/coffee-log.png";
import { useState } from "react";

function LogIn() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="flex h-[70%] justify-center items-center">
      <div className="grid items-center mx-2 my-8 md:grid-cols-2 md:mx-6 lg:gap-16">
        <figure className="sm: hidden md:block lg:min-w-[500px]">
          <img src={Coffee} alt="coffee" className="md: w-full" />
        </figure>
        <div className="flex flex-col items-center gap-4 shadow-2xl p-8 rounded-2xl md:p-4 lg:min-w-[500px]">
          <h1 className="text-[2rem] border-b-2"> {signUp ? "Sign Up" : "Log In"}</h1>
          <form action="" className="flex flex-col items-center gap-4">
            {signUp && (
              <>
                <label>User Name:</label>
                <input type="text" name="userName" className="border rounded-md" required />
              </>
            )}
            <label>Email:</label>
            <input type="email" name="email" className="border rounded-md" required />
            <label>Password:</label>
            <input type="password" name="password" className="border rounded-md" required />
            {signUp && (
              <>
                <label>Confirm Password:</label>
                <input type="password" name="password" className="border rounded-md" required />
              </>
            )}
            <button className="bg-zinc-900 text-white w-[130px] p-1.5 rounded-xl" type="submit">
              {signUp ? "Sign Up" : "Log In"}
            </button>
          </form>
          <div className="flex flex-col items-center gap-4">
            <p>or</p>
            <div className="flex gap-2 border-2 p-2 rounded-xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
              <p>Sign Up With Google</p>
            </div>
            <div className="flex gap-2">
              <p>{signUp ? "Already a Member?" : "New Here?"}</p>
              {signUp ? (
                <button onClick={() => setSignUp(false)}>Log In</button>
              ) : (
                <button onClick={() => setSignUp(true)}>Sign Up</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
