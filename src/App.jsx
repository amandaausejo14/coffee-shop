import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/AboutPage";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LogInSignUp from "./components/LogInSignUp";
import NotFound from "./components/NotFound";
import { useEffect, useContext } from "react";
import { useUser } from "./components/user-context/context";
import { useNavigate, useLocation } from "react-router-dom";
import Shop from "./components/Shop";
import Product from "./components/Product";
function App() {
  const { user } = useUser();
  const location = useLocation();
  const { login } = useUser();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     console.log("sono qui"); //it gets untill here
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
  //       console.log(`qui`); //it doesnt get printed in the console
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

  useEffect(() => {
    console.log("sono qui");
    const getUser = () => {
      fetch(`http://localhost:3000/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          console.log("qui"); //it doent print this
          if (response.status === 200) return response.json();
          console.log(`response` + response); //doent print this neither
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user);

  return (
    <div className="h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login-signup" element={user ? <HomePage /> : <LogInSignUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
