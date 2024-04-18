import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/AboutPage";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/Home/Footer";
import LogInSignUp from "./components/LogInSignUp";
import NotFound from "./components/Home/NotFound";
function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login-signup" element={<LogInSignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
