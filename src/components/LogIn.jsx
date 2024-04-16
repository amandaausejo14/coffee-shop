import { Link } from "react-router-dom";
import Coffee from "../assets/coffee-log.png";

function LogIn() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-xl font-semibold">Log in</h1>
      </div>
      <div className="grid items-center">
        <figure>
          <img src={Coffee} alt="coffee" />
        </figure>
        <div className="flex flex-col items-center gap-4">
          <form action="" className="flex flex-col items-center gap-4">
            <label>Email:</label>
            <input type="text" name="email" className="border rounded-md" required />
            <label>Password:</label>
            <input type="text" name="password" className="border rounded-md" required />
            <button className="bg-zinc-900 text-white w-[130px] p-1.5 rounded-xl" type="submit">
              Send Message
            </button>
          </form>
          <div className="flex flex-col items-center gap-4">
            <p>or</p>
            <div className="flex gap-2 border-2 p-2 rounded-xl">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
              <p>Sign Up With Google</p>
            </div>
            <div className="flex gap-2">
              <p>New Here?</p>
              <Link to="" className="">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
