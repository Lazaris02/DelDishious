import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Recipies from "./pages/Recipies/Recipies";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Footer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
