import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/AboutPage";
import Contacts from "./components/Contacts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LogInSignUp from "./components/LogInSignUp";
import NotFound from "./components/NotFound";
import Menu from "./components/Menu";
function App() {
  const user = false;
  return (
    <div className="h-screen">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login-signup" element={user ? <HomePage /> : <LogInSignUp />} />
        <Route path="/menu" element={user ? <Menu /> : <LogInSignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer user={user} />
    </div>
  );
}

export default App;
